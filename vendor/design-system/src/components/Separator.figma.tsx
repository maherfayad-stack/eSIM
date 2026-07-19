// Code Connect mapping for Separator — verified against Figma "Cell Separator" node 3636:37014.
// Figma props: Type (Dashed|OR|Simple). NOTE: Figma also has a separate "Section Separator"
// component (node 2230:14637) that maps to this same code Separator with type="section separator".
import figma from '@figma/code-connect'
import { Separator } from './Separator'

figma.connect(Separator, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=3636-37014', {
  props: {
    variant: figma.enum('Type', { Simple: 'simple', Dashed: 'dashed', OR: 'or' }),
  },
  example: ({ variant }) => <Separator type="cell separator" variant={variant} />,
})
