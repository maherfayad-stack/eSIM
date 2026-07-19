import { useState, useEffect } from 'react'
import { BottomSheet, Button, Search } from 'design-system'

// Placeholder icon from src/icons/line-icons/placeholder.svg
const PlaceholderIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.5 3.25C20.1904 3.25 20.75 3.80964 20.75 4.5V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H19.5ZM4.25 19.5C4.25 19.6381 4.36193 19.75 4.5 19.75H19.043L4.25 4.95703V19.5ZM19.75 19.043V4.5C19.75 4.36193 19.6381 4.25 19.5 4.25H4.95703L19.75 19.043Z" />
  </svg>
)

// iOS status-bar level icons (signal bars · wifi fan · horizontal battery)
const IosLevels = () => (
  <>
    <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5" width="3" height="7" rx="1" /><rect x="10" y="2.5" width="3" height="9.5" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
    <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor"><path d="M8.5 2.2c2.8 0 5.4 1.1 7.3 2.9l-1.5 1.6A8.3 8.3 0 0 0 8.5 4.3 8.3 8.3 0 0 0 2.7 6.7L1.2 5.1A10.5 10.5 0 0 1 8.5 2.2Zm0 3.7c1.8 0 3.5.7 4.8 1.9l-1.6 1.7a4.6 4.6 0 0 0-3.2-1.3 4.6 4.6 0 0 0-3.2 1.3L3.7 7.8A6.8 6.8 0 0 1 8.5 5.9Zm0 3.6c.9 0 1.7.4 2.3 1L8.5 12 6.2 10.5c.6-.6 1.4-1 2.3-1Z" /></svg>
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.8" width="21" height="10.4" rx="2.6" stroke="currentColor" strokeOpacity="0.4" /><rect x="2" y="2.3" width="18" height="7.4" rx="1.3" fill="currentColor" /><path d="M23 4v4a1.8 1.8 0 0 0 0-4Z" fill="currentColor" fillOpacity="0.4" /></svg>
  </>
)

// Android status-bar level icons (wifi fan · signal triangle · vertical battery), all dark
const AndroidLevels = () => (
  <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
    <svg width="17" height="13" viewBox="0 0 17 13" fill="currentColor"><path d="M8.5 12.6 0.4 3.5A12 12 0 0 1 8.5 0.4 12 12 0 0 1 16.6 3.5L8.5 12.6Z" /></svg>
    <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor"><path d="M12 1v11.5H1Z" /></svg>
    <svg width="9" height="13" viewBox="0 0 9 13" fill="currentColor"><rect x="3" y="0" width="3" height="1.6" rx="0.5" /><rect x="0.5" y="1.4" width="8" height="11.1" rx="1.6" /></svg>
  </span>
)

// iOS status bar is 54px (time · island · levels); Android is a 28px right-aligned cluster.
const STATUS_H = { ios: 54, android: 28 }

// The phone preview owns its status bar — the BottomSheet does not render one. Its
// height matches the sheet's --bottom-sheet-top-inset per platform, so a fullscreen
// sheet stops just below it.
const PreviewStatusBar = ({ platform }) => {
  const base = {
    position: 'absolute', top: 0, left: 0, right: 0, height: STATUS_H[platform],
    display: 'flex', alignItems: 'center', color: 'var(--text-base-default)', zIndex: 0,
  }
  if (platform === 'android') {
    return (
      <div style={{ ...base, justifyContent: 'flex-end', gap: 6, padding: '0 16px', fontWeight: 600, fontSize: 14 }}>
        <AndroidLevels />
        <span style={{ marginInlineStart: 2 }}>12:30</span>
      </div>
    )
  }
  return (
    <div style={{ ...base, justifyContent: 'space-between', padding: '0 32px', fontWeight: 600, fontSize: 15 }}>
      <span>9:41</span>
      <span style={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 110, height: 32, borderRadius: 100, background: '#000' }} />
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><IosLevels /></span>
    </div>
  )
}

// A simple mock app screen behind the sheet, so the scrim has something to dim.
const PreviewScreen = ({ platform, onOpen }) => (
  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 12, padding: `${STATUS_H[platform] + 12}px 16px 16px` }}>
    <div style={{ height: 28, width: 160, borderRadius: 8, background: 'var(--background-neutral-subtle)' }} />
    <div style={{ height: 120, borderRadius: 16, background: 'var(--background-neutral-subtle)' }} />
    <div style={{ height: 72, borderRadius: 16, background: 'var(--background-neutral-subtle)' }} />
    <div style={{ height: 72, borderRadius: 16, background: 'var(--background-neutral-subtle)' }} />
    <Button variant="secondary" size="medium" label="Open sheet" onClick={onOpen} style={{ marginTop: 8, alignSelf: 'center' }} />
  </div>
)

