import { Button, Cell } from 'design-system'
import SheetShell from '../../components/SheetShell'
import Icon from '../../components/Icon'
import checkSvg from 'design-system/src/icons/line-icons/check.svg?raw'
import questionCircleSvg from 'design-system/src/icons/line-icons/infoCircle.svg?raw'
import headsetSvg from 'design-system/src/icons/line-icons/headset.svg?raw'
import esimChip from '../../assets/esim-flow/figma/esim-chip.png'
import { useLanguage } from '../../i18n/LanguageContext'
import './esim-shared.css'
import './EsimSuccessScreen.css'

export default function EsimSuccessScreen({ heading, detail, onClose, onAddonDetails }) {
  const { t } = useLanguage()
  return (
    <SheetShell title={t.common.esimActivationTitle} onClose={onClose} className="esim-success">
      <div className="esim-sheet__scroll">
        <div className="esim-success__body">
          <div className="esim-success__hero">
            <div className="esim-success__badges">
              <span className="esim-success__sim-badge">
                <img src={esimChip} alt="" width={40} height={40} />
              </span>
              <span className="esim-success__check-badge">
                <Icon svg={checkSvg} size={32} style={{ color: 'var(--color-white-static)' }} />
              </span>
            </div>
            <div className="esim-success__copy">
              <p className="esim-success__heading">{heading}</p>
              <p className="esim-success__detail">{detail}</p>
            </div>
            <Button variant="primary-inverted" size="small" label={t.esimSuccess.addonDetails} onClick={onAddonDetails} />
          </div>

          <div className="esim-success__more">
            <p className="esim-success__more-title">{t.common.moreInformation}</p>
            <Cell
              icon={<Icon svg={questionCircleSvg} size={24} />}
              label={t.common.faqTitle}
              subtext={t.common.faqSubtext}
              trailing="chevron"
              showSeparator
            />
            <Cell
              icon={<Icon svg={headsetSvg} size={24} />}
              label={t.common.needHelp}
              trailing="chevron"
              showSeparator={false}
            />
          </div>
        </div>
      </div>
    </SheetShell>
  )
}
