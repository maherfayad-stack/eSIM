import { Button, Cell, Separator, Tag } from 'design-system'
import SheetShell from '../components/SheetShell'
import SectionTitle from '../components/SectionTitle'
import Icon from '../components/Icon'
import Price from '../components/Price'
import checkSvg from '../assets/misc/check-line.svg?raw'
import airlineLogoSvg from '../assets/misc/airline-logo.svg?raw'
import productHotelSvg from 'design-system/src/icons/product-icons/productHotel.svg?raw'
import addonAirportTransferSvg from 'design-system/src/icons/visual-icons/addonAirportTransfer.svg?raw'
import addonSmartCheckInSvg from 'design-system/src/icons/visual-icons/addonSmartCheckIn.svg?raw'
import addonBaggageProtectionSvg from 'design-system/src/icons/visual-icons/addonBaggageProtection.svg?raw'
import rewardCardSvg from 'design-system/src/icons/line-icons/rewardCard.svg?raw'
import creditCardSvg from 'design-system/src/icons/line-icons/creditCard.svg?raw'
import questionCircleSvg from '../assets/icons/questionCircle.svg?raw'
import headsetSvg from 'design-system/src/icons/line-icons/headset.svg?raw'
import esimChip from '../assets/esim-flow/figma/esim-chip.png'
import './BookingConfirmationScreen.css'

const ADD_ONS = [
  { key: 'esim', image: esimChip, title: 'eSIM', subtext: 'you still need to activate to be able to use' },
  { key: 'checkin', icon: addonSmartCheckInSvg, title: 'Auto Check-in' },
  { key: 'baggage', icon: addonBaggageProtectionSvg, title: 'Baggage Protection' },
]

export default function BookingConfirmationScreen({ onClose }) {
  return (
    <SheetShell title="Booking confirmed" onClose={onClose} className="booking-confirmation">
      <div className="booking-confirmation__scroll">
      <div className="booking-confirmation__body">
        <section className="bc-success">
          <div className="bc-success__logos">
            <div className="bc-success__logo-badge">
              <Icon svg={airlineLogoSvg} size={44} className="bc-success__logo-icon" />
            </div>
            <div className="bc-success__check-badge">
              <Icon
                svg={checkSvg}
                size={24}
                className="bc-success__check-icon"
                style={{ '--stroke-0': 'var(--color-white-static, #fff)' }}
              />
            </div>
          </div>
          <div className="bc-success__text">
            <p className="bc-success__title">Your booking is confirmed</p>
            <p className="bc-success__subtitle">Round-trip | RUH to CAI | Feb - 10 Feb</p>
          </div>
          <Button variant="primary-inverted" size="small" label="Booking details" />
        </section>

        <section className="bc-section">
          <SectionTitle title="Complete your trip" />

          <div className="bc-cards">
            <div className="bc-card">
              <span className="bc-card__tag">Exclusive rates on hotels</span>
              <div className="bc-card__row">
                <div className="bc-card__icon">
                  <Icon svg={productHotelSvg} size={40} />
                </div>
                <div className="bc-card__text">
                  <p className="bc-card__title">Enjoy 12% discount on hotels</p>
                  <p className="bc-card__subtitle">Special hotel deals with your flight booking.</p>
                </div>
              </div>
              <Separator />
              <div className="bc-card__footer">
                <p className="bc-card__code">
                  Use code: <strong>CSSTAY12</strong>
                </p>
                <Button variant="primary-inverted" size="small" label="View hotels" />
              </div>
            </div>

            <div className="bc-card">
              <div className="bc-card__row">
                <div className="bc-card__icon">
                  <Icon svg={addonAirportTransferSvg} size={56} />
                </div>
                <div className="bc-card__text">
                  <p className="bc-card__title">Skip the Taxi Queue</p>
                  <p className="bc-card__subtitle">
                    Your professional driver will be waiting at arrivals to take you straight to your door.
                  </p>
                </div>
              </div>
              <Separator />
              <div className="bc-card__footer">
                <div className="bc-card__price">
                  <Price value="69" color="var(--text-base-default)" />
                  <span className="bc-card__price-label">For all travellers</span>
                </div>
                <Button variant="primary-inverted" size="small" label="Reserve now" />
              </div>
            </div>
          </div>
        </section>

        <section className="bc-section">
          <SectionTitle title="Purchased Add-ons" />
          <div className="bc-addons">
            {ADD_ONS.map((addOn, i) => (
              <div key={addOn.key}>
                <div className="bc-addons__row">
                  <div className="bc-addons__icon">
                    {addOn.image ? (
                      <img src={addOn.image} alt="" className="bc-addons__icon-img" />
                    ) : (
                      <Icon svg={addOn.icon} size={40} />
                    )}
                  </div>
                  <div className="bc-addons__text">
                    <p className="bc-addons__title">{addOn.title}</p>
                    {addOn.subtext && <p className="bc-addons__subtext">{addOn.subtext}</p>}
                  </div>
                  <Icon svg={checkSvg} size={24} className="bc-addons__check" />
                </div>
                {i < ADD_ONS.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </section>

        <section className="bc-section">
          <SectionTitle title="Rewards" />
          <div className="bc-rewards">
            <Cell
              visual="icon"
              icon={<Icon svg={rewardCardSvg} size={24} />}
              label="15,000 Mokafa'a points"
              subtext="Mobile number: +966 55 666 7777"
              trailing="chevron"
              showSeparator={false}
            />
            <Separator />
            <p className="bc-rewards__note">
              Your points will be rewarded 14 days after your departure or check-in date.
            </p>
          </div>
        </section>

        <section className="bc-section">
          <SectionTitle title="More information" />
          <div className="bc-more">
            <Cell
              visual="icon"
              icon={<Icon svg={creditCardSvg} size={24} />}
              label="Payment details"
              subtext="Total: SAR 1,500 (incl. VAT)"
              trailing="chevron"
            />
            <Cell
              visual="icon"
              icon={<Icon svg={questionCircleSvg} size={24} />}
              label="Frequently Asked Questions (FAQs)"
              subtext="Browse through on popular help topics"
              trailing="chevron"
            />
            <Cell
              visual="icon"
              icon={<Icon svg={headsetSvg} size={24} />}
              label="Need help"
              trailing="chevron"
              showSeparator={false}
            />
          </div>
        </section>
      </div>
      </div>
    </SheetShell>
  )
}
