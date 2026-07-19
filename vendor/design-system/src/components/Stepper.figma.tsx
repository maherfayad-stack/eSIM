// Code Connect mapping for Stepper — Figma "Stepper" node 26904:111333 (standalone +/- counter).
// NOTE: Figma also has "Input stepper" (node 8614:60480) — a cell-row stepper with title/subtext —
// which is a different composition (Cell + Stepper), not this standalone control.
import figma from '@figma/code-connect'
import { Stepper } from './Stepper'

figma.connect(Stepper, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=26904-111333', {
  props: {},
  example: () => <Stepper value={1} min={0} max={9} onChange={() => {}} />,
})
