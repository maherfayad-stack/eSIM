import { useState, useEffect } from 'react'
import { Dialog, Button, PlaceholderIcon } from 'design-system'

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

// The phone preview owns its status bar — the dialog does not render one.
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

// A simple mock app screen behind the dialog, so the scrim has something to dim.
const PreviewScreen = ({ platform, onOpen }) => (
  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', gap: 12, padding: `${STATUS_H[platform] + 12}px 16px 16px` }}>
    <div style={{ height: 28, width: 160, borderRadius: 8, background: 'var(--background-neutral-subtle)' }} />
    <div style={{ height: 120, borderRadius: 16, background: 'var(--background-neutral-subtle)' }} />
    <div style={{ height: 72, borderRadius: 16, background: 'var(--background-neutral-subtle)' }} />
    <div style={{ height: 72, borderRadius: 16, background: 'var(--background-neutral-subtle)' }} />
    <Button variant="secondary" size="medium" label="Open dialog" onClick={onOpen} style={{ marginTop: 8, alignSelf: 'center' }} />
  </div>
)

function DialogDemo({ open: openArg = false, platform, layout, title, description, icon, dir, primaryAction, secondaryAction, destructiveAction, action1, action2 }) {
  // `open` seeds the state (examples pass open:true); the preview drives it via
  // the "Open dialog" button + onClose.
  const [open, setOpen] = useState(openArg)
  useEffect(() => { setOpen(openArg) }, [openArg])

  const isRtl = dir === 'rtl'
  const close = () => setOpen(false)

  // iOS — role-named action props. Android — action1/action2.
  const iosProps = {
    layout,
    primaryAction: primaryAction ? { label: isRtl ? 'أساسي' : 'Primary', onClick: close } : undefined,
    secondaryAction: secondaryAction ? { label: isRtl ? 'ثانوي' : 'Secondary', onClick: close } : undefined,
    destructiveAction: destructiveAction ? { label: isRtl ? 'مُدَمِّر' : 'Destructive', onClick: close } : undefined,
  }
  const androidProps = {
    action1: action1 ? { label: isRtl ? 'الإجراء 1' : 'Action 1', onClick: close } : undefined,
    action2: action2 ? { label: isRtl ? 'الإجراء 2' : 'Action 2', onClick: close } : undefined,
  }

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
      {open && (
        <Dialog
          platform={platform}
          title={title}
          description={description}
          icon={icon && platform === 'android' ? <PlaceholderIcon /> : undefined}
          {...(platform === 'ios' ? iosProps : androidProps)}
          onClose={close}
          dir={dir}
        />
      )}
    </div>
  )
}

export default {
  title: 'Dialog',
  category: 'Overlays',
  component: Dialog,
  render: DialogDemo,
  description: 'A modal window that appears in front of app content to provide critical information or ask for a decision. Because it disables all app functionality and interrupts the user until an action is taken, use it sparingly. The Android "list" presentation renders a rounded surface with an optional leading icon, centered title and description, and a row of text actions (action1 / action2); the iOS presentation renders a frosted liquid-glass card (the same surface as ActionSheet) with a start-aligned title and description above pill buttons — stacked by default, or two side-by-side via layout. iOS actions are role-named props: primaryAction (aqua-filled), destructiveAction (coral), and secondaryAction (grey). The overlay is position: absolute, so it is contained by its positioned parent (mount it in a full-screen root).',
  guidelines: {
    when: [
      'A decision is required before the user can continue (e.g. discard changes, confirm cancellation)',
      'Critical information must be acknowledged before proceeding',
      'The interruption is justified — the consequence of ignoring it is significant',
    ],
    whenNot: [
      'Offering options without interrupting the flow — use a Menu or BottomSheet',
      'Showing a lightweight, non-blocking confirmation — use a Snackbar',
      'Presenting a sub-task or selection within a flow — use a BottomSheet',
    ],
    contentRules: [
      {
        title: 'Title writing',
        items: [
          'A short title is best — describe the decision or information in a few words',
          'Android title is centered; iOS title uses Title Case',
          'Avoid full sentences in the title — put detail in the description',
        ],
      },
      {
        title: 'Description writing',
        items: [
          'A description should be a short, complete sentence',
          'State the consequence of the action clearly so the choice is informed',
        ],
      },
    ],
    examples: [
      { do: 'Discard changes?', dont: 'Are you sure you want to discard the changes you have made?', why: 'Short title, detail moves to the description' },
      { do: 'Delete trip', dont: 'Trip', why: 'Names the action, not just the object' },
    ],
    dos: [
      'Keep actions to 2 on Android; the primary action sits at the trailing edge',
      'Use the destructive flag for irreversible actions (delete, cancel booking)',
      'Always provide a way to dismiss or cancel',
    ],
    donts: [
      'Stack multiple dialogs on top of each other',
      'Use a dialog for non-critical, ignorable information',
      'Write a question as the iOS button label — labels are verbs/nouns',
    ],
  },
  previewFull: true,
  previewPadding: 'none',
  args: {
    platform: 'ios',
    layout: 'stacked',
    title: 'A short title is best',
    description: 'A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.',
    icon: true,
    primaryAction: true,
    destructiveAction: true,
    secondaryAction: true,
    action1: true,
    action2: true,
    dir: 'ltr',
  },
  argTypes: {
    platform: {
      control: 'select',
      options: ['android', 'ios'],
      description: 'Platform presentation — Android list or iOS basic',
    },
    layout: {
      control: 'select',
      options: ['stacked', 'side-by-side'],
      description: 'iOS button arrangement — stacked column or two side-by-side',
      if: { arg: 'platform', eq: 'ios' },
    },
    title: {
      control: 'text',
      description: 'Dialog title',
    },
    description: {
      control: 'text',
      description: 'Supporting description line',
    },
    icon: {
      control: 'boolean',
      description: 'Show an icon above the title (Android only)',
      if: { arg: 'platform', eq: 'android' },
    },
    primaryAction: {
      control: 'boolean',
      description: 'Show the primary action — aqua-filled button (iOS)',
      if: { arg: 'platform', eq: 'ios' },
    },
    destructiveAction: {
      control: 'boolean',
      description: 'Show the destructive action — coral text, stacked only (iOS)',
      if: { arg: 'platform', eq: 'ios' },
    },
    secondaryAction: {
      control: 'boolean',
      description: 'Show the secondary action — grey button (iOS)',
      if: { arg: 'platform', eq: 'ios' },
    },
    action1: {
      control: 'boolean',
      description: 'Show Action 1 — the confirming action at the trailing edge (Android)',
      if: { arg: 'platform', eq: 'android' },
    },
    action2: {
      control: 'boolean',
      description: 'Show Action 2 (Android)',
      if: { arg: 'platform', eq: 'android' },
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Android', args: { open: true, platform: 'android' } },
    { name: 'Android no icon', args: { open: true, platform: 'android', icon: false } },
    { name: 'iOS stacked', args: { open: true, platform: 'ios', layout: 'stacked', title: 'A Short Title Is Best', description: 'A description should be a short, complete sentence.' } },
    { name: 'iOS side-by-side', args: { open: true, platform: 'ios', layout: 'side-by-side', title: 'A Short Title Is Best', description: 'A description should be a short, complete sentence.' } },
  ],
  arArgs: {
    title: 'العنوان المختصر هو الأفضل',
    description: 'الحوار هو نوع من النوافذ المنبثقة التي تظهر أمام محتوى التطبيق لتقديم معلومات مهمة، أو لحث المستخدم على اتخاذ قرار.',
    dir: 'rtl',
  },
}
