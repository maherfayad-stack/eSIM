// Code Connect mapping for Search — verified against Figma node 51040:3734.
// Figma props: Platform (IOS|Android), Language (AR|EN), State (Default|Populated|Typing),
// Close button (BOOLEAN). NOTE: code Search is iOS-style only (no platform prop).
import figma from '@figma/code-connect'
import { Search } from './Search'

figma.connect(Search, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=51040-3734', {
  props: {
    showClose: figma.boolean('Close button'),
  },
  example: ({ showClose }) => (
    <Search value="" onChange={() => {}} showClose={showClose} placeholder="Search" />
  ),
})
