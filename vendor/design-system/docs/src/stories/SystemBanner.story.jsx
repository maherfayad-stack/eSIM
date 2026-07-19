import { SystemBanner } from 'design-system'

export default {
  title: 'SystemBanner',
  category: 'Content',
  component: SystemBanner,
  description: 'Inline status/message banner — a tinted row with a status icon, a title and description, and an optional action. Two layouts via the platform prop: mobile (default — a compact row with an inline text-link action) and desktop (a wide row with a leading icon column, an optional Tag, and a trailing Primary Button). Use for operational or transactional messages that stay visible until the user acts or the issue resolves. Distinct from the promotional Banner (offers, coupon codes) and VisualCard (image-led campaigns).',
  guidelines: {
    notes: [
      'platform picks the layout: "mobile" (default) is the compact row with an inline text-link action; "desktop" is a wide row with a leading icon column, an optional Tag, and a trailing Primary Button action.',
      'On mobile the action renders as an inline text-link (no ghost/link Button variant exists in this system); on desktop it renders as a Primary Button.',
      'type selects both the tint and the built-in status icon — match it to the nature of the message, not to grab attention.',
      'tag renders only on the desktop layout; pass a string or a Tag props object.',
    ],
    contentRules: [
      {
        title: 'Message',
        items: [
          'Lead with the key fact so users can decide quickly whether they need to act',
          'Title (optional): 3–6 words; the headline of the message',
          'Description: 1–2 short sentences; target ≤ 120 characters',
          'Name entities explicitly ("Flight SV402", "Hilton Downtown Dubai")',
          'One action maximum; label it specifically ("Update card", not "Learn more")',
        ],
      },
    ],
    dos: [
      'Use visual / neutral for low-stakes info; reserve error for genuine problems',
      'On desktop, use tag for a short qualifier (expiry, count) — not a second message',
    ],
    donts: [
      'Confirm a just-completed action with no follow-up — use Snackbar',
      'Block the user on a critical decision — use Dialog',
      'Show a marketing offer or coupon — use Banner',
      'Stack multiple system banners at the same scroll position',
    ],
  },
  args: {
    platform: 'mobile',
    type: 'visual',
    title: 'Title',
    description: 'Book with free cancellation and get full refund in case your plans change.',
    icon: true,
    tag: '',
    actionLabel: 'Label',
    skeleton: false,
    dir: 'ltr',
  },
  argTypes: {
    platform: {
      control: 'select',
      options: ['mobile', 'desktop'],
      description: 'Layout: mobile (compact row, text-link action) or desktop (wide row, Tag + Primary Button)',
    },
    type: {
      control: 'select',
      options: ['visual', 'neutral', 'success', 'caution', 'error'],
      description: 'Selects the tint and built-in status icon',
    },
    title: {
      control: 'text',
      description: 'Message headline (optional)',
    },
    description: {
      control: 'text',
      description: 'Supporting body text',
    },
    icon: {
      control: 'boolean',
      description: 'Show the built-in status icon for the type',
    },
    tag: {
      control: 'text',
      description: 'Desktop only — a Tag rendered in the content; string or Tag props object',
    },
    actionLabel: {
      control: 'text',
      description: 'Action label; omit to hide. Renders as a text-link (mobile) or Primary Button (desktop)',
    },
    onAction: {
      control: 'none',
      description: 'Called when the action (text-link on mobile, Button on desktop) is triggered',
    },
    skeleton: {
      control: 'boolean',
      description: 'Render a shimmer placeholder, ignoring other props',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Visual', args: { type: 'visual', title: 'Title', description: 'Book with free cancellation and get full refund in case your plans change.', actionLabel: 'Label' } },
    { name: 'Neutral', args: { type: 'neutral', title: 'Title', description: 'Book with free cancellation and get full refund in case your plans change.', actionLabel: 'Label' } },
    { name: 'Success', args: { type: 'success', title: 'Title', description: 'Book with free cancellation and get full refund in case your plans change.', actionLabel: 'Label' } },
    { name: 'Caution', args: { type: 'caution', title: 'Title', description: 'Book with free cancellation and get full refund in case your plans change.', actionLabel: 'Label' } },
    { name: 'Error', args: { type: 'error', title: 'Title', description: 'Book with free cancellation and get full refund in case your plans change.', actionLabel: 'Label' } },
    { name: 'No title', args: { type: 'neutral', title: undefined, description: 'Book with free cancellation and get full refund in case your plans change.', actionLabel: 'Label' } },
    { name: 'No action', args: { type: 'success', actionLabel: undefined } },
    { name: 'Skeleton', args: { skeleton: true } },
    { name: 'Desktop', args: { platform: 'desktop', type: 'visual', title: 'Title', description: 'Book with free cancellation and get full refund in case your plans change.', tag: 'Ends in 2 days', actionLabel: 'Label' } },
    { name: 'Desktop · Success', args: { platform: 'desktop', type: 'success', title: 'Title', description: 'Book with free cancellation and get full refund in case your plans change.', tag: 'Ends in 2 days', actionLabel: 'Label' } },
    { name: 'Desktop · No icon', args: { platform: 'desktop', type: 'visual', icon: false, title: 'Title', description: 'Book with free cancellation and get full refund in case your plans change.', tag: 'Ends in 2 days', actionLabel: 'Label' } },
  ],
  arArgs: {
    title: 'العنوان',
    description: 'احجز الآن و يمكنك استرداد المبلغ في حالة الإلغاء.',
    actionLabel: 'المحتوي',
    dir: 'rtl',
  },
}
