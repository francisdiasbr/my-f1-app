import axios from 'axios'
import React from 'react'
import { map } from 'lodash'
import { get } from 'lodash'
import { Button } from '../Button'
import { Input } from '../Input'
import { Container, ContentWrap, InputField, InputWrap } from '../Input/index'
import TeamItem, { TeamItemProps } from './item'
import {
  FormTitle,
  HeaderTable,
  InputTag,
  MyTable,
  TableBody,
  TableRow,
  TableTitle,
} from '../Styleguide/styled'

const Teams = () => {
  // list team state
  const [teamList, setTeamList] = React.useState([])
  // team states
  const [teamEngine, setTeamEngine] = React.useState('')
  const [teamFirstRace, setTeamFirstRace] = React.useState('')
  const [teamName, setTeamName] = React.useState('')
  const [teamPreviousName, setTeamPreviousName] = React.useState('')

  // função que carrega os teams da API
  const loadTeamFromApi = async () => {
    // carregar os teams da api
    const requestTeam = await axios.get('http://localhost:3001/teams/')
    // prepara o dado dos pilotos (data)
    const resultTeam = get(requestTeam, 'data', [])
    // salvar as equipes no teamsList
    setTeamList(resultTeam)
  }

  // team handles
  const handleTeamNameChange = (event: any) => {
    setTeamName(event.target.value)
  }
  const handleTeamPreviousNameChange = (event: any) => {
    setTeamPreviousName(event.target.value)
  }
  const handleTeamFirstRaceChange = (event: any) => {
    setTeamFirstRace(event.target.value)
  }
  const handleTeamEngineChange = (event: any) => {
    setTeamEngine(event.target.value)
  }
  // team button submit
  const handleTeamSubmit = async () => {
    // define o modelo de dados a ser salvo
    const teamBody = {
      teamname: teamName,
      teampreviousname: teamPreviousName,
      teamfirstrace: teamFirstRace,
      teamengine: teamEngine,
    }
    // salva (post) a nova equipe
    await axios.post('http://localhost:3001/teams/', teamBody)
    // chama a função de carregar as equipes para atualizar a tabela
    loadTeamFromApi()
  }

  // toda vez que a página carregar
  React.useEffect(() => {
    // chama a função de carregar as equipes
    loadTeamFromApi()
  }, [])
  return (
    <Container>
      <FormTitle>Equipes</FormTitle>
      <ContentWrap>
        <InputWrap>
          <InputField>
            <InputTag>Nome</InputTag>
            <Input
              name='teamName'
              onChange={handleTeamNameChange}
              type='text'
            ></Input>
          </InputField>
          <InputField>
            <InputTag>Nome anterior</InputTag>
            <Input
              name='teamPreviousName'
              onChange={handleTeamPreviousNameChange}
              type='text'
            ></Input>
          </InputField>
          <InputField>
            <InputTag>Primeiro GP</InputTag>
            <Input
              name='teamFirstRace'
              onChange={handleTeamFirstRaceChange}
              type='text'
            ></Input>
          </InputField>
          <InputField>
            <InputTag>Motor</InputTag>
            <Input
              name='teamEngine'
              onChange={handleTeamEngineChange}
              type='text'
            ></Input>
          </InputField>
          <Button onClick={handleTeamSubmit} primary={true} type='button'>
            Enviar
          </Button>
        </InputWrap>
        <TableTitle>Equipes</TableTitle>
        <MyTable>
          <TableRow>
            <HeaderTable>Nome</HeaderTable>
            <HeaderTable>Nome anterior</HeaderTable>
            <HeaderTable>Primeiro GP</HeaderTable>
            <HeaderTable>Motor</HeaderTable>
          </TableRow>
          <TableBody>
            {map(teamList, (item: TeamItemProps, key) => {
              return (
                <TeamItem
                  teamname={item?.teamname}
                  teampreviousname={item?.teampreviousname}
                  teamfirstrace={item?.teamfirstrace}
                  teamengine={item?.teamengine}
                />
              )
            })}
          </TableBody>
        </MyTable>
      </ContentWrap>
    </Container>
  )
}

export default Teams
