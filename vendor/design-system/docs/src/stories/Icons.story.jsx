import { useState } from 'react'

/* ─── Load all icon SVGs eagerly as raw strings ─── */
/* glob re-scanned on edit — picks up newly added icon files (incl. filled variants) */
const LINE_MODULES    = import.meta.glob('../../../src/icons/line-icons/*.svg',    { query: '?raw', import: 'default', eager: true })
const VISUAL_MODULES  = import.meta.glob('../../../src/icons/visual-icons/*.svg',  { query: '?raw', import: 'default', eager: true })
const PRODUCT_MODULES = import.meta.glob('../../../src/icons/product-icons/*.svg', { query: '?raw', import: 'default', eager: true })

function toIconList(modules, transform) {
  return Object.entries(modules)
    .map(([path, raw]) => ({
      name: path.split('/').pop().replace('.svg', ''),
      svg: transform ? transform(raw) : raw,
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

/* Replace hardcoded dark color so line icons inherit CSS color */
function adaptLineIcon(raw) {
  return raw
    .replace(/stroke="#1C1C1C"/g, 'stroke="currentColor"')
    .replace(/fill="#1C1C1C"/g, 'fill="currentColor"')
}

const lineIcons    = toIconList(LINE_MODULES, adaptLineIcon)
const visualIcons  = toIconList(VISUAL_MODULES)
const productIcons = toIconList(PRODUCT_MODULES)

/* ─── Icon tile ─── */
function IconTile({ name, svg, tileSize = 56, iconSize = 24 }) {
  const [state, setState] = useState('idle') // idle | copied

  function handleClick() {
    navigator.clipboard?.writeText(name)
    setState('copied')
    setTimeout(() => setState('idle'), 1500)
  }

  return (
    <button
      onClick={handleClick}
      title={`Click to copy: ${name}`}
      style={{
        all: 'unset',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        padding: '10px 6px 8px',
        borderRadius: 10,
        border: '1px solid var(--docs-border, rgba(0,0,0,0.07))',
        cursor: 'pointer',
        width: tileSize + 24,
        boxSizing: 'border-box',
        background: state === 'copied' ? 'var(--color-aqua-10, #E9F6F8)' : 'transparent',
        transition: 'background 0.12s',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: iconSize,
          height: iconSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--icon-base-default)',
          flexShrink: 0,
          pointerEvents: 'none',
        }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <span style={{
        fontSize: 9,
        color: state === 'copied' ? 'var(--color-aqua-100, #0BA0B7)' : 'var(--docs-subtext, #888)',
        textAlign: 'center',
        width: tileSize + 8,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        lineHeight: 1.3,
        display: 'block',
        fontWeight: state === 'copied' ? 600 : 400,
      }}>
        {state === 'copied' ? 'copied' : name}
      </span>
    </button>
  )
}

/* ─── Section with optional search ─── */
function IconSection({ title, note, icons, tileSize, iconSize, searchable }) {
  const [query, setQuery] = useState('')

  const filtered = searchable && query.trim()
    ? icons.filter(ic => ic.name.toLowerCase().includes(query.toLowerCase()))
    : icons

  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--docs-text, #111)', margin: 0 }}>{title}</h3>
        <span style={{ fontSize: 11, color: 'var(--docs-subtext, #888)' }}>{icons.length} icons</span>
      </div>

      {note && (
        <p style={{ fontSize: 12, color: 'var(--docs-subtext, #888)', marginBottom: searchable ? 12 : 16, marginTop: 4 }}>
          {note}
        </p>
      )}

      {searchable && (
        <input
          type="search"
          placeholder={`Filter ${icons.length} icons…`}
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            display: 'block',
            marginBottom: 16,
            padding: '7px 12px',
            borderRadius: 8,
            border: '1px solid var(--docs-border, rgba(0,0,0,0.12))',
            fontSize: 13,
            color: 'var(--docs-text, #111)',
            background: 'var(--docs-surface, #fff)',
            outline: 'none',
            width: 260,
            fontFamily: 'inherit',
          }}
        />
      )}

      {filtered.length === 0 ? (
        <p style={{ fontSize: 13, color: 'var(--docs-subtext, #888)' }}>No icons match "{query}"</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {filtered.map(ic => (
            <IconTile key={ic.name} name={ic.name} svg={ic.svg} tileSize={tileSize} iconSize={iconSize} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Page ─── */
function IconsPage() {
  return (
    <div style={{ padding: '40px 48px' }}>
      <IconSection
        title="Product icons"
        note="Top-level product categories only — Flights, Stays, Activities, Chalets. Use for primary vertical navigation and homepages. Never for secondary features or UI controls."
        icons={productIcons}
        tileSize={56}
        iconSize={56}
      />

      <IconSection
        title="Visual icons"
        note="Expressive, colorful icons for add-ons, upsells, empty states, and promotional content. Do not use in navigation or buttons."
        icons={visualIcons}
        tileSize={32}
        iconSize={32}
      />

      <IconSection
        title="Line icons"
        note="Functional single-color icons for all UI elements — buttons, inputs, labels, status indicators. Default choice for anything interactive. Click any icon to copy its name."
        icons={lineIcons}
        tileSize={24}
        iconSize={24}
        searchable
      />
    </div>
  )
}

export default {
  title: 'Icons',
  category: 'Foundations',
  description: 'Three icon types serving distinct roles. Product icons for top-level verticals, visual icons for marketing and upsells, line icons for all functional UI elements. Do not mix types within the same component.',
  render: IconsPage,
  standalone: true,
  previewFull: true,
}
