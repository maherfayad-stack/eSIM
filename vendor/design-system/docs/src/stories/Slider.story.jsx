import { useState } from 'react'
import { Slider } from 'design-system'

function SliderDemo({ min, max, ticks, dir }) {
  const [value, setValue] = useState(40)
  return (
    <div style={{ width: '100%', maxWidth: 320, padding: '0 16px' }}>
      <Slider value={value} min={min} max={max} ticks={ticks} dir={dir} onChange={setValue} />
      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-base-subtext)', textAlign: 'center' }}>{value}</div>
    </div>
  )
}

export default {
  title: 'Slider',
  category: 'Inputs',
  component: Slider,
  render: SliderDemo,
  description: 'Range input with optional tick marks and a filled track. Track fill is driven by --slider-pct CSS custom property. Ticks auto-compute step size.',
  guidelines: {
    when: [
      'The user needs to filter or select within a continuous range (max price, max distance, minimum rating)',
      'Exact values matter less than the relative position (budget range, distance filter)',
    ],
    whenNot: [
      'The options are discrete and labeled → use Radio or SegmentedControl',
      'The range is very narrow (3–5 values) → use Radio',
      'The user needs to set two endpoints → use two Sliders (min/max range pattern)',
    ],
    dos: [
      'Always show the current value and range boundaries in the adjacent UI',
      'Use snap points when the range has a small set of meaningful values (e.g. star ratings 1–5)',
      'Label the axis ends clearly ("SAR 0" / "SAR 5,000+")',
    ],
    donts: [
      'Use without visible min/max labels — the user can\'t interpret the value without scale context',
      'Set a max significantly higher than what users would realistically choose — compress the useful range',
    ],
  },
  args: {
    min: 0,
    max: 100,
    ticks: 0,
    dir: 'ltr',
  },
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value (controlled)',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step size; auto-computed from ticks when omitted',
    },
    ticks: {
      control: 'number',
      description: 'Number of tick marks (0 = none); also auto-computes step',
    },
    onChange: {
      control: 'none',
      description: 'Called with the new numeric value on drag',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Continuous', args: { min: 0, max: 100, ticks: 0 } },
    { name: 'With ticks', args: { min: 0, max: 1000, ticks: 5 } },
    { name: 'Price range', args: { min: 0, max: 5000, ticks: 6 } },
  ],
}
