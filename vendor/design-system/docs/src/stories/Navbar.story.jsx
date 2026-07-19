import { useState } from 'react'
import { Navbar, PlaceholderIcon } from 'design-system'

const onImage = {
  background: 'linear-gradient(120deg, #0BA0B7, #875BF7)',
  borderRadius: 12,
}

function NavbarDemo({ platform, surface, variant, title, subtitle, showActions, showChips, showSegmented, items, dir }) {
  const [seg, setSeg] = useState(0)
  const [tbSeg, setTbSeg] = useState(0)
  const [search, setSearch] = useState('')
  const ar = dir === 'rtl'

  // each toolbar variant carries its own content (styled per platform)
  const variantData = {
    default: {
      title,
      subtitle,
      rightActions: showActions
        ? [
            { icon: <PlaceholderIcon />, onClick: () => {}, 'aria-label': 'Action 1' },
            { icon: <PlaceholderIcon />, onClick: () => {}, 'aria-label': 'Action 2' },
          ]
        : [],
    },
    large: {
      title: title || 'Title',
      rightActions: showActions ? [{ icon: <PlaceholderIcon />, onClick: () => {}, 'aria-label': 'Action' }] : [],
    },
    flights: {
      origin: 'DXB',
      destination: 'JED',
      tripType: ar ? 'ذهاب وعودة' : 'Round-trip',
      travelers: 2,
      cabin: ar ? 'الأعمال' : 'Premium Economy',
      dates: ar ? '١١ - ٢٨ أغسطس' : '11 - 28 Aug',
      onItinerary: () => {},
      onCurrency: showActions ? () => {} : undefined,
    },
    stays: {
      location: ar ? 'دبي' : 'Dubai',
      guests: 9,
      dates: ar ? '١١ - ٢٨ أغسطس' : '11 Aug - 28 Aug',
      onItinerary: () => {},
      onCurrency: showActions ? () => {} : undefined,
      // Android stays shows a search action too (iOS ignores this)
      onSearch: showActions ? () => {} : undefined,
    },
    'segmented-control': {
      segmentedControl: { items: ar ? ['ملصق', 'ملصق'] : ['Label', 'Label'], value: tbSeg, onChange: setTbSeg },
      onClose: showActions ? () => {} : undefined,
    },
    search: {
      search: { value: search, onChange: e => setSearch(e.target.value), onClear: () => setSearch(''), placeholder: ar ? 'بحث' : 'Search' },
      onClose: () => {},
    },
  }

  // the variant only applies on default surface (always so on iOS); Android
  // gradient/overlay falls back to the default layout
  const effVariant = (platform === 'android' && surface !== 'default') ? 'default' : variant
  // back is always present (the search variant ignores it — it uses a close button)
  const toolbar = {
    variant: effVariant,
    onBack: () => {},
    ...variantData[effVariant],
  }

  const chips = showChips
    ? [
        { icon: <PlaceholderIcon /> },
        { icon: <PlaceholderIcon /> },
        { icon: <PlaceholderIcon />, label: ar ? 'ملصق' : 'Label', dropdown: true },
        { icon: <PlaceholderIcon />, label: ar ? 'ملصق' : 'Label', dropdown: true },
        { label: ar ? 'ملصق' : 'Label', dropdown: true },
      ]
    : undefined

  const segmentedControl = showSegmented
    ? { items, value: seg, onChange: setSeg }
    : undefined

  // iOS is a translucent glass surface, so it needs a colourful backdrop for the
  // blur to read — same purple→aqua gradient used behind gradient/overlay.
  const onImg = platform === 'ios' || surface === 'gradient' || surface === 'overlay'

  return (
    <div style={{ width: '100%', maxWidth: 390, ...(onImg ? onImage : null) }}>
      <Navbar
        platform={platform}
        surface={surface}
        toolbar={toolbar}
        chips={chips}
        segmentedControl={segmentedControl}
        dir={dir}
      />
    </div>
  )
}

// the toolbar variant is active on iOS (always) and on Android with the default surface
const variantActive = (args) => args.platform === 'ios' || (args.platform === 'android' && args.surface === 'default')
// hide a control on the search variant (which has no title/subtitle/actions)
const notSearch = (args) => !(variantActive(args) && args.variant === 'search')
// title is used only by the default & large variants — hide on the rest
const titleToggle = (args) => !(variantActive(args) && ['search', 'flights', 'stays', 'segmented-control'].includes(args.variant))
// subtitle only exists on the default variant — hide it everywhere else
const subtitleToggle = (args) => !(variantActive(args) && ['search', 'large', 'flights', 'stays', 'segmented-control'].includes(args.variant))
// the segmented-control variant already has a segmented control, so the standalone section toggle is hidden
const segToggle = (args) => !(variantActive(args) && args.variant === 'segmented-control')
// over imagery (Android gradient/overlay) the toolbar stands alone — no chips/segmented
const notOverImagery = (args) => !(args.platform === 'android' && ['gradient', 'overlay'].includes(args.surface))
// actions: hidden on search (no actions) and on the Android segmented-control variant (no trailing)
const actionsToggle = (args) => notSearch(args) && !(args.platform === 'android' && args.surface === 'default' && args.variant === 'segmented-control')

