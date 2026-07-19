// Code Connect mapping for ProgressStepper — Figma "Linear progress indicator" node 14354:88290.
// DIVERGENCE: Figma is a determinate/indeterminate progress BAR (props Determinate, Desktop,
// Show Status indicator); code ProgressStepper renders discrete pill segments (steps/currentStep).
import figma from '@figma/code-connect'
import { ProgressStepper } from './ProgressStepper'

figma.connect(ProgressStepper, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=14354-88290', {
  props: {},
  example: () => <ProgressStepper steps={5} currentStep={2} />,
})
