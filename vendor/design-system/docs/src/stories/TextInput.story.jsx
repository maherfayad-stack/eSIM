import { useState } from 'react'
import { TextInput } from 'design-system'

// Placeholder icon from src/icons/line-icons/placeholder.svg
const PlaceholderIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.5 3.25C20.1904 3.25 20.75 3.80964 20.75 4.5V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H19.5ZM4.25 19.5C4.25 19.6381 4.36193 19.75 4.5 19.75H19.043L4.25 4.95703V19.5ZM19.75 19.043V4.5C19.75 4.36193 19.6381 4.25 19.5 4.25H4.95703L19.75 19.043Z" />
  </svg>
)

function TextInputDemo({ disabled, skeleton, required, label, helperText, errorText, dir, onClear: showClear, leadingIcon, trailingIcon, dropdown, multiline, password }) {
  const [value, setValue] = useState('')
  return (
    <div style={{ width: '100%', maxWidth: 340 }}>
      <TextInput
        label={label}
        value={value}
        helperText={helperText}
        errorText={errorText}
        disabled={disabled}
        skeleton={skeleton}
        required={required}
        dir={dir}
        dropdown={dropdown}
        multiline={multiline}
        password={password}
        leadingIcon={leadingIcon ? <PlaceholderIcon /> : undefined}
        trailingIcon={trailingIcon ? <PlaceholderIcon /> : undefined}
        onChange={e => setValue(e.target.value)}
        onClear={showClear ? () => setValue('') : undefined}
      />
    </div>
  )
}

export default {
  title: 'TextInput',
  category: 'Inputs',
  component: TextInput,
  render: TextInputDemo,
  description: 'Floating-label text field with helper/error text and optional leading/trailing icons. The label acts as a placeholder when empty, then shrinks and floats inside the field to the top-left corner when focused or populated, with the value stacked below it. With dropdown, a trailing chevron is shown and a panel drops below the field while focused — pass content (Cell, Radio, Checkbox, …) as children. With multiline, it renders a textarea that auto-grows with the number of lines. With password, the value is masked and an interactive eye toggle reveals/hides it. The error state is derived from errorText being non-empty; disabled and skeleton are independent booleans.',
  guidelines: {
    contentRules: [
      {
        title: 'Label writing',
        items: [
          '1–4 words; noun-based, describes the field\'s purpose',
          'Sentence case; no punctuation',
          'Avoid redundant words ("Enter your", "Type the") — label names the field, not the action',
        ],
      },
      {
        title: 'Helper text',
        items: [
          'Use only when the format or constraint is non-obvious',
          'Max 1 sentence; example or clarification only',
          'Do not restate the label',
        ],
      },
      {
        title: 'Error messages',
        items: [
          'Specific and fixable — tell the user what went wrong and what to do',
          'Plain language — no error codes or system terms',
          'Do not use generic messages ("Invalid input", "Error")',
        ],
      },
    ],
    examples: [
      { do: 'Email address', dont: 'Enter your email address', why: 'Label names the field, not the action' },
      { do: 'Date of birth', dont: 'DOB', why: 'Spell it out for clarity' },
      { do: 'Enter a valid email address', dont: 'Invalid email', why: 'Error should tell what to fix, not just flag the problem' },
      { do: 'Passport number must be 9 characters', dont: 'Field is required', why: 'Be specific about the constraint' },
    ],
    dos: [
      'Mark required fields with required={true} — renders * and sets the native required attribute',
      'Show either helper text or an error message, never both at once',
      'Show error messages after the user has left the field, not while they are still typing',
      'Pass onClear to show the × clear button when the field has a value',
    ],
    donts: [
      'Rely on placeholder text to communicate the label — the floating label already acts as a placeholder',
      'Show an error message before the user has interacted with the field',
    ],
  },
  args: {
    label: 'Email address',
    helperText: 'We\'ll send your itinerary here',
    errorText: '',
    disabled: false,
    skeleton: false,
    required: false,
    dir: 'ltr',
    onClear: false,
    leadingIcon: false,
    trailingIcon: false,
    dropdown: false,
    multiline: false,
    password: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the field',
    },
    skeleton: {
      control: 'boolean',
      description: 'Renders shimmer loading placeholder',
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required — shows * in label and sets native required attribute',
    },
    onClear: {
      control: 'boolean',
      description: 'Shows a filled X-circle clear button when the field has a value',
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Shows a 24px icon on the leading side of the value',
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Shows a 24px icon on the trailing side (yields to the error, password, or clear icon)',
    },
    dropdown: {
      control: 'boolean',
      description: 'Trailing chevron (down by default, up when focused) + a panel that drops below the field while focused for slot content (children)',
    },
    multiline: {
      control: 'boolean',
      description: 'Renders a textarea that auto-grows with the number of lines (for comments / long text)',
    },
    password: {
      control: 'boolean',
      description: 'Masks the value and adds an interactive eye toggle to reveal/hide it',
    },
    label: {
      control: 'text',
      description: 'Floating label / placeholder',
    },
    helperText: {
      control: 'text',
      description: 'Helper text shown below field (hidden in error state)',
    },
    errorText: {
      control: 'text',
      description: 'Error message — also triggers error styling',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Default', args: { label: 'Email address', helperText: 'We\'ll send your itinerary here', errorText: '' } },
    { name: 'Required', args: { label: 'Email address', required: true, helperText: '' } },
    { name: 'Error', args: { label: 'Email address', helperText: '', errorText: 'Please enter a valid email' } },
    { name: 'Password', args: { label: 'Password', helperText: 'At least 8 characters', password: true } },
    { name: 'Multiline', args: { label: 'Comment', helperText: 'Tell us about your stay', multiline: true } },
    { name: 'Dropdown', args: { label: 'Country', helperText: '', dropdown: true } },
    { name: 'Dropdown + icons', args: { label: 'Country', helperText: '', dropdown: true, leadingIcon: true, trailingIcon: true } },
    { name: 'With leading icon', args: { label: 'Search', helperText: '', leadingIcon: true } },
    { name: 'With trailing icon', args: { label: 'Search', helperText: '', trailingIcon: true } },
    { name: 'Leading + trailing', args: { label: 'Search', helperText: '', leadingIcon: true, trailingIcon: true } },
    { name: 'Disabled', args: { label: 'Email address', disabled: true, helperText: '' } },
    { name: 'Skeleton', args: { skeleton: true } },
  ],
  arArgs: {
    label: 'البريد الإلكتروني',
    helperText: 'سنرسل تفاصيل رحلتك هنا',
    dir: 'rtl',
  },
}
