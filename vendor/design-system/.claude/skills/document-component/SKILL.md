---
name: document-component
description: Write or update the design.md usage guidelines for a design-system component. Use whenever a new component is added (a new src/components/*.jsx + *.css pair, a new export in src/index.js), when a component's behavior changes enough to affect when/how it should be used, or when the user asks to "document", "add guidelines for", or "write design.md for" a component. design.md is the design-intent companion to CLAUDE.md.
---

# Document a component in design.md

`design.md` captures the **intent, tone, and decision logic** behind each component — *why* and *when* to use it. It is the companion to `CLAUDE.md`, which covers the technical API (props, tokens). When a new component lands, it needs a design.md entry; when one changes, its entry may need updating. This skill produces an entry that matches the existing house style exactly.

Do **not** restate prop signatures or token tables here — that belongs in CLAUDE.md. design.md is about decisions: when to reach for this component, when not to, and how to write its content.

## Step 1 — Gather the source of truth

Before writing, read (don't guess):

1. The component itself: `src/components/<Name>.jsx` and `.css` — to know its real variants, states, and behavior.
2. Its `CLAUDE.md` entry — for the canonical one-line description and prop names. Reuse the opening description nearly verbatim, then add the *why*.
3. **Neighboring components** it could be confused with — you'll likely need a "X vs. Y" disambiguation table (see Accordion vs. Expander, Dialog vs. BottomSheet).
4. A recently-added entry in `design.md` (e.g. **Accordion** or **Dialog**) as the structural template.

If the component doesn't exist in the codebase yet, ask whether to document the intended design or wait until it's built. Never invent props or variants that aren't in the source.

## Step 2 — Write the entry

Place it under the matching Table-of-Contents category (Navigation & Structure, Content & Lists, Promotional, Actions, Inputs & Controls, Labels & Indicators, Patterns). Order entries within design.md to roughly follow the ToC grouping.

Use this section skeleton — **include only the parts that earn their place**; not every component needs every section. Match the heading levels and tone of existing entries exactly.

```markdown
## ComponentName

One- or two-sentence description of what it is and the core intent — *why* it exists and the job it does. Cross-link related components with [Name](#anchor).

### <Name> vs. <Other>          ← only if confusable with a sibling
| Use… | When |
|---|---|
| `ComponentName` | … |
| `OtherComponent` | … |

### <Decision> guide            ← only if a prop selects intent (size/color/type/platform)
| Need / Intent | Use … |
|---|---|
| … | `value` |

### Use when
- Bulleted intents where this is the right choice

### Do not use when
- Bulleted intents where another component fits better — name it ("use `X`")

### Content rules                ← split per slot if needed: "Content rules — title"
- How to write the labels/copy: length, case, terminal period, verb-first, etc.

| ✅ Do | ❌ Don't |        ← short copy examples where it helps
|---|---|
| Good label | Bad label |

### Usage
```jsx
<ComponentName … />              ← minimal, realistic snippet (real prop names)
```
**Do:** / **Don't:** bullets — only practical guidance not obvious from props

### Self-check                   ← optional; for interruptive/heavy components (see Dialog, Accordion)
- 2–3 reflective questions to discourage misuse
```

### House style rules
- Sentence case in copy examples; no terminal period on labels/titles unless it's a full sentence.
- Always say what to use *instead* when telling the reader not to use something.
- Prefer tables for decisions (which variant, X-vs-Y); prefer bullets for guidance.
- Reference tokens/props by name in backticks, but don't re-document them.
- Keep it short and opinionated — this file is decision logic, not reference.

### Platform-aware components (iOS / Android)

When the component resolves a `platform` prop, first decide whether the **design intent** — when to use it, when not to, and the content rules — actually differs by platform, or whether only the *visual rendering* does.

- **Shared documentation (default).** If the guidance is the same on every platform and only the look differs, write **one shared entry**. Capture the platform difference in a single sentence in the intro (see how **SegmentedControl** and **Toggle** describe iOS vs. Android in one line) and keep every other section platform-neutral. Do **not** add a per-platform decision table — platform is set globally to match the target OS, not chosen per use.
- **Separate per-platform documentation.** If the guidance genuinely differs by platform — different "Use when", different content rules, different do/don'ts — split only the sections that differ under `#### iOS` / `#### Android` subheadings, and keep all shared guidance in the common part above the split. Never duplicate identical text under both platforms.
- **When unsure which case applies, ask the user** before writing rather than guessing.

## Step 3 — Wire it into the rest of design.md

An entry isn't done until it's linked:

1. **Table of Contents** (top of design.md) — add `- [ComponentName](#anchor)` under the correct category group. The anchor is the lowercased title with spaces → hyphens and `/`, `.` removed (e.g. "List / ListItem" → `#list--listitem`).
2. **Component Decision Map** table — add an `| I want to… | \`ComponentName\` |` row capturing the intent that should lead someone to this component.
3. Add a `---` separator between this entry and the next, matching the file's existing rhythm.

## Step 4 — Verify

- Confirm the new ToC link anchor matches the actual heading.
- Re-read a neighboring entry side by side to confirm tone and depth match.
- Don't duplicate anything already in CLAUDE.md (props, tokens) — if you catch yourself listing props, cut it.
