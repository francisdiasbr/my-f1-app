import Button from '@mui/joy/button'
import { Block } from '@xprog/prensa'
import axios from 'axios'
import { first, get, map } from 'lodash'
import React from 'react'

import { FormInput } from '../../BasicComponents/FormInput'
import EnhancedTable from '../../BasicComponents/MUITable';
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { racesFormFields, headCells } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import { racesFormValuesType } from './types'

const Races = () => {
  const [formValues, setFormValues] = React.useState<racesFormValuesType>({})
  const [raceList, setRaceList] = React.useState([])

  const parseRaceFromApi = (item) => {
    return {
      id: item._id,
      name: item.raceName,
      date: item.raceDate,
      winner: item.raceWinner,
    }
  }

  const loadRaceFromApi = async () => {
    const requestRaces = await axios.post('http://localhost:3001/races/filter')
    const resultRaces = get(requestRaces, 'data', [])
    const parsedRaces = map(resultRaces, (item) => parseRaceFromApi(item))
    setRaceList(parsedRaces)
  }

  const loadRaceById = async (id) => {
    const requestFilter = { filters: { _id: id } }
    const requestRace = await axios.post('http://localhost:3001/races/filter', requestFilter)
    const resultRaces = get(requestRace, 'data', [])
    const parsedRaces = map(resultRaces, (item) => parseRaceFromApi(item))
    const raceSelected = first(parsedRaces)
    setFormValues({
      ...formValues,
      raceId: raceSelected.id,
      raceNameLabel: raceSelected.name,
      raceDateLabel: raceSelected.date,
      raceWinnerLabel: raceSelected.winner,
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
    await loadRaceById(id)
  }

  const handleFormSubmit = async () => {
    if (!formValues?.raceNameLabel || !formValues?.raceDateLabel) {
      alert("Race name, and date are required fields.")
      return
    }
    const raceBody = {
      _id: formValues?.raceId,
      raceName: formValues?.raceNameLabel,
      raceDate: formValues?.raceDateLabel,
      raceWinner: formValues?.raceWinnerLabel,
    }

    const result = await axios.post('http://localhost:3001/races/save', raceBody)
    loadRaceFromApi()
  }

  React.useEffect(() => {
    loadRaceFromApi()
  }, [])

  return (
    <Block
      className='sectionWrapper'
      css={sectionWrapperProps}>
      <Title value={titleStrings.racesTitle} />
      <Block
        className='blockDisposition'
        css={blockDispositionProps}>
        <Block
          className='inputWrap'
          css={inputWrapProps}>
          {map(racesFormFields, (item, key) => <FormInput {...item} key={key} onChange={handleInputChange} value={formValues[`${item.name}`]} />)}
        </Block>
        <Button onClick={handleFormSubmit} color='info' variant='soft'>Enviar</Button>
      </Block>
      <EnhancedTable
        handleEditItem={handleEditItem}
        headCells={headCells}
        rows={raceList}
      />
    </Block>
  )
}
export default Races