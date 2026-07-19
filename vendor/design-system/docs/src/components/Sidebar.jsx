import './Sidebar.css'
import { AlmosaferLogo } from 'design-system'

export default function Sidebar({ items, selected, onSelect }) {
  const groups = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  return (
    <nav className="sidebar" aria-label="Components">
      <div className="sidebar__header">
        <AlmosaferLogo type="wordmark" variant="white" lang="en" width={120} />
      </div>

      <div className="sidebar__scroll">
        {Object.entries(groups).map(([category, groupItems]) => (
          <div key={category} className="sidebar__group">
            <p className="sidebar__group-label">{category}</p>
            {groupItems.map(item => (
              <button
                key={item.id}
                className={['sidebar__item', item.id === selected && 'sidebar__item--active'].filter(Boolean).join(' ')}
                onClick={() => onSelect(item.id)}
                aria-current={item.id === selected ? 'page' : undefined}
              >
                {item.title}
              </button>
            ))}
          </div>
        ))}
      </div>
    </nav>
  )
}
