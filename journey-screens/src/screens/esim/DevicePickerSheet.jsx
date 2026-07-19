import { ActionSheet } from 'design-system'
import './DevicePickerSheet.css'

export default function DevicePickerSheet({ onThisDevice, onAnotherDevice, onClose }) {
  return (
    <div className="esim-device-picker">
      <ActionSheet
        platform="ios"
        title="Where do you want to Install this eSIM?"
        actions={[
          { label: 'This device', onClick: onThisDevice },
          { label: 'Another device', onClick: onAnotherDevice },
        ]}
        onClose={onClose}
      />
    </div>
  )
}
