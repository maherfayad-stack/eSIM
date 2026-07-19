import { CircularProgressIndicator } from 'design-system'

export default {
  title: 'CircularProgressIndicator',
  category: 'Feedback',
  component: CircularProgressIndicator,
  description:
    'Indeterminate circular loading spinner, platform-aware (iOS / Android). iOS renders the native UIActivityIndicatorView (8 fading teeth, --icon-base-subtle gray); Android renders a Material 3 aqua arc rotating at constant speed. Pass label to show a status row (spinner + text), e.g. "Loading results…".',
  guidelines: {
    when: [
      'A single operation is in flight and the user must wait (fetching results, submitting, refreshing)',
      'You want a lightweight "this region is busy" signal',
    ],
    whenNot: [
      'The wait replaces page or list content on first load → use a skeleton state so the layout does not jump',
      'You are showing position in a multi-step flow → use ProgressStepper',
      'The action is instant — a spinner that flashes for <300ms reads as a glitch; show nothing',
    ],
    dos: [
      'Center the spinner in the area whose content is loading',
      'Use size="large" for full-screen / pull-to-refresh waits; default size for inline loading',
      'Use label for a status row when the wait benefits from a short explanation ("Loading results…")',
    ],
    donts: [
      'Stack a spinner over stale content without dimming or replacing it — it is ambiguous',
      'Pair a separate "Loading…" caption and a spinner for the same wait — use the built-in label instead',
      'Run several spinners on one screen — consolidate to a single loading state',
    ],
  },
  args: {
    platform: 'ios',
    size: 'default',
    label: '',
    dir: 'ltr',
  },
  argTypes: {
    platform: {
      control: 'select',
      options: ['ios', 'android'],
      description: 'iOS tooth spinner (gray); Android aqua arc. Resolved via prop > DesignSystemProvider > "ios".',
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'iOS 24px / 40px · Android 40px / 48px',
    },
    label: {
      control: 'text',
      description: 'Optional status text. Sits inline beside the spinner on iOS default; stacks below it on iOS large and all Android.',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible name; defaults to label, then "Loading"',
    },
  },
  examples: [
    { name: 'iOS · 24px', args: { platform: 'ios', size: 'default' } },
    { name: 'iOS · 40px', args: { platform: 'ios', size: 'large' } },
    { name: 'iOS · with label', args: { platform: 'ios', size: 'default', label: 'Loading results…' } },
    { name: 'Android · default', args: { platform: 'android', size: 'default' } },
    { name: 'Android · large', args: { platform: 'android', size: 'large' } },
    { name: 'Android · with label', args: { platform: 'android', size: 'default', label: 'Processing payment…' } },
  ],
  arArgs: {
    label: 'جارٍ تحميل النتائج…',
    dir: 'rtl',
  },
}
