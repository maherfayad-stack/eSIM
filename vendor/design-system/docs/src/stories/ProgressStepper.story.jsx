import { ProgressStepper } from 'design-system'

export default {
  title: 'ProgressStepper',
  category: 'Inputs',
  component: ProgressStepper,
  description: 'Linear progress indicator made of pill-shaped step segments. Completed segments (index < currentStep) fill with --background-primary-default; remaining segments use --background-neutral-subtle.',
  guidelines: {
    when: [
      'A multi-step flow has 3–7 clearly distinct steps (booking funnel, onboarding, form wizard)',
      'The user benefits from knowing how far along they are',
    ],
    whenNot: [
      'The flow has fewer than 3 steps — it adds visual weight without meaningful orientation',
      'Steps are non-linear or can be revisited in any order — use a different navigation pattern',
      'The step count is unknown or dynamic',
    ],
    dos: [
      'Keep steps between 3 and 7 — beyond 7 the segments become too narrow on mobile',
      'Place below the Navbar, visible at all times during the flow (not hidden in the toolbar)',
      'Increment currentStep only when the user has successfully completed the step, not when they navigate forward',
    ],
    donts: [
      'Use as a loading indicator — use a spinner or skeleton instead',
      'Change steps count mid-flow',
    ],
  },
  args: {
    steps: 5,
    currentStep: 1,
  },
  argTypes: {
    steps: {
      control: 'number',
      description: 'Total number of steps',
      min: 2,
      max: 10,
    },
    currentStep: {
      control: 'number',
      description: 'How many steps are completed (filled)',
      min: 0,
      max: 10,
    },
  },
  examples: [
    { name: 'Step 1/5', args: { steps: 5, currentStep: 1 } },
    { name: 'Step 3/5', args: { steps: 5, currentStep: 3 } },
    { name: 'Complete', args: { steps: 5, currentStep: 5 } },
    { name: '3 steps', args: { steps: 3, currentStep: 1 } },
  ],
}
