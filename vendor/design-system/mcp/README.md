# Design System MCP server

An [MCP](https://modelcontextprotocol.io) server that exposes the Almosafer
design system's **knowledge** — component list, per-component API, usage intent,
props, and tokens — as tools Claude can query on demand.

It does **not** replace the package: components still render from
`design-system/dist`. This only gives Claude a faster, more accurate way to
*reason* about the system than loading the entire `CLAUDE.md` up front.

## Why

- **Less context, on demand.** Claude calls `list_components` then pulls only
  the components it needs, instead of ingesting all 37 up front.
- **No hallucinated props.** `validate_props` checks against the documented API.
- **Right component for the job.** `find_component` maps an intent
  ("a non-blocking confirmation") to the correct component via the design
  system's own decision map.
- **One source of truth.** Everything is parsed live from the files the team
  already maintains (`CLAUDE.md`, `design.md`, `src/index.js`,
  `src/tokens/tokens.js`) — nothing to keep in sync.

## Tools

| Tool | Input | Returns |
|---|---|---|
| `list_components` | — | All exported component names |
| `get_component` | `name` | Full API (CLAUDE.md) + usage intent (design.md) |
| `validate_props` | `name`, `props[]` | Which props are unknown on that component |
| `find_component` | `need` | Candidate components + the decision map |
| `get_tokens` | `category?` | Token values (colors, spacing, typography, …) |

## Use it in a consumer project

Add to the project's `.mcp.json` (the same file the Figma MCP goes in):

```json
{
  "mcpServers": {
    "design-system": {
      "command": "node",
      "args": ["node_modules/design-system/mcp/server.js"]
    }
  }
}
```

That's it — no build, no token, no hosting. The server runs as a local process
and reads the docs shipped inside the installed package.

## Run it directly (for development in this repo)

```bash
npm run mcp        # starts the server on stdio
```

It speaks MCP over stdio, so it's meant to be launched by an MCP client
(Claude Code), not used interactively.

## How it works

`catalog.js` parses the source-of-truth files into an in-memory index;
`server.js` registers the tools over the stdio transport. ~2 files, one
dependency (`@modelcontextprotocol/sdk`). See the header comments in each file.

## Note on the "always-current" variant

This is the **local (stdio)** setup: knowledge comes from the *installed*
package version. To make all consumers always see the latest docs without
updating the package, the same `server.js` can be hosted centrally over the
HTTP transport and referenced by URL in `.mcp.json` — a follow-up if/when that
matters.
