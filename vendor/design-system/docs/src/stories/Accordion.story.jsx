import { Accordion } from 'design-system'

function AccordionDemo({ title, children, expanded, skeleton, dir }) {
  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      {/* key remounts the self-managing component when the seed args change */}
      <Accordion
        key={`${expanded}-${skeleton}-${dir}`}
        title={title}
        expanded={expanded}
        skeleton={skeleton}
        dir={dir}
      >
        {children}
      </Accordion>
    </div>
  )
}

export default {
  title: 'Accordion',
  category: 'Containment',
  component: Accordion,
  render: AccordionDemo,
  description:
    'A single collapsible disclosure: a header button with a title and chevron that reveals a content panel below. It manages its own open/closed state; expanded sets the initial open state. The header uses aria-expanded / aria-controls, the chevron rotates 180° when open, and a hover/pressed state tints the header. Pass the panel content as children — a string or any node — and stack several Accordions to build a list. Set skeleton for a loading placeholder.',
  guidelines: {
    when: [
      'A section of secondary content can be hidden until the user asks for it (FAQ answer, fare rules, policy detail)',
      'The header alone is enough for the user to decide whether to open it',
      'You want to stack several independent collapsible sections',
    ],
    whenNot: [
      'The content is short enough to show inline — do not hide it behind a tap',
      'The information is critical or time-sensitive — keep it visible',
      'Users need to compare several sections at once — show them expanded',
    ],
    contentRules: [
      {
        title: 'Title',
        items: [
          'Write the title as a concise, scannable label or question',
          'Keep it to a single line where possible',
        ],
      },
    ],
    dos: [
      'Use children for the panel content so prototypes can drop in real copy or components',
      'Set expanded to open the most useful section by default',
    ],
    donts: [
      'Nest accordions more than one level deep',
      'Hide critical or time-sensitive information inside a collapsed panel',
    ],
  },
  args: {
    title: 'Accordion Item',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    expanded: false,
    skeleton: false,
    dir: 'ltr',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Header label',
    },
    children: {
      control: 'text',
      description: 'Panel content (string or any node)',
    },
    expanded: {
      control: 'boolean',
      description: 'Initial open state (the component manages its own state after mount)',
    },
    skeleton: {
      control: 'boolean',
      description: 'Render a loading placeholder',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Collapsed', args: { expanded: false, skeleton: false, dir: 'ltr' } },
    { name: 'Expanded', args: { expanded: true, skeleton: false, dir: 'ltr' } },
    { name: 'Skeleton', args: { skeleton: true, dir: 'ltr' } },
    { name: 'RTL', args: { title: 'عنصر الأكورديون', expanded: true, dir: 'rtl' } },
  ],
}
