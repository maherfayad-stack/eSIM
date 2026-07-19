// Code Connect mapping. VERIFY BEFORE PUBLISH:
//  1) Replace node-id in the URL below (Figma: right-click the published component
//     set -> "Copy link to selection"), or regenerate with `figma connect create`.
//  2) Confirm the Figma property names/labels below match this component set.
// Relative import so the parser resolves it; importPaths rewrites it to 'design-system' on publish.
import figma from '@figma/code-connect'
import { Callout } from './Callout'

figma.connect(Callout, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=REPLACE-ME', {
  props: {
    size: figma.enum('Size', { Regular: 'regular', Small: 'small' }),
    label: figma.string('Label'),
  },
  example: ({ size, label }) => <Callout size={size} label={label} />,
})
