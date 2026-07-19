// Code Connect mapping for Slider — verified against Figma node 7927:59617.
// Figma props: Type (Range|Value), State (Default|Min|Mid|Max|Skeleton|Disabled),
// Input/Handle (INSTANCE_SWAP). Code Slider is numeric (value/min/max/ticks) — no enum maps cleanly.
import figma from '@figma/code-connect'
import { Slider } from './Slider'

figma.connect(Slider, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=7927-59617', {
  props: {},
  example: () => <Slider value={40} min={0} max={100} onChange={() => {}} />,
})
