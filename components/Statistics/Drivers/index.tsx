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
import { driversFormFields, headCells } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import { DriverFormType, DriverListType } from './types'

const Drivers = () => {
  const [formValues, setFormValues] = useState<DriverFormType>({})
  const [driverList, setDriverList] = useState<DriverListType>([])
  const [formIncomplete, setFormIncomplete] = useState<boolean>(false)

  const parseDriverFromApi = (item) => {
    return {
      id: item._id,
      name: item.driverName,
      birth: item.driverBirth,
      country: item.driverCountry,
      team: item.driverTeam,
    }
  }

  const loadDriverFromApi = async () => {
    const requestDrivers = await axios.post('http://localhost:3001/drivers/filter')
    const resultDrivers = get(requestDrivers, 'data', [])
    const parsedDrivers = map(resultDrivers, (item) => parseDriverFromApi(item))
    setDriverList(parsedDrivers)
  }

  const loadDriverById = async (id) => {
    const requestFilter = { filters: { _id: id } }
    const requestDriver = await axios.post('http://localhost:3001/drivers/filter', requestFilter)
    const resultDrivers = get(requestDriver, 'data', [])
    const parsedDrivers = map(resultDrivers, (item) => parseDriverFromApi(item))
    const driverSelected = first(parsedDrivers)
    setFormValues({
      ...formValues,
      driverId: driverSelected.id,
      driverNameLabel: driverSelected.name,
      driverBirthLabel: driverSelected.birth,
      driverCountryLabel: driverSelected.country,
      driverTeamLabel: driverSelected.team,
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
    await loadDriverById(id)
  }

  const handleFormSubmit = async () => {
    if (!formValues?.driverNameLabel || !formValues?.driverBirthLabel || !formValues?.driverCountryLabel || !formValues?.driverTeamLabel) {
      setFormIncomplete(true);
      return;
    }
    setFormIncomplete(false);
    const driverBody = {
      _id: formValues?.driverId,
      driverName: formValues?.driverNameLabel,
      driverBirth: formValues?.driverBirthLabel,
      driverCountry: formValues?.driverCountryLabel,
      driverTeam: formValues?.driverTeamLabel,
    }
    const result = await axios.post('http://localhost:3001/drivers/save', driverBody)
    loadDriverFromApi()
  }

  React.useEffect(() => {
    loadDriverFromApi()
  }, [])

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
          {map(driversFormFields, (item, key) =>
            <FormInput
              {...item}
              key={key}
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
        {formIncomplete && (
          <CustomAlert
            message='Todos os campos são obrigatórios.'
            onClose={() => {
              setFormIncomplete(false);
            }}
          />
        )}
      </Block>
      <Table
        headCells={headCells}
        handleEditItem={handleEditItem}
        rows={driverList}
      />
    </Block>
  )
}
export default Drivers