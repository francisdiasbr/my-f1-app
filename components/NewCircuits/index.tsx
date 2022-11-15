import axios from 'axios'
import React from 'react'
import { map } from 'lodash'
import { get } from 'lodash'
import { Block, Button, Typography } from '@xprog/prensa'
import { PrensaEngineCSSProp } from '@xprog/prensa/types'

import CircuitItem, { CircuitItemProps } from './circuitItem'
import { circuitContentProps, circuitInputProps, circuitInputTitleProps, circuitTitleProps, inputItemProps, inputLabelProps, inputWrapProps, tableTitleProps } from './props'
import { inputLabel, tableTitles, titleStrings } from 'components/NewCircuits/data'

const NewCircuits = () => {
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
    <Block
      className='circuitContent'
      css={circuitContentProps}
    >
      <Block
        className='circuitInput'
        css={circuitInputProps}>
        <Block
          className='circuitInputTitle'
          css={circuitInputTitleProps}>
          <Typography
            className='circuitTitle'
            css={circuitTitleProps}>{titleStrings.circuitsTitle}</Typography>
        </Block>
        <Block
          className='inputWrap'
          css={inputWrapProps}>
          <Block
            className='inputItem'
            css={inputItemProps}>
            <Typography
              className='inputLabel'
              css={inputLabelProps}>
              {inputLabel.CountryLabel}
            </Typography>
            <input
              name='circuitCountry'
              onChange={handleCircuitCountryChange}
              type='text'>
            </input>
          </Block>
          <Block
            className='inputItem'
            css={inputItemProps}>
            <Typography
              className='inputLabel'
              css={inputLabelProps}>
              {inputLabel.CityLabel}
            </Typography>
            <input
              name='circuitCity'
              onChange={handleCircuitCityChange}
              type='text'>
            </input>
          </Block>
          <Block
            className='inputItem'
            css={inputItemProps}>
            <Typography
              className='inputLabel'
              css={inputLabelProps}>
              {inputLabel.FastestLapTimeLabel}
            </Typography>
            <input
              name='circuitFastestLapTime'
              onChange={handleCircuitFastestLapTimeChange}
              type='text'>
            </input>
          </Block>
          <Block
            className='inputItem'
            css={inputItemProps}>
            <Typography
              className='inputLabel'
              css={inputLabelProps}>
              {inputLabel.FastestLapYearLabel}
            </Typography>
            <input
              name='circuitFastestLapYear'
              onChange={handleCircuitFastestLapYearChange}
              type='text'>
            </input>
          </Block>
          <Block
            className='inputItem'
            css={inputItemProps}>
            <Typography
              className='inputLabel'
              css={inputLabelProps}>
              {inputLabel.FastestLapDriverLabel}
            </Typography>
            <input
              name='circuitFastestLapDriver'
              onChange={handleCircuitFastestLapDriverChange}
              type='text'>
            </input>
          </Block>
          <Button
            onClick={handleCircuitSubmit}
            roundedCorners='alternative'
            size='xs'
            color='basicBlackAlpha700'>
            Enviar dados
          </Button>
        </Block>
      </Block>
      <Block
        className='tableTitle'
        css={tableTitleProps}>
        <Typography>
          {tableTitles.circuitsTableTitle}
        </Typography>
      </Block>
      <Block>
        
      </Block>
    </Block>
  )
}
export default NewCircuits
