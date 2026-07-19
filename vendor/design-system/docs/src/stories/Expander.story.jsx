import { useState } from 'react'
import { Expander } from 'design-system'

function ExpanderDemo({ dir, collapsedLabel, expandedLabel }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', maxWidth: 320 }}>
      <div style={{ fontSize: 14, color: 'var(--text-base-default)', lineHeight: '22px' }}>
        Economy · Direct · 6h 15m
        {expanded && (
          <>
            <br />Business · 1 stop · 9h 45m
            <br />First class · Direct · 6h 15m
          </>
        )}
      </div>
      <Expander
        expanded={expanded}
        onChange={setExpanded}
        dir={dir}
        collapsedLabel={collapsedLabel}
        expandedLabel={expandedLabel}
      />
    </div>
  )
}

export default {
  title: 'Expander',
  category: 'Navigation',
  component: Expander,
  render: ExpanderDemo,
  description: 'Inline "Show more / Show less" toggle for truncated lists, rendered as a button that reports its next state through onChange. Default labels are "Show more" / "Show less" in LTR and "عرض المزيد" / "عرض أقل" in RTL, and can be overridden via collapsedLabel and expandedLabel. The chevron rotates 180° with a spring easing when toggled and aria-expanded is set automatically. Place it at the natural end of a truncated list and never render it when there is nothing to expand.',
  guidelines: {
    when: [
      'A list has more items than should be visible by default (e.g. more than 5 filter options)',
      'The hidden items are of equal importance to the visible ones (not secondary/supplementary)',
      'Collapsing back ("Show less") would also be useful',
    ],
    whenNot: [
      'There are no additional items to reveal — do not render Expander at all',
      'The items load from the server and paginate — use a dedicated "Load more" pattern instead',
      'The content below is not a list (use a collapsible panel pattern)',
    ],
    contentRules: [
      {
        title: 'Default labels',
        items: [
          'LTR collapsed: "Show more" / LTR expanded: "Show less"',
          'RTL collapsed: "عرض المزيد" / RTL expanded: "عرض أقل"',
          'Override via collapsedLabel / expandedLabel props when the list has a known count ("See all 12")',
        ],
      },
    ],
    dos: [
      'Place at the natural end of the truncated list, aligned with the list content',
      'Preserve scroll position when expanding — content must appear inline',
    ],
    donts: [
      'Use alongside other pagination controls (infinite scroll, page numbers) in the same section',
      'Scroll the user to the top of the list after expanding',
    ],
  },
  args: {
    dir: 'ltr',
    collapsedLabel: '',
    expandedLabel: '',
  },
  argTypes: {
    expanded: {
      control: 'boolean',
      description: 'Whether the list is expanded (controlled)',
    },
    onChange: {
      control: 'none',
      description: 'Called with the next expanded state',
    },
    collapsedLabel: {
      control: 'text',
      description: 'Override collapsed label (default: "Show more")',
    },
    expandedLabel: {
      control: 'text',
      description: 'Override expanded label (default: "Show less")',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction (also sets default label language)',
    },
  },
  examples: [
    { name: 'LTR defaults', args: { dir: 'ltr', collapsedLabel: '', expandedLabel: '' } },
    { name: 'RTL defaults', args: { dir: 'rtl', collapsedLabel: '', expandedLabel: '' } },
    { name: 'Custom labels', args: { dir: 'ltr', collapsedLabel: 'See all 12', expandedLabel: 'See less' } },
  ],
}
