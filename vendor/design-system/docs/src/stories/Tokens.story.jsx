/* ─── Spacing ─── */
const SPACING = [
  { token: '--space-2xs',       value: '2px'  },
  { token: '--space-xs',        value: '4px'  },
  { token: '--space-sm',        value: '8px'  },
  { token: '--space-md',        value: '12px' },
  { token: '--space',           value: '16px' },
  { token: '--space-lg',        value: '24px' },
  { token: '--space-xl',        value: '32px' },
  { token: '--space-2xl',       value: '40px' },
  { token: '--space-3xl',       value: '48px' },
  { token: '--space-4xl',       value: '64px' },
  { token: '--space-container', value: '16px' },
  { token: '--space-card-gap',  value: '12px' },
  { token: '--space-section',   value: '32px' },
]

/* ─── Border radius ─── */
const ROUNDED = [
  { token: '--rounded-xs',      value: '4px'   },
  { token: '--rounded-sm',      value: '8px'   },
  { token: '--rounded',         value: '12px'  },
  { token: '--rounded-lg',      value: '16px'  },
  { token: '--rounded-popover', value: '34px'  },
  { token: '--rounded-full',    value: '100px' },
]

/* ─── Elevation ─── */
const ELEVATION = [
  {
    token: '--elevation-floating',
    value: '0 -4px 16px rgba(0,0,0,0.08)',
    note: 'Upward — bottom sheets, sticky bars',
  },
  {
    token: '--elevation-raised',
    value: '0 8px 24px rgba(0,0,0,0.12)',
    note: 'Downward — cards, modals',
  },
]

const GLASS = [
  { token: '--liquid-glass-bg',           note: 'Fill — pill and button surfaces'    },
  { token: '--liquid-glass-shadow',       note: 'Shadow — pill and button surfaces'  },
  { token: '--liquid-glass-filter',       note: 'Backdrop filter — pills, buttons'   },
  { token: '--liquid-glass-sheet-bg',     note: 'Fill — sheet surfaces (large panels)' },
  { token: '--liquid-glass-sheet-shadow', note: 'Shadow — sheet surfaces'            },
  { token: '--liquid-glass-sheet-filter', note: 'Backdrop filter — sheets'           },
]

/* ─── Semantic tokens — grouped ─── */
const BG_GROUPS = [
  {
    group: 'Base',
    tokens: [
      { token: '--background-base-default',        alias: 'color-light'        },
      { token: '--background-base-subtle',         alias: 'color-ghost'        },
      { token: '--background-base-hover',          alias: 'color-ghost'        },
      { token: '--background-base-pressed',        alias: 'color-alice'        },
      { token: '--background-base-active',         alias: 'color-alice'        },
      { token: '--background-base-disabled',       alias: 'color-ghost'        },
      { token: '--background-base-inverted',       alias: 'color-metal'        },
      { token: '--background-base-selected',       alias: 'color-aqua-10'      },
      { token: '--background-base-default-static', alias: 'color-white-static' },
    ],
  },
  {
    group: 'Primary',
    tokens: [
      { token: '--background-primary-default',  alias: 'color-aqua-100' },
      { token: '--background-primary-subtle',   alias: 'color-aqua-10'  },
      { token: '--background-primary-hover',    alias: 'color-aqua-200' },
      { token: '--background-primary-pressed',  alias: 'color-aqua-200' },
      { token: '--background-primary-selected', alias: 'color-aqua-100' },
      { token: '--background-primary-disabled', alias: 'color-aqua-30'  },
    ],
  },
  {
    group: 'Warning',
    tokens: [
      { token: '--background-warning-default',  alias: 'color-coral-100' },
      { token: '--background-warning-subtle',   alias: 'color-coral-10'  },
      { token: '--background-warning-hover',    alias: 'color-coral-200' },
      { token: '--background-warning-pressed',  alias: 'color-coral-200' },
      { token: '--background-warning-selected', alias: 'color-coral-100' },
    ],
  },
  {
    group: 'Success',
    tokens: [
      { token: '--background-success-default',  alias: 'color-forest-100' },
      { token: '--background-success-subtle',   alias: 'color-forest-10'  },
      { token: '--background-success-hover',    alias: 'color-forest-200' },
      { token: '--background-success-pressed',  alias: 'color-forest-200' },
      { token: '--background-success-selected', alias: 'color-forest-100' },
    ],
  },
  {
    group: 'Caution',
    tokens: [
      { token: '--background-caution-default', alias: 'color-butter-100' },
      { token: '--background-caution-subtle',  alias: 'color-butter-10'  },
    ],
  },
  {
    group: 'Neutral',
    tokens: [
      { token: '--background-neutral-default',  alias: 'color-chateau'   },
      { token: '--background-neutral-subtle',   alias: 'color-alice'     },
      { token: '--background-neutral-selected', alias: 'color-gainsboro' },
      { token: '--background-neutral-disabled', alias: 'color-alice'     },
    ],
  },
  {
    group: 'Brand',
    tokens: [
      { token: '--background-brand-apple',            alias: 'color-apple'            },
      { token: '--background-brand-almosafer',        alias: 'color-almosafer'        },
      { token: '--background-brand-whatsapp',         alias: 'color-whatsapp'         },
      { token: '--background-brand-facebook',         alias: 'color-facebook'         },
      { token: '--background-brand-shukran',          alias: 'color-shukran'          },
      { token: '--background-brand-shukran-contrast', alias: 'color-shukran-contrast' },
      { token: '--background-brand-qitaf',            alias: 'color-qitaf'            },
      { token: '--background-brand-mokafaa',          alias: 'color-mokafaa'          },
      { token: '--background-brand-emkan',            alias: 'color-emkan'            },
      { token: '--background-brand-alfursan',         alias: 'color-alfursan'         },
    ],
  },
]

