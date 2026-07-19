import './ThemeSwitcher.css'

export default function LangSwitcher({ value, onChange }) {
  return (
    <div className="theme-switcher" role="group" aria-label="Language direction">
      <button
        className={['theme-switcher__btn', value === 'ltr' && 'theme-switcher__btn--active'].filter(Boolean).join(' ')}
        onClick={() => onChange('ltr')}
        aria-pressed={value === 'ltr'}
        title="English (LTR)"
      >
        <span>EN</span>
      </button>
      <button
        className={['theme-switcher__btn', value === 'rtl' && 'theme-switcher__btn--active'].filter(Boolean).join(' ')}
        onClick={() => onChange('rtl')}
        aria-pressed={value === 'rtl'}
        title="Arabic (RTL)"
      >
        <span>AR</span>
      </button>
    </div>
  )
}
