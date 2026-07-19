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

import './BookingDetailsScreen.css'

function BookingReferenceRow({ label, value, onCopy, separator = true }) {
  return (
    <div className="bd-ref-row">
      <div className="bd-ref-row__main">
        <div className="bd-ref-row__meta">
          <span className="bd-ref-row__label">{label}</span>
          <button type="button" className="bd-ref-row__info" aria-label={`More about ${label}`}>
            <Icon svg={infoCircleSvg} size={16} />
          </button>
          <span className="bd-ref-row__value">{value}</span>
        </div>
        <button type="button" className="bd-ref-row__copy" onClick={onCopy}>
          Copy
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

  if (type === 'fill') {
    const pct = Math.max(0, Math.min(100, ringPercent ?? 100))
    return (
      <span className="ec-icon ec-icon--fill">
        <span className="ec-icon__fill-bar" style={{ height: `${pct}%` }} />
      </span>
    )
  }

  return <img src={esimChip} alt="" className="ec-icon-img" />
}

function EsimAddonCard({ subtitle, subtitleParts, buttonLabel, buttonVariant, onAction, icon, ringPercent, progress }) {
  return (
    <div className="ec-card">
      <div className="ec-card__row">
        <div className="ec-card__content">
          <EsimAddonIcon type={icon} ringPercent={ringPercent} />
          <div className="ec-card__text">
            <div className="ec-card__title-row">
              <p className="ec-card__title">eSIM</p>
              <Tag label="1 GB" variant="neutral" style="tinted" />
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

      {progress && (
        <div className="ec-progress">
          <div className="ec-progress__track">
            {Array.from({ length: progress.segments }).map((_, i) => (
              <span
                key={i}
                className={`ec-progress__segment${i < progress.filled ? ' ec-progress__segment--filled' : ''}`}
              />
            ))}
          </div>
          <p className="ec-progress__label">{progress.label}</p>
        </div>
      )}
    </div>
  )
}

export default function BookingDetailsScreen({ onClose, onInstall, onTopup, scrollToEsimSignal, onScrolled }) {
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
    <SheetShell title="Your booking" onClose={onClose} className="booking-details">
      <div className="booking-details__scroll" ref={scrollRef}>
      <div className="booking-details__body">
        <div className="bd-banner">
          <img src={esimChip} alt="" className="ec-icon-img" style={{ width: 24, height: 24 }} />
          <div className="bd-banner__text">
            <p className="bd-banner__title">your esim is one step away from being activated</p>
            <p className="bd-banner__desc">install it now so it's ready before you travel</p>
            <Button variant="primary" size="small" label="Install" onClick={scrollToEsims} />
          </div>
        </div>

        <article className="bd-card">
          <div className="bd-card__status-row">
            <Tag label="Confirmed" variant="success" style="filled" />
          </div>

          <div className="bd-card__header">
            <div className="bd-card__airline">
              <Icon svg={airlineLogoSvg} size={40} />
            </div>
            <div className="bd-card__route">
              <span className="bd-card__trip-type">Round-trip</span>
              <span className="bd-card__route-title">JED to RUH</span>
            </div>
            <Icon svg={chevronRightSvg} size={16} className="bd-card__chevron" />
          </div>

          <div className="bd-card__details">
            <div className="bd-card__detail-row">
              <Icon svg={calendarSvg} size={24} className="bd-card__detail-icon" />
              <span className="bd-card__detail-value">11 Aug 2024 - 18 Aug 2024</span>
            </div>
            <div className="bd-card__detail-row">
              <Icon svg={usersThreeSvg} size={24} className="bd-card__detail-icon" />
              <span className="bd-card__detail-value">2 x Adults</span>
            </div>
          </div>

          <hr className="bd-card__separator" />

          <div className="bd-card__references">
            <BookingReferenceRow label="Almosafer ID" value="H0080403392" separator={false} />
          </div>

          <div className="bd-card__segment">
            <hr className="bd-card__separator" />
            <div className="bd-card__segment-header">
              <Icon svg={airlineLogoSvg} size={24} className="bd-card__segment-logo" />
              <span className="bd-card__segment-title">Jeddah to Riyadh</span>
            </div>
            <BookingReferenceRow label="Airline Reference (PNR)" value="EK123442" separator={false} />
          </div>
        </article>

        <section className="bd-section" ref={esimSectionRef}>
          <SectionTitle title="Purchased add-on services" size="compact" />

          <div className="bd-esim-list">
            <EsimAddonCard
              icon="install"
              subtitle="Install now. Validity starts once it connects to a network for the first time."
              buttonLabel="Install"
              buttonVariant="primary"
              onAction={onInstall}
            />
            <EsimAddonCard
              icon="locked"
              subtitle="you still need to Install to be able to use"
              buttonLabel="Install"
              buttonVariant="primary"
              onAction={onInstall}
            />
            <EsimAddonCard
              icon="ring"
              ringPercent={99}
              subtitleParts={['4 GB left', '3 days left']}
              buttonLabel="Topup"
              buttonVariant="primary-inverted"
              onAction={onTopup}
            />
            <EsimAddonCard
              icon="install"
              subtitle="18 days left"
              buttonLabel="Topup"
              buttonVariant="primary-inverted"
              progress={{ segments: 5, filled: 2, label: '4 GB left' }}
              onAction={onTopup}
            />

            <EsimAddonCard
              icon="fill"
              ringPercent={80}
              subtitle="80% . 4 GB left . 3 days left"
              buttonLabel="Topup"
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
