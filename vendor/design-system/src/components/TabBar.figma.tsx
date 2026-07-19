// Code Connect mapping for TabBar — verified against Figma node 2831:22741 ("Tab Bar").
// Figma props: State (Home|Explore|Bookings|Top offers|Profile = active tab), Platform (Android|IOS).
import figma from '@figma/code-connect'
import { TabBar } from './TabBar'

figma.connect(TabBar, 'https://www.figma.com/design/8nasqgUrdKsT8JgQRBHwPB/Styles---Components?node-id=2831-22741', {
  props: {
    platform: figma.enum('Platform', { IOS: 'ios', Android: 'android' }),
    value: figma.enum('State', { Home: 0, Explore: 1, Bookings: 2, 'Top offers': 3, Profile: 4 }),
  },
  example: ({ platform, value }) => (
    <TabBar
      platform={platform}
      value={value}
      onChange={() => {}}
      items={[
        { icon: null, label: 'Home' },
        { icon: null, label: 'Explore' },
        { icon: null, label: 'Bookings' },
        { icon: null, label: 'Top offers' },
        { icon: null, label: 'Profile' },
      ]}
    />
  ),
})
