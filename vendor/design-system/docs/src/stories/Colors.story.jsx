import { useState, useEffect } from 'react'

const PALETTES = [
  {
    name: 'Neutral',
    note: 'Adaptive — inverts in dark mode',
    swatches: [
      { token: '--color-metal',     label: 'metal',     hex: '#1C1C1C' },
      { token: '--color-chateau',   label: 'chateau',   hex: '#66797F' },
      { token: '--color-montreal',  label: 'montreal',  hex: '#A1AAAD' },
      { token: '--color-gainsboro', label: 'gainsboro', hex: '#D8DCDE' },
      { token: '--color-alice',     label: 'alice',     hex: '#EDF1F3' },
      { token: '--color-ghost',     label: 'ghost',     hex: '#F7F9FA' },
      { token: '--color-light',        label: 'light',        hex: '#FFFFFF' },
      { token: '--color-white-static', label: 'white-static', hex: '#FFFFFF' },
      { token: '--color-metal-static', label: 'metal-static', hex: '#1C1C1C' },
      { token: '--color-black-50',  label: 'black-50',  hex: 'rgba(0, 0, 0, 0.5)' },
      { token: '--color-light-40',  label: 'light-40',  hex: 'rgba(255, 255, 255, 0.4)' },
      { token: '--color-light-92',  label: 'light-92',  hex: 'rgba(255, 255, 255, 0.92)' },
    ],
  },
  {
    name: 'Aqua',
    note: 'Primary brand · Adaptive',
    swatches: [
      { token: '--color-aqua-10',  label: 'aqua-10',  hex: '#E9F6F8' },
      { token: '--color-aqua-30',  label: 'aqua-30',  hex: '#BDE4EA' },
      { token: '--color-aqua-50',  label: 'aqua-50',  hex: '#91D2DC' },
      { token: '--color-aqua-100', label: 'aqua-100', hex: '#0C9AB0' },
      { token: '--color-aqua-200', label: 'aqua-200', hex: '#008296' },
    ],
  },
  {
    name: 'Coral',
    note: 'Warning / destructive · Adaptive',
    swatches: [
      { token: '--color-coral-10',  label: 'coral-10',  hex: '#F4E3E4' },
      { token: '--color-coral-100', label: 'coral-100', hex: '#EF4550' },
      { token: '--color-coral-200', label: 'coral-200', hex: '#D23241' },
    ],
  },
  {
    name: 'Forest',
    note: 'Success · Adaptive',
    swatches: [
      { token: '--color-forest-10',  label: 'forest-10',  hex: '#EAF5EB' },
      { token: '--color-forest-100', label: 'forest-100', hex: '#319E37' },
      { token: '--color-forest-200', label: 'forest-200', hex: '#0A8A11' },
    ],
  },
  {
    name: 'Butter',
    note: 'Caution · Adaptive',
    swatches: [
      { token: '--color-butter-10',  label: 'butter-10',  hex: '#FEF5E6' },
      { token: '--color-butter-100', label: 'butter-100', hex: '#FE9C09' },
    ],
  },
  {
    name: 'Purple',
    note: 'Adaptive',
    swatches: [
      { token: '--color-lavender', label: 'lavender', hex: '#F7F1FF' },
      { token: '--color-iris',     label: 'iris',     hex: '#E8D4FF' },
      { token: '--color-amethyst', label: 'amethyst', hex: '#875BF7' },
    ],
  },
  {
    name: 'Brand partners',
    note: 'Static (apple flips in dark mode)',
    swatches: [
      { token: '--color-apple',            label: 'apple',            hex: '#000000' },
      { token: '--color-almosafer',        label: 'almosafer',        hex: '#003143' },
      { token: '--color-whatsapp',         label: 'whatsapp',         hex: '#25D366' },
      { token: '--color-facebook',         label: 'facebook',         hex: '#0866FF' },
      { token: '--color-shukran',          label: 'shukran',          hex: '#F0DBB1' },
      { token: '--color-shukran-contrast', label: 'shukran-contrast', hex: '#4A2A1F' },
      { token: '--color-qitaf',            label: 'qitaf',            hex: '#4F008C' },
      { token: '--color-mokafaa',          label: 'mokafaa',          hex: '#221AFB' },
      { token: '--color-emkan',            label: 'emkan',            hex: '#0CBAB4' },
      { token: '--color-alfursan',         label: 'alfursan',         hex: '#006937' },
    ],
  },
  {
    name: 'Gradient colors',
    note: 'Static · raw stops the gradients below are built from',
    swatches: [
      { token: '--color-sulu',      label: 'sulu',      hex: '#CEFF99' },
      { token: '--color-mint',      label: 'mint',      hex: '#99FFDF' },
      { token: '--color-dodger',    label: 'dodger',    hex: '#2E90FA' },
      { token: '--color-bondi',     label: 'bondi',     hex: '#00879C' },
      { token: '--color-glacier',   label: 'glacier',   hex: '#01BAD7' },
      { token: '--color-malachite', label: 'malachite', hex: '#0CB038' },
      { token: '--color-grey-10',   label: 'grey-10',   hex: 'rgba(105, 117, 134, 0.1)' },
      { token: '--color-grey-30',   label: 'grey-30',   hex: 'rgba(105, 117, 134, 0.3)' },
      { token: '--color-blue-10',   label: 'blue-10',   hex: 'rgba(46, 144, 250, 0.1)' },
      { token: '--color-blue-30',   label: 'blue-30',   hex: 'rgba(46, 144, 250, 0.3)' },
      { token: '--color-green-10',  label: 'green-10',  hex: 'rgba(102, 198, 28, 0.1)' },
      { token: '--color-green-30',  label: 'green-30',  hex: 'rgba(102, 198, 28, 0.3)' },
      { token: '--color-purple-10', label: 'purple-10', hex: 'rgba(135, 91, 247, 0.1)' },
      { token: '--color-purple-30', label: 'purple-30', hex: 'rgba(135, 91, 247, 0.3)' },
      { token: '--color-black-70',  label: 'black-70',  hex: 'rgba(0, 0, 0, 0.7)' },
      { token: '--color-black-40',  label: 'black-40',  hex: 'rgba(0, 0, 0, 0.4)' },
    ],
  },
]

