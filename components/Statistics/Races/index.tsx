import { Block } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'

import { FormInput, FormInputProps } from '../../BasicComponents/FormInput'
import { racesFormInputs } from './data'
import Table from '../../BasicComponents/Table'
import { racesTableHeaders } from '../../BasicComponents/Table/data'
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { inputWrapProps, sectionContentProps } from './styles'
import PrimaryButton from '../../BasicComponents/Button'


// types dos inputs do formulário
type racesFormValues = {
  circuitLabel?: FormInputProps,
  raceDateLabel?: FormInputProps,
  raceWinnerLabel?: FormInputProps
}

const NewRaces = () => {
  // state da lista de corridas e inicializa como array vazio
  const [raceList, setRaceList] = React.useState([])

  // state do formulário, tipando com as propriedades do formulário, e inicializa como objeto vazio
  const [formValues, setFormValues] = React.useState<racesFormValues>({})

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
    const raceBody = {
      circuitname: formValues?.circuitLabel,
      racedate: formValues?.raceDateLabel,
      racewinner: formValues?.raceWinnerLabel
    }

    // salva o circuito inserido
    await axios.post('http://localhost:3001/races', raceBody)
    loadRaceFromApi()
  }
  const loadRaceFromApi = async () => {
    console.log('antes api')
    // carrega as corridas da api
    const requestRaces = await axios.get('http://localhost:3001/races')
    // prepara o dado das corridas (data)
    const resultRaces = get(requestRaces, 'data', [])
    const parsedRaces = map(resultRaces, (item) => (
      {
        "values": [
          item.circuitname,
          item.racedate,
          item.racewinner,
        ]
      }
    ))
    // inclui os circuitos no raceList
    setRaceList(parsedRaces)
  }

  // no carregamento da página:
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
export default NewRaces