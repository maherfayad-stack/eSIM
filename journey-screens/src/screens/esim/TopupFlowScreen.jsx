import { useState } from 'react'
import StaticScreenshotScreen from './StaticScreenshotScreen'
import EsimSuccessScreen from './EsimSuccessScreen'
import paymentPage from '../../assets/esim-flow/payment page.png'
import { useLanguage } from '../../i18n/LanguageContext'

export default function TopupFlowScreen({ onExit }) {
  const { t } = useLanguage()
  const [step, setStep] = useState('payment') // 'payment' | 'success'

  if (step === 'payment') {
    return (
      <StaticScreenshotScreen
        src={paymentPage}
        alt={t.topup.paymentAlt}
        onClick={() => setStep('success')}
      />
    )
  }

  return (
    <EsimSuccessScreen
      heading={t.esimSuccess.topupHeading}
      detail={t.esimSuccess.topupDetail}
      onClose={onExit}
      onDone={onExit}
    />
  )
}
