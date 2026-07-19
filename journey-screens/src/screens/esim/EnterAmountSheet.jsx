import { useState } from 'react'
import { Button, Chip, GlassButton, TextInput } from 'design-system'
import { useLanguage } from '../../i18n/LanguageContext'
import './EnterAmountSheet.css'

const QUICK_AMOUNTS = [50, 100, 150]

export default function EnterAmountSheet({ onClose, onConfirm }) {
  const { t, dir } = useLanguage()
  const [amount, setAmount] = useState('')

  return (
    <div className="amount-sheet" role="dialog" aria-modal="true">
      <div className="amount-sheet__frame">
        <div className="amount-sheet__scrim" onClick={onClose} aria-hidden="true" />
        <div className="amount-sheet__panel">
          <button type="button" className="amount-sheet__handle" onClick={onClose} aria-label={t.common.close}>
            <span className="amount-sheet__grabber" />
          </button>

          <div className="amount-sheet__header">
            <GlassButton bg="default" type="x" onClick={onClose} aria-label={t.common.close} />
            <p className="amount-sheet__title">{t.enterAmount.title}</p>
            <div className="amount-sheet__spacer" aria-hidden="true" />
          </div>

          <div className="amount-sheet__content">
            <TextInput
              label={t.enterAmount.amountLabel}
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
              inputMode="numeric"
              dir={dir}
            />
            <div className="amount-sheet__chips">
              {QUICK_AMOUNTS.map((v) => (
                <Chip
                  key={v}
                  label={t.enterAmount.sarChip(v)}
                  selected={amount === String(v)}
                  onClick={() => setAmount(String(v))}
                  className="amount-sheet__chip"
                />
              ))}
            </div>
          </div>

          <div className="amount-sheet__footer">
            <Button variant="primary" label={t.common.confirm} onClick={() => onConfirm?.(amount)} />
          </div>
        </div>
      </div>
    </div>
  )
}
