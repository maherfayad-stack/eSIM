import { useState } from 'react'
import { Toggle } from 'design-system'

function ToggleDemo({ platform, state, label, dir }) {
  const [checked, setChecked] = useState(false)
  return (
    <Toggle
      platform={platform}
      state={state}
      checked={checked}
      label={label}
      dir={dir}
      onChange={e => setChecked(e.target.checked)}
    />
  )
}

export default {
  title: 'Toggle',
  category: 'Inputs',
  component: Toggle,
  render: ToggleDemo,
  description: 'Binary on/off switch with label, platform-aware (iOS / Android). Use for settings that take effect immediately. Label names the setting, not the action ("Price alerts", not "Turn on price alerts").',
  guidelines: {
    when: [
      'The user is turning a persistent setting on or off',
      'The change applies instantly without a "Save" button',
      'The choice is binary and independent from other settings',
    ],
    whenNot: [
      'The change triggers a one-time action → use a Button or Checkbox',
      'The setting depends on other settings → use Checkbox or Radio',
      'The change has serious or irreversible consequences → use a destructive Button',
      'The state change is not immediate → use a Checkbox with a save/confirm step',
    ],
    contentRules: [
      {
        title: 'Label writing',
        items: [
          'Label the state or setting, not the action — the label names what is being toggled',
          'Keep labels short; noun-based where possible',
          'Use helper text below the label if the impact is not immediately obvious',
        ],
      },
    ],
    examples: [
      { do: 'Price alerts', dont: 'Turn on price alerts', why: '"Turn on" implies a one-time action' },
      { do: 'Flight updates', dont: 'Receive flight updates', why: 'Verb-led phrasing implies an action, not a state' },
      { do: 'Dark mode', dont: 'Enable dark mode', why: 'Label the setting, not the act of enabling it' },
    ],
    selfCheck: [
      'Does the change happen immediately without extra steps?',
      'Would the label make sense with "on / off" placed next to it?',
    ],
  },
  args: {
    platform: 'ios',
    state: 'default',
    label: 'Price alerts',
    dir: 'ltr',
  },
  argTypes: {
    platform: {
      control: 'select',
      options: ['ios', 'android'],
      description: 'iOS 64×28 pill knob; Android Material 3 52×32 switch. Resolved via prop > DesignSystemProvider > "ios".',
    },
    state: {
      control: 'select',
      options: ['default', 'disabled', 'skeleton'],
      description: 'Visual state',
    },
    checked: {
      control: 'boolean',
      description: 'On/off state (controlled)',
    },
    label: {
      control: 'text',
      description: 'Setting name (name the state, not the action)',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
    onChange: {
      control: 'none',
      description: 'Change handler; receives the native input change event',
    },
  },
  examples: [
    { name: 'iOS', args: { platform: 'ios', state: 'default', label: 'Price alerts' } },
    { name: 'Android', args: { platform: 'android', state: 'default', label: 'Price alerts' } },
    { name: 'Disabled', args: { state: 'disabled', label: 'Notifications (unavailable)' } },
    { name: 'Skeleton', args: { state: 'skeleton' } },
  ],
  arArgs: {
    label: 'تنبيهات الأسعار',
    dir: 'rtl',
  },
}
