import { useState } from 'react'
import './PropControls.css'

export default function PropControls({ argTypes, args, onChange }) {
  const [showAll, setShowAll] = useState(false)
  if (!argTypes) return null

  const allEntries = Object.entries(argTypes)
  if (allEntries.length === 0) return null

  const active = allEntries.filter(([, spec]) => isVisible(spec, args))
  const inactive = allEntries.filter(([, spec]) => !isVisible(spec, args))

  // The toggle is offered whenever the component has *any* conditionally-hideable
  // prop — i.e. a prop that some combination can hide — regardless of whether one
  // is hidden right now. This keeps "Show all props" available even on the
  // combination where every prop happens to apply (e.g. Search on iOS).
  const hasConditional = allEntries.some(([, spec]) => spec.if != null)
  const hasInactive = inactive.length > 0

  // Without "show all", keep the original behaviour: only props that apply to the
  // current combination are listed. With it on, the inactive props are appended
  // in a visually separated group so every prop stays visible.
  const showInactive = showAll && hasInactive

  return (
    <div className="prop-controls">
      {hasConditional && (
        <div className="prop-controls__bar">
          <label className="prop-controls__showall">
            <input
              type="checkbox"
              checked={showAll}
              onChange={e => setShowAll(e.target.checked)}
            />
            <span>Show all props</span>
          </label>
          <span className="prop-controls__bar-hint">
            {!hasInactive
              ? 'All props apply to this combination'
              : showInactive
                ? `${inactive.length} prop${inactive.length === 1 ? '' : 's'} not used by this combination`
                : `${inactive.length} prop${inactive.length === 1 ? '' : 's'} hidden for this combination`}
          </span>
        </div>
      )}

      <table className="prop-controls__table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Control</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {active.map(([key, spec]) => (
            <PropRow
              key={key}
              propKey={key}
              spec={spec}
              args={args}
              value={args[key]}
              onChange={onChange}
            />
          ))}

          {showInactive && (
            <>
              <tr className="prop-controls__divider">
                <td colSpan={3}>
                  Not applicable to the current selection
                </td>
              </tr>
              {inactive.map(([key, spec]) => (
                <PropRow
                  key={key}
                  propKey={key}
                  spec={spec}
                  args={args}
                  value={args[key]}
                  onChange={onChange}
                  inactive
                />
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  )
}

function PropRow({ propKey, spec, args, value, onChange, inactive = false }) {
  return (
    <tr className={inactive ? 'prop-controls__row--inactive' : undefined}>
      <td>
        <code className="prop-controls__name">{propKey}</code>
        {spec.required && <span className="prop-controls__required">*</span>}
      </td>
      <td>
        <Control
          propKey={propKey}
          spec={spec}
          value={value}
          args={args}
          onChange={(val) => onChange(propKey, val)}
        />
      </td>
      <td className="prop-controls__desc">{spec.description ?? ''}</td>
    </tr>
  )
}

// A control may declare `if` to conditionally show based on other args:
//   if: (args) => boolean            — predicate function
//   if: { arg: 'platform', eq: 'x' } — show when args.arg === eq (or neq)
function isVisible(spec, args) {
  const cond = spec.if
  if (!cond) return true
  if (typeof cond === 'function') return cond(args)
  const current = args[cond.arg]
  if ('eq' in cond) return current === cond.eq
  if ('neq' in cond) return current !== cond.neq
  return true
}

function Control({ propKey, spec, value, args, onChange }) {
  if (spec.control === 'select') {
    // options may be a static array or a function of the current args
    const options = typeof spec.options === 'function' ? spec.options(args) : spec.options
    return (
      <select
        className="prop-controls__select"
        value={value ?? ''}
        onChange={e => onChange(e.target.value)}
        aria-label={propKey}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt === '' ? '(none)' : opt}</option>
        ))}
      </select>
    )
  }

  if (spec.control === 'boolean') {
    return (
      <label className="prop-controls__toggle-label">
        <input
          type="checkbox"
          checked={!!value}
          onChange={e => onChange(e.target.checked)}
          aria-label={propKey}
        />
        <span>{value ? 'true' : 'false'}</span>
      </label>
    )
  }

  if (spec.control === 'number') {
    return (
      <input
        type="number"
        className="prop-controls__input"
        value={value ?? 0}
        min={spec.min}
        max={spec.max}
        step={spec.step ?? 1}
        onChange={e => onChange(Number(e.target.value))}
        aria-label={propKey}
      />
    )
  }

  if (spec.control === 'text') {
    return (
      <input
        type="text"
        className="prop-controls__input"
        value={value ?? ''}
        onChange={e => onChange(e.target.value)}
        aria-label={propKey}
      />
    )
  }

  // Comma-separated text that round-trips to/from a string array.
  // Split only (no trim/filter) so spaces inside labels and a trailing
  // comma survive while typing; the renderer trims/filters for display.
  if (spec.control === 'list') {
    return (
      <input
        type="text"
        className="prop-controls__input"
        value={Array.isArray(value) ? value.join(', ') : (value ?? '')}
        onChange={e => onChange(e.target.value.split(/,\s*/))}
        aria-label={propKey}
      />
    )
  }

  if (spec.control === 'none') {
    return <span className="prop-controls__static">{JSON.stringify(value)}</span>
  }

  return <span className="prop-controls__static">—</span>
}
