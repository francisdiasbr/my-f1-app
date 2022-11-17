import { Block, Button } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'

import { FormInput, FormInputProps } from '../FormInput'
import { teamsFormInputs } from '../NewTeams/data'
import Table from '../Table'
import { teamsTableHeaders } from '../Table/data'
import Title from '../Title'
import { titleStrings } from '../Title/data'
import { inputWrapProps, sectionContentProps } from './props'


// types dos inputs do formulário
type teamsFormValues = {
  teamNameLabel?: FormInputProps,
  teamPreviousNameLabel?: FormInputProps,
  teamFirstRaceLabel?: FormInputProps,
  teamEngineLabel?: FormInputProps
}

const NewTeams = () => {
  // state da lista de corridas e inicializa como array vazio
  const [teamList, setTeamList] = React.useState([])

  // state do formulário, tipando com as propriedades do formulário, e inicializa como objeto vazio
  const [formValues, setFormValues] = React.useState<teamsFormValues>({})

  // handler do formulário para a mudança no campo de input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.name
    const value = event?.target?.value
    // setFormValues necessita estar no formato [{},{},{}], então:
    setFormValues({
      ...formValues,
      [`${name}`]: value
    })
  }


  //handler de submissão do botão de envio dos dados do formulário
  const handleFormSubmit = async () => {
    // console de formValues aqui para ver os dados salvando no formato correto
    // console.log('raceFormValues', FormValues)

    // define o modelo de dados a ser salvo
    const teamBody = {
      teamname: formValues?.teamNameLabel,
      teampreviousname: formValues?.teamPreviousNameLabel,
      teamfirstrace: formValues?.teamFirstRaceLabel,
      teamengine: formValues?.teamEngineLabel
    }

    // salva o circuito inserido
    await axios.post('http://localhost:3001/teams', teamBody)
    loadTeamFromApi()
  }
  const loadTeamFromApi = async () => {
    console.log('antes api')
    // carrega as corridas da api
    const requestTeams = await axios.get('http://localhost:3001/teams')
    // prepara o dado das corridas (data)
    const resultTeams = get(requestTeams, 'data', [])
    const parsedTeams = map(resultTeams, (item) => (
      {
        "values": [
          item.teamname,
          item.teampreviousname,
          item.teamfirstrace,
          item.teamengine,
        ]
      }
    ))
    // inclui os circuitos no raceList
    setTeamList(parsedTeams)
  }

  // no carregamento da página:
  React.useEffect(() => {
    loadTeamFromApi()
  }, [])

  return (
    <Block
      className='sectionContent'
      css={sectionContentProps}>
      <Title value={titleStrings.teamsTitle} />
      <Block
        className='inputWrap'
        css={inputWrapProps}>
        {map(teamsFormInputs, (item, key) => <FormInput {...item} key={key} onChange={handleInputChange} />)}
        <Button
          onClick={handleFormSubmit}
          roundedCorners='alternative'
          size='xs'
          color='basicBlackAlpha700'>
          Enviar dados
        </Button>
      </Block>
      <Table headers={teamsTableHeaders} items={teamList} />
    </Block>
  )
}
export default NewTeams