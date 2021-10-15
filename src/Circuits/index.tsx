import React from 'react'
import axios from 'axios'
import { Input } from '../Input'
import { Button } from '../Button'

const Circuits = () => {
  // form circuit states
  const [circuitCity, setCircuitCity] = React.useState('')
  const [circuitCountry, setCircuitCountry] = React.useState('')
  const [circuitFastestLap, setCircuitFastestLap] = React.useState('')
  const [circuitName, setCircuitName] = React.useState('')

  // circuit handles
  const handleCircuitCityChange = (event: any) => {
    setCircuitCity(event.target.value)
  }
  const handleCircuitCountryChange = (event: any) => {
    setCircuitCountry(event.target.value)
  }
  const handleCircuitFastestLapChange = (event: any) => {
    setCircuitFastestLap(event.target.value)
  }
  const handleCircuitNameChange = (event: any) => {
    setCircuitName(event.target.value)
  }

  // circuit button submit
  const handleCircuitSubmit = async () => {
    // define o modelo de dados a ser salvo
    const circuitBody = {
      name: circuitName,
      country: circuitCountry,
      city: circuitCity,
      fastestlap: circuitFastestLap
    }
    // salva (post) o novo circuito
    await axios.post('http://localhost:3001/circuits/', circuitBody)
    // chama a função de carregar os circuitos para atualizar a tabela
    // loadCircuitFromApi()
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
      <label>País</label>
      <Input
        name="circuitCountry"
        onChange={handleCircuitCountryChange}
        type="text">
      </Input>
      <label>Cidade</label>
      <Input
        name="circuitCity"
        onChange={handleCircuitCityChange}
        type="text">
      </Input>
      <label>Volta mais rápida</label>
      <Input
        name="circuitFastestLap"
        onChange={handleCircuitFastestLapChange}
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