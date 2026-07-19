// Code Connect mapping for Button — properties verified against Figma node 621:71.
// Figma props: Type (VARIANT), Size (VARIANT: Medium|Small), State (Default|Hover|Pressed),
// LA (EN|AR = language), Leading Icon / Trailing icon (BOOLEAN), Label (TEXT).
// State is handled by CSS (no code prop); LA maps to RTL at the app level (Button has no dir prop).
import figma from '@figma/code-connect'
import { Button } from './Button'

figma.connect(Button, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=621-71', {
  props: {
    // Figma `Type` -> code `variant`. Figma has more types than the code API exposes;
    // the mappings below pair each Figma type with the nearest code variant. Revisit the
    // ones marked (approx) with design — code may need new variants, or these are intentional gaps.
    variant: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
      Reversed: 'primary-inverted',
      Ghost: 'secondary-inverted',
      'Destructive - Reversed': 'destructive',
      'Destructive - Ghost': 'destructive', // (approx) code has one destructive variant
      Payment: 'payment',
      'Apple Pay': 'apple-pay',
      Skeleton: 'skeleton',
      Disabled: 'primary', // (approx) Figma models disabled as a Type; code uses the `disabled` attr
      Link: 'secondary-inverted', // (approx) no dedicated code variant
      'GPay - Card': 'payment', // (approx) no dedicated GPay variant in code
      'GPay - Personalized': 'payment', // (approx)
      'GPay - Pay with': 'payment', // (approx)
      'GPay - Checkout with': 'payment', // (approx)
    }),
    // Figma Size is by pixel height: Medium = 48px = code `default`; Small = 40px = code `medium`.
    // Code `small` (32px) has no Figma equivalent.
    size: figma.enum('Size', { Medium: 'default', Small: 'medium' }),
    label: figma.string('Label'),
  },
  example: ({ variant, size, label }) => (
    <Button variant={variant} size={size} label={label} />
  ),
})
