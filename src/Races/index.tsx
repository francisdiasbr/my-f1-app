import React from 'react'
import axios from 'axios'
import { get } from 'lodash'
import { Input } from '../Input'
import { Button } from '../Button'

const Races = () => {
  // circuit states
  const [raceCountry, setCircuitCountry] = React.useState('')
  const [raceDate, setRaceDate] = React.useState('')
  const [circuitName, setCircuitName] = React.useState('')
  const [raceWinner, setRaceWinner] = React.useState('')
  // circuit handles
  const handleCircuitNameChange = (event: any) => {
    setCircuitName(event.target.value)
  }
  const handleCountryChange = (event: any) => {
    setCircuitCountry(event.target.value)
  }
  const handleRaceDateChange = (event: any) => {
    setRaceDate(event.target.value)
  }
  const handleRaceWinnerChange = (event: any) => {
    setRaceWinner(event.target.value)
  }
  // circuit submit
  const handleCircuitSubmit = async () => {
    const circuitBody = {
      name: circuitName,
      country: raceCountry,
      date: raceDate,
      winner: raceWinner
      
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
      <h1>Circuitos F1</h1>
      <label>Nome do circuito</label>
      <Input
        name="circuitName"
        onChange={handleCircuitNameChange}
        type="text">
      </Input>
      <label>País do circuito</label>
      <Input
        name="raceCountry"
        onChange={handleCountryChange}
        type="text">
      </Input>
      <label>Data da corrida</label>
      <Input
        name="raceDate"
        onChange={handleRaceDateChange}
        type="text">
      </Input>
      <label>Vencedor</label>
      <Input
        name="raceWinner"
        onChange={handleRaceWinnerChange}
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

export default Races