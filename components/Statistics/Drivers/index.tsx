import { Block } from '@xprog/prensa'
import axios from 'axios'
import { get, map } from 'lodash'
import React from 'react'

import { FormInput, FormInputProps } from '../../BasicComponents/FormInput'
import { driversFormInputs } from './data'
import Table from '../../BasicComponents/Table'
import { driversTableHeaders } from '../../BasicComponents/Table/data'
import Title from '../../BasicComponents/Title'
import { titleStrings } from '../../BasicComponents/Title/data'
import { inputWrapProps, sectionWrapperProps } from './styles'
import PrimaryButton from '../../BasicComponents/Button'


// types dos inputs do formulário
type driversFormValues = {
  driverNameLabel?: FormInputProps,
  driverBirthLabel?: FormInputProps,
  driverCountryLabel?: FormInputProps
  driverTeamLabel?: FormInputProps
}

const Drivers = () => {
  // state da lista de pilotos e inicializa como array vazio
  const [driverList, setDriverList] = React.useState([])

  // state do formulário, tipando com as propriedades do formulário, e inicializa como objeto vazio
  const [formValues, setFormValues] = React.useState<driversFormValues>({})

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
    const driverBody = {
      drivername: formValues?.driverNameLabel,
      driverbirth: formValues?.driverBirthLabel,
      drivercountry: formValues?.driverCountryLabel,
      driverteam: formValues?.driverTeamLabel,
    }

    // salva o circuito inserido
    await axios.post('http://localhost:3001/drivers', driverBody)
    loadTeamFromApi()
  }
  const loadTeamFromApi = async () => {
    console.log('antes api')
    // carrega as corridas da api
    const requestDrivers = await axios.get('http://localhost:3001/drivers')
    // prepara o dado das corridas (data)
    const resultDrivers = get(requestDrivers, 'data', [])
    const parsedDrivers = map(resultDrivers, (item) => (
      {
        "values": [
          item.drivername,
          item.driverbirth,
          item.drivercountry,
          item.driverteam,
        ]
      }
    ))
    // inclui os circuitos no raceList
    setDriverList(parsedDrivers)
  }

  // no carregamento da página:
  React.useEffect(() => {
    loadTeamFromApi()
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