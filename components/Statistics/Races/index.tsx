import { Block } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'

import PrimaryButton from '../../BasicComponents/Button'
import { FormInput } from '../../BasicComponents/FormInput'
import Table from '../../BasicComponents/Table'
import { racesTableHeaders } from '../../BasicComponents/Table/data'
import { titleStrings } from '../../BasicComponents/Title/data'
import Title from '../../BasicComponents/Title'
import { racesFormInputs } from './data'
import { inputWrapProps, sectionContentProps } from './styles'
import { racesFormValues } from './types'

const Races = () => {
  const [raceList, setRaceList] = React.useState([])
  const [formValues, setFormValues] = React.useState<racesFormValues>({})

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.name
    const value = event?.target?.value
    setFormValues({
      ...formValues,
      [`${name}`]: value
    })
  }

  const handleFormSubmit = async () => {
    if (!formValues?.circuitLabel || !formValues?.raceDateLabel || !formValues?.raceWinnerLabel) {
      alert("Circuit name, country and city are required fields.")
      return
  }
    const raceBody = {
      circuitName: formValues?.circuitLabel,
      raceDate: formValues?.raceDateLabel,
      raceWinner: formValues?.raceWinnerLabel
    }

    await axios.post('http://localhost:3001/races/save', raceBody)
    loadRaceFromApi()
  }
  const loadRaceFromApi = async () => {
    console.log('antes api')
    const requestRaces = await axios.post('http://localhost:3001/races/filter')
    console.log('requestRaces', requestRaces)
    const resultRaces = get(requestRaces, 'data', [])
    console.log('resultRaces', resultRaces)
    const parsedRaces = map(resultRaces, (item) => (
      {
        "values": [
          item.circuitName,
          item.raceDate,
          item.raceWinner,
        ]
      }
    ))
    setRaceList(parsedRaces)
  }

  React.useEffect(() => {
    loadRaceFromApi()
  }, [])

  return (
    <Block
      className='sectionContent'
      css={sectionContentProps}>
      <Title value={titleStrings.racesTitle} />
      <Block
        className='inputWrap'
        css={inputWrapProps}>
        {map(racesFormInputs, (item, key) => <FormInput {...item} key={key} onChange={handleInputChange} />)}
        <PrimaryButton handleFormSubmit={handleFormSubmit} />
      </Block>
      <Table headers={racesTableHeaders} items={raceList} />
    </Block>
  )
}
export default Races