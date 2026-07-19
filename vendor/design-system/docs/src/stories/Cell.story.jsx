import { useState } from 'react'
import { Cell } from 'design-system'

const PlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" aria-hidden="true">
    <path d="M19.5 3.25C20.1904 3.25 20.75 3.80964 20.75 4.5V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H19.5ZM4.25 19.5C4.25 19.6381 4.36193 19.75 4.5 19.75H19.043L4.25 4.95703V19.5ZM19.75 19.043V4.5C19.75 4.36193 19.6381 4.25 19.5 4.25H4.95703L19.75 19.043Z" fill="currentColor" />
  </svg>
)

function CellDemo({ visual, iconSrc, sideIcon, title, label, subtext, value, tag, tagLabel, tagVariant, tagStyle, trailing, stepperMin, stepperMax, selected, showSeparator, dir }) {
  const [toggleChecked, setToggleChecked] = useState(false)
  const [stepperValue, setStepperValue] = useState(1)

  const resolvedTag = tag
    ? { label: tagLabel || 'Included', variant: tagVariant, style: tagStyle }
    : undefined

  return (
    <div style={{ width: '100%', maxWidth: 390 }}>
      <Cell
        visual={visual}
        icon={iconSrc ? undefined : <PlaceholderIcon />}
        iconSrc={iconSrc || undefined}
        title={title}
        label={label}
        subtext={subtext}
        value={value}
        sideIcon={sideIcon ? <PlaceholderIcon /> : undefined}
        tag={resolvedTag}
        trailing={trailing}
        selected={selected}
        toggleChecked={toggleChecked}
        onToggleChange={e => setToggleChecked(e.target.checked)}
        stepperValue={stepperValue}
        stepperMin={stepperMin}
        stepperMax={stepperMax}
        onStepperChange={setStepperValue}
        showSeparator={showSeparator}
        dir={dir}
      />
    </div>
  )
}

