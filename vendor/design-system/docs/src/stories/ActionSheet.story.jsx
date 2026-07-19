import { useState, useEffect } from 'react'
import { ActionSheet, BottomSheet } from 'design-system'

// Placeholder icon from src/icons/line-icons/placeholder.svg
const PlaceholderIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.5 3.25C20.1904 3.25 20.75 3.80964 20.75 4.5V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H19.5ZM4.25 19.5C4.25 19.6381 4.36193 19.75 4.5 19.75H19.043L4.25 4.95703V19.5ZM19.75 19.043V4.5C19.75 4.36193 19.6381 4.25 19.5 4.25H4.95703L19.75 19.043Z" />
  </svg>
)

// Send (up-arrow) icon for the iOS BottomSheet's trailing action.
const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Close (×) glyph for the Android host header (the DS BottomSheet renders a
// back-arrow on Android fullscreen, so the preview supplies its own × close).
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

const STATUS_H = { ios: 54, android: 28 }

// Top offset of the host's close button (its top-left), so the ActionSheet's
// top-left lines up with it, HIG-style.
const ANCHOR = {
  ios: 70,      // 54 top-inset + 16 header padding (glass × fills the 44px toolbar)
  android: 50,  // 28 top-inset + 16 header pad + (56-44)/2 to centre × in the toolbar
}

// The phone preview owns its status bar — the sheet does not render one.
const PreviewStatusBar = ({ platform }) => {
  const base = {
    // above both overlays (BottomSheet z-100, ActionSheet z-1000) so the status
    // bar stays crisp on top, as on a real device / the HIG example
    position: 'absolute', top: 0, left: 0, right: 0, height: STATUS_H[platform],
    display: 'flex', alignItems: 'center', color: 'var(--text-base-default)', zIndex: 1001,
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

// Skeleton placeholder body shown inside the host BottomSheet — the preview is
// about the ActionSheet anchoring, so the host content stays generic.
const SkeletonBody = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 16 }}>
    <div style={{ height: 28, width: 160, borderRadius: 8, background: 'var(--background-neutral-subtle)' }} />
    <div style={{ height: 120, borderRadius: 16, background: 'var(--background-neutral-subtle)' }} />
    <div style={{ height: 72, borderRadius: 16, background: 'var(--background-neutral-subtle)' }} />
    <div style={{ height: 72, borderRadius: 16, background: 'var(--background-neutral-subtle)' }} />
  </div>
)

function ActionSheetDemo({ open: openArg = false, platform, title, description, dir, action1, action2, action3, action4 }) {
  // `open` drives the ActionSheet; the host BottomSheet stays open and its
  // close (×) button opens the sheet — like cancelling a draft in Mail (HIG).
  const [open, setOpen] = useState(openArg)
  useEffect(() => { setOpen(openArg) }, [openArg])

  const isRtl = dir === 'rtl'
  const labelFor = n => (isRtl ? `الإجراء ${n}` : `Action ${n}`)
  const enabled = { 1: action1, 2: action2, 3: action3, 4: action4 }

  // iOS — a stacked column of pill buttons; the last (Action 1) reads destructive.
  const actions = [4, 3, 2, 1]
    .filter(n => enabled[n])
    .map(n => ({ label: labelFor(n), destructive: n === 1, onClick: () => setOpen(false) }))

  // Android — a menu list of rows with leading icon, label, shortcut + chevron.
  const items = [1, 2, 3, 4]
    .filter(n => enabled[n])
    .map(n => ({
      icon: <PlaceholderIcon />,
      label: isRtl ? 'تسمية' : 'Label',
      shortcut: '⌘C',
      chevron: true,
      destructive: n === 1,
      onClick: () => setOpen(false),
    }))

  return (
    <div
      className="actionsheet-preview"
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

      {/* Host screen — a fullscreen sheet whose close button opens the ActionSheet,
          mirroring the HIG example. Content is just skeleton.
          iOS: the DS glass × + aqua send action.
          Android: no back-arrow / no trailing action — a custom × is overlaid
          below, since the DS Android fullscreen close is a back-arrow. */}
      <BottomSheet
        open
        size="fullscreen"
        platform={platform}
        title={isRtl ? 'العنوان' : 'Title'}
        onClose={platform === 'ios' ? () => setOpen(true) : undefined}
        onAction={platform === 'ios' ? () => {} : undefined}
        actionIcon={platform === 'ios' ? <SendIcon /> : undefined}
        dir={dir}
      >
        <SkeletonBody />
      </BottomSheet>

      {platform === 'android' && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: ANCHOR.android,
            insetInlineStart: 16,
            zIndex: 101,            // above the BottomSheet panel (100), below the ActionSheet (1000)
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            border: 'none',
            background: 'transparent',
            color: 'var(--icon-secondary-default)',
            cursor: 'pointer',
          }}
        >
          <XIcon />
        </button>
      )}

      {/* The ActionSheet pops up when the close button is pressed, anchored so its
          top-left lines up with that button (overlay alignment overridden below). */}
      {open && (
        <ActionSheet
          platform={platform}
          title={title}
          description={description}
          actions={actions}
          items={items}
          onClose={() => setOpen(false)}
          dir={dir}
        />
      )}

      <style>{`
        .actionsheet-preview .action-sheet-overlay {
          align-items: flex-start;
          justify-content: flex-start;
          padding: ${ANCHOR[platform]}px 16px var(--space);
        }
      `}</style>
    </div>
  )
}

