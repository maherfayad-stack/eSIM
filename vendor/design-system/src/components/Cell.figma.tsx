// Code Connect mapping for Cell — verified against Figma node 4033:46311.
// STRUCTURAL DIVERGENCE: Figma models Cell content with BOOLEANS (Leading icon, Chevron,
// Title, Subtext, Tag, Side text, Stroke) + State/Language variants. There is NO `Visual`
// or `Trailing` enum like the code API. Mapping only what corresponds cleanly.
import figma from '@figma/code-connect'
import { Cell } from './Cell'

figma.connect(Cell, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=4033-46311', {
  props: {
    visual: figma.boolean('Leading icon', { true: 'icon', false: undefined }),
    trailing: figma.boolean('Chevron', { true: 'chevron', false: 'none' }),
    showSeparator: figma.boolean('Stroke'),
    title: figma.string('Title'),
  },
  example: ({ visual, trailing, showSeparator, title }) => (
    <Cell visual={visual} trailing={trailing} showSeparator={showSeparator} title={title} label="Label" />
  ),
})
