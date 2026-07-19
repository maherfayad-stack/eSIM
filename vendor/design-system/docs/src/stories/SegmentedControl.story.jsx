import { useState } from 'react'
import { SegmentedControl } from 'design-system'

function SegmentedControlDemo({ items, value, platform, dir }) {
  const labels = (Array.isArray(items) ? items : String(items).split(','))
    .map(s => s.trim())
    .filter(Boolean)

  const [active, setActive] = useState(value ?? 0)
  // Reflect the `value` control into the interactive state without an effect
  // (React's "adjust state while rendering" pattern), so the control and
  // tapping a segment both drive the selection.
  const [prevValue, setPrevValue] = useState(value)
  if (value !== prevValue) {
    setPrevValue(value)
    setActive(value ?? 0)
  }
  // Keep the selection in range as segments are added/removed
  const safe = Math.min(Math.max(active, 0), Math.max(labels.length - 1, 0))

  return (
    <div style={{ width: '100%', maxWidth: 340, padding: '0 16px' }}>
      <SegmentedControl
        items={labels}
        value={safe}
        onChange={setActive}
        platform={platform}
        dir={dir}
      />
    </div>
  )
}

export default {
  title: 'SegmentedControl',
  category: 'Inputs',
  component: SegmentedControl,
  render: SegmentedControlDemo,
  description: 'Horizontal tab-switcher with a floating pill indicator. 36px tall, supports 2–4 segments.',
  guidelines: {
    when: [
      'The user needs to switch between 2–4 parallel views on the same screen (e.g. Departure / Return, One way / Round trip / Multi-city)',
      'The views share the same underlying data or context',
    ],
    whenNot: [
      'There are more than 4 segments — use TabBar or a BottomSheet picker instead',
      'The segments represent top-level navigation destinations — use TabBar',
      'Only one option exists — show the content directly without a switcher',
    ],
    contentRules: [
      {
        title: 'Segment labels',
        items: [
          '1–3 words per segment; noun-based labels',
          'All labels in a group must follow the same grammatical pattern',
          'Avoid verbs — segments describe the view, not an action to take',
        ],
      },
    ],
    examples: [
      { do: 'Departure / Return', dont: 'Go / Come back', why: 'Nouns describe the view; verbs describe actions' },
      { do: 'Flights / Hotels / Cars', dont: 'Fly / Stay / Drive', why: 'Noun labels are consistent with the product vertical names' },
      { do: 'One way / Round trip', dont: 'Select one way / Select round trip', why: 'Labels should not include the action' },
    ],
    dos: [
      'Place directly below the Navbar or at the top of the content area, not mid-page',
    ],
    donts: [
      'Use more than 4 segments; labels truncate and the interaction becomes unreliable',
      'Use as a filter when checkboxes or a filter sheet would be more appropriate',
    ],
  },
  args: {
    items: ['Flights', 'Hotels', 'Cars'],
    value: 0,
    platform: 'ios',
    dir: 'ltr',
  },
  arArgs: {
    items: ['رحلات', 'فنادق', 'سيارات'],
  },
  argTypes: {
    items: {
      control: 'list',
      description: 'Segment labels (2–4 segments); comma-separated',
    },
    value: {
      control: 'number',
      min: 0,
      description: 'Selected segment index (0-based, controlled)',
    },
    platform: {
      control: 'select',
      options: ['ios', 'android'],
      description: 'iOS floating pill on a tinted track; Android joined outlined buttons. Resolved via prop > DesignSystemProvider > "ios".',
    },
    onChange: {
      control: 'none',
      description: 'Called with the selected index when a segment is tapped',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'iOS', args: { platform: 'ios', items: ['Flights', 'Hotels', 'Cars'], value: 0 } },
    { name: 'Android', args: { platform: 'android', items: ['Flights', 'Hotels', 'Cars'], value: 0 } },
    { name: 'Two segments', args: { items: ['One way', 'Round trip'], value: 0 } },
    { name: 'Four segments', args: { items: ['Flights', 'Hotels', 'Cars', 'Trips'], value: 0 } },
    { name: 'RTL', args: { dir: 'rtl' } },
  ],
}
