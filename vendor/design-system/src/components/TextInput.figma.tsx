// Code Connect mapping for TextInput — verified against Figma node 18367:100514 ("Input").
// Figma props: State (Default|Focused|Error|Disabled), Platform (Android|iOS|Desktop),
// Populated (False|True), Leading icon/Trailing icon/Helper text/Drop-down/Label (BOOLEAN), text "Label".
// NOTE: code derives focus from CSS and error from errorText; Figma models them as State variants.
import figma from '@figma/code-connect'
import { TextInput } from './TextInput'

figma.connect(TextInput, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=18367-100514', {
  props: {
    disabled: figma.enum('State', { Default: false, Focused: false, Error: false, Disabled: true }),
    label: figma.string('Label'),
  },
  example: ({ disabled, label }) => (
    <TextInput disabled={disabled} label={label} value="" onChange={() => {}} helperText="Helper text" />
  ),
})
