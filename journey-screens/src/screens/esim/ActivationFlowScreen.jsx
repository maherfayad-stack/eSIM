import { useState } from 'react'
import ActivateIntroScreen from './ActivateIntroScreen'
import ActivateSettingsScreen from './ActivateSettingsScreen'
import QrCodeScreen from './QrCodeScreen'
import EsimSuccessScreen from './EsimSuccessScreen'
import { useLanguage } from '../../i18n/LanguageContext'

export default function ActivationFlowScreen({ onExit, initialStep = 'intro' }) {
  const { t } = useLanguage()
  const [step, setStep] = useState(initialStep) // 'intro' | 'settings' | 'qr' | 'success'

  return (
    <>
      {step === 'intro' && (
        <ActivateIntroScreen onClose={onExit} onInstall={() => setStep('settings')} />
      )}
      {step === 'settings' && (
        <ActivateSettingsScreen onClose={onExit} onDone={() => setStep('success')} />
      )}
      {step === 'qr' && <QrCodeScreen onClose={onExit} onBack={onExit} />}
      {step === 'success' && (
        <EsimSuccessScreen
          heading={t.esimSuccess.activateHeading}
          detail={t.esimSuccess.activateDetail}
          onClose={onExit}
          onAddonDetails={onExit}
        />
      )}
    </>
  )
}
