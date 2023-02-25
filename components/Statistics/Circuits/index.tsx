import Button from '@mui/joy/button'
import { GridColDef } from '@mui/x-data-grid';
import { Block } from '@xprog/prensa'
import axios from 'axios'
import { first, get, map } from 'lodash'
import React from 'react'

import { FormInput } from '../../BasicComponents/FormInput'
import EnhancedTable from 'components/BasicComponents/MUITable';
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { circuitsFormFields, headCells } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import { circuitsFormValuesType } from './types'

const Circuits = () => {
  const [formValues, setFormValues] = React.useState<circuitsFormValuesType>({})
  const [circuitList, setCircuitList] = React.useState([])

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
      circuitCityLabel: circuitSelected.city,
      circuitCountryLabel: circuitSelected.country,
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
      alert("Circuit name, country and city are required fields.")
      return
    }
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

  const columns: GridColDef[] = [
    { field: 'circuitName', headerName: 'Circuito', width: 80 },
    { field: 'circuitCountry', headerName: 'País', width: 130 },
    { field: 'circuitCity', headerName: 'Cidade', width: 130 }
  ];


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
          {map(circuitsFormFields, (item, key) => <FormInput {...item} key={key}
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
      </Block>
      <EnhancedTable
        handleEditItem={handleEditItem}
        headCells={headCells}
        rows={circuitList}
      />
    </Block>
  )
}
export default Circuits