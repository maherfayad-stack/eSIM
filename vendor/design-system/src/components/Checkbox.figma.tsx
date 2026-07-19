// Code Connect mapping for Checkbox — the standalone tick-box atom (Figma node 7751:24352).
// Figma props: State (Enabled|Hovered|Pressed|Error|Disabled), Selected (True|False).
// Code models disabled/error as separate booleans, so Figma State is split across two enums.
// Hover/Pressed are CSS pseudo-states in code, so they map to the resting (no-modifier) booleans.
import figma from '@figma/code-connect'
import { Checkbox } from './Checkbox'

figma.connect(Checkbox, 'https://www.figma.com/design/unUUMUPBpzpVtODpLkXuDQ/ALM-2.0--WIP-?node-id=7751-24352', {
  props: {
    checked: figma.enum('Selected', { True: true, False: false }),
    disabled: figma.enum('State', {
      Enabled: false,
      Hovered: false,
      Pressed: false,
      Error: false,
      Disabled: true,
    }),
    error: figma.enum('State', {
      Enabled: false,
      Hovered: false,
      Pressed: false,
      Error: true,
      Disabled: false,
    }),
  },
  example: ({ checked, disabled, error }) => (
    <Checkbox checked={checked} disabled={disabled} error={error} />
  ),
})
