import React from 'react'
import ScheduleItem from './item'
import { Container, HeaderTable, MyTable, Text1 } from './styled'

const Schedule = () => {
  return (
    <Container>
      <Text1>Grandes Prêmios</Text1>
      <br></br>
      <MyTable>
        <tr>
          <HeaderTable>Circuito</HeaderTable>
          <HeaderTable>País</HeaderTable>
          <HeaderTable>Data da corrida</HeaderTable>
          <HeaderTable>Vencedor</HeaderTable>
        </tr>
        <ScheduleItem
          name="Spa-Francorchamps"
          country="Bélgica"
          racedate="29/08/2021"
          racewinner="Max Verstappen"
        />
        <ScheduleItem
          name="Interlagos"
          country="Brasil"
          racedate="14/11/2021"
          racewinner="TBD"
        />
      </MyTable>
    </Container>
  )
}

export default Schedule