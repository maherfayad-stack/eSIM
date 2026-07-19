import { useState } from 'react'
import { Snackbar, Button } from 'design-system'

function SnackbarDemo({ message, duration, dir }) {
  const [show, setShow] = useState(false)
  return (
    <div style={{ position: 'relative', height: 120, width: '100%', maxWidth: 390, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
        <Snackbar
          message={message}
          show={show}
          duration={duration}
          onClose={() => setShow(false)}
          dir={dir}
        />
      </div>
      <Button variant="secondary" size="medium" label="Show snackbar" onClick={() => setShow(true)} style={{ margin: '16px auto', display: 'block' }} />
    </div>
  )
}

export default {
  title: 'Snackbar',
  category: 'Feedback',
  component: Snackbar,
  render: SnackbarDemo,
  description: 'Temporary non-blocking notification. Auto-dismisses after duration ms. Use for lightweight confirmation or nudge copy only — not for errors (use Banner instead).',
  guidelines: {
    contentRules: [
      {
        title: 'Intent patterns',
        items: [
          'Confirmation: "Seat preference saved"',
          'Nudge: "You can change this later in settings"',
          'Tip: "Tap and hold to reorder"',
        ],
      },
      {
        title: 'Message writing',
        items: [
          'Under 80 characters; most important words first',
          'Self-contained — must make sense without additional context',
          'No punctuation unless grammatically required',
        ],
      },
    ],
    when: [
      'Providing lightweight, temporary feedback about a recent action',
      'The user does not need to take further action',
    ],
    whenNot: [
      'The message is a warning, error, or critical → use Banner (or System Banner when available)',
      'The content requires user action',
      'The user must read the message before proceeding',
    ],
    selfCheck: [
      'Will the message still make sense if it auto-dismisses without interaction?',
      'Could this be critical or blocking? If yes, use Banner instead',
    ],
  },
  previewPadding: 'none',
  args: {
    message: 'Seat preference saved',
    duration: 3000,
    dir: 'ltr',
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Notification message',
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss delay in ms',
      min: 1000,
      step: 500,
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'Saved', args: { message: 'Seat preference saved' } },
    { name: 'Copied', args: { message: 'Promo code copied' } },
    { name: 'Removed', args: { message: 'Removed from saved trips' } },
  ],
  arArgs: {
    message: 'تم حفظ تفضيل المقعد',
    dir: 'rtl',
  },
}