export default {
  title: 'Cell',
  category: 'Layout',
  component: Cell,
  render: CellDemo,
  description: 'List row with leading visual, stacked content (title / label / subtext), and a trailing area that can show a value, icon, tag, chevron, toggle, or stepper.',
  guidelines: {
    contentRules: [
      {
        title: 'Content stack',
        items: [
          'title: optional caption above the label — use for category or field name',
          'label: the primary text — always present',
          'subtext: optional caption below — use for secondary detail or status',
          'At minimum, always provide a label',
        ],
      },
      {
        title: 'Trailing area',
        items: [
          'value: right-aligned caption text (e.g. the selected value of a setting)',
          'sideIcon: a 24px icon in the trailing area (e.g. a brand or status icon)',
          'tag: a small pill label for status, count, or category',
          'trailing chevron — use only for navigation to a sub-screen',
          'trailing toggle — use for settings that take effect immediately',
          'trailing stepper — use to adjust a numeric count in place (travelers, rooms, quantity)',
          'chevron / toggle / stepper are mutually exclusive; value, icon, and tag can combine with any of them',
        ],
      },
      {
        title: 'Visual sizes',
        items: [
          'icon (24px): standard for UI icons',
          '3d-icon (40px, rounded): for illustrated or product icons',
          'image (64px, rounded): for photos or rich media',
          'Choose one size per list and stick to it — never mix visual sizes in the same list',
        ],
      },
    ],
    donts: [
      'Mix visual sizes within the same list',
      'Use checkboxes or radio buttons inside a Cell — use ListItem instead',
      'Group Cell and ListItem in the same section',
      'Remove the separator on all items — omit it only on the last item in a group',
    ],
  },
  previewPadding: 'none',
  args: {
    visual: 'icon',
    iconSrc: '',
    sideIcon: false,
    title: 'Title',
    label: 'Label',
    subtext: 'Subtext / caption',
    value: 'Default',
    tag: false,
    tagLabel: 'Included',
    tagVariant: 'default',
    tagStyle: 'tinted',
    trailing: 'chevron',
    stepperMin: 0,
    stepperMax: 9,
    selected: false,
    showSeparator: true,
    dir: 'ltr',
  },
  argTypes: {
    visual: {
      control: 'select',
      options: ['icon', '3d-icon', 'image', ''],
      description: 'Leading visual size and shape',
    },
    iconSrc: {
      control: 'text',
      description: 'URL for the leading icon image — overrides the icon node when set',
    },
    sideIcon: {
      control: 'boolean',
      description: 'Show a 24px icon in the trailing area',
    },
    title: {
      control: 'text',
      description: 'Optional caption above the label',
    },
    label: {
      control: 'text',
      description: 'Primary label text',
    },
    subtext: {
      control: 'text',
      description: 'Optional caption below the label',
    },
    value: {
      control: 'text',
      description: 'Right-aligned caption in the trailing area (e.g. selected value)',
    },
    tag: {
      control: 'boolean',
      description: 'Show a Tag pill in the trailing area',
    },
    tagLabel: {
      control: 'text',
      description: 'Tag label text — only used when tag is enabled',
    },
    tagVariant: {
      control: 'select',
      options: ['default', 'warning', 'caution', 'success', 'neutral'],
      description: 'Tag color variant — only used when tag is enabled',
    },
    tagStyle: {
      control: 'select',
      options: ['tinted', 'filled'],
      description: 'Tag fill style — only used when tag is enabled',
    },
    trailing: {
      control: 'select',
      options: ['chevron', 'toggle', 'stepper', 'none'],
      description: 'Trailing control — chevron for navigation, toggle for settings, stepper for in-place counts, none for display-only rows',
    },
    stepperMin: {
      control: 'number',
      description: 'Stepper lower bound — only used when trailing is "stepper"',
    },
    stepperMax: {
      control: 'number',
      description: 'Stepper upper bound — only used when trailing is "stepper"',
    },
    selected: {
      control: 'boolean',
      description: 'Selected state — background-base-selected with a border-base-selected outline',
    },
    showSeparator: {
      control: 'boolean',
      description: 'Show bottom separator — omit on the last row in a group',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Label + value + chevron', args: { title: '', label: 'Seat preference', subtext: '', value: 'Window', tag: false, trailing: 'chevron' } },
    { name: 'Three-line content', args: { title: 'Category', label: 'Seat preference', subtext: 'Economy · Row 14', value: 'Window', tag: false, trailing: 'chevron' } },
    { name: 'With tag (string)', args: { title: '', label: 'Cabin baggage', subtext: '', value: '', tag: 'Included', trailing: 'chevron' } },
    { name: 'With tag (success filled)', args: { title: '', label: 'Free cancellation', subtext: '', value: '', tag: { label: 'Included', variant: 'success', style: 'filled' }, trailing: 'chevron' } },
    { name: 'With tag (warning tinted)', args: { title: '', label: 'Refund policy', subtext: '', value: '', tag: { label: 'Non-refundable', variant: 'warning', style: 'tinted' }, trailing: 'chevron' } },
    { name: 'Toggle', args: { title: '', label: 'Price alerts', subtext: '', value: '', tag: false, trailing: 'toggle' } },
    { name: 'Stepper', args: { visual: 'icon', title: '', label: 'Adults', subtext: 'Age 12+', value: '', tag: false, trailing: 'stepper' } },
    { name: 'No visual', args: { visual: '', title: '', label: 'Terms & conditions', subtext: '', value: '', tag: false, trailing: 'chevron' } },
    { name: 'Display only', args: { title: 'Departure', label: 'Riyadh (RUH)', subtext: 'Terminal 1', value: '', tag: false, trailing: 'none' } },
    { name: 'Selected', args: { title: '', label: 'Economy', subtext: '', value: 'SAR 499', tag: false, trailing: 'chevron', selected: true, showSeparator: false } },
  ],
  arArgs: {
    title: 'العنوان',
    label: 'تفضيل المقعد',
    subtext: 'الاقتصادية · الصف 14',
    value: 'نافذة',
    dir: 'rtl',
  },
}
