import { Checkbox } from 'design-system'

function CheckboxDemo({ selected, disabled, error, skeleton }) {
  return (
    <Checkbox
      checked={selected}
      disabled={disabled}
      error={error}
      skeleton={skeleton}
      aria-label="Checkbox"
      onChange={() => {}}
    />
  )
}

export default {
  title: 'Checkbox',
  category: 'Inputs',
  component: Checkbox,
  render: CheckboxDemo,
  description: 'Standalone tick-box atom — a 20×20 checkbox marker only, no label. Wraps a native <input type="checkbox"> via forwardRef for accessibility and form-library compatibility. For a labeled selection row use ListItem type="checkbox" (which composes this atom with a label + key-value); for a standalone labeled checkbox, wrap it in your own <label>.',
  guidelines: {
    when: [
      'Allowing multiple selections from a list of independent options',
      'The user can opt into or out of a setting or feature',
      'The selection state can be reviewed or edited later',
    ],
    whenNot: [
      'The action should be immediate → use a Button',
      'The user must choose exactly one option → use Radio',
      'Asking for a final commitment or confirmation → use a Button',
      'The selection would trigger a new flow → use a Button or Toggle',
    ],
    contentRules: [
      {
        title: 'Header (required above any checkbox group)',
        items: [
          'Always introduce a group with a clear, standalone header or label',
          'Questions are allowed as headers',
          'Do not end the header with punctuation unless it is a question',
          'Add helper text below the header when needed',
        ],
      },
      {
        title: 'Group option patterns',
        items: [
          'Verb-led — when option represents an action: "Receive flight updates", "Add trip insurance"',
          'Noun — when option represents a feature or selection: "Extra legroom", "Window seat"',
          'First-person — when option represents a preference: "My dates are flexible", "I want a vegetarian meal"',
          'All options in a group must follow the same grammatical pattern — do not mix types',
          'Do not use negation in the label — the unchecked state represents "no"',
        ],
      },
      {
        title: 'Single checkbox',
        items: [
          'Use first-person perspective when the label reflects the user\'s choice',
          'Do not use second-person phrasing ("You agree...", "Use your...")',
          'No ending punctuation',
        ],
      },
    ],
    examples: [
      { do: 'Select your special requests', dont: 'Please include', why: 'Header must be standalone' },
      { do: 'Use my saved traveler details', dont: 'Use your saved traveler details', why: 'First-person keeps focus on the user\'s decision' },
      { do: 'I agree to receive emails', dont: 'I agree to receive emails.', why: 'No ending punctuation' },
      { do: 'Receive updates by SMS', dont: 'Don\'t send me SMS updates', why: 'Negative phrasing confuses what the checked state means' },
    ],
    selfCheck: [
      'Is it clear what selecting this checkbox actually does?',
      'Is the phrasing positive, not negative?',
      'Are all options in a group structured the same way?',
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
      description: 'Checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and mutes colors',
    },
    error: {
      control: 'boolean',
      description: 'Error state — highlights the box in warning color',
    },
    skeleton: {
      control: 'boolean',
      description: 'Renders a 20×20 shimmer loading placeholder',
    },
  },
  examples: [
    { name: 'Unchecked', args: {} },
    { name: 'Selected', args: { selected: true } },
    { name: 'Error', args: { error: true } },
    { name: 'Error selected', args: { error: true, selected: true } },
    { name: 'Disabled', args: { disabled: true } },
    { name: 'Disabled selected', args: { disabled: true, selected: true } },
    { name: 'Skeleton', args: { skeleton: true } },
  ],
}
