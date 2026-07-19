import { Search } from 'design-system'

// Uncontrolled — the field seeds its text from `label` and manages the rest itself.
// `key={label}` re-applies the seed when the playground control changes.
function SearchDemo({ platform, label, placeholder, showClose, dir }) {
  return (
    <div style={{ width: '100%', maxWidth: 360, padding: '0 16px' }}>
      <Search
        key={label}
        platform={platform}
        label={label}
        placeholder={placeholder}
        showClose={showClose}
        dir={dir}
      />
    </div>
  )
}

export default {
  title: 'Search',
  category: 'Inputs',
  component: Search,
  render: SearchDemo,
  description: 'Platform-aware search bar with a leading magnifier and a trailing microphone / clear control. iOS renders a liquid-glass pill (with an optional separate close button via showClose); Android renders a 56px Material docked bar where focusing or typing swaps the magnifier for a back arrow (fires onClose) and shows a trailing × to clear. Drive it controlled with value + onChange, or omit value to run uncontrolled with the text seeded from label.',
  guidelines: {
    when: [
      'The screen\'s primary purpose is search (search results page, filter screen)',
      'Embedded in the top Navbar for persistent search access throughout a screen',
    ],
    whenNot: [
      'The input is for structured data entry → use TextInput',
      'There is only one item to find and no filtering is needed',
    ],
    contentRules: [
      {
        title: 'Placeholder text',
        items: [
          'Generic default ("Search") is correct when the scope is clear from context',
          'Add a specific placeholder when the scope could be ambiguous ("Search hotels in Dubai", "Search by destination")',
          'Keep placeholder short — it disappears when the user starts typing',
        ],
      },
    ],
    dos: [
      'Set platform (or wrap in a DesignSystemProvider) to match the surrounding UI',
      'Wire onClear to reset the value, and onClose to dismiss/collapse search',
      'Add a dismiss button (iOS showClose) when search can be closed (e.g. inside a search overlay)',
    ],
    donts: [
      'Use for filtering a short list (fewer than ~10 items) — use a segmented control or checkboxes instead',
      'Add a dismiss button when search is always visible on screen — it would imply search can be closed when it can\'t',
      'Pass showClose on Android — it is ignored; the back arrow is the dismiss affordance',
    ],
  },
  args: {
    platform: 'ios',
    label: '',
    showClose: false,
    dir: 'ltr',
  },
  argTypes: {
    platform: {
      control: 'select',
      options: ['ios', 'android'],
      description: 'Platform style — iOS glass pill or Android Material docked bar',
    },
    label: {
      control: 'text',
      description: 'Seeds the field text (uncontrolled only; ignored when value is set)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text (defaults to "Search" in LTR or "بحث" in RTL)',
    },
    showClose: {
      control: 'boolean',
      if: { arg: 'platform', eq: 'ios' },
      description: 'iOS only — renders a liquid-glass × button outside the pill',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction (also sets default placeholder language)',
    },
    value: {
      control: 'none',
      description: 'Controlled field value — pass with onChange; omit to run uncontrolled (seeded by label)',
    },
    onChange: {
      control: 'none',
      description: 'Change handler for the native input (controlled use)',
    },
    onClear: {
      control: 'none',
      description: 'Fired when the clear (×) control is tapped; the field also resets itself when uncontrolled',
    },
    onClose: {
      control: 'none',
      description: 'iOS: close button tapped · Android: leading back arrow tapped',
    },
  },
  examples: [
    { name: 'iOS', args: { platform: 'ios', showClose: false, dir: 'ltr' } },
    { name: 'iOS populated', args: { platform: 'ios', label: 'Search Term', dir: 'ltr' } },
    { name: 'iOS with close', args: { platform: 'ios', showClose: true, dir: 'ltr' } },
    { name: 'Android', args: { platform: 'android', dir: 'ltr' } },
    { name: 'Android populated', args: { platform: 'android', label: 'Search Term', dir: 'ltr' } },
    { name: 'Android RTL', args: { platform: 'android', dir: 'rtl' } },
    { name: 'iOS RTL', args: { platform: 'ios', showClose: false, dir: 'rtl' } },
  ],
}