export default {
  title: 'Navbar',
  category: 'Navigation',
  component: Navbar,
  render: NavbarDemo,
  description:
    'Top navigation bar composed from a status bar, a toolbar (its variant picks the layout: default, large, flights, stays, segmented-control, search), an optional chip row, and an optional segmented control. Platform-aware (iOS glass / Android material) and surface-aware. The variants work on both platforms but only on the default surface; the Android-only gradient/overlay surfaces fall back to the default toolbar. Each section renders only when its data prop is supplied.',
  guidelines: {
    decisions: [
      {
        title: 'Surface decision',
        columns: ['Screen context', 'Use surface'],
        rows: [
          { condition: 'Standard page on an opaque background', use: 'default' },
          { condition: 'Android navbar over a hero image (soft top scrim)', use: 'gradient' },
          { condition: 'Android navbar over imagery needing a stronger dim', use: 'overlay' },
        ],
      },
    ],
    contentRules: [
      {
        title: 'Section rules',
        items: [
          'Title: 1–4 words, noun-based, describes the screen — not an action',
          'Keep the subtitle short (route, dates, count); drop it if it competes with a right action',
          'Pass chips only when they filter/jump within this screen; segmented control switches sub-views of the current screen',
          'gradient / overlay are Android-only (title/icons go white, chips + segmented are dropped) — use only over real imagery; iOS always uses the default glass surface',
        ],
      },
    ],
    dos: [
      'Set platform / dir once via DesignSystemProvider rather than on every navbar',
      'Use noun-based titles ("Seat selection"); let buttons carry the verbs',
      'Wire onBack on every screen that is not a root-level tab destination',
    ],
    donts: [
      'Use verb-based titles ("Select a seat")',
      'Crowd the toolbar with more than two trailing actions',
      'Toggle empty sections — simply omit chips / segmentedControl when there is nothing to show',
    ],
  },
  previewFull: true,
  previewPadding: 'none',
  args: {
    platform: 'ios',
    surface: 'default',
    variant: 'default',
    title: 'Title',
    subtitle: 'Subtitle',
    showActions: true,
    showChips: true,
    showSegmented: true,
    items: ['Flights', 'Stays'],
    dir: 'ltr',
  },
  argTypes: {
    platform: {
      control: 'select',
      options: ['ios', 'android'],
      description: 'iOS glass chrome or Android material chrome',
    },
    surface: {
      control: 'select',
      options: ['default', 'gradient', 'overlay'],
      // Android-only: iOS always uses the default glass surface
      if: { arg: 'platform', eq: 'android' },
      description: 'Surface treatment (Android only) — default, gradient scrim, or 50% overlay (last two go over imagery). iOS always uses the default glass surface.',
    },
    variant: {
      control: 'select',
      options: ['default', 'large', 'flights', 'stays', 'segmented-control', 'search'],
      // applies on iOS, and on Android only with the default surface
      if: variantActive,
      description: 'Toolbar layout. Applies on iOS, and on Android only with the default surface (gradient/overlay always render the default toolbar).',
    },
    // the search variant has no title/subtitle/back — just a search field + close
    title: { control: 'text', if: titleToggle, description: 'Screen title (default / large)' },
    subtitle: { control: 'text', if: subtitleToggle, description: 'Subtitle below the title (default variant)' },
    showActions: { control: 'boolean', if: actionsToggle, description: 'Render two trailing actions' },
    showChips: { control: 'boolean', if: notOverImagery, description: 'Render the chip row' },
    showSegmented: { control: 'boolean', if: (args) => segToggle(args) && notOverImagery(args), description: 'Render the segmented control' },
    // dependent control — only shown when the segmented section is enabled; feeds SegmentedControl `items`
    items: { control: 'list', if: (args) => args.showSegmented && segToggle(args) && notOverImagery(args), description: 'SegmentedControl items (comma-separated)' },
    dir: { control: 'select', options: ['ltr', 'rtl'], description: 'Text direction' },
  },
  examples: [
    { name: 'Default', args: { platform: 'ios', variant: 'default' } },
    { name: 'Large', args: { platform: 'ios', variant: 'large', showChips: false, showSegmented: false } },
    { name: 'Flights', args: { platform: 'ios', variant: 'flights', showChips: false, showSegmented: false } },
    { name: 'Stays', args: { platform: 'ios', variant: 'stays', showChips: false, showSegmented: false } },
    { name: 'Segmented control', args: { platform: 'ios', variant: 'segmented-control', showChips: false, showSegmented: false } },
    { name: 'Search', args: { platform: 'ios', variant: 'search', showChips: false, showSegmented: false } },
    { name: 'Android', args: { platform: 'android', variant: 'default' } },
    { name: 'Android Flights', args: { platform: 'android', variant: 'flights', showChips: false, showSegmented: false } },
    { name: 'Android Gradient', args: { platform: 'android', surface: 'gradient', variant: 'default', showChips: false, showSegmented: false } },
  ],
  arArgs: {
    title: 'عنوان',
    subtitle: 'عنوان فرعي',
    items: ['رحلات', 'فنادق'],
    dir: 'rtl',
  },
}
