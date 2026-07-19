import { useState } from 'react'
import { ListItem, PlaceholderIcon } from 'design-system'

function ListItemDemo({ type, disabled, error, skeleton, label, keyValue, tag, dir }) {
  const [selected, setSelected] = useState(false)
  return (
    <div style={{ width: '100%', maxWidth: 390 }}>
      <ListItem
        type={type}
        selected={selected}
        disabled={disabled}
        error={error}
        skeleton={skeleton}
        label={label}
        keyValue={keyValue}
        tag={tag || null}
        icon={<PlaceholderIcon />}
        dir={dir}
        onChange={() => setSelected(s => !s)}
        onClick={() => setSelected(s => !s)}
      />
    </div>
  )
}

export default {
  title: 'ListItem',
  category: 'Layout',
  component: ListItem,
  render: ListItemDemo,
  description: 'Selection list row — radio, checkbox, or icon type. Used in single/multi-select lists, option pickers, and filter sheets.',
  guidelines: {
    decisions: [
      {
        title: 'Variant decision',
        columns: ['Use for', 'Use type'],
        rows: [
          { condition: 'Policies, key information, non-selectable categorized content', use: 'icon' },
          { condition: 'Form selections where exactly one option can be chosen', use: 'radio' },
          { condition: 'Form selections where multiple options can be chosen', use: 'checkbox' },
        ],
      },
    ],
    contentRules: [
      {
        title: 'Behavior rules',
        note: 'For a checklist style (included features/benefits), use the icon variant with a checkmark icon.',
        items: [
          'All items within a section must use the same type — no mixing',
          'For long lists, pair with an Expander to hide items beyond a threshold',
          'Use skeleton placeholders while list data is loading',
        ],
      },
    ],
    dos: [
      'Use radio or checkbox type for interactive selections that are part of a form',
      'Add a trailing key-value when it adds critical context (price difference, duration)',
      'Use tag for a static categorical flag ("Popular", "Cheapest") and keyValue for a data value',
    ],
    donts: [
      'Mix radio and checkbox items in the same list',
      'Use for long-form paragraphs — these are single-line rows',
      'Mix Cell and ListItem in the same section',
    ],
  },
  previewPadding: 'none',
  args: {
    type: 'icon',
    label: 'Economy',
    keyValue: 'SAR 450',
    tag: 'Cheapest',
    disabled: false,
    error: false,
    skeleton: false,
    dir: 'ltr',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['radio', 'checkbox', 'icon'],
      description: 'Controls what marker/indicator appears',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and mutes colors',
    },
    error: {
      control: 'boolean',
      description: 'Error state — highlights label in warning color',
    },
    skeleton: {
      control: 'boolean',
      description: 'Renders shimmer loading placeholder',
    },
    label: {
      control: 'text',
      description: 'Row label',
    },
    keyValue: {
      control: 'text',
      description: 'Optional right-side label (price, code, etc.)',
    },
    tag: {
      control: 'text',
      description: 'Optional trailing Tag, shown before the key-value (works on any type). Text renders a neutral tinted Tag; leave empty for none',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Radio', args: { type: 'radio', label: 'Economy', tag: '' } },
    { name: 'Checkbox', args: { type: 'checkbox', label: 'Include hotels', tag: '' } },
    { name: 'Icon', args: { type: 'icon', label: 'Economy', keyValue: 'SAR 450', tag: '' } },
    { name: 'Icon + tag', args: { type: 'icon', label: 'Economy', tag: 'Cheapest', keyValue: 'SAR 450' } },
    { name: 'Disabled', args: { type: 'radio', disabled: true, label: 'Business (sold out)', tag: '' } },
    { name: 'Skeleton', args: { type: 'icon', skeleton: true } },
  ],
  arArgs: {
    label: 'الدرجة الاقتصادية',
    keyValue: 'SAR 450',
    tag: 'الأرخص',
    dir: 'rtl',
  },
}
