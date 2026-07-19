import { Button } from 'design-system'
import SheetShell from '../../components/SheetShell'
import ProgressSignal from '../../components/ProgressSignal'
import Icon from '../../components/Icon'
import checkSvg from '../../assets/icons/check.svg?raw'
import esimChip from '../../assets/esim-flow/figma/esim-chip.png'
import './esim-shared.css'
import './ActivateIntroScreen.css'

const CHECKLIST = [
  'Only an eSIM, no physical SIM card is provided',
  'Requires an internet connection',
  'Your package starts counting from the day you travel',
]

export default function ActivateIntroScreen({ onClose, onInstall }) {
  return (
    <SheetShell title="eSIM Activation" onClose={onClose} className="esim-intro">
      <div className="esim-sheet__scroll">
        <div className="esim-sheet__body">
          <div className="esim-intro__progress">
            <ProgressSignal step={1} total={4} label="Step 1 of 4 · Prepare" />
          </div>

          <img src={esimChip} alt="" className="esim-intro__illustration" />

          <h1 className="esim-intro__heading">Activate your eSIM in just a few steps</h1>

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
        <Button variant="primary" label="Install eSIM" onClick={onInstall} />
      </div>
    </SheetShell>
  )
}
