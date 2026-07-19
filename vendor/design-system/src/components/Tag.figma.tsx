// Code Connect mapping for Tag — verified against Figma node 772:5168.
// Figma props: Color (VARIANT), Style (Filled|Tinted), Language (English|Arabic),
// Leading icon / Trailing Icon (BOOLEAN), text layer "Title".
import figma from '@figma/code-connect'
import { Tag } from './Tag'

figma.connect(Tag, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=772-5168', {
  props: {
    // Figma `Color` -> code `variant` (code: neutral|success|warning|caution|default).
    // Aqua/Overlay have no code equivalent -> mapped to neutral (approx), revisit with design.
    variant: figma.enum('Color', {
      Grey: 'neutral',
      Forest: 'success',
      Crimson: 'warning',
      Buttercup: 'caution',
      Aqua: 'neutral',
      Overlay: 'neutral',
      Skeleton: 'neutral',
    }),
    style: figma.enum('Style', { Filled: 'filled', Tinted: 'tinted' }),
    label: figma.string('Title'),
  },
  example: ({ variant, style, label }) => (
    <Tag variant={variant} style={style} label={label} />
  ),
})
