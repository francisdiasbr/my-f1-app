import React from 'react'
import axios from 'axios'
import { get, map } from 'lodash'
import { Button } from '../Button'
import {
  Container,
  ContentWrap,
  FormTitle,
  HeaderTable,
  Input,
  InputField,
  InputWrap,
  InputTag,
  MyTable,
  TableBody,
  TableRow,
  TableTitle,
} from '../Styleguide/styled'
import RaceItem, { RaceItemProps } from './item'

const Races = () => {
  // list race state
  const [raceList, setRaceList] = React.useState([])
  // form race states
  const [circuitCountry, setCircuitCountry] = React.useState('')
  const [circuitName, setCircuitName] = React.useState('')
  const [raceDate, setRaceDate] = React.useState('')
  const [raceWinner, setRaceWinner] = React.useState('')

  // função que carrega as corridas da API
  const loadRaceFromApi = async () => {
    // carregar as corridas da api
    const requestRaces = await axios.get('http://localhost:3001/races/')
    // prepara o dado das corridas (data)
    const resultRaces = get(requestRaces, 'data', [])
    // salvar as corridas no raceList
    setRaceList(resultRaces)
  }

  // circuit handles
  const handleCircuitNameChange = (event: any) => {
    setCircuitName(event.target.value)
  }
  const handleCircuitCountryChange = (event: any) => {
    setCircuitCountry(event.target.value)
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
      circuitname: circuitName,
      circuitcountry: circuitCountry,
      racedate: raceDate,
      racewinner: raceWinner,
    }
    // salva (post) a nova corrida
    await axios.post('http://localhost:3001/races/', raceBody)
    // chama a função de carregar as corridas para atualizar a tabela
    loadRaceFromApi()
  }

  // toda a vez que a página carregar
  React.useEffect(() => {
    // chama a função de carregar as corridas
    loadRaceFromApi()
  }, [])

  //
  return (
    <Container>
      <FormTitle>Corridas</FormTitle>
      <ContentWrap>
        <InputWrap>
          <InputField>
            <InputTag>Corrida</InputTag>
            <Input
              name='circuitName'
              onChange={handleCircuitNameChange}
              type='text'
            ></Input>
          </InputField>
          <InputField>
            <InputTag>País</InputTag>
            <Input
              name='circuitCountry'
              onChange={handleCircuitCountryChange}
              type='text'
            ></Input>
          </InputField>
          <InputField>
            <InputTag>Data da corrida</InputTag>
            <Input
              name='raceDate'
              onChange={handleRaceDateChange}
              type='text'
            ></Input>
          </InputField>
          <InputField>
            <InputTag>Vencedor</InputTag>
            <Input
              name='raceWinner'
              onChange={handleRaceWinnerChange}
              type='text'
            ></Input>
          </InputField>
          <Button onClick={handleRaceSubmit} primary={true} type='button'>
            Enviar
          </Button>
        </InputWrap>
        <TableTitle>Corridas</TableTitle>
        <MyTable>
          <TableRow>
            <HeaderTable>Nome</HeaderTable>
            <HeaderTable>País</HeaderTable>
            <HeaderTable>Data da corrida</HeaderTable>
            <HeaderTable>Vencedor</HeaderTable>
          </TableRow>
          <TableBody>
            {map(raceList, (item: RaceItemProps, key) => {
              return (
                <RaceItem
                  circuitname={item?.circuitname}
                  circuitcountry={item?.circuitcountry}
                  racedate={item?.racedate}
                  racewinner={item?.racewinner}
                />
              )
            })}
          </TableBody>
        </MyTable>
      </ContentWrap>
    </Container>
  )
}

export default Races
