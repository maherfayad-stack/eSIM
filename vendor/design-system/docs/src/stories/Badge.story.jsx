import { Badge } from 'design-system'

// notifications.svg from src/icons/line-icons/notifications.svg
const NotificationsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
    <path d="M12 4C12.2761 4 12.5 4.22386 12.5 4.5C12.5 4.77614 12.2761 5 12 5H4.5C4.4337 5 4.37013 5.02636 4.32324 5.07324C4.27636 5.12013 4.25 5.1837 4.25 5.25V19.5C4.25 19.5663 4.27636 19.6299 4.32324 19.6768C4.37013 19.7236 4.4337 19.75 4.5 19.75H18.75C18.8163 19.75 18.8799 19.7236 18.9268 19.6768C18.9736 19.6299 19 19.5663 19 19.5V12C19 11.7239 19.2239 11.5 19.5 11.5C19.7761 11.5 20 11.7239 20 12V19.5C20 19.8315 19.8682 20.1494 19.6338 20.3838C19.3994 20.6182 19.0815 20.75 18.75 20.75H4.5C4.16848 20.75 3.85063 20.6182 3.61621 20.3838C3.38179 20.1494 3.25 19.8315 3.25 19.5V5.25C3.25 4.91848 3.38179 4.60063 3.61621 4.36621C3.85063 4.13179 4.16848 4 4.5 4H12ZM18.375 2.5C20.1009 2.5 21.5 3.89911 21.5 5.625C21.5 7.35089 20.1009 8.75 18.375 8.75C16.6491 8.75 15.25 7.35089 15.25 5.625C15.25 3.89911 16.6491 2.5 18.375 2.5ZM18.375 3.5C17.2014 3.5 16.25 4.45139 16.25 5.625C16.25 6.7986 17.2014 7.75 18.375 7.75C19.5486 7.75 20.5 6.7986 20.5 5.625C20.5 4.45139 19.5486 3.5 18.375 3.5Z" />
  </svg>
)

function BadgeDemo({ variant, count, max, dir }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <Badge variant={variant} count={count} max={max} dir={dir}>
        <NotificationsIcon />
      </Badge>
      <Badge variant={variant} count={count} max={max} />
    </div>
  )
}

export default {
  title: 'Badge',
  category: 'Content',
  component: Badge,
  render: BadgeDemo,
  description: 'Notification indicator overlaid on an icon or standalone. variant="alert" shows numeric count; variant="new" shows static NEW label. Wrap children to overlay.',
  guidelines: {
    decisions: [
      {
        title: 'Variant decision',
        columns: ['Need', 'Use variant'],
        rows: [
          { condition: 'Numeric count (notifications, items in cart)', use: 'alert' },
          { condition: '"New" label on a feature or item', use: 'new' },
        ],
      },
    ],
    when: [
      'Indicating unread notifications, unseen items, or pending actions on a navigation icon',
      'Flagging a new feature, tab, or item with a "NEW" marker',
    ],
    whenNot: [
      'Communicating status of an item — use Tag or Callout inline',
      'The count is not meaningful to the user (e.g. internal IDs)',
    ],
    dos: [
      'Set max={99} (default) to cap large counts — display as "99+"',
      'Wrap the target icon as children for automatic positioning',
    ],
    donts: [
      'Show a Badge with count={0} — hide it when there\'s nothing to indicate',
      'Use variant="new" for more than a few weeks after launch — remove once the feature is established',
    ],
  },
  args: {
    variant: 'alert',
    count: 5,
    max: 99,
    dir: 'ltr',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['alert', 'new'],
      description: '"alert" = numeric count, "new" = static NEW label',
    },
    count: {
      control: 'number',
      description: 'Numeric count (alert type only)',
      min: 0,
    },
    max: {
      control: 'number',
      description: 'Count cap — displays as "99+" when exceeded',
      min: 1,
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction applied to the anchor wrapper',
    },
  },
  examples: [
    { name: 'Alert (3)', args: { variant: 'alert', count: 3 } },
    { name: 'Alert (99+)', args: { variant: 'alert', count: 150 } },
    { name: 'New', args: { variant: 'new' } },
    { name: 'Zero', args: { variant: 'alert', count: 0 } },
  ],
  arArgs: {
    dir: 'rtl',
  },
}
