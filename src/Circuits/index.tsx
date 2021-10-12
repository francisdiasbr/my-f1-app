import React from 'react'
import axios from 'axios'
import { get } from 'lodash'
import { Input } from '../Input'
import { Button } from '../Button'

const Circuits = () => {
  // circuit states
  const [circuitCode, setCircuitCode] = React.useState('')
  const [circuitCountry, setCircuitCountry] = React.useState('')
  const [circuitName, setCircuitName] = React.useState('')
  // circuit handles
  const handleCircuitNameChange = (event: any) => {
    setCircuitName(event.target.value)
  }
  const handleCodeChange = (event: any) => {
    setCircuitCode(event.target.value)
  }
  const handleCountryChange = (event: any) => {
    setCircuitCountry(event.target.value)
  }
  // circuit submit
  const handleCircuitSubmit = async () => {
    const circuitBody = {
      name: circuitName,
      code: circuitCode,
      country: circuitCountry
    }
    const response1 = await axios.post('http://localhost:3001/circuits/', circuitBody)
    const result1 = get(response1, 'data')
    console.log('result1', result1)

    const response2 = await axios.get('http://localhost:3001/circuits/')
    const result2 = get(response2, 'data', 0)
    console.log('result2', result2)
  }

  // 
  return (
    <div>
      <h1>Circuitos temporada 2021</h1>
      <Input
        name="circuitName"
        onChange={handleCircuitNameChange}
        type="text">
      </Input>
      <Input
        name="circuitCode"
        onChange={handleCodeChange}
        type="text">
      </Input>
      <Input
        name="circuitCountry"
        onChange={handleCountryChange}
        type="text">
      </Input>
      <Button
        onClick={handleCircuitSubmit}
        primary={true}
        type="button">
        Enviar
      </Button>
    </div>
  )
}

export default Circuits