const TEXT_GROUPS = [
  {
    group: 'Base',
    tokens: [
      { token: '--text-base-default',         alias: 'color-metal'        },
      { token: '--text-base-subtext',         alias: 'color-chateau'      },
      { token: '--text-base-inverted',        alias: 'color-light'        },
      { token: '--text-base-disabled',        alias: 'color-montreal'     },
      { token: '--text-base-inverted-static', alias: 'color-white-static' },
      { token: '--text-base-default-static',  alias: 'color-metal-static' },
    ],
  },
  {
    group: 'Link',
    tokens: [
      { token: '--text-link-default', alias: 'color-aqua-100' },
      { token: '--text-link-hover',   alias: 'color-aqua-200' },
      { token: '--text-link-pressed', alias: 'color-aqua-200' },
    ],
  },
  {
    group: 'Warning',
    tokens: [
      { token: '--text-warning-default', alias: 'color-coral-100' },
      { token: '--text-warning-hover',   alias: 'color-coral-200' },
      { token: '--text-warning-pressed', alias: 'color-coral-200' },
    ],
  },
  {
    group: 'Success',
    tokens: [
      { token: '--text-success-default', alias: 'color-forest-100' },
      { token: '--text-success-hover',   alias: 'color-forest-200' },
      { token: '--text-success-pressed', alias: 'color-forest-200' },
    ],
  },
]

const BORDER_GROUPS = [
  {
    group: 'Base',
    tokens: [
      { token: '--border-base-default',  alias: 'color-gainsboro' },
      { token: '--border-base-subtle',   alias: 'color-alice'     },
      { token: '--border-base-hover',    alias: 'color-aqua-30'   },
      { token: '--border-base-pressed',  alias: 'color-aqua-50'   },
      { token: '--border-base-selected', alias: 'color-aqua-50'   },
      { token: '--border-base-focused',  alias: 'color-aqua-100'  },
      { token: '--border-base-disabled', alias: 'color-gainsboro' },
      { token: '--border-base-inverted', alias: 'color-chateau'   },
    ],
  },
  {
    group: 'Primary',
    tokens: [
      { token: '--border-primary-default',  alias: 'color-coral-100' },
      { token: '--border-primary-hover',    alias: 'color-coral-200' },
      { token: '--border-primary-pressed',  alias: 'color-coral-200' },
      { token: '--border-primary-selected', alias: 'color-coral-100' },
      { token: '--border-primary-active',   alias: 'color-coral-100' },
    ],
  },
  {
    group: 'Secondary',
    tokens: [
      { token: '--border-secondary-default',  alias: 'color-aqua-100' },
      { token: '--border-secondary-hover',    alias: 'color-aqua-200' },
      { token: '--border-secondary-pressed',  alias: 'color-aqua-200' },
      { token: '--border-secondary-selected', alias: 'color-aqua-100' },
      { token: '--border-secondary-disabled', alias: 'color-aqua-30'  },
    ],
  },
  {
    group: 'Success',
    tokens: [
      { token: '--border-success-default', alias: 'color-forest-100' },
    ],
  },
  {
    group: 'Caution',
    tokens: [
      { token: '--border-caution-default', alias: 'color-butter-100' },
    ],
  },
]