const GRADIENTS = [
  {
    label: 'NeonGreen',
    token: '--gradient-neon-green',
    stops: 'sulu → mint',
  },
  {
    label: 'GreyLeading',
    token: '--gradient-grey-leading',
    stops: 'grey-10 → grey-30',
  },
  {
    label: 'BlueLeading',
    token: '--gradient-blue-leading',
    stops: 'blue-10 → blue-30',
  },
  {
    label: 'GreenLeading',
    token: '--gradient-green-leading',
    stops: 'green-10 → green-30',
  },
  {
    label: 'AquaGreen',
    token: '--gradient-aqua-green',
    stops: 'bondi → glacier → malachite',
  },
  {
    label: 'PurpleBlue',
    token: '--gradient-purple-blue',
    stops: 'amethyst → dodger',
  },
  {
    label: 'PurpleLeading',
    token: '--gradient-purple-leading',
    stops: 'purple-10 → purple-30',
  },
  {
    label: 'BlackLeading',
    token: '--gradient-black-leading',
    stops: 'black-70 → transparent (left → right)',
  },
  {
    label: 'BlackBottom',
    token: '--gradient-black-bottom',
    stops: 'black-70 → transparent (bottom → top)',
  },
  {
    label: 'BlackTop',
    token: '--gradient-black-top',
    stops: 'black-40 → transparent (top → bottom)',
  },
]

// Reads the token's actual cascaded value from the DOM, re-reading whenever the
// docs Light/Dark toggle flips `data-theme` on <html> — so the label always shows
// the value for the currently-selected theme (no parallel dark-hex dataset to drift).
function useThemeValue(token, fallback) {
  const [value, setValue] = useState(fallback)
  useEffect(() => {
    const read = () =>
      setValue(getComputedStyle(document.documentElement).getPropertyValue(token).trim() || fallback)
    read()
    const obs = new MutationObserver(read)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [token, fallback])
  return value
}

function Swatch({ token, label, hex }) {
  const value = useThemeValue(token, hex)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 152 }}>
      <div
        style={{
          width: 152,
          height: 64,
          borderRadius: 12,
          background: 'repeating-conic-gradient(#d8dcde 0% 25%, #fff 0% 50%) 50% / 14px 14px',
          border: '1px solid #d8dcde',
          flexShrink: 0,
        }}
      >
        <div style={{ width: '100%', height: '100%', borderRadius: 12, background: `var(${token})` }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--docs-text, #111)' }}>{label}</span>
        <span style={{ fontSize: 10, color: 'var(--docs-subtext, #888)', fontFamily: 'monospace' }}>{value}</span>
      </div>
    </div>
  )
}

function GradientSwatch({ label, token, stops }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 152 }}>
      <div
        style={{
          width: 152,
          height: 64,
          borderRadius: 12,
          background: 'repeating-conic-gradient(#d8dcde 0% 25%, #fff 0% 50%) 50% / 14px 14px',
          border: '1px solid #d8dcde',
          flexShrink: 0,
        }}
      >
        <div style={{ width: '100%', height: '100%', borderRadius: 12, background: `var(${token})` }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--docs-text, #111)' }}>{label}</span>
        <span style={{ fontSize: 10, color: 'var(--docs-subtext, #888)', fontFamily: 'monospace' }}>{token}</span>
        <span style={{ fontSize: 10, color: 'var(--docs-subtext, #888)' }}>{stops}</span>
      </div>
    </div>
  )
}

function ColorsPage() {
  return (
    <div style={{ padding: '40px 48px', display: 'flex', flexDirection: 'column', gap: 48 }}>
      {PALETTES.map(palette => (
        <div key={palette.name}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--docs-text, #111)' }}>{palette.name}</h3>
            <span style={{ fontSize: 11, color: 'var(--docs-subtext, #888)' }}>{palette.note}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 152px)', gap: 16, justifyContent: 'start' }}>
            {palette.swatches.map(swatch => (
              <Swatch key={swatch.token} {...swatch} />
            ))}
          </div>
        </div>
      ))}

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--docs-text, #111)' }}>Gradient</h3>
          <span style={{ fontSize: 11, color: 'var(--docs-subtext, #888)' }}>Static</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 152px)', gap: 16, justifyContent: 'start' }}>
          {GRADIENTS.map(g => <GradientSwatch key={g.token} {...g} />)}
        </div>
      </div>
    </div>
  )
}

export default {
  title: 'Colors',
  category: 'Foundations',
  description: 'Raw color palette tokens. Use semantic tokens (--background-*, --text-*, --border-*, --icon-*) in component CSS — reach for raw tokens only when no semantic alias fits. Adaptive tokens flip automatically in dark mode.',
  render: ColorsPage,
  standalone: true,
  previewFull: true,
}
