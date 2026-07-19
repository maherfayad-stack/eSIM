import { Chip } from 'design-system'

const PlaceholderIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.5 3.25C20.1904 3.25 20.75 3.80964 20.75 4.5V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H19.5ZM4.25 19.5C4.25 19.6381 4.36193 19.75 4.5 19.75H19.043L4.25 4.95703V19.5ZM19.75 19.043V4.5C19.75 4.36193 19.6381 4.25 19.5 4.25H4.95703L19.75 19.043Z" />
  </svg>
)

export default {
  title: 'Chip',
  category: 'Actions',
  component: Chip,
  render: ({ icon, ...rest }) => (
    <Chip {...rest} icon={icon ? <PlaceholderIcon /> : undefined} />
  ),
  description: 'Interactive pill control for filtering and single-select toggling. Supports a selected state with aqua tint, an optional leading icon, and an optional trailing dropdown chevron.',
  guidelines: {
    when: [
      'Letting users filter a list by a single category ("Economy", "Non-stop")',
      'Toggling a discrete on/off option within a group of related options',
      'Presenting a compact, tappable label that needs to communicate selected state',
    ],
    whenNot: [
      'The label is non-interactive and purely informational → use Tag',
      'The action triggers a full page transition or submit → use Button',
      'Multiple independent boolean filters → use Checkbox or Toggle instead',
      'The label is dynamic or time-sensitive → use Callout',
    ],
    contentRules: [
      {
        title: 'Chip label',
        items: [
          '1–3 words; short and scannable',
          'Sentence case ("Non-stop", not "NON-STOP")',
          'Nouns or noun phrases; avoid verbs',
          'Match the category name exactly across languages',
        ],
        note: 'Examples: Economy · Non-stop · Free cancellation · Breakfast included',
      },
    ],
    selfCheck: [
      'Is this a selectable option, not just an informational label?',
      "Is the selected state meaningful to the user's task?",
      "Should this be a Checkbox or Toggle instead if it's part of a form?",
    ],
  },
  args: {
    label: 'Label',
    selected: false,
    dropdown: false,
    icon: false,
    state: 'default',
    skeleton: false,
    dir: 'ltr',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Chip label text',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the chip is in its selected/active state',
    },
    dropdown: {
      control: 'boolean',
      description: 'Show a trailing chevron-down icon indicating a dropdown will open',
    },
    icon: {
      control: 'boolean',
      description: 'Show a leading icon (16px) — pass a React node; boolean here for preview convenience',
    },
    state: {
      control: 'select',
      options: ['default', 'error'],
      description: 'Visual state — error highlights border, text, and icon in warning color',
    },
    skeleton: {
      control: 'boolean',
      description: 'Show shimmer loading placeholder instead of the chip',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable interaction and mute the chip (native button disabled attribute)',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction — use rtl for Arabic content',
    },
  },
  examples: [
    { name: 'Default', args: { label: 'Economy' } },
    { name: 'Selected', args: { label: 'Economy', selected: true } },
    { name: 'With leading icon', args: { label: 'Economy', icon: true } },
    { name: 'Selected with icon', args: { label: 'Economy', selected: true, icon: true } },
    { name: 'With dropdown', args: { label: 'Sort by', dropdown: true } },
    { name: 'Selected with dropdown', args: { label: 'Sort by', selected: true, dropdown: true } },
    { name: 'Error', args: { label: 'Dates', state: 'error' } },
    { name: 'Error with icon', args: { label: 'Dates', state: 'error', icon: true } },
    { name: 'Disabled', args: { label: 'Economy', disabled: true } },
    { name: 'Disabled selected', args: { label: 'Economy', selected: true, disabled: true } },
    { name: 'Skeleton', args: { skeleton: true } },
  ],
  arArgs: {
    label: 'اقتصادي',
    dir: 'rtl',
  },
}