const ICON_GROUPS = [
  {
    group: 'Base',
    tokens: [
      { token: '--icon-base-default',         alias: 'color-metal'        },
      { token: '--icon-base-subtle',          alias: 'color-chateau'      },
      { token: '--icon-base-inverted',        alias: 'color-light'        },
      { token: '--icon-base-disabled',        alias: 'color-montreal'     },
      { token: '--icon-base-inverted-static', alias: 'color-white-static' },
      { token: '--icon-base-default-static',  alias: 'color-metal-static' },
    ],
  },
  {
    group: 'Primary',
    tokens: [
      { token: '--icon-primary-default', alias: 'color-coral-100' },
      { token: '--icon-primary-hover',   alias: 'color-coral-200' },
      { token: '--icon-primary-pressed', alias: 'color-coral-200' },
      { token: '--icon-primary-subtle',  alias: 'color-coral-10'  },
    ],
  },
  {
    group: 'Secondary',
    tokens: [
      { token: '--icon-secondary-default', alias: 'color-aqua-100' },
      { token: '--icon-secondary-hover',   alias: 'color-aqua-200' },
      { token: '--icon-secondary-pressed', alias: 'color-aqua-200' },
      { token: '--icon-secondary-subtle',  alias: 'color-aqua-30'  },
    ],
  },
  {
    group: 'Success',
    tokens: [
      { token: '--icon-success-default', alias: 'color-forest-100' },
      { token: '--icon-success-subtle',  alias: 'color-forest-10'  },
    ],
  },
  {
    group: 'Caution',
    tokens: [
      { token: '--icon-caution-default', alias: 'color-butter-100' },
      { token: '--icon-caution-subtle',  alias: 'color-butter-10'  },
    ],
  },
]

const AI_GROUPS = [
  {
    group: 'Base',
    tokens: [
      { token: '--ai-background',       alias: 'color-lavender'    },
      { token: '--ai-text-default',     alias: 'color-amethyst'    },
      { token: '--ai-text-highlight',   alias: 'gradient-purple-blue' },
      { token: '--ai-border-default',   alias: 'color-iris'        },
      { token: '--ai-border-highlight', alias: 'gradient-purple-blue' },
      { token: '--ai-icon',             alias: 'gradient-purple-blue' },
    ],
  },
]

const OVERLAY_GROUPS = [
  {
    group: 'Base',
    tokens: [
      { token: '--overlay-default', note: 'Modal scrims       → color-black-50' },
      { token: '--overlay-surface', note: 'Glass surface tint → color-light-40' },
      { token: '--overlay-navbar',  note: 'Navbar blur layer  → color-light-92' },
    ],
  },
]

const GRADIENT_GROUPS = [
  {
    group: 'Base',
    tokens: [
      { token: '--gradient-horizontal',      note: 'Image scrim (side)  → gradient-black-leading' },
      { token: '--gradient-vertical-bottom', note: 'Image scrim (bottom)→ gradient-black-bottom' },
      { token: '--gradient-vertical-top',    note: 'Image scrim (top)   → gradient-black-top'    },
    ],
  },
]

const BANNER_GROUPS = [
  {
    group: 'Base',
    tokens: [
      { token: '--banner-neutral',  note: '→ --gradient-grey-leading' },
      { token: '--banner-info',     note: '→ --gradient-blue-leading' },
      { token: '--banner-promo',    note: '→ --gradient-green-leading' },
      { token: '--banner-featured', note: '→ --gradient-purple-leading' },
    ],
  },
]

