// Code Connect mapping for Snackbar — verified against Figma node 3388:27702.
// Figma has no variant props; single text layer "Label".
import figma from '@figma/code-connect'
import { Snackbar } from './Snackbar'

figma.connect(Snackbar, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=3388-27702', {
  props: {
    message: figma.string('Label'),
  },
  example: ({ message }) => <Snackbar message={message} show onClose={() => {}} />,
})
