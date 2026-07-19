// Code Connect mapping for Banner — verified against Figma node 18278:114825 ("Banner Info").
// Figma props: Type (Visual|Neutral|Success|Caution|Error|Skeleton), Layout (Desktop|Mobile), LA (EN|AR),
// Icon/Button/Visual icon (32)/Title (BOOLEAN), Visual Icon Select (INSTANCE_SWAP).
// DIVERGENCE: Figma "Banner Info" is status-intent based; code Banner uses a decorative color.
// Type->color mapping below is approximate — revisit with design (no 1:1 correspondence).
import figma from '@figma/code-connect'
import { Banner } from './Banner'

figma.connect(Banner, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=18278-114825', {
  props: {
    color: figma.enum('Type', {
      Neutral: 'neutral',
      Success: 'promo',
      Caution: 'featured', // (approx) code has no caution banner color
      Error: 'featured', // (approx) code has no red banner color
      Visual: 'info', // (approx)
      Skeleton: 'neutral', // (approx)
    }),
  },
  example: ({ color }) => (
    <Banner color={color} title="Title" subtitle="Short description" />
  ),
})
