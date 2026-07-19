import './ThemeSwitcher.css'

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2.5V4.5M12 19.5V21.5M2.5 12H4.5M19.5 12H21.5M5.636 5.636L7.05 7.05M16.95 16.95L18.364 18.364M5.636 18.364L7.05 16.95M16.95 7.05L18.364 5.636" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ThemeSwitcher({ value, onChange }) {
  return (
    <div className="theme-switcher" role="group" aria-label="Color theme">
      <button
        className={['theme-switcher__btn', value === 'light' && 'theme-switcher__btn--active'].filter(Boolean).join(' ')}
        onClick={() => onChange('light')}
        aria-pressed={value === 'light'}
        title="Light mode"
      >
        <SunIcon />
        <span>Light</span>
      </button>
      <button
        className={['theme-switcher__btn', value === 'dark' && 'theme-switcher__btn--active'].filter(Boolean).join(' ')}
        onClick={() => onChange('dark')}
        aria-pressed={value === 'dark'}
        title="Dark mode"
      >
        <MoonIcon />
        <span>Dark</span>
      </button>
    </div>
  )
}
