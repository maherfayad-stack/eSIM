// Code Connect mapping for MarketingCard — verified against Figma node 41266:12761 ("Card Marketing").
// Figma props: Type (Solid|Gradient Small|Gradient Large), State (Default|Skeleton|Placeholder),
// CTA button / Tags (BOOLEAN), text Title/Subtitle. NOTE: code also has a "display" type with no Figma match.
import figma from '@figma/code-connect'
import { MarketingCard } from './MarketingCard'

figma.connect(MarketingCard, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=41266-12761', {
  props: {
    type: figma.enum('Type', {
      Solid: 'solid',
      'Gradient Small': 'gradient-small',
      'Gradient Large': 'gradient-large',
    }),
    title: figma.string('Title'),
    subtitle: figma.string('Subtitle'),
  },
  example: ({ type, title, subtitle }) => (
    <MarketingCard type={type} title={title} subtitle={subtitle} />
  ),
})
