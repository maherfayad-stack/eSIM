// Code Connect mapping for Toggle — verified against Figma node 834:9107.
// Figma props: Switch (on|off), State (Default|Pressed|Disabled),
// Platform (iOS|Android|Desktop small), text "Label". Code state: default|disabled|skeleton.
import figma from '@figma/code-connect'
import { Toggle } from './Toggle'

figma.connect(Toggle, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=834-9107', {
  props: {
    checked: figma.enum('Switch', { on: true, off: false }),
    state: figma.enum('State', { Default: 'default', Pressed: 'default', Disabled: 'disabled' }),
    label: figma.string('Label'),
  },
  example: ({ checked, state, label }) => (
    <Toggle checked={checked} state={state} label={label} />
  ),
})
