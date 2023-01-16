import { Block, Button } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


import PrimaryButton from '../../BasicComponents/Button'
import { FormInput } from '../../BasicComponents/FormInput'
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { circuitsFormInputs } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import { circuitsFormValuesType } from './types'

const Circuits = () => {
  const [circuitList, setCircuitList] = React.useState([])
  const [formValues, setFormValues] = React.useState<circuitsFormValuesType>({})

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.name
    const value = event?.target?.value
    setFormValues({
      ...formValues,
      [`${name}`]: value
    })
  }

  const handleFormSubmit = async () => {
    if (!formValues?.circuitLabel || !formValues?.countryLabel || !formValues?.cityLabel) {
      alert("Circuit name, country and city are required fields.")
      return
    }

    const circuitBody = {
      circuitName: formValues?.circuitLabel,
      circuitCountry: formValues?.countryLabel,
      circuitCity: formValues?.cityLabel,
    }

    const result = await axios.post('http://localhost:3001/circuits/save', circuitBody)
    console.log('result', result)
    loadCircuitFromApi()
  }

  const loadCircuitFromApi = async () => {
    console.log('antes api')
    const requestCircuits = await axios.post('http://localhost:3001/circuits/filter')
    console.log('requestCircuits', requestCircuits)
    const resultCircuits = get(requestCircuits, 'data', [])
    console.log('resultCircuits', resultCircuits)
    // const parsedCircuits = map(resultCircuits, (item) => (
    //   {
    //     "values": [
    //       item.circuitName,
    //       item.circuitCountry,
    //       item.circuitCity,
    //     ]
    //   }
    // ))
    setCircuitList(resultCircuits)
  }

  React.useEffect(() => {
    loadCircuitFromApi()
  }, [])

  const columns: GridColDef[] = [
    { field: 'circuitName', headerName: 'Circuito', width: 170 },
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
          {map(circuitsFormInputs, (item, key) => <FormInput {...item} key={key} onChange={handleInputChange} />)}
          <PrimaryButton handleFormSubmit={handleFormSubmit} />
        </Block>
        <Block style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={circuitList}
            getRowId={(row) => row._id}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Block>
      </Block>
    </Block>
  )
}
export default Circuits