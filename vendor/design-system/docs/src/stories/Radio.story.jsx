import { Radio } from 'design-system'

function RadioDemo({ selected, disabled, error, skeleton }) {
  return (
    <Radio
      checked={selected}
      disabled={disabled}
      error={error}
      skeleton={skeleton}
      aria-label="Radio"
      onChange={() => {}}
    />
  )
}

export default {
  title: 'Radio',
  category: 'Inputs',
  component: Radio,
  render: RadioDemo,
  description: 'Standalone radio-button atom — a 20×20 radio marker only, no label. Wraps a native <input type="radio"> via forwardRef for accessibility. For a labeled selection row use ListItem type="radio" (which composes this atom with a label + key-value; pass the same name to group); for a standalone labeled radio, wrap it in your own <label>.',
  guidelines: {
    when: [
      'The user must choose exactly one option from a list',
      'All options are mutually exclusive',
      'The user must make a decision to continue',
    ],
    whenNot: [
      'The user can select multiple options → use Checkbox',
      'You want to trigger an action immediately → use a Button or Toggle',
      'Only one option exists → use a Checkbox or a label instead',
    ],
    contentRules: [
      {
        title: 'Header (required above any radio group)',
        items: [
          'Always introduce the group with a clear, standalone header or label',
          'Questions are allowed as headers',
          'Add helper text below when needed (e.g. "Subject to availability")',
        ],
      },
      {
        title: 'Option labels',
        items: [
          'Short, clear labels — no ending punctuation',
          'All options must follow the same grammatical pattern — no mixing',
          'Prefer nouns for categories; avoid action verbs ("Add", "Choose")',
          'When the selection impacts cost or refundability, add a qualifier inline (e.g. "+AED 50", "non-refundable")',
          'Negation is acceptable only when it is a natural part of the mutually exclusive set (e.g. "None", "Non-refundable")',
        ],
      },
    ],
    examples: [
      { do: 'Refundable / Non-refundable', dont: 'Refundable / Don\'t refund', why: 'Use domain-standard terms' },
      { do: 'Room only / With breakfast', dont: 'Include breakfast / No breakfast', why: 'Single opt-in phrasing belongs to Checkbox' },
      { do: 'Cabin bag only / 1 checked bag / 2 checked bags', dont: 'Add 1 bag / Add 2 bags', why: '"Add" is an action verb — belongs to Button/Checkbox' },
      { do: 'Pay now / Pay later', dont: 'Now / Later', why: 'Shortened labels lose clarity' },
      { do: 'Window / Aisle / No preference', dont: 'Window seat / Aisle seat / Middle seat', why: '"Middle seat" implies negative experience' },
    ],
    selfCheck: [
      'Are these options mutually exclusive?',
      'Is the list complete so the user always has a valid choice?',
      'Are all labels parallel in structure?',
    ],
  },
  args: {
    selected: false,
    disabled: false,
    error: false,
    skeleton: false,
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Selected state',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and mutes colors',
    },
    error: {
      control: 'boolean',
      description: 'Error state — highlights the circle in warning color',
    },
    skeleton: {
      control: 'boolean',
      description: 'Renders a 20×20 shimmer loading placeholder',
    },
  },
  examples: [
    { name: 'Unselected', args: {} },
    { name: 'Selected', args: { selected: true } },
    { name: 'Error', args: { error: true } },
    { name: 'Error selected', args: { error: true, selected: true } },
    { name: 'Disabled', args: { disabled: true } },
    { name: 'Disabled selected', args: { disabled: true, selected: true } },
    { name: 'Skeleton', args: { skeleton: true } },
  ],
}
