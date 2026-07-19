import { Tag } from 'design-system'

// Placeholder icon from src/icons/line-icons/placeholder.svg
const PlaceholderIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.5 3.25C20.1904 3.25 20.75 3.80964 20.75 4.5V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H19.5ZM4.25 19.5C4.25 19.6381 4.36193 19.75 4.5 19.75H19.043L4.25 4.95703V19.5ZM19.75 19.043V4.5C19.75 4.36193 19.6381 4.25 19.5 4.25H4.95703L19.75 19.043Z" />
  </svg>
)

export default {
  title: 'Tag',
  category: 'Content',
  component: Tag,
  render: ({ leadingIcon, trailingIcon, ...rest }) => (
    <Tag
      {...rest}
      leadingIcon={leadingIcon ? <PlaceholderIcon /> : undefined}
      trailingIcon={trailingIcon ? <PlaceholderIcon /> : undefined}
    />
  ),
  description: 'Inline label chip with fixed 20px height. Supports semantic variants (warning, caution, success, neutral) with solid or tinted styles, and optional leading/trailing icons.',
  guidelines: {
    when: [
      'Displaying a permanent or factual property ("Economy", "Breakfast included")',
      'Communicating status or categorical information that helps users compare items',
      'Improving scannability in lists or detail pages without requiring interaction',
    ],
    whenNot: [
      'The label is dynamic or time-bound → use Callout',
      'The label is comparative or data-backed → use Accolade',
      'Showing numeric counts or live activity → use Badge',
      'The user needs to take an action → use a Button',
    ],
    contentRules: [
      {
        title: 'Tag label',
        items: [
          '1–3 words; short and scannable',
          'Sentence case ("Family friendly", not "FAMILY FRIENDLY")',
          'Nouns or noun phrases; avoid verbs unless part of a fixed category name',
          'Objective and factual — no subjective or promotional language',
        ],
        note: 'Examples: Family friendly · Economy · Ocean view · Cancelled · Non-refundable',
      },
    ],
    selfCheck: [
      'Is this a fixed fact that will still be true next week?',
      'Should this be a Callout or Accolade instead?',
      'Does the color variant match the semantic intent (warning = danger/error, success = positive, caution = attention)?',
    ],
  },
  args: {
    label: 'Label',
    variant: 'default',
    style: 'tinted',
    leadingIcon: false,
    trailingIcon: false,
    skeleton: false,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Tag label text',
    },
    variant: {
      control: 'select',
      options: ['default', 'warning', 'caution', 'success', 'neutral'],
      description: 'Semantic color variant',
    },
    style: {
      control: 'select',
      options: ['tinted', 'filled'],
      description: 'Tinted = light background with colored text; Filled = solid background',
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Show a leading icon',
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Show a trailing icon',
    },
    skeleton: {
      control: 'boolean',
      description: 'Show shimmer loading placeholder instead of the tag',
    },
  },
  examples: [
    { name: 'Default tinted', args: { label: 'Popular', variant: 'default', style: 'tinted' } },
    { name: 'Default filled', args: { label: 'Popular', variant: 'default', style: 'filled' } },
    { name: 'Warning tinted', args: { label: 'Non-refundable', variant: 'warning', style: 'tinted' } },
    { name: 'Warning filled', args: { label: 'Non-refundable', variant: 'warning', style: 'filled' } },
    { name: 'Caution tinted', args: { label: 'Limited offer', variant: 'caution', style: 'tinted' } },
    { name: 'Caution filled', args: { label: 'Limited offer', variant: 'caution', style: 'filled' } },
    { name: 'Success tinted', args: { label: 'Free cancellation', variant: 'success', style: 'tinted' } },
    { name: 'Success filled', args: { label: 'Free cancellation', variant: 'success', style: 'filled' } },
    { name: 'Neutral tinted', args: { label: 'Economy', variant: 'neutral', style: 'tinted' } },
    { name: 'Neutral filled', args: { label: 'Economy', variant: 'neutral', style: 'filled' } },
    { name: 'Leading icon', args: { label: 'Top rated', variant: 'success', style: 'tinted', leadingIcon: true } },
    { name: 'Trailing icon', args: { label: 'Popular', variant: 'warning', style: 'tinted', trailingIcon: true } },
    { name: 'Both icons', args: { label: 'New', variant: 'caution', style: 'filled', leadingIcon: true, trailingIcon: true } },
    { name: 'Skeleton', args: { skeleton: true } },
  ],
  arArgs: {
    label: 'شائع',
    dir: 'rtl',
  },
}
