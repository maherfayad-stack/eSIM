import './Preview.css'

export default function Preview({ story, args }) {
  const Renderer = story.render ?? story.component
  if (!Renderer) return null

  const containerCls = [
    'preview',
    story.previewPadding === 'none' && 'preview--no-padding',
    story.previewBg === 'none' && 'preview--no-bg',
    story.previewFull && 'preview--full',
  ].filter(Boolean).join(' ')

  return (
    <div className={containerCls}>
      <Renderer {...args} />
    </div>
  )
}
