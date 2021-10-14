import React from 'react'
import PilotItem from './item'
import { Container, HeaderTable, MyTable, Text1 } from '../Schedule/styled'

const Pilots = () => {
  return (
    <Container>
    <Text1>Pilotos</Text1>
    <br></br>
    <MyTable>
      <tr>
        <HeaderTable>Nome</HeaderTable>
        <HeaderTable>Apelido</HeaderTable>
        <HeaderTable>Data de Nascimento</HeaderTable>
        <HeaderTable>Equipe</HeaderTable>
        <HeaderTable>GP da última Vitória</HeaderTable>
      </tr>
      <PilotItem
        name="George William Russell"
        nickname="Jorjão da Massa"
        birth="15/02/1998"
        country="Reino Unido"
        team="Williams Racing"
        lastwin="nunca venceu"
      />
      <PilotItem
        name="Lando Norris"
        nickname="O excelente Lando Norris"
        birth= "13/11/1998"
        country="Reino Unido"
        team="Mc Laren F1 Team"
        lastwin="nunca venceu"
      />
      <PilotItem
        name="Sergio Pérez"
        nickname="Checo"
        birth= "26/01/1990"
        country="Mexico"
        team="Red Bull Racing"
        lastwin="GP do Azerbaijão 2020"
      />

    </MyTable>
  </Container>
  )
}

export default Pilots