import { Block, Button } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'

import PrimaryButton from '../../BasicComponents/Button'
import { FormInput } from '../../BasicComponents/FormInput'
import Table from '../../BasicComponents/Table'
import { teamsTableHeaders } from '../../BasicComponents/Table/data'
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { teamsFormInputs } from './data'
import { inputWrapProps, sectionWrapperProps } from './styles'
import { teamsFormValuesType } from './types'

// types dos inputs do formulário


const Teams = () => {
  // state da lista de corridas e inicializa como array vazio
  const [teamList, setTeamList] = React.useState([])

  // state do formulário, tipando com as propriedades do formulário, e inicializa como objeto vazio
  const [formValues, setFormValues] = React.useState<teamsFormValuesType>({})

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

    // 1-alterar a nomenclatura da api
    // 2-fazer um parse do formValues para o objeto da api
    // e-adicionar validação

    // if(!formValues?.CountryLabel) {
    //   console.log("CountryLabel não existe!!!")
    //   return null
    // }
    if (!formValues?.teamNameLabel || !formValues?.teamCountryLabel) {
      alert("Driver name, date birth, country and team are required fields.")
      return
  }
    // define o modelo de dados a ser salvo
    const teamBody = {
      teamName: formValues?.teamNameLabel,
      teamCountry: formValues?.teamCountryLabel,
    }

    // salva os dados inseridos
    await axios.post('http://localhost:3001/teams', teamBody)
    // chama a função de carregar os circuitos para atualizar a tabela
    loadTeamFromApi()
  }
  // função que carrega os dados da API
  const loadTeamFromApi = async () => {
    console.log('antes api')
    const requestTeams = await axios.get('http://localhost:3001/teams')
    // prepara o dado das corridas (data)
    const resultTeams = get(requestTeams, 'data', [])
    const parsedTeams = map(resultTeams, (item) => (
      {
        "values": [
          item.teamName,
          item.teamCountry,
        ]
      }
    ))
    // inclui a equipe no teamList
    setTeamList(parsedTeams)
  }

  // no carregamento da página carrega os dados:
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