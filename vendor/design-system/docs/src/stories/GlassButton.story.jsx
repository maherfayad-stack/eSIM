import { GlassButton, PlaceholderIcon } from 'design-system'

function GlassButtonDemo({ bg, type, label, dir }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        padding: 24,
        borderRadius: 16,
        background: 'linear-gradient(120deg, #0BA0B7, #875BF7)',
      }}
    >
      <GlassButton
        bg={bg}
        type={type}
        label={label}
        icon1={<PlaceholderIcon />}
        icon2={<PlaceholderIcon />}
        dir={dir}
        aria-label="Action"
      />
    </div>
  )
}

export default {
  title: 'GlassButton',
  category: 'Actions',
  component: GlassButton,
  render: GlassButtonDemo,
  description:
    'Translucent "liquid glass" action button for floating controls over imagery or inside a glass navbar — the over-content counterpart to IconButton. Content layout is chosen by type, the surface treatment by bg. Used by Navbar for the iOS back / trailing actions.',
  guidelines: {
    decisions: [
      {
        title: 'Surface (bg) decision',
        columns: ['bg', 'Role'],
        rows: [
          { condition: 'Light liquid glass over a light/blurred surface (dark glyphs)', use: 'default' },
          { condition: 'Emphasised action — solid aqua fill, white glyphs', use: 'primary' },
          { condition: 'Dark liquid glass over photography (white glyphs)', use: 'dim' },
        ],
      },
    ],
    contentRules: [
      {
        title: 'Type & content',
        items: [
          'back / x / 1-icon / 2-icons need an aria-label naming the action',
          'Pass Standard System (line) icons via icon1 / icon2, single-color',
          'The back chevron and × are built-in; the chevron mirrors automatically in RTL',
          'Match the surface to the background — dim over photos, default over light/blurred chrome',
        ],
      },
    ],
    dos: [
      'Use over images, maps, or a blurred navbar where an opaque button would look heavy',
      'Use primary to emphasise one action among glass buttons',
    ],
    donts: [
      'Use it on a plain opaque surface — use Button or IconButton instead',
      'Use it as the primary CTA of a flow — use a labelled Button',
    ],
  },
  args: {
    bg: 'default',
    type: 'back',
    label: 'Label',
    dir: 'ltr',
  },
  argTypes: {
    bg: {
      control: 'select',
      options: ['default', 'primary', 'dim'],
      description: 'Surface treatment',
    },
    type: {
      control: 'select',
      options: ['back', 'label', 'back-label', '1-icon', '2-icons', 'x'],
      description: 'Content layout',
    },
    label: {
      control: 'text',
      description: 'Text for the label / back-label types',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction — mirrors the back chevron',
    },
  },
  examples: [
    { name: 'Back', args: { bg: 'default', type: 'back' } },
    { name: 'Primary back', args: { bg: 'primary', type: 'back' } },
    { name: 'Dim back', args: { bg: 'dim', type: 'back' } },
    { name: 'Back + Label', args: { bg: 'default', type: 'back-label' } },
    { name: '2 icons', args: { bg: 'default', type: '2-icons' } },
    { name: 'Close', args: { bg: 'dim', type: 'x' } },
  ],
}
