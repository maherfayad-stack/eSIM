import { Button, Tag, TabBar } from 'design-system'
import SectionTitle from '../components/SectionTitle'
import Icon from '../components/Icon'
import IllustrationIcon from '../components/IllustrationIcon'
import StatusBar from '../components/StatusBar'
import Price from '../components/Price'

import avatarIconSvg from '../assets/illustrations/avatar-icon.svg?raw'
import walletIllustrationSvg from '../assets/illustrations/wallet.svg?raw'
import productFlightsSvg from '../assets/illustrations/product-flights.svg?raw'
import productStaysSvg from '../assets/illustrations/product-stays.svg?raw'
import productActivitiesSvg from '../assets/illustrations/product-activities.svg?raw'
import quicklink1Svg from '../assets/illustrations/quicklink-1.svg?raw'
import quicklink2Svg from '../assets/illustrations/quicklink-2.svg?raw'
import quicklink3Svg from '../assets/illustrations/quicklink-3.svg?raw'
import quicklink4Svg from '../assets/illustrations/quicklink-4.svg?raw'
import addonAirportTransferSvg from 'design-system/src/icons/visual-icons/addonAirportTransfer.svg?raw'
import chevronRightSvg from 'design-system/src/icons/line-icons/chevronRight.svg?raw'
import serviceCarRentalSvg from 'design-system/src/icons/visual-icons/serviceCarRental.svg?raw'
import addonInsuranceSvg from 'design-system/src/icons/visual-icons/addonInsurance.svg?raw'
import productChaletsSvg from 'design-system/src/icons/product-icons/productChalets.svg?raw'
import serviceOverflowSvg from 'design-system/src/icons/visual-icons/serviceOverflow.svg?raw'
import homeSvg from '../assets/icons/home.svg?raw'
import compassSvg from 'design-system/src/icons/line-icons/compass.svg?raw'
import calendarStartSvg from '../assets/icons/calendarStart.svg?raw'
import discountSvg from 'design-system/src/icons/line-icons/discount.svg?raw'
import userSvg from 'design-system/src/icons/line-icons/user.svg?raw'

import esimChip from '../assets/esim-flow/figma/esim-chip.png'
import londonHero from '../assets/images/london-hero.jpg'
import activityThumb from '../assets/images/activity-thumb.jpg'
import dealCard1 from '../assets/images/deal-card-1.jpg'
import dealCard2 from '../assets/images/deal-card-2.jpg'
import dealCard3 from '../assets/images/deal-card-3.jpg'
import dealCard4 from '../assets/images/deal-card-4.jpg'

import './HomepageScreen.css'

const PRODUCT_CARDS = [
  { key: 'flights', icon: productFlightsSvg, label: 'Flights' },
  { key: 'stays', icon: productStaysSvg, label: 'Stays' },
  { key: 'activities', icon: productActivitiesSvg, label: 'Activities' },
]

const QUICK_LINKS = [
  { key: 'transfers', icon: quicklink1Svg, label: 'Airport Transfers' },
  { key: 'train', icon: quicklink2Svg, label: 'Haramain Train' },
  { key: 'sixflags', icon: quicklink3Svg, label: 'Six Flags Qiddiya City' },
  { key: 'more', icon: quicklink4Svg, label: 'See more' },
]

const DEALS = [
  { key: 'deal1', image: dealCard1, title: 'End the season on a high note', code: 'TRAVEL' },
  { key: 'deal2', image: dealCard2, title: 'Check in before the season checks out', code: 'STAYLONG' },
  { key: 'deal3', image: dealCard3, title: 'Embark on a serene Umrah', code: 'UMRAH' },
  { key: 'deal4', image: dealCard4, title: 'Travel in comfort & style!', code: 'TRANSFER' },
]

const OTHER_SERVICES = [
  { key: 'insurance', icon: addonInsuranceSvg, label: 'Insurance' },
  { key: 'car', icon: serviceCarRentalSvg, label: 'Car rental' },
  { key: 'holidays', icon: productChaletsSvg, label: 'Holidays' },
  { key: 'more', icon: serviceOverflowSvg, label: 'More' },
]

const TAB_ITEMS = [
  { icon: <Icon svg={homeSvg} size={24} />, label: 'Home' },
  { icon: <Icon svg={compassSvg} size={24} />, label: 'Explore' },
  { icon: <Icon svg={calendarStartSvg} size={24} />, label: 'My Trips' },
  { icon: <Icon svg={discountSvg} size={24} />, label: 'Top offers' },
  { icon: <Icon svg={userSvg} size={24} />, label: 'Profile' },
]

