// Code Connect mapping for BottomSheet — verified against Figma node 51023:3002 ("Bottom sheet IOS26").
// Figma props: Platform (iOS), Size (Fullscreen|Medium|Small), Search Field (BOOLEAN), Slot (SLOT).
import figma from '@figma/code-connect'
import { BottomSheet } from './BottomSheet'

figma.connect(BottomSheet, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=51023-3002', {
  props: {
    size: figma.enum('Size', { Fullscreen: 'fullscreen', Medium: 'medium', Small: 'small' }),
  },
  example: ({ size }) => (
    <BottomSheet open platform="ios" size={size} title="Title" onClose={() => {}}>
      {/* sheet content (Figma Slot) */}
    </BottomSheet>
  ),
})
