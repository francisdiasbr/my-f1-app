import { Block } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'

import { FormInput } from '../../BasicComponents/FormInput'
import { driversFormInputs } from './data'
import Table from '../../BasicComponents/Table'
import { driversTableHeaders } from '../../BasicComponents/Table/data'
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { inputWrapProps, sectionWrapperProps } from './styles'
import PrimaryButton from '../../BasicComponents/Button'
import {driversFormValues} from './types'

const Drivers = () => {
  const [driverList, setDriverList] = React.useState([])
  const [formValues, setFormValues] = React.useState<driversFormValues>({})

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
        "values": [
          item.driverName,
          item.driverBirth,
          item.driverCountry,
          item.driverTeam,
        ]
      }
    ))
    setDriverList(parsedDrivers)
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
        className='inputWrap'
        css={inputWrapProps}>
        {map(driversFormInputs, (item, key) => <FormInput {...item} key={key} onChange={handleInputChange} />)}
        <PrimaryButton handleFormSubmit={handleFormSubmit} />
      </Block>
      <Table headers={driversTableHeaders} items={driverList} />
    </Block>
  )
}
export default Drivers