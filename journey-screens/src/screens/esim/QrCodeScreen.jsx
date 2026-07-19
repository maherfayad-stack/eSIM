import { Button } from 'design-system'
import SheetShell from '../../components/SheetShell'
import Icon from '../../components/Icon'
import checkSvg from '../../assets/icons/check.svg?raw'
import qrImage from '../../assets/esim-flow/activity-qr.png'
import { useLanguage } from '../../i18n/LanguageContext'
import './esim-shared.css'
import './QrCodeScreen.css'

export default function QrCodeScreen({ onClose, onBack }) {
  const { t } = useLanguage()
  return (
    <SheetShell title={t.common.esimActivationTitle} onClose={onClose} className="esim-qr">
      <div className="esim-sheet__scroll">
        <div className="esim-sheet__body">
          <div className="esim-qr__card">
            <div className="esim-qr__frame">
              <img src={qrImage} alt={t.qrCode.qrAlt} className="esim-qr__image" />
              <span className="esim-qr__corner esim-qr__corner--tl" aria-hidden="true" />
              <span className="esim-qr__corner esim-qr__corner--tr" aria-hidden="true" />
              <span className="esim-qr__corner esim-qr__corner--bl" aria-hidden="true" />
              <span className="esim-qr__corner esim-qr__corner--br" aria-hidden="true" />
            </div>
            <p className="esim-qr__caption">{t.qrCode.caption}</p>
          </div>

          <div className="esim-qr__text">
            <h1 className="esim-qr__heading">{t.qrCode.heading}</h1>
            <p className="esim-qr__subtext">{t.qrCode.subtext}</p>
          </div>

          <ul className="esim-checklist">
            {t.common.esimChecklist.map((item) => (
              <li key={item} className="esim-checklist__row">
                <Icon svg={checkSvg} size={24} className="esim-checklist__icon" />
                <span className="esim-checklist__text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="esim-sheet__footer">
        <Button variant="primary" label={t.qrCode.backToEsims} onClick={onBack} />
      </div>
    </SheetShell>
  )
}
