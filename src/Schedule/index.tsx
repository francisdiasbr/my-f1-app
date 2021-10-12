import React from 'react'
import ScheduleItem from './item'
import { Container, HeaderTable, Mytable, Text1 } from './styled'

const Schedule = () => {
  return (
    <Container>
      <Text1>disclaimer sobre a tabela</Text1>
      <br></br>
      <Mytable>
        <tr>
          <HeaderTable>Circuito</HeaderTable>
          <HeaderTable>Código</HeaderTable>
          <HeaderTable>País</HeaderTable>
        </tr>
        <ScheduleItem
          name="Spa-Francorchamps"
          code="BEL"
          country="Bélgica"
        />
        <ScheduleItem
          name="Interlagos"
          code="BRA"
          country="Brasil"
        />
      </Mytable>
    </Container>
  )
}

export default Schedule