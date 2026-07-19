// Builds an in-memory index of the design system from the SAME source-of-truth
// files the team already maintains — no duplicate documentation:
//   - src/index.js       → canonical component list (public exports)
//   - CLAUDE.md          → per-component API (### headings under "## Components")
//   - design.md          → per-component intent / when-to-use (## headings)
//   - src/tokens/tokens.js → design token values
//
// The MCP server (server.js) turns these into tools Claude can query on demand.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel) => readFileSync(join(root, rel), 'utf8')

const CLAUDE = read('CLAUDE.md')
const DESIGN = read('design.md')

// --- Canonical component names, straight from the public entry point ---
// Matches: export { Foo } from './components/Bar'
export const componentNames = (() => {
  const re = /export\s*\{\s*([A-Za-z0-9_]+)\s*\}\s*from\s*'\.\/components\//g
  const out = []
  let m
  while ((m = re.exec(read('src/index.js')))) out.push(m[1])
  return out.sort()
})()

// --- Generic markdown section slicer -------------------------------------
// Finds a heading at `level` whose title is (or starts with) `name`, and
// returns the text from that heading up to the next heading of the same or
// shallower level.
function headings(md) {
  const lines = md.split('\n')
  const heads = []
  let inFence = false
  lines.forEach((line, i) => {
    if (/^```/.test(line)) inFence = !inFence
    if (inFence) return
    const m = /^(#{1,6})\s+(.*)$/.exec(line)
    if (m) heads.push({ level: m[1].length, title: m[2].trim(), line: i })
  })
  return { lines, heads }
}

function section(md, name, level) {
  const { lines, heads } = headings(md)
  const n = name.toLowerCase()
  const idx = heads.findIndex(
    (h) =>
      h.level === level &&
      (h.title.toLowerCase() === n || h.title.toLowerCase().startsWith(n + ' ')),
  )
  if (idx === -1) return null
  let end = lines.length
  for (let j = idx + 1; j < heads.length; j++) {
    if (heads[j].level <= level) {
      end = heads[j].line
      break
    }
  }
  return lines.slice(heads[idx].line, end).join('\n').trim()
}

// Components live at ### in CLAUDE.md and ## in design.md.
export const apiDoc = (name) => section(CLAUDE, name, 3)
export const intentDoc = (name) => section(DESIGN, name, 2)

// The cross-component "which one do I use" table.
export const decisionMap = () =>
  section(DESIGN, 'Component Decision Map', 2) || ''

// --- Prop extraction (for validate_props) --------------------------------
// Pulls prop names out of the first fenced code block in a component's API
// doc — that's the JSX usage example, the most reliable list of real props.
export function propsFor(name) {
  const doc = apiDoc(name)
  if (!doc) return null
  const block = /```[a-z]*\n([\s\S]*?)```/i.exec(doc)
  if (!block) return []
  const props = new Set()
  const re = /(?:^|\s)([a-zA-Z][a-zA-Z0-9]*)=(?:"|'|\{)/g
  let m
  while ((m = re.exec(block[1]))) props.add(m[1])
  return [...props].sort()
}

// --- Tokens ---------------------------------------------------------------
export async function tokens(category) {
  const all = await import(join(root, 'src/tokens/tokens.js'))
  const groups = {
    colors: all.colors,
    colorsDark: all.colorsDark,
    spacing: all.spacing,
    rounded: all.rounded,
    elevation: all.elevation,
    typography: all.typography,
  }
  if (category) return { [category]: groups[category] }
  return groups
}
