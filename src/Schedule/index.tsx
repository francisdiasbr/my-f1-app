import { map } from 'lodash'
import React from 'react'
import ScheduleItem from './item'
import { Container, HeaderTable, MyTable, Text1 } from './styled'

type ScheduleType = {
  circuitList: Array<any>;
}

const Schedule = ({ circuitList }: ScheduleType) => {
  console.log('circuitList', circuitList)
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
        <tbody>
          {map(circuitList, (item, key) => {
            return (
              <ScheduleItem
                name={item?.name}
                country={item?.country}
                racedate="N/D"
                racewinner={item?.fastestlap}
              />
            )
          })}
        </tbody>
      </MyTable>
    </Container>
  )
}

export default Schedule