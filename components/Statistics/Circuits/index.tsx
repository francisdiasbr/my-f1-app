import Button from '@mui/joy/button'
import { Block } from '@xprog/prensa'
import axios from 'axios'
import { first, get, map } from 'lodash'
import React, { useState } from 'react'

import { FormInput } from '../../BasicComponents/FormInput'
import Table from './Table'
import Title from '../../BasicComponents/Title'
import CustomAlert from '../../BasicComponents/MUIAlert'
import { titleStrings } from '../../BasicComponents/Title/data'
import { circuitsFormFields, headCells } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import { CircuitFormType, CircuitListType } from './types'

const Circuits = () => {
  const [formValues, setFormValues] = useState<CircuitFormType>({})
  const [circuitList, setCircuitList] = useState<CircuitListType>([])
  const [formIncomplete, setFormIncomplete] = useState<boolean>(false)

  const parseCircuitFromApi = (item) => {
    return {
      id: item._id,
      name: item.circuitName,
      city: item.circuitCountry,
      country: item.circuitCity,
    }
  }

  const loadCircuitFromApi = async () => {
    const requestCircuits = await axios.post('http://localhost:3001/circuits/filter')
    const resultCircuits = get(requestCircuits, 'data', [])
    const parsedCircuits = map(resultCircuits, (item) => parseCircuitFromApi(item))
    setCircuitList(parsedCircuits)
  }

  const loadCircuitById = async (id) => {
    const requestFilter = { filters: { _id: id } }
    const requestCircuits = await axios.post('http://localhost:3001/circuits/filter', requestFilter)
    const resultCircuits = get(requestCircuits, 'data', [])
    const parsedCircuits = map(resultCircuits, (item) => parseCircuitFromApi(item))
    const circuitSelected = first(parsedCircuits)
    setFormValues({
      ...formValues,
      circuitId: circuitSelected.id,
      circuitNameLabel: circuitSelected.name,
      circuitCountryLabel: circuitSelected.country,
      circuitCityLabel: circuitSelected.city,
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.name
    const value = event?.target?.value
    setFormValues({
      ...formValues,
      [`${name}`]: value
    })
  }

  const handleEditItem = async (id) => {
    await loadCircuitById(id)
  }

  const handleFormSubmit = async () => {
    if (!formValues?.circuitNameLabel || !formValues?.circuitCountryLabel || !formValues?.circuitCityLabel) {
      setFormIncomplete(true); // atualiza o estado para true se o formulário estiver incompleto
      return;
    }
    setFormIncomplete(false); // atualiza o estado para false se o formulário estiver completo
    const circuitBody = {
      _id: formValues?.circuitId,
      circuitName: formValues?.circuitNameLabel,
      circuitCountry: formValues?.circuitCountryLabel,
      circuitCity: formValues?.circuitCityLabel,
    }
    const result = await axios.post('http://localhost:3001/circuits/save', circuitBody)
    loadCircuitFromApi()
  }

  React.useEffect(() => {
    loadCircuitFromApi()
  }, [])

  return (
    <Block
      className='sectionWrapper'
      css={sectionWrapperProps}>
      <Title value={titleStrings.circuitsTitle} />
      <Block
        className='blockDisposition'
        css={blockDispositionProps}>
        <Block
          className='inputWrap'
          css={inputWrapProps}>
          {map(circuitsFormFields, (item, key) =>
            <FormInput {...item} key={key}
              onChange={handleInputChange}
              value={formValues[`${item.name}`]}
            />)}
        </Block>
        <Button
          onClick={handleFormSubmit}
          color='info'
          variant='soft'
        >
          Enviar
        </Button>
        {formIncomplete && ( // renderiza o componente CustomAlert somente se formIncomplete for verdadeiro
          <CustomAlert
            message='Todos os campos são obrigatórios.'
            onClose={() => {
              setFormIncomplete(false); // define o estado para false ao fechar o alerta
            }}
          />
        )}
      </Block>
      <Table
        headCells={headCells}
        handleEditItem={handleEditItem}
        rows={circuitList}
      />
    </Block>
  )
}
export default Circuits