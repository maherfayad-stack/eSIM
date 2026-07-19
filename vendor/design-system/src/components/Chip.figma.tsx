// Code Connect mapping for Chip — verified against Figma node 2325:15040.
// Figma props: Type (Filter|Action), Size (Medium|Small), State (Enabled|Error|Disabled|Skeleton),
// Selected (True|False), Interaction (Default|Hover|Pressed), Drop down / Count / Leading icon (BOOLEAN).
// Note: code Chip's `state` only supports default|error; Disabled/Skeleton fold to default here.
import figma from '@figma/code-connect'
import { Chip } from './Chip'

figma.connect(Chip, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=2325-15040', {
  props: {
    selected: figma.enum('Selected', { True: true, False: false }),
    dropdown: figma.boolean('Drop down'),
    state: figma.enum('State', {
      Enabled: 'default',
      Error: 'error',
      Disabled: 'default',
      Skeleton: 'default',
    }),
    label: figma.string('Label'),
  },
  example: ({ selected, dropdown, state, label }) => (
    <Chip label={label} selected={selected} dropdown={dropdown} state={state} />
  ),
})
