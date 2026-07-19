import { LinearProgressIndicator } from 'design-system'

export default {
  title: 'LinearProgressIndicator',
  category: 'Feedback',
  component: LinearProgressIndicator,
  description:
    'Determinate horizontal progress bar driven by a 0–100 value, platform-aware (iOS / Android). iOS renders a flat 6px aqua fill on a neutral track; Android renders a Material 3 active bar + remaining track with a trailing aqua stop dot. Use only when the completion rate can actually be measured — for open-ended waits use CircularProgressIndicator.',
  guidelines: {
    when: [
      'A process exposes a real, monotonically advancing completion rate (upload, download, buffering, multi-page form)',
      'The user benefits from seeing how much is left, not just that something is busy',
    ],
    whenNot: [
      'You cannot measure progress → use CircularProgressIndicator instead of faking a percentage',
      'Progress is through named, discrete stages the user navigates → use ProgressStepper',
      'The operation is instant — a bar that flashes to 100% reads as a glitch; show nothing',
    ],
    dos: [
      'Drive value from the real progress signal and let it advance monotonically (0 → 100)',
      'Keep the same configuration for every occurrence of the same process',
      'Let the surrounding layout set margins — the bar fills its container width',
    ],
    donts: [
      'Animate value backward or jump it around to "feel busy" — it breaks the contract that the bar reflects real progress',
      'Loop it as an indeterminate spinner — use CircularProgressIndicator',
    ],
  },
  args: {
    value: 40,
    platform: 'ios',
    dir: 'ltr',
  },
  argTypes: {
    value: {
      control: 'number',
      description: 'Completion percentage, 0–100 (clamped)',
    },
    platform: {
      control: 'select',
      options: ['ios', 'android'],
      description: 'iOS flat fill; Android active bar + stop dot. Resolved via prop > DesignSystemProvider > "ios".',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction — flips the growth and stop-dot side',
    },
  },
  examples: [
    { name: 'iOS · 0%', args: { platform: 'ios', value: 0 } },
    { name: 'iOS · 40%', args: { platform: 'ios', value: 40 } },
    { name: 'iOS · 80%', args: { platform: 'ios', value: 80 } },
    { name: 'iOS · 100%', args: { platform: 'ios', value: 100 } },
    { name: 'Android · 0%', args: { platform: 'android', value: 0 } },
    { name: 'Android · 40%', args: { platform: 'android', value: 40 } },
    { name: 'Android · 80%', args: { platform: 'android', value: 80 } },
    { name: 'Android · 100%', args: { platform: 'android', value: 100 } },
    { name: 'Android · RTL · 40%', args: { platform: 'android', value: 40, dir: 'rtl' } },
  ],
  arArgs: {
    dir: 'rtl',
  },
}
