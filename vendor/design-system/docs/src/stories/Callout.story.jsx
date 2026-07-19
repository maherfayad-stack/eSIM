import { Callout } from 'design-system'

export default {
  title: 'Callout',
  category: 'Content',
  component: Callout,
  description: 'Non-interactive label for time-sensitive or dynamic information. Gradient sparkle icon + gradient text on a tinted background. Use for "Cheapest for your dates", "Filling fast", etc.',
  guidelines: {
    when: [
      'The information is temporary and may change quickly (price changes, limited availability, time-bound deals)',
      'The message is directly tied to the user\'s current context (specific flight or property)',
    ],
    whenNot: [
      'The information is static or permanent → use Tag',
      'The label is data-backed and comparative → use Accolade',
      'Showing a count or notification → use Badge',
      'The message requires user action → use a Button',
    ],
    contentRules: [
      {
        title: 'Label writing',
        items: [
          'Factual and time-bound — no speculation or vague claims',
          'Under 6 words; noun-based phrases preferred',
          'Specific over ambiguous: "3 hours left" not "ending soon", "Price dropped 25%" not "great deal"',
        ],
        note: 'Examples: Cheapest for your dates · 4 seats remaining · Price likely to increase · Most booked this week',
      },
    ],
    selfCheck: [
      'Is this fact true right now and likely to change soon?',
      'Does it help the user decide, or is it just creating pressure?',
    ],
  },
  args: {
    size: 'regular',
    label: 'Cheapest for your dates',
    icon: true,
    dir: 'ltr',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['regular', 'small'],
      description: 'regular = body-semibold; small = caption',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    icon: {
      control: 'boolean',
      description: 'Show the placeholder icon from the icon library (default: true)',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Regular', args: { size: 'regular', label: 'Cheapest for your dates' } },
    { name: 'Small', args: { size: 'small', label: 'Filling fast' } },
    { name: 'Recommended', args: { size: 'regular', label: 'Recommended for you' } },
  ],
  arArgs: {
    label: 'الأرخص لتواريخك',
    dir: 'rtl',
  },
}
