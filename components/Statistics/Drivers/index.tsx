import { GridColDef } from '@mui/x-data-grid';
import { Block } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'

import EnhancedTable from 'components/BasicComponents/MUITable';
import PrimaryButton from '../../BasicComponents/Button'
import { FormInput } from '../../BasicComponents/FormInput'
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { driversFormInputs, headCells } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import {driversFormValuesType} from './types'

const Drivers = () => {
  const [driverList, setDriverList] = React.useState([])
  const [formValues, setFormValues] = React.useState<driversFormValuesType>({})

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.name
    const value = event?.target?.value
    setFormValues({
      ...formValues,
      [`${name}`]: value
    })
  }

  const handleFormSubmit = async () => {
    if (!formValues?.driverNameLabel || !formValues?.driverBirthLabel || !formValues?.driverCountryLabel || !formValues?.driverTeamLabel) {
      alert("Driver name, date birth, country and team are required fields.")
      return
  }
    const driverBody = {
      driverName: formValues?.driverNameLabel,
      driverBirth: formValues?.driverBirthLabel,
      driverCountry: formValues?.driverCountryLabel,
      driverTeam: formValues?.driverTeamLabel,
    }

    const result = await axios.post('http://localhost:3001/drivers/save', driverBody)
    console.log('result', result)
    loadDriverFromApi()
  }

  const loadDriverFromApi = async () => {
    const requestDrivers = await axios.post('http://localhost:3001/drivers/filter')
    const resultDrivers = get(requestDrivers, 'data', [])
    const parsedDrivers = map(resultDrivers, (item) => (
      {
          name: item.driverName,
          birth: item.driverBirth,
          country: item.driverCountry,
          team: item.driverTeam,
      }
    ))
    setDriverList(parsedDrivers)
  }

  React.useEffect(() => {
    loadDriverFromApi()
  }, [])

  const columns: GridColDef[] = [
    { field: 'driverName', headerName: 'Piloto', width: 80 },
    { field: 'driverBirth', headerName: 'Data de nascimento', width: 80 },
    { field: 'driverCountry', headerName: 'Cidade', width: 80 },
    { field: 'driverTeam', headerName: 'Equipe', width: 80 }
  ];

  return (
    <Block
      className='sectionWrapper'
      css={sectionWrapperProps}>
      <Title value={titleStrings.driversTitle} />
      <Block
        className='blockDisposition'
        css={blockDispositionProps}>
      <Block
        className='inputWrap'
        css={inputWrapProps}>
        {map(driversFormInputs, (item, key) => <FormInput {...item} key={key} onChange={handleInputChange} />)}
        <PrimaryButton handleFormSubmit={handleFormSubmit} />
      </Block>
      <Block style={{ height: 400, width: '100%' }}>
        </Block>
      </Block>
      <EnhancedTable
        headCells={headCells}
        rows={driverList}
      />
    </Block>
  )
}
export default Drivers