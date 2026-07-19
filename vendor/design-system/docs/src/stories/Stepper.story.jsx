import { useState } from 'react'
import { Stepper } from 'design-system'

function StepperDemo({ min, max, dir }) {
  const [value, setValue] = useState(1)
  return <Stepper value={value} min={min} max={max} onChange={setValue} dir={dir} />
}

export default {
  title: 'Stepper',
  category: 'Inputs',
  component: Stepper,
  render: StepperDemo,
  description: 'Numeric increment/decrement control — minus button, value display, plus button. Minus is disabled at min; plus is disabled at max.',
  guidelines: {
    when: [
      'The user needs to pick a count from a small range (travelers, bags, rooms, nights)',
      'The range is bounded and the user benefits from seeing the current value at all times',
      'Increments are fixed (always +1 / -1)',
    ],
    whenNot: [
      'The range is large or continuous → use Slider',
      'The options have labels or prices attached → use Radio buttons instead',
      'The user needs to type a specific number → use a text field',
    ],
    dos: [
      'Set a minimum (typically 0 or 1) and a maximum when an upper bound applies',
      'Always show a label for what is being counted next to the stepper ("Adults", "Checked bags")',
      'Default to 0 for optional quantities, 1 for required ones (e.g. at least 1 adult)',
    ],
    donts: [
      'Use without visible context — the number alone is meaningless',
      'Allow the value to go below the meaningful minimum (e.g. -1 travelers)',
    ],
  },
  args: {
    min: 0,
    max: 9,
    dir: 'ltr',
  },
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value (controlled)',
    },
    min: {
      control: 'number',
      description: 'Minimum value (minus button disabled at this value)',
    },
    max: {
      control: 'number',
      description: 'Maximum value (plus button disabled at this value); omit for no upper bound',
    },
    onChange: {
      control: 'none',
      description: 'Called with the new value on increment/decrement',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction (swaps button order)',
    },
  },
  examples: [
    { name: 'Default', args: { min: 0, max: 9 } },
    { name: 'RTL', args: { min: 0, max: 9, dir: 'rtl' } },
  ],
}
