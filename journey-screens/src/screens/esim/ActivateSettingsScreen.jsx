import { useEffect, useState } from 'react'
import { Button } from '@alm-design/design-system'
import SheetShell from '../../components/SheetShell'
import ProgressSignal from '../../components/ProgressSignal'
import StaticScreenshotScreen from './StaticScreenshotScreen'
import esimOwn from '../../assets/esim-flow/figma/settings-phone-mockup.png'
import settingsCellularPopup from '../../assets/esim-flow/figma/settings-cellular-popup.png'
import settingsConnecting from '../../assets/esim-flow/figma/settings-connecting.png'
import { useLanguage } from '../../i18n/LanguageContext'
import './esim-shared.css'
import './ActivateSettingsScreen.css'

const PHASE_STEP_MS = 700

export default function ActivateSettingsScreen({ onClose, onDone }) {
  const { t } = useLanguage()
  const PHASES = t.activateSettings.phases
  const [stage, setStage] = useState('ready') // 'ready' | 'cellular-popup' | 'connecting' | 'loading'
  const [phaseIndex, setPhaseIndex] = useState(0)

  useEffect(() => {
    if (stage !== 'loading') return
    const stepTimer = setInterval(() => {
      setPhaseIndex((i) => Math.min(i + 1, PHASES.length - 1))
    }, PHASE_STEP_MS)
    const doneTimer = setTimeout(() => onDone?.(), PHASE_STEP_MS * PHASES.length + 200)
    return () => {
      clearInterval(stepTimer)
      clearTimeout(doneTimer)
    }
  }, [stage, onDone, PHASES])

  if (stage === 'cellular-popup') {
    return (
      <StaticScreenshotScreen
        src={settingsCellularPopup}
        alt={t.activateSettings.cellularPopupAlt}
        onClick={() => setStage('connecting')}
      />
    )
  }

  if (stage === 'connecting') {
    return (
      <StaticScreenshotScreen
        src={settingsConnecting}
        alt={t.activateSettings.connectingAlt}
        onClick={() => setStage('loading')}
      />
    )
  }

  return (
    <SheetShell title={t.common.esimActivationTitle} onClose={onClose} className="esim-settings">
      <div className="esim-sheet__scroll">
        <div className="esim-sheet__body">
          <div className="esim-intro__progress">
            <ProgressSignal step={2} total={4} label={t.activateSettings.stepLabel} />
          </div>

          <img src={esimOwn} alt="" className="esim-settings__phone" />

          <div className="esim-settings__copy">
            <h1 className="esim-settings__heading">{t.activateSettings.heading}</h1>
            <p className="esim-settings__subtext">
              {t.activateSettings.subtext}
            </p>
          </div>
        </div>
      </div>

      <div className="esim-sheet__footer">
        {stage === 'ready' ? (
          <Button variant="primary" label={t.activateSettings.openSettings} onClick={() => setStage('cellular-popup')} />
        ) : (
          <div className="esim-configuring">
            <div className="esim-radar" aria-hidden="true">
              <span className="esim-radar__ring" />
              <span className="esim-radar__ring" />
              <span className="esim-radar__ring" />
              <span className="esim-radar__orbit" />
              <span className="esim-radar__core" />
            </div>
            <p className="esim-config-title">{t.activateSettings.configuring}</p>
            <p className="esim-config-phase">{PHASES[phaseIndex]}</p>
            <div className="esim-config-track" aria-hidden="true">
              {PHASES.map((_, i) => (
                <span
                  key={i}
                  className={`esim-config-seg${i < phaseIndex ? ' esim-config-seg--done' : i === phaseIndex ? ' esim-config-seg--active' : ''}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </SheetShell>
  )
}
