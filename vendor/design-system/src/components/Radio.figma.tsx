// Code Connect mapping for Radio — the standalone radio-button atom (Figma node 7751:24403).
// Figma props: State (Enabled|Hovered|Pressed|Error|Disabled), Selected (True|False).
// Code models disabled/error as separate booleans, so Figma State is split across two enums.
// Hover/Pressed are CSS pseudo-states in code, so they map to the resting (no-modifier) booleans.
import figma from '@figma/code-connect'
import { Radio } from './Radio'

figma.connect(Radio, 'https://www.figma.com/design/unUUMUPBpzpVtODpLkXuDQ/ALM-2.0--WIP-?node-id=7751-24403', {
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
    <Radio checked={checked} disabled={disabled} error={error} />
  ),
})