export default function HomepageScreen({ onViewEsims }) {
  return (
    <div className="homepage">
      <div className="homepage__scroll">
        <header className="hp-header">
          <StatusBar />
          <div className="hp-welcome">
            <div className="hp-welcome__row">
              <div className="hp-welcome__profile">
                <span className="hp-welcome__avatar">
                  <IllustrationIcon svg={avatarIconSvg} size={36} />
                </span>
                <div className="hp-welcome__copy">
                  <p className="hp-welcome__name">Hi Muhammad</p>
                  <p className="hp-welcome__prompt">What will you explore next?</p>
                </div>
              </div>

              <div className="hp-welcome__points">
                <div className="hp-welcome__points-row">
                  <span className="hp-welcome__wallet">
                    <IllustrationIcon svg={walletIllustrationSvg} size={24} />
                  </span>
                  <span className="hp-welcome__points-value">1,200</span>
                </div>
                <span className="hp-welcome__points-label">Almosafer Points</span>
              </div>
            </div>
          </div>

          <div className="hp-products">
            {PRODUCT_CARDS.map((card) => (
              <div className="hp-product-card" key={card.key}>
                <IllustrationIcon svg={card.icon} size={48} className="hp-product-card__icon" />
                <span className="hp-product-card__label">{card.label}</span>
              </div>
            ))}
          </div>

          <div className="hp-quicklinks">
            {QUICK_LINKS.map((link) => (
              <div className="hp-quicklink" key={link.key}>
                <div className="hp-quicklink__icon-wrap">
                  <IllustrationIcon svg={link.icon} size={40} className="hp-quicklink__icon" />
                </div>
                <span className="hp-quicklink__label">{link.label}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="homepage__body">
          <div className="hp-esim-banner">
            <img src={esimChip} alt="" className="hp-esim-icon hp-esim-icon--sm" />
            <div className="hp-esim-banner__text">
              <p className="hp-esim-banner__title">You have 2 eSIMs for your trip to London ready to install</p>
              <p className="hp-esim-banner__desc">Install them now so it's ready before you travel.</p>
              <Button variant="primary" size="small" label="View eSIMs" onClick={onViewEsims} />
            </div>
          </div>

          <section className="hp-section">
            <SectionTitle title="Upcoming trip" actionLabel="View all" size="compact" />

            <div className="hp-trip-thread">
              <div className="hp-trip-card">
                <div className="hp-trip-card__media">
                  <img src={londonHero} alt="London" className="hp-trip-card__image" />
                  <div className="hp-trip-card__scrim" />
                  <div className="hp-trip-card__hero-text">
                    <p className="hp-trip-card__city">London</p>
                    <p className="hp-trip-card__dates">16 Dec 2025 - 1 Jan 2026</p>
                  </div>
                </div>
                <div className="hp-trip-card__info">
                  <p className="hp-trip-card__hotel">Pullman London St Pancras Excelsior Resort</p>
                  <Tag label="Confirmed" variant="success" style="tinted" />
                </div>
              </div>

              <div className="hp-thread-connector" />

              <div className="hp-thread-card hp-thread-card--row">
                <div className="hp-esim-icon-new">
                  <img src={esimChip} alt="" className="hp-esim-icon hp-esim-icon--md" />
                </div>
                <div className="hp-thread-card__text">
                  <p className="hp-thread-card__title">Don't forget to Install your eSIM</p>
                  <p className="hp-thread-card__subtitle">you still need to Install to be able to use</p>
                </div>
                <Button variant="primary" size="small" label="View eSIMs" onClick={onViewEsims} />
              </div>

              <div className="hp-thread-connector" />

              <div className="hp-thread-card">
                <p className="hp-enhance__label">ENHANCE YOUR TRIP</p>
                <div className="hp-enhance__row">
                  <Icon svg={addonAirportTransferSvg} size={40} />
                  <div className="hp-enhance__text">
                    <p className="hp-enhance__title">{'{{ Add-on title }}'}</p>
                    <p className="hp-enhance__subtitle">Add-on sub content default text</p>
                    <div className="hp-enhance__price-row">
                      <Price value="66" strikethrough color="var(--text-warning-default)" />
                      <Price value="45" color="var(--text-link-default)" />
                    </div>
                  </div>
                  <Icon svg={chevronRightSvg} size={16} className="hp-enhance__chevron" />
                </div>
                <div className="hp-enhance__row">
                  <Icon svg={addonAirportTransferSvg} size={40} />
                  <div className="hp-enhance__text">
                    <p className="hp-enhance__title">{'{{ Add-on title }}'}</p>
                    <p className="hp-enhance__subtitle">Add-on sub content default text</p>
                    <div className="hp-enhance__price-row">
                      <Price value="66" strikethrough color="var(--text-warning-default)" />
                      <Price value="45" color="var(--text-link-default)" />
                    </div>
                  </div>
                  <Icon svg={chevronRightSvg} size={16} className="hp-enhance__chevron" />
                </div>
              </div>
              <div className="hp-thread-connector" />
              <div className="hp-thread-card hp-thread-card--row">
                <img src={activityThumb} alt="" className="hp-thread-card__thumb" />
                <div className="hp-thread-card__text">
                  <p className="hp-thread-card__title">Find activities in {'{{ City }}'}</p>
                  <p className="hp-thread-card__subtitle">Book incredible toors, events and activities</p>
                </div>
                <Icon svg={chevronRightSvg} size={24} className="hp-thread-card__chevron" />
              </div>
            </div>
          </section>

          <section className="hp-section">
            <SectionTitle title="Special deals for you" actionLabel="View all" size="compact" />
            <div className="hp-deals-grid">
              {DEALS.map((deal) => (
                <div className="hp-deal-card" key={deal.key}>
                  <img src={deal.image} alt="" className="hp-deal-card__image" />
                  <div className="hp-deal-card__content">
                    <p className="hp-deal-card__title">{deal.title}</p>
                    <div className="hp-deal-card__code">
                      <span>
                        Code: <strong>{deal.code}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <TabBar items={TAB_ITEMS} value={0} onChange={() => {}} className="homepage__tabbar" />
    </div>
  )
}
