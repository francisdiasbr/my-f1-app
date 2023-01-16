import React from 'react'
import { Button } from '@xprog/prensa'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { PrimaryButtonType } from './types'

const PrimaryButton: React.FC<PrimaryButtonType> = ({ handleFormSubmit }) => {
  return (
    <Button
      iconRight={<ExpandMoreIcon/>}
      onClick={handleFormSubmit}
      style={{ borderRadius: 2, borderWidth: 0,  backgroundColor: '#440099', height: 36, width: 100 }}
      size= 'sm'
    >
      ENVIAR
    </Button >
  )
}

PrimaryButton.defaultProps = {
}

export default PrimaryButton