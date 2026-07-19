// Code Connect mapping for SegmentedControl — verified against Figma node 16141:87445.
// Figma props: Platform (IOS|Android), Language (EN|AR), Options (2|3|4 = item count),
// Selected (1..4, 1-based). Code value is a 0-based index.
import figma from '@figma/code-connect'
import { SegmentedControl } from './SegmentedControl'

figma.connect(SegmentedControl, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=16141-87445', {
  props: {
    value: figma.enum('Selected', { '1': 0, '2': 1, '3': 2, '4': 3 }),
  },
  example: ({ value }) => (
    <SegmentedControl items={['Flights', 'Hotels', 'Cars']} value={value} onChange={() => {}} />
  ),
})