const HIGHLIGHT_GROUPS = [
  {
    group: 'Base',
    tokens: [
      { token: '--highlight-title',    note: '→ --gradient-aqua-green'  },
      { token: '--highlight-accolade', note: '→ --gradient-purple-blue' },
      { token: '--highlight-benefit',  note: '→ --gradient-neon-green'  },
    ],
  },
]

const BUTTON_GROUPS = [
  {
    group: 'Primary',
    tokens: [
      { token: '--button-primary-default', alias: 'color-aqua-100' },
      { token: '--button-primary-hover',   alias: 'color-aqua-200' },
      { token: '--button-primary-pressed', alias: 'color-aqua-200' },
    ],
  },
  {
    group: 'Secondary',
    tokens: [
      { token: '--button-secondary-default', alias: 'color-alice' },
      { token: '--button-secondary-hover',   alias: 'color-ghost' },
      { token: '--button-secondary-pressed', alias: 'color-alice' },
    ],
  },
  {
    group: 'Destructive',
    tokens: [
      { token: '--button-destructive-default', alias: 'color-light'    },
      { token: '--button-destructive-hover',   alias: 'color-coral-10' },
      { token: '--button-destructive-pressed', alias: 'color-coral-10' },
    ],
  },
  {
    group: 'Payment',
    tokens: [
      { token: '--button-payment-default', alias: 'color-forest-100' },
      { token: '--button-payment-hover',   alias: 'color-forest-200' },
      { token: '--button-payment-pressed', alias: 'color-forest-200' },
    ],
  },
  {
    group: 'Inverted',
    tokens: [
      { token: '--button-inverted-default', alias: 'color-light' },
      { token: '--button-inverted-hover',   alias: 'color-ghost' },
      { token: '--button-inverted-pressed', alias: 'color-alice' },
    ],
  },
]

/* ─── Shared styles ─── */
const row = {
  display: 'grid',
  alignItems: 'center',
  padding: '8px 0',
  borderBottom: '1px solid var(--docs-border, rgba(0,0,0,0.07))',
}

const tokenLabel = {
  fontFamily: 'monospace',
  fontSize: 12,
  color: 'var(--docs-text, #111)',
}

const aliasLabel = {
  fontSize: 11,
  color: 'var(--docs-subtext, #888)',
  fontFamily: 'monospace',
}

const valueLabel = {
  fontSize: 11,
  color: 'var(--docs-subtext, #888)',
}

function SectionTitle({ children }) {
  return (
    <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--docs-text, #111)', marginBottom: 4, marginTop: 0 }}>
      {children}
    </h3>
  )
}

function SectionNote({ children }) {
  return (
    <p style={{ fontSize: 12, color: 'var(--docs-subtext, #888)', marginBottom: 16, marginTop: 0 }}>
      {children}
    </p>
  )
}

function Section({ title, note, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <SectionTitle>{title}</SectionTitle>
      {note && <SectionNote>{note}</SectionNote>}
      {children}
    </div>
  )
}

