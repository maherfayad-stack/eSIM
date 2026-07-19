import { VisualCard } from 'design-system'

export default {
  title: 'VisualCard',
  category: 'Content',
  component: VisualCard,
  description: 'Full-bleed image card with a gradient overlay and price/CTA bar. Use for destination or campaign promotion with a hero image. Medium is a compact card; large is a hero-style card.',
  guidelines: {
    decisions: [
      {
        title: 'Size decision',
        columns: ['Need', 'Use size'],
        rows: [
          { condition: 'Destination or campaign image with price', use: 'medium' },
          { condition: 'Full hero-style campaign card', use: 'large' },
        ],
      },
    ],
    contentRules: [
      {
        title: 'VisualCard',
        items: [
          'Title: 3–8 words; expressive, matched to the image',
          'Description: optional; 1 sentence max',
          'Price label: use standard label ("From", "Starting at") — not custom phrasing',
          'Action label: 2–4 words, verb-first ("Book now", "Explore deals")',
        ],
      },
    ],
    dos: [
      'Provide a real image — placeholder images make the card look broken',
      'Set accentColor to the image\'s dominant color so the gradient blends',
      'Always make the dismiss button functional — never show it if tapping it does nothing',
    ],
    donts: [
      'Use for system alerts or operational messages',
      'Stack multiple cards at the same scroll position',
      'Use vague action labels ("Learn more", "Click here")',
    ],
  },
  args: {
    size: 'medium',
    title: 'Dubai from SAR 499',
    subtitle: 'Limited seats available',
    priceLabel: 'From',
    priceValue: 'SAR 499',
    actionLabel: 'Book now',
    showBottomBar: true,
    showDismiss: true,
    dir: 'ltr',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['medium', 'large'],
      description: 'Layout variant',
    },
    title: {
      control: 'text',
      description: 'Card headline',
    },
    subtitle: {
      control: 'text',
      description: 'Supporting body text',
    },
    imageSrc: {
      control: 'text',
      description: 'Background image URL',
    },
    accentColor: {
      control: 'text',
      description: 'Dominant image color for the gradient overlay',
    },
    priceLabel: {
      control: 'text',
      description: 'Label above price value',
    },
    priceValue: {
      control: 'text',
      description: 'Price text',
    },
    actionLabel: {
      control: 'text',
      description: 'CTA button label',
    },
    showBottomBar: {
      control: 'boolean',
      description: 'Show price + CTA bar',
    },
    showDismiss: {
      control: 'boolean',
      description: 'Show dismiss button',
    },
    onAction: {
      control: 'none',
      description: 'Called when the CTA button is tapped',
    },
    onClose: {
      control: 'none',
      description: 'Called when the dismiss button is tapped',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Medium', args: { size: 'medium', title: 'Dubai from SAR 499', subtitle: 'Limited seats available', priceLabel: 'From', priceValue: 'SAR 499', actionLabel: 'Book now', showBottomBar: true } },
    { name: 'Large', args: { size: 'large', title: 'Explore Saudi Arabia', subtitle: 'Discover hidden gems', priceLabel: 'Starting at', priceValue: 'SAR 299', actionLabel: 'Explore deals', showBottomBar: true } },
    { name: 'No bottom bar', args: { size: 'medium', showBottomBar: false } },
  ],
  arArgs: {
    title: 'دبي من ٤٩٩ ريال',
    subtitle: 'المقاعد محدودة',
    actionLabel: 'احجز الآن',
    priceLabel: 'ابتداءً من',
    dir: 'rtl',
  },
}
