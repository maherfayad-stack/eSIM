import { useState, useEffect } from 'react'
import { stories, storyList } from './stories/index'
import Sidebar from './components/Sidebar'
import Preview from './components/Preview'
import PropControls from './components/PropControls'
import CodeBlock from './components/CodeBlock'
import ThemeSwitcher from './components/ThemeSwitcher'
import Guidelines from './components/Guidelines'

export default function App() {
  const [selected, setSelected] = useState(storyList[0].id)
  const [theme, setTheme] = useState('light')
  const [tab, setTab] = useState('preview')

  const story = stories[selected]
  const [args, setArgs] = useState(() => ({ ...story.args }))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function handleSelect(id) {
    setSelected(id)
    setArgs({ ...stories[id].args })
    setTab('preview')
  }

  function handleExample(exampleArgs) {
    setArgs({ ...story.args, ...exampleArgs })
    setTab('preview')
  }

  const hasProps = story.argTypes && Object.keys(story.argTypes).length > 0
  const supportsDir = story.args && 'dir' in story.args
  const activeDir = supportsDir ? (args.dir ?? 'ltr') : 'ltr'
  const displayArgs = activeDir === 'rtl' && story.arArgs
    ? { ...args, ...story.arArgs }
    : args

  return (
    <div className="docs">
      <Sidebar items={storyList} selected={selected} onSelect={handleSelect} />

      <div className="docs__right">
      <main className="docs__main">
        <header className="docs__header">
          <div className="docs__header-left">
            <span className="docs__category">{story.category}</span>
            <h1 className="docs__title">{story.title}</h1>
          </div>
          <div className="docs__header-controls">
            <ThemeSwitcher value={theme} onChange={setTheme} />
          </div>
        </header>

        <p className="docs__description">{story.description}</p>

        {story.standalone ? (
          <Preview story={story} args={displayArgs} />
        ) : (
          <section className="docs__playground">
            <div className="docs__tabs" role="tablist">
              <button
                role="tab"
                aria-selected={tab === 'preview'}
                className={['docs__tab', tab === 'preview' && 'docs__tab--active'].filter(Boolean).join(' ')}
                onClick={() => setTab('preview')}
              >
                Preview
              </button>
              <button
                role="tab"
                aria-selected={tab === 'code'}
                className={['docs__tab', tab === 'code' && 'docs__tab--active'].filter(Boolean).join(' ')}
                onClick={() => setTab('code')}
              >
                Code
              </button>
            </div>

            <div className="docs__panel" data-theme={theme} dir={activeDir}>
              {tab === 'preview' ? (
                <Preview story={story} args={displayArgs} />
              ) : (
                <CodeBlock story={story} args={displayArgs} />
              )}
            </div>
          </section>
        )}

        {hasProps && (
          <section className="docs__props">
            <h2 className="docs__section-title">Props</h2>
            <PropControls
              key={selected}
              argTypes={story.argTypes}
              args={args}
              onChange={(key, value) => setArgs(prev => ({ ...prev, [key]: value }))}
            />
          </section>
        )}

        {story.examples?.length > 0 && (
          <section className="docs__examples">
            <h2 className="docs__section-title">Examples</h2>
            <div className="docs__example-grid">
              {story.examples.map(ex => (
                <div
                  key={ex.name}
                  className="docs__example-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleExample(ex.args)}
                  onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleExample(ex.args)}
                  data-theme={theme}
                  dir={activeDir}
                >
                  <div className="docs__example-preview">
                    <Preview story={story} args={(() => {
                      const base = { ...story.args, ...ex.args }
                      return activeDir === 'rtl' && story.arArgs ? { ...base, ...story.arArgs } : base
                    })()} />
                  </div>
                  <span className="docs__example-label">{ex.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {story.guidelines && (
          <section className="docs__guidelines">
            <h2 className="docs__section-title">Usage guidelines</h2>
            <Guidelines guidelines={story.guidelines} />
          </section>
        )}
      </main>
      </div>
    </div>
  )
}
