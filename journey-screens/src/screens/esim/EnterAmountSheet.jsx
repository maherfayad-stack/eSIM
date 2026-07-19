import { useState } from 'react'
import { Button, Chip, TextInput } from 'design-system'
import './EnterAmountSheet.css'

const QUICK_AMOUNTS = [50, 100, 150]

export default function EnterAmountSheet({ onClose, onConfirm }) {
  const [amount, setAmount] = useState('')

  return (
    <div className="amount-sheet" role="dialog" aria-modal="true">
      <div className="amount-sheet__frame">
        <div className="amount-sheet__scrim" onClick={onClose} aria-hidden="true" />
        <div className="amount-sheet__panel">
          <button type="button" className="amount-sheet__handle" onClick={onClose} aria-label="Close">
            <span className="amount-sheet__grabber" />
          </button>

          <div className="amount-sheet__header">
            <button type="button" className="amount-sheet__close" onClick={onClose}>
              Close
            </button>
            <p className="amount-sheet__title">Enter amount</p>
          </div>

          <div className="amount-sheet__content">
            <TextInput
              label="Amount in SAR"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
              inputMode="numeric"
            />
            <div className="amount-sheet__chips">
              {QUICK_AMOUNTS.map((v) => (
                <Chip
                  key={v}
                  label={`SAR ${v}`}
                  selected={amount === String(v)}
                  onClick={() => setAmount(String(v))}
                  className="amount-sheet__chip"
                />
              ))}
            </div>
          </div>

          <div className="amount-sheet__footer">
            <Button variant="primary" label="Confirm" onClick={() => onConfirm?.(amount)} />
          </div>
        </div>
      </div>
    </div>
  )
}