/* ─── Spacing section ─── */
function SpacingSection() {
  return (
    <Section title="Spacing" note="Base unit: 8px. --space-container, --space-card-gap, and --space-section are semantic aliases for layout consistency.">
      <div>
        {SPACING.map(({ token, value }) => (
          <div key={token} style={{ ...row, gridTemplateColumns: '200px 48px 1fr', gap: 16 }}>
            <span style={tokenLabel}>{token}</span>
            <span style={valueLabel}>{value}</span>
            <div
              style={{
                height: 8,
                width: `var(${token})`,
                background: 'var(--color-aqua-100, #0BA0B7)',
                borderRadius: 4,
                minWidth: 2,
              }}
            />
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ─── Border radius section ─── */
function RoundedSection() {
  return (
    <Section title="Border radius">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {ROUNDED.map(({ token, value }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: 'var(--color-aqua-10, #E9F6F8)',
                border: '1.5px solid var(--color-aqua-100, #0BA0B7)',
                borderRadius: `var(${token})`,
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <div style={{ ...tokenLabel, fontSize: 11 }}>{token.replace('--rounded-', '')}</div>
              <div style={valueLabel}>{value}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ─── Elevation section ─── */
function ElevationSection() {
  return (
    <Section title="Elevation & Glass" note="Elevation tokens define drop shadows. Liquid glass tokens are used by iOS-style surfaces (BottomSheet, TabBar, Search).">
      <div style={{ marginBottom: 24, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {ELEVATION.map(({ token, note }) => (
          <div key={token} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
            <div
              style={{
                width: 120,
                height: 64,
                borderRadius: 12,
                background: 'var(--background-base-default, #fff)',
                boxShadow: `var(${token})`,
              }}
            />
            <div>
              <div style={tokenLabel}>{token}</div>
              <div style={valueLabel}>{note}</div>
            </div>
          </div>
        ))}
      </div>

      <div>
        {GLASS.map(({ token, note }) => (
          <div key={token} style={{ ...row, gridTemplateColumns: '280px 1fr', gap: 16 }}>
            <span style={tokenLabel}>{token}</span>
            <span style={valueLabel}>{note}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ─── Semantic token rows ─── */
function ColorTokenRow({ token, alias, note }) {
  return (
    <div style={{ ...row, gridTemplateColumns: '300px 20px 1fr', gap: 12, alignItems: 'center' }}>
      <span style={tokenLabel}>{token}</span>
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: 4,
          background: 'repeating-conic-gradient(#d8dcde 0% 25%, #fff 0% 50%) 50% / 8px 8px',
          border: '1px solid rgba(0,0,0,0.1)',
          flexShrink: 0,
        }}
      >
        <div style={{ width: '100%', height: '100%', borderRadius: 4, background: `var(${token})` }} />
      </div>
      <span style={aliasLabel}>{note ?? `--${alias}`}</span>
    </div>
  )
}

function SubgroupHeader({ children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 20,
      marginBottom: 2,
    }}>
      <div style={{
        width: 3,
        height: 14,
        borderRadius: 2,
        background: 'var(--color-aqua-100, #0BA0B7)',
        flexShrink: 0,
      }} />
      <span style={{
        fontSize: 11,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        color: 'var(--docs-subtext, #888)',
      }}>
        {children}
      </span>
    </div>
  )
}

function GroupedSection({ title, note, groups }) {
  return (
    <Section title={title} note={note}>
      {groups.map(({ group, tokens }) => (
        <div key={group}>
          <SubgroupHeader>{group}</SubgroupHeader>
          {tokens.map(t => <ColorTokenRow key={t.token} {...t} />)}
        </div>
      ))}
    </Section>
  )
}

/* ─── Main render ─── */
function TokensPage() {
  return (
    <div style={{ padding: '40px 48px' }}>
      <SpacingSection />
      <RoundedSection />
      <ElevationSection />

      <GroupedSection
        title="Background"
        note="Use these in component CSS instead of raw color tokens. Adapt automatically to light/dark mode."
        groups={BG_GROUPS}
      />
      <GroupedSection title="Text"    groups={TEXT_GROUPS}      />
      <GroupedSection title="Border"  groups={BORDER_GROUPS}    />
      <GroupedSection title="Icon"    groups={ICON_GROUPS}      />
      <GroupedSection title="AI" note="AI-surface tokens. --ai-background → lavender; the -default text/border pair is solid iris; the -highlight pair and --ai-icon use the PurpleBlue gradient." groups={AI_GROUPS} />
      <GroupedSection title="Overlay" groups={OVERLAY_GROUPS}   />
      <GroupedSection title="Gradient" note="Image scrims — dark → transparent, for laying over imagery." groups={GRADIENT_GROUPS} />
      <GroupedSection title="Banner"  note="Gradient backgrounds for banner components." groups={BANNER_GROUPS}    />
      <GroupedSection title="Highlight" note="Gradient backgrounds for highlight/accolade labels." groups={HIGHLIGHT_GROUPS} />
      <GroupedSection title="Button" note="Background fills per button variant and interaction state." groups={BUTTON_GROUPS} />
    </div>
  )
}

export default {
  title: 'Tokens',
  category: 'Foundations',
  description: 'All design tokens as CSS custom properties on :root. Import design-system/dist/index.css once at the app root to get all of them. Semantic tokens (--background-*, --text-*, --border-*, --icon-*) are the preferred choice in component CSS — they adapt to light/dark mode automatically.',
  render: TokensPage,
  standalone: true,
  previewFull: true,
}
