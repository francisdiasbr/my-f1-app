import React from 'react'
import { Button } from '@xprog/prensa'

type PrimaryButtonProps = {
  handleFormSubmit: () => void,
  backgroundColor?: string,
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ handleFormSubmit }) => {
  return (
    <Button
      onClick={handleFormSubmit}
      style={{ borderRadius: 0, color: '$PrimaryDark', height: 36, width: 100 }}>
      ENVIAR
    </Button>
  )
}

PrimaryButton.defaultProps = {
  backgroundColor: 'Secondary'

}

export default PrimaryButton