function BottomSheetDemo({ open: openArg = false, size, platform, title, subtitle, action = true, dir }) {
  // `open` seeds the state (the examples pass open:true to show the sheet); the
  // interactive preview drives it via the "Open sheet" button + onClose.
  const [open, setOpen] = useState(openArg)
  useEffect(() => { setOpen(openArg) }, [openArg])
  // Android has no `small` — fall back to medium so the preview stays valid.
  const effectiveSize = platform === 'android' && size === 'small' ? 'medium' : size
  return (
    <div
      style={{
        position: 'relative',
        width: 393,
        height: 852,
        margin: '0 auto',
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: 44,
        border: '1px solid var(--border-base-default)',
        background: 'var(--background-base-default)',
      }}
    >
      <PreviewStatusBar platform={platform} />
      <PreviewScreen platform={platform} onOpen={() => setOpen(true)} />
      <BottomSheet
        open={open}
        size={effectiveSize}
        platform={platform}
        title={title}
        subtitle={subtitle}
        onClose={() => setOpen(false)}
        onAction={action ? () => {} : undefined}
        actionIcon={action ? <PlaceholderIcon /> : undefined}
        search={effectiveSize === 'fullscreen' ? <Search platform={platform} dir={dir} /> : undefined}
        dir={dir}
      >
        <div style={{ padding: '16px 24px', color: 'var(--text-base-default)', fontSize: 14 }}>
          Sheet content goes here
        </div>
      </BottomSheet>
    </div>
  )
}

export default {
  title: 'BottomSheet',
  category: 'Overlays',
  component: BottomSheet,
  render: BottomSheetDemo,
  description: 'Modal sheet that slides up from the bottom, supporting iOS glass and Android material surfaces. It animates in when open becomes true and is contained by its positioned parent (mount it in a full-screen root). iOS has small/medium/fullscreen; Android has only medium + fullscreen (small is iOS-only). iOS medium/small are liquid-glass panels with a centred glass toolbar (× close, aqua action); Android medium is a solid panel with a drag handle then a row of leading × close, a left-aligned title, and a trailing action (aqua icons). Fullscreen fills the screen below the host status bar with the toolbar + Search header — iOS keeps the glass toolbar over a dimming scrim; Android uses a material back-arrow toolbar with aqua icons and no scrim. The component does not render a device status bar — that belongs to the host screen.',
  guidelines: {
    decisions: [
      {
        title: 'Size decision',
        columns: ['Content', 'Use size'],
        rows: [
          { condition: 'Long list, filter panel, full form', use: 'fullscreen' },
          { condition: 'Decision prompt, option picker (4–8 items)', use: 'medium' },
          { condition: 'Quick confirm, single action, short tip', use: 'small' },
        ],
      },
    ],
    when: [
      'Presenting a contextual decision or selection without leaving the current screen',
      'The content is a sub-task within a larger flow (e.g. selecting a seat, choosing a date)',
      'The amount of content doesn\'t justify a full screen transition',
    ],
    whenNot: [
      'The task requires sustained focus and should not show the previous screen behind it — use a full-screen page transition instead',
      'The content is purely informational with no action required — use an inline expanded section or Expander',
      'You\'re stacking sheets — only one BottomSheet should be visible at a time',
    ],
    contentRules: [
      {
        title: 'Title writing',
        items: [
          '2–5 words; noun-based, describes what the user is selecting or reviewing',
          'Never use a question as a title — "Are you sure?" belongs in a confirmation dialog, not a sheet title',
          'Subtitle adds brief context; optional; max 1 line (not shown on Android medium)',
        ],
      },
    ],
    examples: [
      { do: 'Select seat', dont: 'Please choose your preferred seat', why: 'Short, noun-based title' },
      { do: 'Cancellation policy', dont: 'Here\'s what you need to know', why: 'Names the content, not the reading experience' },
      { do: 'Baggage options', dont: 'Baggage', why: '"Options" clarifies the user is making a selection' },
    ],
    dos: [
      'Always provide a way to dismiss the sheet — users must be able to close it',
      'Add a search bar (fullscreen) for sheets where the user will filter a long list',
      'Use the trailing action button for the single primary action on the sheet',
    ],
    donts: [
      'Open a BottomSheet from inside another BottomSheet',
      'Use fullscreen for fewer than ~8 items — use medium instead',
    ],
  },
  args: {
    platform: 'ios',
    size: 'medium',
    title: 'Title',
    subtitle: 'Subtitle',
    action: true,
    dir: 'ltr',
  },
  argTypes: {
    // `open` is driven by the preview's "Open sheet" button, not a control
    platform: {
      control: 'select',
      options: ['ios', 'android'],
      description: 'Platform style',
    },
    size: {
      control: 'select',
      // Android has only fullscreen + medium; `small` is iOS-only
      options: (args) => args.platform === 'android'
        ? ['medium', 'fullscreen']
        : ['small', 'medium', 'fullscreen'],
      description: 'Sheet height (small is iOS-only)',
    },
    title: {
      control: 'text',
      description: 'Sheet title',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle below title',
    },
    action: {
      control: 'boolean',
      description: 'Show the trailing action button (wired via onAction / actionIcon)',
    },
    onClose: {
      control: 'none',
      description: 'Called on scrim/close tap; renders the leading close button when provided',
    },
    onAction: {
      control: 'none',
      description: 'Optional — renders the trailing action button when provided',
    },
    actionIcon: {
      control: 'none',
      description: 'Icon rendered inside the action button',
    },
    search: {
      control: 'none',
      description: 'React node injected below the toolbar (fullscreen only)',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'iOS medium', args: { open: true, size: 'medium', platform: 'ios' } },
    { name: 'iOS small', args: { open: true, size: 'small', platform: 'ios' } },
    { name: 'iOS fullscreen', args: { open: true, size: 'fullscreen', platform: 'ios' } },
    { name: 'Android medium', args: { open: true, size: 'medium', platform: 'android' } },
    { name: 'Android fullscreen', args: { open: true, size: 'fullscreen', platform: 'android' } },
  ],
  arArgs: {
    title: 'العنوان',
    subtitle: 'العنوان الفرعي',
    dir: 'rtl',
  },
}
