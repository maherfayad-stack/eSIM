import { Button, ProgressStepper, LinearProgressIndicator } from 'design-system'
import './EsimStatusBanner.css'

export default function EsimStatusBanner({
  tone, // 'install' | 'lowdata'
  icon,
  title,
  desc,
  installedCount,
  installedTotal,
  percent,
  statLabel,
  buttonLabel,
  onAction,
}) {
  return (
    <div className={`esb esb--${tone}`}>
      <div className="esb__top">
        <img src={icon} alt="" className="esb__icon" />
        <div className="esb__text">
          <p className="esb__title">{title}</p>
          <p className="esb__desc">{desc}</p>
        </div>
      </div>
      <div className="esb__bottom">
        <div className="esb__progress">
          {tone === 'install' ? (
            <ProgressStepper steps={installedTotal} currentStep={installedCount} className="esb__stepper" />
          ) : (
            <LinearProgressIndicator value={percent} className="esb__bar" />
          )}
          <p className="esb__stat">{statLabel}</p>
        </div>
        <Button variant="primary" size="small" label={buttonLabel} onClick={onAction} />
      </div>
    </div>
  )
}
