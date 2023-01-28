import { Block } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'
import { GridColDef } from '@mui/x-data-grid';

import EnhancedTable from 'components/BasicComponents/MUITable';
import PrimaryButton from '../../BasicComponents/Button'
import { FormInput } from '../../BasicComponents/FormInput'
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { circuitsFormInputs, headCells } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import { circuitsFormValuesType } from './types'

const Circuits = () => {
  const [circuitList, setCircuitList] = React.useState([]) //array de circuitos
  const [formValues, setFormValues] = React.useState<circuitsFormValuesType>({}) //objeto do input

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
    // console.log('antes api')
    const requestCircuits = await axios.post('http://localhost:3001/circuits/filter')
    // console.log('requestCircuits', requestCircuits)
    const resultCircuits = get(requestCircuits, 'data', [])
    // console.log('resultCircuits', resultCircuits)
    const parsedCircuits = map(resultCircuits, (item) => (
      {
        name: item.circuitName,
        country: item.circuitCountry,
        city: item.circuitCity,
      }
    ))
    setCircuitList(parsedCircuits)
  }

  React.useEffect(() => {
    loadCircuitFromApi()
  }, [])

  const columns: GridColDef[] = [
    { field: 'circuitName', headerName: 'Circuito', width: 130 },
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
          {/* <DataGrid
            rows={circuitList}
            getRowId={(row) => row._id}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          /> */}
        </Block>
      </Block>
      <EnhancedTable
        headCells={headCells}
        rows={circuitList}
      />
    </Block>
  )
}
export default Circuits