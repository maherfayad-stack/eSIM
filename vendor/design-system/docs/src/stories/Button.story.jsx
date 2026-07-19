import { Button } from 'design-system'

export default {
  title: 'Button',
  category: 'Actions',
  component: Button,
  description: 'Primary action trigger. Supports multiple visual variants and three sizes. Use primary for the main CTA, secondary for supporting actions, and destructive for irreversible operations.',
  guidelines: {
    decisions: [
      {
        title: 'Variant decision',
        columns: ['Role', 'Use variant'],
        rows: [
          { condition: 'Drives the most important action; guides user toward next step', use: 'primary' },
          { condition: 'Primary action on a dark or image surface', use: 'primary-inverted' },
          { condition: 'Supports primary with a less important or optional path', use: 'secondary' },
          { condition: 'Muted secondary action on a light surface (e.g. inside a card)', use: 'secondary-inverted' },
          { condition: 'Delete, cancel, or permanently alter data — caution must be signaled', use: 'destructive' },
          { condition: 'Confirms a payment action', use: 'payment' },
          { condition: 'Apple Pay payment confirmation', use: 'apple-pay' },
          { condition: 'Loading placeholder — no children needed', use: 'skeleton' },
        ],
      },
    ],
    contentRules: [
      {
        title: 'Primary button label',
        items: [
          'Start with a verb that reflects the user\'s goal',
          'Everyday language — no jargon or system labels',
          '1–3 words; structure: [Verb] + [Object or goal]',
        ],
      },
      {
        title: 'Secondary button label',
        items: [
          'Strong, direct verbs; reflect the user\'s optional goal, not a system label',
          'When shown alongside a primary button: keep labels parallel in tone, tense, and length',
          'If the button is next to the object it affects, verb alone is fine ("Edit")',
        ],
      },
      {
        title: 'Destructive button label',
        items: [
          'Start with a clear, specific verb ("Cancel", "Delete", "Remove")',
          'Explicitly name the object being affected — never rely on context alone',
          'Avoid euphemisms; be direct',
        ],
      },
    ],
    examples: [
      { do: 'Continue to payment', dont: 'Proceed', why: 'Verb + goal is clearer than a system label' },
      { do: 'Check availability', dont: 'Next', why: '"Next" gives no context about what happens' },
      { do: 'Add to trip', dont: 'Add', why: 'Object clarifies what is being added' },
      { do: 'Delete account', dont: 'Delete', why: 'Names exactly what will be removed' },
      { do: 'Cancel check-in', dont: 'Undo', why: 'Avoids vague or technical terms' },
      { do: 'Cancel non-refundable booking', dont: 'Cancel reservation', why: '"Non-refundable" adds critical consequence context' },
    ],
    donts: [
      'Use multiple primary buttons on the same screen',
      'Use a destructive button for actions that can be easily reversed',
      'Use the payment or apple-pay variant outside of payment confirmation flows',
    ],
    selfCheck: [
      'What is the main thing the user wants to do here?',
      'If this button stood alone, would it still make sense?',
      'Can I cut any word without losing meaning?',
    ],
  },
  args: {
    label: 'Call to action',
    variant: 'primary',
    size: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'primary-inverted', 'secondary', 'secondary-inverted', 'destructive', 'payment', 'apple-pay', 'skeleton'],
      description: 'Visual style',
    },
    size: {
      control: 'select',
      options: ['default', 'medium', 'small'],
      description: 'Height — 48px / 40px / 32px',
    },
    label: {
      control: 'text',
      description: 'Button label text (not used for apple-pay or skeleton)',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction',
    },
  },
  examples: [
    { name: 'Primary', args: { variant: 'primary', label: 'Book now' } },
    { name: 'Secondary', args: { variant: 'secondary', label: 'Learn more' } },
    { name: 'Destructive', args: { variant: 'destructive', label: 'Cancel trip' } },
    { name: 'Payment', args: { variant: 'payment', label: 'Confirm & Pay' } },
    { name: 'Apple Pay', args: { variant: 'apple-pay' } },
    { name: 'Small', args: { variant: 'primary', size: 'small', label: 'Apply' } },
    { name: 'Disabled', args: { variant: 'primary', label: 'Unavailable', disabled: true } },
    { name: 'Skeleton', args: { variant: 'skeleton' } },
  ],
  arArgs: {
    label: 'احجز الآن',
    dir: 'rtl',
  },
}
