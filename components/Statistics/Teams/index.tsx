import Button from '@mui/joy/button'
import { Block } from '@xprog/prensa'
import axios from 'axios'
import { first, get, map } from 'lodash'
import React, { useState } from 'react'

import CustomAlert from '../../BasicComponents/MUIAlert'
import { FormInput } from '../../BasicComponents/FormInput'
import Table from './Table'
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { teamsFormFields, headCells } from './data'
import { blockDispositionProps, inputWrapProps, sectionWrapperProps } from './styles'
import { TeamFormType, TeamListType } from './types'

const Teams = () => {
  const [formValues, setFormValues] = useState<TeamFormType>({})
  const [teamList, setTeamList] = useState<TeamListType>([])
  const [formIncomplete, setFormIncomplete] = useState<boolean>(false)

  const parseTeamFromApi = (item) => {
    return {
      id: item._id,
      name: item.teamName,
      country: item.teamCountry,
    }
  }

  const loadTeamFromApi = async () => {
    const requestTeams = await axios.post('http://localhost:3001/teams/filter')
    const resultTeams = get(requestTeams, 'data', [])
    const parsedTeams = map(resultTeams, (item) => parseTeamFromApi(item))
    setTeamList(parsedTeams)
  }

  const loadTeamById = async (id) => {
    const requestFilter = { filters: { _id: id } }
    const requestTeam = await axios.post('http://localhost:3001/teams/filter', requestFilter)
    const resultTeams = get(requestTeam, 'data', [])
    const parsedTeams = map(resultTeams, (item) => parseTeamFromApi(item))
    const teamSelected = first(parsedTeams)
    setFormValues({
      ...formValues,
      teamId: teamSelected.id,
      teamNameLabel: teamSelected.name,
      teamCountryLabel: teamSelected.country,
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
    await loadTeamById(id)
  }

  const handleFormSubmit = async () => {
    if (!formValues?.teamNameLabel || !formValues?.teamCountryLabel) {
      setFormIncomplete(true);
      return;
    }
    setFormIncomplete(false);
    const teamBody = {
      _id: formValues?.teamId,
      teamName: formValues?.teamNameLabel,
      teamCountry: formValues?.teamCountryLabel,
    }

    const result = await axios.post('http://localhost:3001/teams/save', teamBody)
    loadTeamFromApi()
  }

  React.useEffect(() => {
    loadTeamFromApi()
  }, [])

  return (
    <Block
      className='sectionWrapper'
      css={sectionWrapperProps}>
      <Title value={titleStrings.teamsTitle} />
      <Block
        className='blockDisposition'
        css={blockDispositionProps}>
        <Block
          className='inputWrap'
          css={inputWrapProps}>
          {map(teamsFormFields, (item, key) =>
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
        rows={teamList}
      />
    </Block>
  )
}
export default Teams