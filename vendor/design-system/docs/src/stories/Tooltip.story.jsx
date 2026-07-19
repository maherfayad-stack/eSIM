import { Tooltip } from 'design-system'

export default {
  title: 'Tooltip',
  category: 'Feedback',
  component: Tooltip,
  description: 'Text bubble anchored to a trigger element. Always visible — control visibility externally via className or wrapper state. Use for brief supplementary information only.',
  guidelines: {
    when: [
      'Providing a brief clarification for an icon, abbreviation, or non-obvious UI element',
      'The explanation is short enough to fit on one line (under ~60 characters)',
    ],
    whenNot: [
      'The content is essential to completing a task — put it in the UI directly',
      'More than one line of explanation is needed — use a BottomSheet or inline helper text',
      'On touch-only devices where hover isn\'t available — use Snackbar or inline text instead',
    ],
    contentRules: [
      {
        title: 'Tooltip text',
        items: [
          '1 short sentence or phrase; no punctuation unless grammatically required',
          'Plain language — no jargon',
          'Should answer "What is this?" or "Why is this disabled?"',
        ],
      },
    ],
    dos: [
      'Use position="top" (default) unless the tooltip would be clipped at the top of the screen',
      'Use arrowAlign="start" or "end" when the trigger is near an edge and the bubble would overflow',
    ],
    donts: [
      'Use for primary content — tooltips are supplemental',
      'Wrap interactive content (buttons, links) inside the tooltip bubble',
    ],
  },
  args: {
    content: 'Includes all taxes and fees',
    position: 'top',
    arrowAlign: 'center',
    dir: 'ltr',
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Tooltip text',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Whether bubble appears above or below the trigger',
    },
    arrowAlign: {
      control: 'select',
      options: ['center', 'start', 'end'],
      description: 'Arrow position along the bubble',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  render: ({ content, position, arrowAlign, dir }) => (
    <div style={{ padding: '60px 40px' }}>
      <Tooltip content={content} position={position} arrowAlign={arrowAlign} dir={dir}>
        <button style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border-base-default)', background: 'var(--background-base-default)', color: 'var(--text-base-default)', cursor: 'pointer', fontSize: 13 }}>
          SAR 1,215
        </button>
      </Tooltip>
    </div>
  ),
  examples: [
    { name: 'Top center', args: { position: 'top', arrowAlign: 'center' } },
    { name: 'Top start', args: { position: 'top', arrowAlign: 'start' } },
    { name: 'Bottom center', args: { position: 'bottom', arrowAlign: 'center' } },
    { name: 'Bottom end', args: { position: 'bottom', arrowAlign: 'end' } },
  ],
  arArgs: {
    content: 'يشمل جميع الضرائب والرسوم',
    dir: 'rtl',
  },
}
