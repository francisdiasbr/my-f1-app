import axios from 'axios'
import React from 'react'
import { map } from 'lodash'
import { get } from 'lodash'
import { Button } from '../Button'
import { Input } from '../Input'
import CircuitItem, { CircuitItemProps } from './item'
import {
  HeaderTable,
  FormTitle,
  InputTag,
  MyTable,
  TableBody,
  TableRow,
  TableTitle,
} from '../Styleguide/styled'
import { Container, ContentWrap, InputWrap } from '../Input/index'

const Circuits = () => {
  // list circuit state
  const [circuitList, setCircuitList] = React.useState([])
  // form circuit states
  const [circuitCity, setCircuitCity] = React.useState('')
  const [circuitCountry, setCircuitCountry] = React.useState('')
  const [circuitFastestLapDriver, setCircuitFastestLapPilot] =
    React.useState('')
  const [circuitFastestLapTime, setCircuitFastestLapTime] = React.useState('')
  const [circuitFastestLapYear, setCircuitFastestLapYear] = React.useState('')
  const [circuitName, setCircuitName] = React.useState('')

  // função que carrega os pilotos da API
  const loadCircuitFromApi = async () => {
    // carregar os circuits da api
    const requestCircuits = await axios.get('http://localhost:3001/circuits/')
    // prepara o dado dos circuitos (data)
    const resultCircuits = get(requestCircuits, 'data', [])
    // salvar os circuitos no circuitList
    setCircuitList(resultCircuits)
  }

  // circuit handles
  const handleCircuitCityChange = (event: any) => {
    setCircuitCity(event.target.value)
  }
  const handleCircuitCountryChange = (event: any) => {
    setCircuitCountry(event.target.value)
  }
  const handleCircuitFastestLapTimeChange = (event: any) => {
    setCircuitFastestLapTime(event.target.value)
  }
  const handleCircuitFastestLapDriverChange = (event: any) => {
    setCircuitFastestLapPilot(event.target.value)
  }
  const handleCircuitFastestLapYearChange = (event: any) => {
    setCircuitFastestLapYear(event.target.value)
  }
  const handleCircuitNameChange = (event: any) => {
    setCircuitName(event.target.value)
  }
  // circuit button submit
  const handleCircuitSubmit = async () => {
    // define o modelo de dados a ser salvo
    const circuitBody = {
      circuitname: circuitName,
      circuitcountry: circuitCountry,
      circuitcity: circuitCity,
      circuitfastestlaptime: circuitFastestLapTime,
      circuitfastestlapyear: circuitFastestLapYear,
      circuitfastestlapdriver: circuitFastestLapDriver,
    }
    // salva (post) o novo circuito
    await axios.post('http://localhost:3001/circuits/', circuitBody)
    // chama a função de carregar os circuitos para atualizar a tabela
    loadCircuitFromApi()
  }

  //toda vez que a pág carrega
  React.useEffect(() => {
    // chama a função de carregar os circuitos
    loadCircuitFromApi()
  }, [])
  return (
    <Container>
      <FormTitle>Circuitos</FormTitle>
      <ContentWrap>
        <InputWrap>
          <InputTag>Nome do circuito</InputTag>
          <Input
            name='circuitName'
            onChange={handleCircuitNameChange}
            type='text'
          ></Input>
          <InputTag>País</InputTag>
          <Input
            name='circuitCountry'
            onChange={handleCircuitCountryChange}
            type='text'
          ></Input>
          <InputTag>Cidade</InputTag>
          <Input
            name='circuitCity'
            onChange={handleCircuitCityChange}
            type='text'
          ></Input>
          <InputTag>Volta mais rápida (tempo)</InputTag>
          <Input
            name='circuitFastestLapTime'
            onChange={handleCircuitFastestLapTimeChange}
            type='text'
          ></Input>
          <InputTag>Volta mais rápida (ano)</InputTag>
          <Input
            name='circuitFastestLapYear'
            onChange={handleCircuitFastestLapYearChange}
            type='text'
          ></Input>
          <InputTag>Volta mais rápida (piloto)</InputTag>
          <Input
            name='circuitFastestLapDriver'
            onChange={handleCircuitFastestLapDriverChange}
            type='text'
          ></Input>
          <Button onClick={handleCircuitSubmit} primary={true} type='button'>
            Enviar
          </Button>
        </InputWrap>
      </ContentWrap>
      <TableTitle>Circuitos</TableTitle>
      <ContentWrap>
        <MyTable>
          <TableRow>
            <HeaderTable>Nome</HeaderTable>
            <HeaderTable>País</HeaderTable>
            <HeaderTable>Cidade</HeaderTable>
            <HeaderTable>Volta mais rápida (tempo)</HeaderTable>
            <HeaderTable>Volta mais rápida (ano)</HeaderTable>
            <HeaderTable>Volta mais rápida (piloto)</HeaderTable>
          </TableRow>
          <TableBody>
            {map(circuitList, (item: CircuitItemProps, key) => {
              return (
                <CircuitItem
                  circuitname={item?.circuitname}
                  circuitcountry={item?.circuitcountry}
                  circuitcity={item?.circuitcity}
                  circuitfastestlaptime={item?.circuitfastestlaptime}
                  circuitfastestlapyear={item?.circuitfastestlapyear}
                  circuitfastestlapdriver={item?.circuitfastestlapdriver}
                />
              )
            })}
          </TableBody>
        </MyTable>
      </ContentWrap>
    </Container>
  )
}
export default Circuits
