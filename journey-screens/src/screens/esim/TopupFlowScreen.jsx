import { useState } from 'react'
import StaticScreenshotScreen from './StaticScreenshotScreen'
import EsimSuccessScreen from './EsimSuccessScreen'
import paymentPage from '../../assets/esim-flow/payment page.png'

export default function TopupFlowScreen({ onExit }) {
  const [step, setStep] = useState('payment') // 'payment' | 'success'

  if (step === 'payment') {
    return (
      <StaticScreenshotScreen
        src={paymentPage}
        alt="Confirm and Pay"
        onClick={() => setStep('success')}
      />
    )
  }

  return (
    <EsimSuccessScreen
      heading="Funds added to your eSIM successfully"
      detail="1GB | 30 Days"
      onClose={onExit}
      onAddonDetails={onExit}
    />
  )
}
