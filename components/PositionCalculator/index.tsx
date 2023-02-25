import { Block, Button, Typography } from '@xprog/prensa'
import React from 'react'
import axios from 'axios'
import { get } from 'lodash'

import { containerWrapProps, inputContentProps, inputLabelProps, inputProps, resultLabelProps, resultProps, titleProps } from './props'

const PositionsCalculator = () => {

  const [points, setPoints] = React.useState('')
  const [position, setPosition] = React.useState('')

  const handlePositionChange = (event: any) => {
    setPosition(event.target.value)
  }

  const handlePositionSubmit = async () => {
    const response = await axios.get(
      `http://localhost:3001/standings/${position}`
    )

    const result = get(response, 'data.points', 0)
    setPoints(result)
  }

  return (
    <Block
      className='containerWrap'
      css={containerWrapProps}>
      <Typography
        className='title'
        css={titleProps}
      >
        Número de pontos obtidos na corrida
      </Typography>
      <Block
        className='input'
        css={inputProps}
      >
        <Typography
          className='inputLabel'
          css={inputLabelProps}
        >
          Posição na corrida
        </Typography>
        <Block
          className='inputContent'
          css={inputContentProps}
        >
          <input
            name='posição'
            onChange={handlePositionChange}
            type='text'
          >
          </input>
        </Block>
        <Button
          onClick={handlePositionSubmit}
          roundedCorners='alternative'
          size='xs'
        >
          Calcular
        </Button>
      </Block>
      <Typography
        className='resultLabel'
        css={resultLabelProps}
      >
        Resultado:
      </Typography>
      <Typography
        className='resultNumber'
        css={resultProps}
      >
        {points}
      </Typography>
    </Block>
  )
}

export default PositionsCalculator
