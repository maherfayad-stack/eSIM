import { useEffect, useRef } from 'react'
import { Button, Tag } from 'design-system'
import SheetShell from '../components/SheetShell'
import SectionTitle from '../components/SectionTitle'
import Icon from '../components/Icon'

import calendarSvg from 'design-system/src/icons/line-icons/calendar.svg?raw'
import usersThreeSvg from 'design-system/src/icons/line-icons/usersThree.svg?raw'
import infoCircleSvg from 'design-system/src/icons/line-icons/infoCircle.svg?raw'
import chevronRightSvg from 'design-system/src/icons/line-icons/chevronRight.svg?raw'
import airlineLogoSvg from '../assets/misc/airline-logo.svg?raw'
import esimChip from '../assets/esim-flow/figma/esim-chip.png'
import { useLanguage } from '../i18n/LanguageContext'

import './BookingDetailsScreen.css'

function BookingReferenceRow({ label, value, onCopy, separator = true }) {
  const { t } = useLanguage()
  return (
    <div className="bd-ref-row">
      <div className="bd-ref-row__main">
        <div className="bd-ref-row__meta">
          <span className="bd-ref-row__label">{label}</span>
          <button type="button" className="bd-ref-row__info" aria-label={t.bookingDetails.moreAbout(label)}>
            <Icon svg={infoCircleSvg} size={16} />
          </button>
          <span className="bd-ref-row__value">{value}</span>
        </div>
        <button type="button" className="bd-ref-row__copy" onClick={onCopy}>
          {t.common.copy}
        </button>
      </div>
      {separator && <hr className="bd-ref-row__separator" />}
    </div>
  )
}

function EsimAddonIcon({ type, ringPercent }) {
  if (type === 'ring') {
    return (
      <div className="ec-ring" style={{ '--ring-pct': `${ringPercent}%` }}>
        <span className="ec-ring__label">{ringPercent}%</span>
      </div>
    )
  }

  return <img src={esimChip} alt="" className="ec-icon-img" />
}

function EsimAddonCard({ subtitle, subtitleParts, buttonLabel, buttonVariant, onAction, icon, ringPercent }) {
  const { t } = useLanguage()
  return (
    <div className="ec-card">
      <div className="ec-card__row">
        <div className="ec-card__content">
          <EsimAddonIcon type={icon} ringPercent={ringPercent} />
          <div className="ec-card__text">
            <div className="ec-card__title-row">
              <p className="ec-card__title">{t.common.esimLabel}</p>
              <Tag label={t.bookingDetails.gbTag} variant="neutral" style="tinted" />
            </div>
            {subtitleParts ? (
              <div className="ec-card__subtitle-parts">
                {subtitleParts.map((part) => (
                  <p key={part} className="ec-card__subtitle">{part}</p>
                ))}
              </div>
            ) : (
              <p className="ec-card__subtitle">{subtitle}</p>
            )}
          </div>
        </div>
        <Button variant={buttonVariant} size="small" label={buttonLabel} onClick={onAction} />
      </div>
    </div>
  )
}

export default function BookingDetailsScreen({ onClose, onInstall, onTopup, scrollToEsimSignal, onScrolled }) {
  const { t } = useLanguage()
  const d = t.bookingDetails
  const scrollRef = useRef(null)
  const esimSectionRef = useRef(null)

  const scrollToEsims = () => {
    const container = scrollRef.current
    const target = esimSectionRef.current
    if (!container || !target) return
    const top = target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop
    container.scrollTo({ top, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!scrollToEsimSignal) return
    scrollToEsims()
    onScrolled?.()
  }, [scrollToEsimSignal])

  return (
    <SheetShell title={d.title} onClose={onClose} className="booking-details">
      <div className="booking-details__scroll" ref={scrollRef}>
      <div className="booking-details__body">
        <div className="bd-banner">
          <img src={esimChip} alt="" className="ec-icon-img" style={{ width: 24, height: 24 }} />
          <div className="bd-banner__text">
            <p className="bd-banner__title">{d.bannerTitle}</p>
            <p className="bd-banner__desc">{d.bannerDesc}</p>
            <Button variant="primary" size="small" label={t.common.install} onClick={scrollToEsims} />
          </div>
        </div>

        <article className="bd-card">
          <div className="bd-card__status-row">
            <Tag label={t.common.confirmed} variant="success" style="filled" />
          </div>

          <div className="bd-card__header">
            <div className="bd-card__airline">
              <Icon svg={airlineLogoSvg} size={40} />
            </div>
            <div className="bd-card__route">
              <span className="bd-card__trip-type">{t.common.roundTrip}</span>
              <span className="bd-card__route-title">{d.route}</span>
            </div>
            <Icon svg={chevronRightSvg} size={16} className="bd-card__chevron" />
          </div>

          <div className="bd-card__details">
            <div className="bd-card__detail-row">
              <Icon svg={calendarSvg} size={24} className="bd-card__detail-icon" />
              <span className="bd-card__detail-value">{d.dates}</span>
            </div>
            <div className="bd-card__detail-row">
              <Icon svg={usersThreeSvg} size={24} className="bd-card__detail-icon" />
              <span className="bd-card__detail-value">{d.adults}</span>
            </div>
          </div>

          <hr className="bd-card__separator" />

          <div className="bd-card__references">
            <BookingReferenceRow label={d.almosaferId} value="H0080403392" separator={false} />
          </div>

          <div className="bd-card__segment">
            <hr className="bd-card__separator" />
            <div className="bd-card__segment-header">
              <Icon svg={airlineLogoSvg} size={24} className="bd-card__segment-logo" />
              <span className="bd-card__segment-title">{d.segmentRoute}</span>
            </div>
            <BookingReferenceRow label={d.airlineReference} value="EK123442" separator={false} />
          </div>
        </article>

        <section className="bd-section" ref={esimSectionRef}>
          <SectionTitle title={d.purchasedAddons} size="compact" />

          <div className="bd-esim-list">
            <EsimAddonCard
              icon="install"
              subtitle={d.installNowLong}
              buttonLabel={t.common.install}
              buttonVariant="primary"
              onAction={onInstall}
            />
            <EsimAddonCard
              icon="install"
              subtitle={d.installNowLong}
              buttonLabel={t.common.install}
              buttonVariant="primary"
              onAction={onInstall}
            />
            <EsimAddonCard
              icon="ring"
              ringPercent={99}
              subtitleParts={[t.common.gbLeft(4), t.common.daysLeft(3)]}
              buttonLabel={t.common.topup}
              buttonVariant="primary-inverted"
              onAction={onTopup}
            />
            <EsimAddonCard
              icon="ring"
              ringPercent={65}
              subtitleParts={[t.common.gbLeft(4), t.common.daysLeft(18)]}
              buttonLabel={t.common.topup}
              buttonVariant="primary-inverted"
              onAction={onTopup}
            />
          </div>
        </section>
      </div>
      </div>
    </SheetShell>
  )
}
