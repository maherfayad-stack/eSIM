// Code Connect mapping for Navbar — verified against Figma node 53095:8729 ("_Toolbar-Android").
// Figma props: Type (Default|Flights|Stays|Search|Large|Segmented control|PWA), Language (EN|AR),
// RHS / Subtitle (BOOLEAN), text Title/Subtitle. Code type: default|large-header|flights|stays|segmented-control.
import figma from '@figma/code-connect'
import { Navbar } from './Navbar'

figma.connect(Navbar, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=53095-8729', {
  props: {
    type: figma.enum('Type', {
      Default: 'default',
      Large: 'large-header',
      Flights: 'flights',
      Stays: 'stays',
      'Segmented control': 'segmented-control',
      Search: 'default', // (approx) code folds search into default with showSearch
      PWA: 'default', // (approx) no PWA type in code
    }),
    title: figma.string('Title'),
    subtitle: figma.string('Subtitle'),
  },
  example: ({ type, title, subtitle }) => (
    <Navbar type={type} title={title} subtitle={subtitle} onBack={() => {}} />
  ),
})
