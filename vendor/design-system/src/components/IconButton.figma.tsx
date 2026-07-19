// Code Connect mapping for IconButton — verified against Figma node 4744:50280.
// Figma props: Type (White|Aqua|Overlay|Grey), State (Default|Hover|Pressed|Disabled),
// Icon Select (INSTANCE_SWAP). NOTE: Figma has NO Size variant (code has size default|medium|small),
// and Figma Type is color-based (White/Aqua/Overlay/Grey) vs code variant primary|secondary.
import figma from '@figma/code-connect'
import { IconButton } from './IconButton'

figma.connect(IconButton, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=4744-50280', {
  props: {
    variant: figma.enum('Type', {
      Aqua: 'primary',
      Grey: 'secondary',
      White: 'secondary', // (approx)
      Overlay: 'secondary', // (approx)
    }),
  },
  example: ({ variant }) => (
    <IconButton variant={variant} icon={null} aria-label="action" />
  ),
})
