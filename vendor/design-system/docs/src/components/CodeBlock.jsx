import './CodeBlock.css'

function argsToJSX(componentName, args, argTypes) {
  const { children, ...rest } = args

  const props = Object.entries(rest)
    .filter(([, v]) => v !== undefined && v !== null && v !== false)
    .map(([key, value]) => {
      const spec = argTypes?.[key]
      if (value === true) return `  ${key}`
      if (typeof value === 'string') return `  ${key}="${value}"`
      if (spec?.control === 'none') return `  ${key}={fn}`
      return `  ${key}={${JSON.stringify(value)}}`
    })

  if (props.length === 0) {
    if (children) return `<${componentName}>\n  ${children}\n</${componentName}>`
    return `<${componentName} />`
  }

  const propsStr = props.join('\n')
  if (children) {
    return `<${componentName}\n${propsStr}\n>\n  ${children}\n</${componentName}>`
  }
  return `<${componentName}\n${propsStr}\n/>`
}

export default function CodeBlock({ story, args }) {
  const code = argsToJSX(story.title, args, story.argTypes)

  function handleCopy() {
    navigator.clipboard.writeText(code).catch(() => {})
  }

  return (
    <div className="code-block">
      <button className="code-block__copy" onClick={handleCopy} aria-label="Copy code">
        <CopyIcon />
        Copy
      </button>
      <pre className="code-block__pre"><code>{code}</code></pre>
    </div>
  )
}

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M5 1a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5zm0 1h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 3H1a1 1 0 0 0-1 1v7a2 2 0 0 0 2 2h7a1 1 0 0 0 1-1v-1H2V3z"/>
  </svg>
)
