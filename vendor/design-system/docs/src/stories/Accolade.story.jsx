import { Accolade } from 'design-system'

export default {
  title: 'Accolade',
  category: 'Content',
  component: Accolade,
  description: 'Non-interactive label for standout qualities based on data or awards. Purple→blue gradient text. Use for verified, evidence-based claims — not marketing copy.',
  guidelines: {
    when: [
      'The label is based on credible metrics (review scores, category rankings, guest feedback)',
      'Highlighting a genuine, competitive strength ("Top rated for cleanliness")',
      'Showcasing an award or ranking from a verified source',
    ],
    whenNot: [
      'The claim is subjective, unverified, or purely marketing-driven',
      'It duplicates an existing factual property ("Breakfast included" is a Tag, not an Accolade)',
      'It depends on dynamic conditions or communicates urgency → use Callout',
    ],
    contentRules: [
      {
        title: 'Label writing',
        items: [
          '1–6 words; short enough to scan at a glance',
          'Factual, evidence-based, and positive — no hype',
          'No punctuation at the end',
          'Parallel phrasing when multiple accolades appear together',
        ],
        note: 'Examples: Top rated for cleanliness · Guests loved the location · Award-winning spa · Family favourite',
      },
    ],
    selfCheck: [
      'Is this verifiable from a credible source?',
      'If a user asked "Says who?", could you point to the source?',
      'Does it add decision-making value, or is it marketing fluff?',
    ],
  },
  args: {
    size: 'regular',
    background: false,
    label: 'Top rated for cleanliness',
    icon: true,
    dir: 'ltr',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['regular', 'small'],
      description: 'regular = body-semibold; small = caption',
    },
    background: {
      control: 'boolean',
      description: 'Adds a rounded pill background (--background-base-default)',
    },
    label: {
      control: 'text',
      description: 'Label text (keep it factual, data-based)',
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
    { name: 'Regular', args: { size: 'regular', background: false, label: 'Top rated for cleanliness' } },
    { name: 'With background', args: { size: 'regular', background: true, label: 'Top rated for cleanliness' } },
    { name: 'Small', args: { size: 'small', background: false, label: 'Award winning' } },
    { name: 'Small + bg', args: { size: 'small', background: true, label: 'Award winning' } },
  ],
  arArgs: {
    label: 'الأفضل تقييماً للنظافة',
    dir: 'rtl',
  },
}
