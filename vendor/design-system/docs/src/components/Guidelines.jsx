import './Guidelines.css'

export default function Guidelines({ guidelines }) {
  if (!guidelines) return null

  const { when, whenNot, dos, donts, examples, contentRules, decisions, notes, selfCheck } = guidelines

  const hasUsage = when?.length || whenNot?.length
  const hasBehavior = dos?.length || donts?.length
  const hasWhy = examples?.some(e => e.why)

  return (
    <div className="guidelines">
      {hasUsage && (
        <div className="guidelines__cols">
          {when?.length > 0 && (
            <div className="guidelines__col guidelines__col--do">
              <p className="guidelines__col-label">Use when</p>
              <ul className="guidelines__list">
                {when.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}
          {whenNot?.length > 0 && (
            <div className="guidelines__col guidelines__col--dont">
              <p className="guidelines__col-label">Do not use when</p>
              <ul className="guidelines__list">
                {whenNot.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {decisions?.map((d, di) => (
        <div key={di} className="guidelines__block">
          <p className="guidelines__block-title">{d.title}</p>
          <div className="guidelines__table-wrap">
            <table className="guidelines__table">
              <thead>
                <tr>
                  <th>{d.columns?.[0] || 'Context'}</th>
                  <th>{d.columns?.[1] || 'Use'}</th>
                </tr>
              </thead>
              <tbody>
                {d.rows.map((row, ri) => (
                  <tr key={ri}>
                    <td>{row.condition}</td>
                    <td><code>{row.use}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {contentRules?.map((rule, ri) => (
        <div key={ri} className="guidelines__block">
          <p className="guidelines__block-title">{rule.title}</p>
          {rule.note && <p className="guidelines__note">{rule.note}</p>}
          <ul className="guidelines__list">
            {rule.items.map((item, ii) => <li key={ii}>{item}</li>)}
          </ul>
        </div>
      ))}

      {hasBehavior && (
        <div className="guidelines__cols">
          {dos?.length > 0 && (
            <div className="guidelines__col guidelines__col--do">
              <p className="guidelines__col-label">Do</p>
              <ul className="guidelines__list">
                {dos.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}
          {donts?.length > 0 && (
            <div className="guidelines__col guidelines__col--dont">
              <p className="guidelines__col-label">Don't</p>
              <ul className="guidelines__list">
                {donts.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}

      {examples?.length > 0 && (
        <div className="guidelines__block">
          <p className="guidelines__block-title">Examples</p>
          <div className="guidelines__table-wrap">
            <table className="guidelines__table guidelines__table--examples">
              <thead>
                <tr>
                  <th>Do</th>
                  <th>Don't</th>
                  {hasWhy && <th>Why</th>}
                </tr>
              </thead>
              <tbody>
                {examples.map((ex, i) => (
                  <tr key={i}>
                    <td>{ex.do}</td>
                    <td>{ex.dont}</td>
                    {hasWhy && <td className="guidelines__why">{ex.why}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {notes?.map((note, i) => (
        <p key={i} className="guidelines__callout">{note}</p>
      ))}

      {selfCheck?.length > 0 && (
        <div className="guidelines__block">
          <p className="guidelines__block-title">Self-check</p>
          <ul className="guidelines__list guidelines__list--check">
            {selfCheck.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  )
}
