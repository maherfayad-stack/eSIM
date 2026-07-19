# Design System — Prototyping Guide for Designers

## What is this?

This guide lets you build interactive screen prototypes using Almosafer Design System — without writing code yourself. You describe what you want, and Claude Code builds it for you.

---

## One-time setup

### 1. Install Node.js

Node.js runs your prototype locally in the browser. You don't need to understand it.

→ Go to [nodejs.org](https://nodejs.org), download the **LTS** version, run the installer.

Verify it worked — open Terminal and type:

```
node --version
```

You should see something like `v22.x.x`.

### 2. Install VS Code

→ Download from [code.visualstudio.com](https://code.visualstudio.com)

### 3. Install Claude Code in VS Code

Claude Code is an AI assistant that lives inside VS Code and writes all the code for you.

1. Open VS Code
2. Click the **Extensions** icon in the left sidebar (or press `Cmd+Shift+X`)
3. Search for **Claude Code**
4. Click **Install**
5. Sign in with your Anthropic account when prompted

### 4. Create a GitHub personal access token

This lets your machine download Almosafer Design System.

1. Go to [github.com](https://github.com) → click your profile photo → **Settings**
2. Scroll down → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. Click **Generate new token (classic)**
4. Give it a name (e.g. "Design system"), check the **repo** scope, click **Generate token**
5. Copy the token and save it somewhere safe (e.g. Notes or 1Password) — you'll only see it once

### 5. Get a Figma personal access token (optional but recommended)

This lets Claude Code read your Figma designs directly — paste a Figma link and it understands the layout, components, and styles without needing screenshots or descriptions.

1. Open [figma.com](https://figma.com) and sign in
2. Click your profile photo → **Settings**
3. Scroll down to **Security** → **Personal access tokens** → **Generate new token**
4. Name it `Claude Code`, set expiration to **No expiration**, set **File content** to **Read only**
5. Click **Generate token** and copy it — it starts with `figd_...`

Save it somewhere safe alongside your GitHub token. **You won't be able to see it again after closing the window.**

The config file will be created automatically when you set up your first project in the next step.

---

## Starting a new prototype

### Step 1 — Create a new project folder in VS Code

1. Open VS Code
2. Go to **File → Open Folder**
3. Create a new empty folder anywhere on your computer (e.g. `flight-results-prototype`) and open it

### Step 2 — Open Claude Code

Press `` Ctrl+` `` (backtick) to open the terminal panel at the bottom, then click the Claude Code icon in the sidebar, or press the keyboard shortcut shown after installation.

### Step 3 — Ask Claude Code to set up the project

Copy the text below into Claude Code — but first read this:

> ⚠️ **The prompt has two placeholders you MUST replace with your own tokens before sending.** If you paste it as-is, it will fail.
>
> - **`PASTE-YOUR-GITHUB-TOKEN-HERE`** → your GitHub token from Step 4
> - **`PASTE-YOUR-FIGMA-TOKEN-HERE`** → your Figma token from Step 5

> Set up a new React + Vite project in this folder. Then install the design system from GitHub: `git+https://PASTE-YOUR-GITHUB-TOKEN-HERE@github.com/tajawal/design-system.git`. Once installed, import `design-system/dist/index.css` in `App.jsx` and start the dev server. Then create a `CLAUDE.md` in the project root containing only the line: `@node_modules/design-system/CLAUDE.md` — and copy `node_modules/design-system/design.md` to `./design.md`. Finally, run `mkdir -p .claude/commands && cp node_modules/design-system/.claude/commands/* .claude/commands/`. Also create a `.mcp.json` file in the project root with this content: `{"mcpServers":{"figma":{"command":"npx","args":["-y","@figma/mcp"],"env":{"FIGMA_ACCESS_TOKEN":"PASTE-YOUR-FIGMA-TOKEN-HERE"}},"design-system":{"command":"node","args":["node_modules/design-system/mcp/server.js"]}}}`

**Skipped the Figma step?** Remove the `figma` part from the `.mcp.json` and keep only the design system, like this: `{"mcpServers":{"design-system":{"command":"node","args":["node_modules/design-system/mcp/server.js"]}}}`

Claude Code will run all the commands and set everything up. When it's done, open [http://localhost:5173](http://localhost:5173) in your browser — you'll see a live preview that updates as you work.

---

## Building screens

From here, just describe what you want to Claude Code in plain English. You never need to touch the code directly.

### Example prompts

**A flight results screen:**

> Build a flight results screen for a route from Dubai to London. Show 4–5 flights in a list with airline name, departure and arrival times, duration, number of stops, and price. Use the design system's Button, Tag, and BottomActionBar components. When a flight is selected, show a BottomActionBar at the bottom with the price and a Book now button.

**A search screen:**

> Create a search screen with a destination input, a date field, a passenger count selector, and a primary Button that says Search. Add a Banner component at the bottom with a promotional message.

**A booking summary:**

> Build a booking summary screen using Cell components to show flight details (route, date, passengers, cabin class). Add a list of fare add-ons using ListItem checkboxes (extra baggage, meal, seat selection). Put a BottomActionBar at the bottom with the total price and a Pay now button.

---

## Day-to-day workflow

1. Open VS Code → open your prototype folder
2. Ask Claude Code to start the dev server: "start the dev server"
3. Open [http://localhost:5173](http://localhost:5173) in your browser
4. Describe changes to Claude Code in plain English
5. The browser updates instantly as Claude makes changes

---

## Getting new components

When the design system gets updated with new components, ask Claude Code:

> Update the design system to the latest version.

It will run the right command for you.

---

## Tips

- **Be specific.** The more detail you give Claude Code, the closer the result is to what you imagined. Mention layout, content, interactions, and which components to use.
- **Iterate.** If the result isn't right, just describe what to change — you don't need to start over.
- **Mobile first.** Tell Claude Code: "make it look like a mobile screen, 390px wide" to simulate a phone in the browser. 
- **Share your prototype.** Open the Terminal panel in VS Code and ask Claude Code: "how do I share this with someone?" — it will walk you through options.
