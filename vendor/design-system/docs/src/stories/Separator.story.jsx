import { Separator } from 'design-system'

export default {
  title: 'Separator',
  category: 'Layout',
  component: Separator,
  description: 'Horizontal divider with two structural types — Cell (between list rows) and Section (between page-level content blocks). Cell separators have three visual variants: simple, dashed, and OR.',
  guidelines: {
    contentRules: [
      {
        title: 'Cell vs Section',
        note: 'Choose the type based on what is being separated — rows within a group, or distinct content modules on a page.',
        items: [
          'Cell/simple: between rows in a list or form group — or use the built-in separator on each Cell row instead',
          'Cell/dashed: lightweight visual break, less emphasis than a solid line',
          'Cell/or: between two mutually exclusive options (e.g. "Sign in" / "Create account")',
          'Section: between distinct page-level content blocks; adds visual weight to signal a major break',
        ],
      },
    ],
    donts: [
      'Place a separator after the last item in a group',
      'Stack two separators back-to-back',
      'Use Section separator between individual list rows',
      'Use when adjacent modules already have visible card borders (double separation)',
    ],
  },
  args: {
    type: 'cell separator',
    variant: 'simple',
    dir: 'ltr',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['cell separator', 'section separator'],
      description: 'Structural type — cell for between list rows, section for between page-level content blocks',
    },
    variant: {
      control: 'select',
      options: ['simple', 'dashed', 'or'],
      description: 'Visual variant — only applies when type is cell',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction — affects default OR label language',
    },
    label: {
      control: 'text',
      description: 'Custom label for the OR variant — defaults to "OR" (LTR) or "أو" (RTL)',
    },
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <Separator {...args} />
    </div>
  ),
  examples: [
    {
      label: 'Cell / Simple',
      render: () => (
        <div style={{ width: '100%', maxWidth: 360 }}>
          <div style={{ padding: '12px 0', fontSize: 14 }}>First item</div>
          <Separator type="cell separator" variant="simple" />
          <div style={{ padding: '12px 0', fontSize: 14 }}>Second item</div>
          <Separator type="cell separator" variant="simple" />
          <div style={{ padding: '12px 0', fontSize: 14 }}>Third item</div>
        </div>
      ),
    },
    {
      label: 'Cell / Dashed',
      render: () => (
        <div style={{ width: '100%', maxWidth: 360 }}>
          <div style={{ padding: '12px 0', fontSize: 14 }}>First item</div>
          <Separator type="cell separator" variant="dashed" />
          <div style={{ padding: '12px 0', fontSize: 14 }}>Second item</div>
        </div>
      ),
    },
    {
      label: 'Cell / OR (LTR)',
      render: () => (
        <div style={{ width: '100%', maxWidth: 360, padding: '12px 0' }}>
          <Separator type="cell separator" variant="or" dir="ltr" />
        </div>
      ),
    },
    {
      label: 'Cell / OR (RTL)',
      render: () => (
        <div style={{ width: '100%', maxWidth: 360, padding: '12px 0' }}>
          <Separator type="cell separator" variant="or" dir="rtl" />
        </div>
      ),
    },
    {
      label: 'Section',
      render: () => (
        <div style={{ width: '100%', maxWidth: 360 }}>
          <div style={{ padding: '16px 0', fontSize: 14 }}>Content block A</div>
          <Separator type="section separator" />
          <div style={{ padding: '16px 0', fontSize: 14 }}>Content block B</div>
        </div>
      ),
    },
  ],
}
