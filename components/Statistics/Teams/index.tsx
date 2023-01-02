import { Block, Button } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'

import { FormInput, FormInputProps } from '../../BasicComponents/FormInput'
import { teamsFormInputs } from './data'
import Table from '../../BasicComponents/Table'
import { teamsTableHeaders } from '../../BasicComponents/Table/data'
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { inputWrapProps, sectionWrapperProps } from './styles'
import PrimaryButton from '../../BasicComponents/Button'

// types dos inputs do formulário
type teamsFormValues = {
  teamNameLabel?: FormInputProps,
  teamCountryLabel?: FormInputProps,
}

const Teams = () => {
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
      teamcountry: formValues?.teamCountryLabel,
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
          item.teamcountry,
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
      className='sectionWrapper'
      css={sectionWrapperProps}>
      <Title value={titleStrings.teamsTitle} />
        <Block
          className='inputWrap'
          css={inputWrapProps}>
          {map(teamsFormInputs, (item, key) => <FormInput {...item} key={key} onChange={handleInputChange} />)}
        <PrimaryButton handleFormSubmit={handleFormSubmit}/>
        </Block>
        <Table headers={teamsTableHeaders} items={teamList} />
    </Block>
  )
}
export default Teams