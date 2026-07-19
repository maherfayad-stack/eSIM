import { IconButton } from 'design-system'

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6465 1.1464C11.8417.9512 12.1583.9512 12.3535 1.1464L16.291 5.08287C16.4863 5.27811 16.4863 5.59469 16.2911 5.78998C16.0959 5.98526 15.7793 5.9853 15.584 5.79007L12.5 2.70688V12A.5.5 0 0 1 11.5 12V2.70688L8.41601 5.79007C8.22072 5.9853 7.90414 5.98526 7.7089 5.78998C7.51366 5.59469 7.51371 5.27811 7.70899 5.08287L11.6465 1.1464ZM4 9.75C4 9.41848 4.1317 9.10054 4.36612 8.86612C4.60054 8.6317 4.91848 8.5 5.25 8.5H7.5A.5.5 0 0 0 7.5 7.5H5.25C4.91848 7.5 4.60054 7.6317 4.36612 7.86612Z" fill="currentColor" />
    <path d="M4 9.75V19.5C4 19.8315 4.1317 20.1495 4.36612 20.3839C4.60054 20.6183 4.91848 20.75 5.25 20.75H18.75C19.0815 20.75 19.3995 20.6183 19.6339 20.3839C19.8683 20.1495 20 19.8315 20 19.5V9.75C20 9.41848 19.8683 9.10054 19.6339 8.86612C19.3995 8.6317 19.0815 8.5 18.75 8.5H16.5A.5.5 0 0 1 16.5 7.5H18.75C19.0815 7.5 19.3995 7.6317 19.6339 7.86612C19.8683 8.10054 20 8.41848 20 8.75" stroke="currentColor" strokeWidth="1" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
    <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
    <circle cx="10.5" cy="10.5" r="6.75" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15.75 15.75L20.25 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

function IconButtonDemo({ variant, size }) {
  return <IconButton variant={variant} size={size} icon={<SearchIcon />} aria-label="Search" />
}

export default {
  title: 'IconButton',
  category: 'Actions',
  component: IconButton,
  render: IconButtonDemo,
  description: 'Square button with a single icon and no label. Full-radius pill. Used for compact toolbar actions — share, close, filter, search.',
  args: {
    variant: 'primary',
    size: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'overlay', 'grey'],
      description: 'Visual style',
    },
    size: {
      control: 'select',
      options: ['default', 'medium', 'small'],
      description: 'Height — 48px / 40px / 32px',
    },
  },
  examples: [
    { name: 'Primary', args: { variant: 'primary' } },
    { name: 'Secondary', args: { variant: 'secondary' } },
    { name: 'Overlay', args: { variant: 'overlay' } },
    { name: 'Grey', args: { variant: 'grey' } },
    { name: 'Medium', args: { variant: 'primary', size: 'medium' } },
    { name: 'Small', args: { variant: 'secondary', size: 'small' } },
  ],
}
