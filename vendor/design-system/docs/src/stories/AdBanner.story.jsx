import { AdBanner } from 'design-system'

const logoSrc = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='64' height='64' fill='#0f2d52'/><text x='32' y='42' font-family='sans-serif' font-size='30' font-weight='700' fill='#fff' text-anchor='middle'>H</text></svg>"
)}`

const imageSrc = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#008296'/><stop offset='.6' stop-color='#91D2DC'/><stop offset='1' stop-color='#bde4ea'/></linearGradient></defs><rect width='400' height='200' fill='url(#g)'/></svg>"
)}`

export default {
  title: 'AdBanner',
  category: 'Content',
  component: AdBanner,
  description:
    'Paid, third-party advertising unit — an advertiser logo, title/sub-copy, a "Sponsored" tag, and an optional image and CTA (the image renders as a trailing strip, a hero, or a faded side panel depending on layout). Two layouts: mobile (a compact row at size small, or a hero-image card at medium/large) and desktop (a wide strip with a side image). Pick layout by placement, not device OS — it is not the iOS/Android platform concept.',
  guidelines: {
    decisions: [
      {
        title: 'Layout decision',
        columns: ['Placement', 'Use layout'],
        rows: [
          { condition: 'Narrow mobile screen (in-feed row or hero card)', use: 'mobile' },
          { condition: 'Wide strip on a roomy layout, image bleeding off the side', use: 'desktop' },
        ],
      },
      {
        title: 'Mobile size',
        columns: ['Need', 'Use size'],
        rows: [
          { condition: 'Compact in-feed row, no image', use: 'small' },
          { condition: 'Hero card with an 80px image', use: 'medium' },
          { condition: 'Hero card with a 120px image', use: 'large' },
        ],
      },
    ],
    contentRules: [
      {
        title: 'AdBanner',
        items: [
          "Title: the advertiser's hook, 3–6 words — keep their voice, don't rewrite it",
          'Sub-copy: 1 short line of supporting detail',
          "Logo: the advertiser's brand mark, not an Almosafer product/visual icon",
          'Sponsored label: keep it — defaults to "Sponsored"/"ممول"; you may reword it, never remove it',
          'Action label: 2–4 words, verb-first ("Book now", "View offer")',
        ],
      },
    ],
    dos: [
      'Use it only for paid third-party placements that must read as sponsored',
      'Provide a real advertiser logo and (for banner/desktop) a real image — empty slots look broken',
      'Reserve the coral image CTA (desktop) for a single, strong advertiser call-to-action',
    ],
    donts: [
      'Set showSponsored={false} to disguise paid content as organic',
      'Use it for first-party promotion — use VisualCard, Banner, or MarketingCard',
      'Use vague action labels ("Learn more", "Click here")',
    ],
  },
  args: {
    layout: 'mobile',
    size: 'small',
    title: 'Title',
    subtitle: 'Subtitle',
    logoSrc,
    imageSrc,
    showSponsored: true,
    sponsoredLabel: '',
    showAction: false,
    actionLabel: 'View offer',
    showImageAction: false,
    imageActionLabel: 'Book now',
    chevron: true,
    skeleton: false,
    dir: 'ltr',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['mobile', 'desktop'],
      description: 'Placement layout (not the iOS/Android platform)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Mobile form: small (row), medium/large (hero card image height)',
      if: { arg: 'layout', neq: 'desktop' },
    },
    title: {
      control: 'text',
      description: "Advertiser's headline",
    },
    subtitle: {
      control: 'text',
      description: 'Supporting sub-copy',
    },
    logo: {
      control: 'none',
      description: 'Logo as a React node (alternative to logoSrc)',
    },
    logoSrc: {
      control: 'text',
      description: 'Advertiser logo image URL',
    },
    imageSrc: {
      control: 'text',
      description: 'Image URL — hero (mobile medium/large), trailing strip (mobile small), side image (desktop)',
    },
    showSponsored: {
      control: 'boolean',
      description: 'Show the "Sponsored" tag',
    },
    sponsoredLabel: {
      control: 'text',
      description: 'Override the tag text (defaults to "Sponsored"/"ممول")',
    },
    showAction: {
      control: 'boolean',
      description: 'Enable the outline CTA pill (all layouts)',
    },
    actionLabel: {
      control: 'text',
      description: 'Outline CTA label',
      if: { arg: 'showAction', eq: true },
    },
    showImageAction: {
      control: 'boolean',
      description: 'Enable the coral CTA over the image (desktop only)',
      if: { arg: 'layout', eq: 'desktop' },
    },
    imageActionLabel: {
      control: 'text',
      description: 'Coral image CTA label',
      if: (args) => args.layout === 'desktop' && args.showImageAction,
    },
    chevron: {
      control: 'boolean',
      description: 'Show the trailing chevron (mobile layouts)',
      if: { arg: 'layout', neq: 'desktop' },
    },
    skeleton: {
      control: 'boolean',
      description: 'Loading placeholder',
    },
    onAction: {
      control: 'none',
      description: 'Called when the outline CTA is tapped',
    },
    onImageAction: {
      control: 'none',
      description: 'Called when the coral image CTA is tapped',
    },
    onClick: {
      control: 'none',
      description: 'Called when the card is tapped',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Mobile / Small', args: { layout: 'mobile', size: 'small', title: 'Title', subtitle: 'Subtitle', logoSrc, imageSrc } },
    { name: 'Mobile / Small (no image)', args: { layout: 'mobile', size: 'small', title: 'Title', subtitle: 'Subtitle', logoSrc } },
    { name: 'Mobile / Small (no chevron)', args: { layout: 'mobile', size: 'small', title: 'Title', subtitle: 'Subtitle', logoSrc, imageSrc, chevron: false } },
    { name: 'Mobile / Small + CTA', args: { layout: 'mobile', size: 'small', title: 'Title', subtitle: 'Subtitle', logoSrc, imageSrc, showAction: true, actionLabel: 'View offer' } },
    { name: 'Mobile / Medium', args: { layout: 'mobile', size: 'medium', title: 'Title', subtitle: 'Subtitle', logoSrc, imageSrc } },
    { name: 'Mobile / Large', args: { layout: 'mobile', size: 'large', title: 'Title', subtitle: 'Subtitle', logoSrc, imageSrc } },
    { name: 'Desktop', args: { layout: 'desktop', title: 'Title', subtitle: 'Subtitle', logoSrc, imageSrc } },
    { name: 'Desktop + CTAs', args: { layout: 'desktop', title: 'Title', subtitle: 'Subtitle', logoSrc, imageSrc, showAction: true, actionLabel: 'View offer', showImageAction: true, imageActionLabel: 'Book now' } },
    { name: 'Skeleton', args: { layout: 'mobile', size: 'small', skeleton: true } },
    { name: 'Skeleton + CTA', args: { layout: 'mobile', size: 'small', skeleton: true, showAction: true } },
  ],
  arArgs: {
    title: 'عنوان',
    subtitle: 'وصف',
    actionLabel: 'اعرض العرض',
    imageActionLabel: 'احجز الآن',
    dir: 'rtl',
  },
}
