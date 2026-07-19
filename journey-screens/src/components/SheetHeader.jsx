import { GlassButton } from 'design-system'
import './SheetHeader.css'

export default function SheetHeader({ title, onClose }) {
  return (
    <div className="sheet-header">
      <div className="sheet-header__grabber-row">
        <span className="sheet-header__grabber" />
      </div>
      <div className="sheet-header__toolbar">
        <GlassButton bg="default" type="x" onClick={onClose} aria-label="Close" />
        <p className="sheet-header__title">{title}</p>
        <div className="sheet-header__spacer" aria-hidden="true" />
      </div>
    </div>
  )
}
