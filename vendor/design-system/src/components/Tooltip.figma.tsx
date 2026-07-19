// Code Connect mapping for Tooltip — verified against Figma node 24269:106764.
// Figma models arrow side via booleans topPointer / bottomPointer (no Position enum);
// content lives in a nested "Text" layer. Verify the position direction against the design.
import figma from '@figma/code-connect'
import { Tooltip } from './Tooltip'

figma.connect(Tooltip, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=24269-106764', {
  props: {
    position: figma.boolean('topPointer', { true: 'bottom', false: 'top' }),
  },
  example: ({ position }) => (
    <Tooltip content="Tooltip text" position={position}>
      <button>Trigger</button>
    </Tooltip>
  ),
})
