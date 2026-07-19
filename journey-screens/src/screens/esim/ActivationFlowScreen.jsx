import { useState } from 'react'
import ActivateIntroScreen from './ActivateIntroScreen'
import ActivateSettingsScreen from './ActivateSettingsScreen'
import QrCodeScreen from './QrCodeScreen'
import EsimSuccessScreen from './EsimSuccessScreen'

export default function ActivationFlowScreen({ onExit, initialStep = 'intro' }) {
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
          heading="Your eSIM is Installed"
          detail="1GB | 30 Days"
          onClose={onExit}
          onAddonDetails={onExit}
        />
      )}
    </>
  )
}
