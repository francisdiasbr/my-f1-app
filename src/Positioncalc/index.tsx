import React from 'react'
import axios from 'axios'
import { get } from 'lodash'
import { Button } from '../Button'
import { Input } from '../Input'
import { FormTitle, InputTag, ResultTitle } from '../Styleguide/styled'
import { Container, InputField, InputWrap } from '../Input/index'

const Positions = () => {
  // position states
  const [points, setPoints] = React.useState('')
  const [position, setPosition] = React.useState('')
  // position handle
  const handlePositionChange = (event: any) => {
    setPosition(event.target.value)
  }
  // position submit
  const handlePositionSubmit = async () => {
    const response = await axios.get(
      `http://localhost:3001/standings/${position}`
    )
    const result = get(response, 'data.points', 0)
    setPoints(result)
  }
  return (
    <Container>
      <FormTitle>Número de pontos obtidos na corrida</FormTitle>
      <InputWrap>
        <InputField>
          <InputTag>Posição na corrida</InputTag>
          <Input
            name='posição'
            onChange={handlePositionChange}
            type='text'
          ></Input>
        </InputField>
        <Button onClick={handlePositionSubmit} primary={true} type='button'>
          Enviar
        </Button>
      </InputWrap>
      <ResultTitle>Resultado: {points}</ResultTitle>
    </Container>
  )
}

export default Positions
