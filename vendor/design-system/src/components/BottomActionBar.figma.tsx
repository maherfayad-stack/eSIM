// Code Connect mapping for BottomActionBar — verified against Figma node 51792:8398.
// Figma props: Platform (Android|IOS), Type (Starting price|Funnel|CTA|Price|Link),
// Message/Top Label/Bottom Label/Expander (BOOLEAN). Code type: starting-price|funnel|payment.
import figma from '@figma/code-connect'
import { BottomActionBar } from './BottomActionBar'

figma.connect(BottomActionBar, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=51792-8398', {
  props: {
    type: figma.enum('Type', {
      'Starting price': 'starting-price',
      Price: 'starting-price',
      Funnel: 'funnel',
      Link: 'funnel', // (approx)
      CTA: 'payment', // (approx) CTA confirm bar ~ payment
    }),
  },
  example: ({ type }) => (
    <BottomActionBar type={type} price="$1,215" actionLabel="Book now" onAction={() => {}} />
  ),
})
