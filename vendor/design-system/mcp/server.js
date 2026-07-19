#!/usr/bin/env node
// Almosafer Design System — MCP server.
// Exposes the design system's knowledge (component list, per-component API,
// usage intent, props, tokens) as tools Claude can query on demand, instead of
// loading the whole CLAUDE.md into context up front.
//
// Local (stdio) usage — in a consumer project's .mcp.json:
//   { "mcpServers": { "design-system": {
//       "command": "node",
//       "args": ["node_modules/design-system/mcp/server.js"] } } }
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'
import {
  componentNames,
  apiDoc,
  intentDoc,
  decisionMap,
  propsFor,
  tokens,
} from './catalog.js'

const server = new McpServer({
  name: 'almosafer-design-system',
  version: '0.1.0',
})

const text = (t) => ({ content: [{ type: 'text', text: t }] })

// 1) Cheap catalog — the whole point is NOT to load every component up front.
server.registerTool(
  'list_components',
  {
    title: 'List components',
    description:
      'List every component exported by the Almosafer design system. Start here, then call get_component for the ones you need.',
    inputSchema: {},
  },
  async () =>
    text(
      `${componentNames.length} components:\n` +
        componentNames.map((n) => `- ${n}`).join('\n'),
    ),
)

// 2) Full API + usage intent for one component, on demand.
server.registerTool(
  'get_component',
  {
    title: 'Get component docs',
    description:
      'Full API reference (from CLAUDE.md) plus usage / when-to-use guidance (from design.md) for a single component.',
    inputSchema: { name: z.string().describe('Component name, e.g. "Button"') },
  },
  async ({ name }) => {
    const api = apiDoc(name)
    if (!api)
      return text(
        `No component named "${name}". Call list_components to see valid names.`,
      )
    const intent = intentDoc(name)
    return text(
      `# ${name} — API\n\n${api}` +
        (intent ? `\n\n---\n\n# ${name} — Usage intent\n\n${intent}` : ''),
    )
  },
)

// 3) Anti-hallucination: check props against the real documented API.
server.registerTool(
  'validate_props',
  {
    title: 'Validate props',
    description:
      'Check whether the given prop names actually exist on a component (per its documented API). Use before writing JSX to avoid inventing props.',
    inputSchema: {
      name: z.string().describe('Component name, e.g. "Button"'),
      props: z.array(z.string()).describe('Prop names to check'),
    },
  },
  async ({ name, props }) => {
    const known = propsFor(name)
    if (!known)
      return text(
        `No component named "${name}". Call list_components to see valid names.`,
      )
    const unknown = props.filter((p) => !known.includes(p))
    return text(
      unknown.length === 0
        ? `All ${props.length} prop(s) are valid on ${name}.`
        : `Unknown on ${name}: ${unknown.join(', ')}\n\nDocumented props: ${known.join(', ')}`,
    )
  },
)

// 4) Pick a component by intent — returns the decision map + intent matches.
server.registerTool(
  'find_component',
  {
    title: 'Find component by need',
    description:
      'Given a description of what you want to build ("a non-blocking confirmation"), suggest matching components using the design system decision map and usage guidance.',
    inputSchema: {
      need: z.string().describe('What you are trying to do / show'),
    },
  },
  async ({ need }) => {
    const terms = need.toLowerCase().split(/\W+/).filter((w) => w.length > 3)
    const scored = componentNames
      .map((n) => {
        const doc = (intentDoc(n) || '').toLowerCase()
        const score = terms.reduce((s, t) => s + (doc.includes(t) ? 1 : 0), 0)
        return { n, score }
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
    const hits = scored.length
      ? 'Candidate components (by usage-doc keyword match):\n' +
        scored.map((x) => `- ${x.n}`).join('\n')
      : 'No direct keyword match — use the decision map below.'
    return text(`${hits}\n\n---\n\n${decisionMap()}`)
  },
)

// 5) Token values, always in sync with tokens.js.
server.registerTool(
  'get_tokens',
  {
    title: 'Get design tokens',
    description:
      'Return design token values (colors, colorsDark, spacing, rounded, elevation, typography). Omit category for all.',
    inputSchema: {
      category: z
        .enum(['colors', 'colorsDark', 'spacing', 'rounded', 'elevation', 'typography'])
        .optional()
        .describe('Token group; omit for all'),
    },
  },
  async ({ category }) => text(JSON.stringify(await tokens(category), null, 2)),
)

await server.connect(new StdioServerTransport())