export default {
  title: 'ActionSheet',
  category: 'Overlays',
  component: ActionSheet,
  render: ActionSheetDemo,
  description: 'A short menu of actions tied to the current item or screen, presented over the content. Unlike a Dialog it does not pose a blocking question — it offers a small set of choices, any of which (including dismissing) is a valid outcome. The iOS presentation reuses the iOS Dialog\'s frosted liquid-glass card: an optional title/description above a stacked column of pill buttons, with the last action coloured destructive. The Android presentation is a Material menu list — an elevated surface of rows, each with an optional leading icon, label, and trailing shortcut/chevron. Like BottomSheet, the overlay is position: absolute and is contained by its positioned parent (mount it in a full-screen root). This preview mirrors the iOS HIG example: a fullscreen sheet whose close (×) button opens the ActionSheet, with the sheet\'s top-left anchored to that button. Pass iOS buttons via `actions` ({ label, onClick, destructive }) and Android rows via `items` ({ icon, label, shortcut, chevron, onClick, destructive, disabled }).',
  guidelines: {
    when: [
      'Offering 2–5 actions that operate on the item or screen the user just engaged (a row, a card, a "more" button)',
      'Surfacing a destructive option alongside safe ones — mark it destructive and place it last',
    ],
    whenNot: [
      'You need a yes/no answer to a blocking question — use a Dialog',
      'The list is long, scrollable, or has selection, sections, or input — use a BottomSheet',
      'There is a single action — trigger it directly with a Button or IconButton',
    ],
    contentRules: [
      {
        title: 'Action labels',
        items: [
          'Verb-first — name the action, not the object: "Share trip", "Delete photo"',
          'Sentence case, no terminal period',
          'Keep the set short and non-overlapping; order by likelihood with any destructive action last',
        ],
      },
      {
        title: 'Title & description (iOS)',
        items: [
          'Optional — add a title/description only when the actions need framing',
          'Use it to state a consequence ("This can\'t be undone")',
        ],
      },
    ],
    examples: [
      { do: 'Share trip', dont: 'Sharing options', why: 'Verb-first names the action' },
      { do: 'Delete photo', dont: 'Remove this item from your library?', why: 'A label, not a question — that belongs in a Dialog' },
    ],
    dos: [
      'Render it conditionally (no open prop) and dismiss on scrim tap',
      'Place a destructive action last so it sits nearest the thumb and reads as the exception',
      'Match the platform of the host app',
    ],
    donts: [
      'Use it for a decision the user must not skip — use a Dialog',
      'Pile in more than ~5 actions',
      'Write a question as a button label',
    ],
  },
  args: {
    platform: 'ios',
    title: 'A short title is best',
    description: 'A description should be a short, complete sentence.',
    action1: true,
    action2: true,
    action3: true,
    action4: true,
    dir: 'ltr',
  },
  argTypes: {
    // `open` is driven by the host sheet's close (×) button, not a control
    platform: {
      control: 'select',
      options: ['ios', 'android'],
      description: 'Platform presentation — iOS glass card or Android menu list',
    },
    title: {
      control: 'text',
      description: 'Optional title (iOS only)',
      if: { arg: 'platform', eq: 'ios' },
    },
    description: {
      control: 'text',
      description: 'Optional supporting description (iOS only)',
      if: { arg: 'platform', eq: 'ios' },
    },
    action1: {
      control: 'boolean',
      description: 'Show Action 1 (destructive — sits at the bottom on iOS, last row on Android)',
    },
    action2: { control: 'boolean', description: 'Show Action 2' },
    action3: { control: 'boolean', description: 'Show Action 3' },
    action4: { control: 'boolean', description: 'Show Action 4' },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'iOS', args: { open: true, platform: 'ios' } },
    { name: 'Android', args: { open: true, platform: 'android' } },
  ],
  arArgs: {
    title: 'العنوان المختصر هو الأفضل',
    description: 'ينبغي أن يكون الوصف جملة قصيرة وكاملة.',
    dir: 'rtl',
  },
}
