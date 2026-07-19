// Code Connect mapping for ListItem — Figma node 789:3723 ("List").
// STRUCTURAL DIVERGENCE: Figma "List" is a CONTAINER (Type=Header|No header|Horizontal) holding
// multiple "_List-item" rows; code ListItem is a SINGLE selection row (type=radio|checkbox|icon).
// They do not map 1:1 — wiring the closest match; revisit whether code needs a List wrapper.
import figma from '@figma/code-connect'
import { ListItem } from './List'

figma.connect(ListItem, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=789-3723', {
  props: {
    label: figma.string('Label'),
  },
  example: ({ label }) => <ListItem type="checkbox" label={label} />,
})
