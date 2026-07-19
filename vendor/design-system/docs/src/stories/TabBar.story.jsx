import { useState, useEffect } from 'react'
import { TabBar } from 'design-system'

// Real design-system line-icons (filled variants — TabBar uses filled icons),
// imported from source so they never drift.
import chaletRaw from '../../../src/icons/line-icons/chaletFilled.svg?raw'
import compassRaw from '../../../src/icons/line-icons/compassFilled.svg?raw'
import calendarRaw from '../../../src/icons/line-icons/calendarFilled.svg?raw'
import discountRaw from '../../../src/icons/line-icons/discountFilled.svg?raw'
import userCircleRaw from '../../../src/icons/line-icons/userCircleFilled.svg?raw'

// Injects a raw SVG (each uses fill="currentColor", so it tints with the tab state)
const Icon = ({ raw }) => (
  <span style={{ display: 'flex', width: '100%', height: '100%' }} dangerouslySetInnerHTML={{ __html: raw }} />
)

const HomeIcon = () => <Icon raw={chaletRaw} />
const ExploreIcon = () => <Icon raw={compassRaw} />
const TripsIcon = () => <Icon raw={calendarRaw} />
const OffersIcon = () => <Icon raw={discountRaw} />
const ProfileIcon = () => <Icon raw={userCircleRaw} />

const tabItems = [
  { icon: <HomeIcon />,    label: 'Home' },
  { icon: <ExploreIcon />, label: 'Explore' },
  { icon: <TripsIcon />,   label: 'My Trips' },
  { icon: <OffersIcon />,  label: 'Top offers' },
  { icon: <ProfileIcon />, label: 'Profile' },
]

function TabBarDemo({ platform, dir, value: valueArg = 1 }) {
  // Playground `value` is 1-based (1–5) for readability; TabBar's prop is a
  // 0-based index, so map down by one. Tab taps still update the tab locally.
  const [value, setValue] = useState(valueArg - 1)
  useEffect(() => { setValue(valueArg - 1) }, [valueArg])
  const items = dir === 'rtl'
    ? [
        { icon: <HomeIcon />,    label: 'الرئيسية'   },
        { icon: <ExploreIcon />, label: 'استكشاف'    },
        { icon: <TripsIcon />,   label: 'رحلاتي'     },
        { icon: <OffersIcon />,  label: 'أفضل عروض' },
        { icon: <ProfileIcon />, label: 'الملف'      },
      ]
    : tabItems
  return (
    <div style={{ width: '100%', maxWidth: 390 }}>
      <TabBar items={items} value={value} onChange={setValue} platform={platform} dir={dir} />
    </div>
  )
}

export default {
  title: 'TabBar',
  category: 'Navigation',
  component: TabBar,
  render: TabBarDemo,
  description: 'Bottom navigation bar for switching between 3–5 top-level destinations, controlled via value and onChange. Platform-aware: iOS renders a liquid-glass pill with a subtle selection capsule behind the active tab and native SF Pro labels; Android renders a flat material bar with an aqua-tinted pill behind the active icon. The active icon and label tint aqua — pass filled icon variants so the 24px glyph reads clearly.',
  guidelines: {
    when: [
      'Navigating between 3–5 top-level destinations that are always reachable',
      'Each destination is a distinct vertical (Flights, Hotels, Trips, Account)',
    ],
    whenNot: [
      'The user is mid-flow (booking steps, form screens) — hide the TabBar in deep flows',
      'The choices are parallel views of one screen rather than separate destinations — use SegmentedControl',
      'The destinations are not peer-level (one is a sub-section of another)',
    ],
    contentRules: [
      {
        title: 'Item labels',
        items: [
          '1 word per tab; noun, not verb',
          'Matches the product vertical name exactly — do not abbreviate or reframe',
          'Consistent casing with the rest of the app (sentence case)',
        ],
      },
    ],
    examples: [
      { do: 'Flights', dont: 'Fly', why: 'Noun labels name the destination, not the action' },
      { do: 'Stays', dont: 'Book hotels', why: 'Keep to 1 word matching the product vertical' },
      { do: 'Trips', dont: 'My trips', why: 'Possessive framing is unnecessary' },
      { do: 'Account', dont: 'Profile settings', why: 'Keep it short; settings belongs inside, not in the tab label' },
    ],
    dos: [
      'Keep icon and label in sync — the icon should be recognizable without the label',
      'Use filled icon variants — the glyph tints aqua when active and reads clearly at 24px',
      'Use the same icons across platforms; only the visual treatment (glass vs flat) differs',
    ],
    donts: [
      'Add more than 5 items — use a secondary menu for overflow destinations',
      'Change the active tab in response to scroll position',
    ],
  },
  previewFull: true,
  previewPadding: 'none',
  args: {
    platform: 'ios',
    value: 1,
    dir: 'ltr',
  },
  argTypes: {
    platform: {
      control: 'select',
      options: ['ios', 'android'],
      description: 'Platform style variant',
    },
    items: {
      control: 'none',
      description: 'Array of { icon, label } tab items',
    },
    value: {
      control: 'number',
      min: 1,
      max: 5,
      description: 'Active tab (1 = Home, 2 = Explore, 3 = My Trips, 4 = Top offers, 5 = Profile)',
    },
    onChange: {
      control: 'none',
      description: 'Called with the tapped tab index',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction',
    },
  },
  examples: [
    { name: 'iOS', args: { platform: 'ios' } },
    { name: 'Android', args: { platform: 'android' } },
    { name: 'iOS RTL', args: { platform: 'ios', dir: 'rtl' } },
  ],
}
