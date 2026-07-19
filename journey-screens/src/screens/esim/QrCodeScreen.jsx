import { Button } from 'design-system'
import SheetShell from '../../components/SheetShell'
import Icon from '../../components/Icon'
import checkSvg from '../../assets/icons/check.svg?raw'
import qrImage from '../../assets/esim-flow/activity-qr.png'
import './esim-shared.css'
import './QrCodeScreen.css'

const CHECKLIST = [
  'Only an eSIM, no physical SIM card is provided',
  'Requires an internet connection',
  'Your package starts counting from the day you travel',
]

export default function QrCodeScreen({ onClose, onBack }) {
  return (
    <SheetShell title="eSIM Activation" onClose={onClose} className="esim-qr">
      <div className="esim-sheet__scroll">
        <div className="esim-sheet__body">
          <div className="esim-qr__card">
            <div className="esim-qr__frame">
              <img src={qrImage} alt="QR code" className="esim-qr__image" />
              <span className="esim-qr__corner esim-qr__corner--tl" aria-hidden="true" />
              <span className="esim-qr__corner esim-qr__corner--tr" aria-hidden="true" />
              <span className="esim-qr__corner esim-qr__corner--bl" aria-hidden="true" />
              <span className="esim-qr__corner esim-qr__corner--br" aria-hidden="true" />
            </div>
            <p className="esim-qr__caption">Open your camera on the other device and point it at this code</p>
          </div>

          <div className="esim-qr__text">
            <h1 className="esim-qr__heading">Install on another device</h1>
            <p className="esim-qr__subtext">Scan the QR code with another devices and follow the on-screen instructions.</p>
          </div>

          <ul className="esim-checklist">
            {CHECKLIST.map((item) => (
              <li key={item} className="esim-checklist__row">
                <Icon svg={checkSvg} size={24} className="esim-checklist__icon" />
                <span className="esim-checklist__text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="esim-sheet__footer">
        <Button variant="primary" label="Back to eSIMs" onClick={onBack} />
      </div>
    </SheetShell>
  )
}
