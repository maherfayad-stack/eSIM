import { Banner } from 'design-system'

export default {
  title: 'Banner',
  category: 'Content',
  component: Banner,
  description: 'Inline promotional banner with a tinted background, optional icon visual, and a coupon code pill. For image-led campaign cards with a price bar, use VisualCard.',
  guidelines: {
    notes: [
      'This is the promotional Banner (offers, codes). A separate system notification Banner (Informational / Success / Warning / Failure) is planned but not yet implemented.',
    ],
    contentRules: [
      {
        title: 'Banner',
        items: [
          'Title: 3–6 words; the hook — benefit-led or curiosity-driven',
          'Description: 1 short sentence; adds detail without repeating the title',
          'Code text: uppercase, max 12 characters',
        ],
      },
    ],
    dos: [
      'Match the color to the brand context (partner colors, seasonal campaigns)',
      'Always make the dismiss button functional — never show it if tapping it does nothing',
    ],
    donts: [
      'Use for system alerts or operational messages — use System Banner (planned)',
      'Stack multiple banners at the same scroll position',
      'Use for image-led campaigns — use VisualCard',
    ],
  },
  args: {
    color: 'neutral',
    title: 'Exclusive deal',
    subtitle: 'Save up to 30% on your next flight',
    codeLabel: 'Use code',
    codeText: 'FLY30',
    showAction: true,
    showVisual: true,
    showDismiss: true,
    dir: 'ltr',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'info', 'promo', 'featured'],
      description: 'Accent color',
    },
    title: {
      control: 'text',
      description: 'Banner headline',
    },
    subtitle: {
      control: 'text',
      description: 'Supporting body text',
    },
    codeLabel: {
      control: 'text',
      description: 'Label before code pill',
    },
    codeText: {
      control: 'text',
      description: 'Promo code text',
    },
    showAction: {
      control: 'boolean',
      description: 'Show code pill',
    },
    showVisual: {
      control: 'boolean',
      description: 'Show icon slot',
    },
    showDismiss: {
      control: 'boolean',
      description: 'Show dismiss button',
    },
    iconSrc: {
      control: 'text',
      description: 'Icon image URL',
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
    { name: 'Neutral', args: { color: 'neutral' } },
    { name: 'Info', args: { color: 'info' } },
    { name: 'Promo', args: { color: 'promo' } },
    { name: 'Featured', args: { color: 'featured' } },
    { name: 'No action', args: { showAction: false } },
    { name: 'No visual', args: { showVisual: false } },
  ],
  arArgs: {
    title: 'عرض حصري',
    subtitle: 'وفّر حتى ٣٠٪ على رحلتك القادمة',
    codeLabel: 'استخدم الكود',
    dir: 'rtl',
  },
}
