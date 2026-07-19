import { AlmosaferLogo } from 'design-system'

function LogoDemo({ type, variant, lang, width }) {
  const needsDark = variant === 'white'
  return (
    <div style={needsDark
      ? { background: '#003143', padding: 16, borderRadius: 8, display: 'inline-block' }
      : { display: 'inline-block' }
    }>
      <AlmosaferLogo type={type} variant={variant} lang={lang} width={width} />
    </div>
  )
}

export default {
  title: 'AlmosaferLogo',
  category: 'Foundations',
  component: AlmosaferLogo,
  render: LogoDemo,
  description: 'Brand logo component covering all official Almosafer formats — wordmark (text + mark), logomark (mark only), and app logo (rounded square with mark). Scales proportionally from a single width prop; height is derived from the viewBox aspect ratio.',
  guidelines: {
    decisions: [
      {
        title: 'Type decision',
        columns: ['When to use', 'Use type'],
        rows: [
          { condition: 'Primary brand placement — splash screens, onboarding, marketing headers, footers', use: 'wordmark' },
          { condition: 'Compact contexts — app headers, favicons, inline brand references where the wordmark would be too wide', use: 'logomark' },
          { condition: 'App store assets, home screen icons, notification thumbnails', use: 'applogo' },
        ],
      },
      {
        title: 'Variant decision',
        columns: ['Background', 'Use variant'],
        rows: [
          { condition: 'White or light neutral backgrounds', use: 'colour' },
          { condition: 'Dark brand backgrounds (--color-almosafer, deep navy, photography)', use: 'white' },
        ],
      },
      {
        title: 'Language decision (wordmark only)',
        columns: ['Layout', 'Use lang'],
        rows: [
          { condition: 'Left-to-right layouts', use: 'en' },
          { condition: 'Right-to-left layouts', use: 'ar' },
        ],
      },
    ],
    notes: [
      'Never recolor or apply CSS filters to the logo — all colors are brand-locked in the SVG.',
      'Do not place the colour wordmark on a colored background unless contrast has been verified.',
      'The white variant requires a sufficiently dark background; minimum recommended is --color-almosafer (#003143).',
      'Scale only with the width prop — the component maintains the correct aspect ratio automatically.',
      'Do not crop or partially obscure the logo.',
      'Minimum recommended widths: wordmark 88px · logomark 16px · applogo 24px.',
      'The lang prop has no effect on logomark or applogo — both are language-neutral.',
    ],
  },
  args: {
    type: 'wordmark',
    variant: 'colour',
    lang: 'en',
    width: 132,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['wordmark', 'logomark', 'applogo'],
      description: 'Logo format — wordmark includes the Almosafer logotype; logomark is the mark only; applogo adds the rounded-square container',
    },
    variant: {
      control: 'select',
      options: ['colour', 'white'],
      description: 'Use colour on light backgrounds, white on dark brand backgrounds (#003143 or photography)',
    },
    lang: {
      control: 'select',
      options: ['en', 'ar'],
      description: 'Wordmark language — en for LTR layouts, ar for RTL. Ignored for logomark and applogo',
    },
    width: {
      control: 'number',
      description: 'Width in px. Height scales automatically. Natural widths: wordmark 132px, logomark 24px, applogo 40px',
    },
  },
  examples: [
    { name: 'Wordmark EN', args: { type: 'wordmark', variant: 'colour', lang: 'en', width: 132 } },
    { name: 'Wordmark AR', args: { type: 'wordmark', variant: 'colour', lang: 'ar', width: 132 } },
    { name: 'Wordmark white', args: { type: 'wordmark', variant: 'white', lang: 'en', width: 132 } },
    { name: 'Logomark', args: { type: 'logomark', variant: 'colour', width: 48 } },
    { name: 'Logomark white', args: { type: 'logomark', variant: 'white', width: 48 } },
    { name: 'App logo', args: { type: 'applogo', variant: 'colour', width: 64 } },
    { name: 'App logo white', args: { type: 'applogo', variant: 'white', width: 64 } },
  ],
}
