import React from 'react'
import axios from 'axios'
import { get } from 'lodash'
import { Input } from '../Input'
import { Button } from '../Button'
import Schedule from '../Schedule'

const Races = () => {
  // list circuit state
  const [circuitList, setCircuitList] = React.useState([])
  // circuit states
  const [raceDate, setRaceDate] = React.useState('')
  const [circuitName, setCircuitName] = React.useState('')
  const [raceWinner, setRaceWinner] = React.useState('')

  // função de carregar os circuitos da API
  const loadCircuitFromApi = async () => {
    // carregar os circuitos da api
    const requestCircuits = await axios.get('http://localhost:3001/circuits/')
    // prepara o dado dos circuitos (data)
    const resultCircuits = get(requestCircuits, 'data', [])
    // salvar os circuitos no circuitList
    setCircuitList(resultCircuits)
  }

  // circuit handles
  const handleCircuitNameChange = (event: any) => {
    setCircuitName(event.target.value)
  }
  const handleRaceDateChange = (event: any) => {
    setRaceDate(event.target.value)
  }
  const handleRaceWinnerChange = (event: any) => {
    setRaceWinner(event.target.value)
  }
  // circuit submit
  const handleRaceSubmit = async () => {
    const raceBody = {
      name: circuitName,
      date: raceDate,
      winner: raceWinner
      
    }
    const response1 = await axios.post('http://localhost:3001/races/', raceBody)
    const result1 = get(response1, 'data')
    console.log('result1', result1)

    const response2 = await axios.get('http://localhost:3001/races/')
    const result2 = get(response2, 'data', 0)
    console.log('result2', result2)
  }
  // toda a vez que a página carregar
  React.useEffect(() => {
    // chama a função de carregar os circuitos
    loadCircuitFromApi()
  }, [])

  // 
  return (
    <div>
      <h1>Grandes Prêmios</h1>
      <label>Nome do circuito</label>
      <Input
        name="circuitName"
        onChange={handleCircuitNameChange}
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
        onClick={handleRaceSubmit}
        primary={true}
        type="button">
        Enviar
      </Button>
      <Schedule circuitList={circuitList} />
    </div>
  )
}

export default Races