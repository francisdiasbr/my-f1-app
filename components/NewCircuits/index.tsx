import axios from 'axios'
import React from 'react'
import { map } from 'lodash'
import { get } from 'lodash'
import { Block, Button, Typography } from '@xprog/prensa'
import { PrensaEngineCSSProp } from '@xprog/prensa/types'

import CircuitItem, { CircuitItemProps } from './circuitItem'
import { circuitContentProps, circuitInputProps, circuitInputTitleProps, circuitTitleProps, inputItemProps, inputLabelProps, inputWrapProps, tableTitleProps } from './props'
import { circuitsFormInputs, tableTitles, titleStrings, circuitsTableHeaders } from 'components/NewCircuits/data'
import { FormInput, FormInputProps } from 'components/FormInput'
import Table from 'components/Table'

type circuitsFormValues = {
  CircuitLabel?: FormInputProps,
  CountryLabel?: FormInputProps,
  CityLabel?: FormInputProps,
  FastestLapTimeLabel?: FormInputProps,
  FastestLapYearLabel?: FormInputProps,
  FastestLapDriverLabel?: FormInputProps
}

const NewCircuits = () => {
  // list circuit state
  const [circuitList, setCircuitList] = React.useState([])

  // form circuit state
  const [formValues, setFormValues] = React.useState<circuitsFormValues>({})

  // form circuit handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.name
    const value = event?.target?.value
    setFormValues({
      ...formValues,
      [`${name}`]: value
    })
  }

  // circuit button submit
  const handleFormSubmit = async () => {

    console.log('formValues', formValues)
    // 1-alterar a nomenclatura da api
    // 2-fazer um parse do formValues para o objeto da api
    // e-adicionar validação

    // if(!formValues?.CountryLabel) {
    //   console.log("CountryLabel não existe!!!")
    //   return null
    // }

    // define o modelo de dados a ser salvo
    const circuitBody = {
      circuitname: formValues?.CircuitLabel,
      circuitcountry: formValues?.CountryLabel,
      circuitcity: formValues?.CityLabel,
      circuitfastestlaptime: formValues?.FastestLapTimeLabel,
      circuitfastestlapyear: formValues?.FastestLapYearLabel,
      circuitfastestlapdriver: formValues?.FastestLapDriverLabel,
    }

    console.log('circuitBody', circuitBody)
    // // salva (post) o novo circuito
    await axios.post('http://localhost:3001/circuits/', circuitBody)
    // // chama a função de carregar os circuitos para atualizar a tabela
    // loadCircuitFromApi()
  }

  // função que carrega os circuitos da API
  const loadCircuitFromApi = async () => {
    console.log('before api')
    // carregar os circuits da api
    const requestCircuits = await axios.get('http://localhost:3001/circuits/')
    // prepara o dado dos circuitos (data)
    const resultCircuits = get(requestCircuits, 'data', [])
    // console.log('inside api', resultCircuits)
    const parsedCircuits = map(resultCircuits, (item) => (
      {
        "values": [
          item.circuitname,
          item.circuitcountry,
          item.circuitcity,
          item.circuitfastestlaptime,
          item.circuitfastestlapyear,
          item.circuitfastestlapdriver,
        ]
      }
    ))
    // salvar os circuitos no circuitList
    setCircuitList(parsedCircuits)
  }

  //toda vez que a pág carrega
  React.useEffect(() => {
    // chama a função de carregar os circuitos
    loadCircuitFromApi()
  }, [])
  console.log('circuitList', circuitList)
  return (
    <Block
      className='circuitContent'
      css={circuitContentProps}>
      <Block
        className='circuitInput'
        css={circuitInputProps}>
        <Block
          className='circuitInputTitle'
          css={circuitInputTitleProps}>
          <Typography
            className='circuitTitle'
            css={circuitTitleProps}>{titleStrings.circuitsTitle}
          </Typography>
        </Block>
        <Block
          className='inputWrap'
          css={inputWrapProps}>
          {map(circuitsFormInputs, (item, key) => <FormInput {...item} key={key} onChange={handleInputChange} />)}
          <Button
            onClick={handleFormSubmit}
            roundedCorners='alternative'
            size='xs'
            color='basicBlackAlpha700'>
            Enviar dados
          </Button>
        </Block>
      </Block>
      <Table headers={circuitsTableHeaders} items={circuitList} />
    </Block>
  )
}
export default NewCircuits

// const tableMockHeaders = [{ value: 'Head1' }, { value: 'Head2' }, { value: 'Head3' }, { value: 'Head4' }, { value: 'Head5' }, { value: 'Head6' }]
const tableMockItems = [
  {
    values: ['Cell1', 'Cell2', 'Cell3', 'Cell4', 'Cell5', 'Cell6']
  },
  { values: ['Cell7', 'Cell8', 'Cell9', 'Cell10', 'Cell11', 'Cell12'] }]