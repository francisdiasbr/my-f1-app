import { map } from 'lodash'
import React from 'react'
import ScheduleItem from './item'
import {
  Container,
  FormTitle,
  HeaderTable,
  MyTable,
  TableBody,
  TableRow,
} from '../Styleguide/styled'

type ScheduleType = {
  circuitList: Array<any>
}

const RaceSchedule = ({ circuitList }: ScheduleType) => {
  console.log('circuitList', circuitList)
  return (
    <Container>
      <FormTitle>Grandes Prêmios</FormTitle>
      <MyTable>
        <TableRow>
          <HeaderTable>Circuito</HeaderTable>
          <HeaderTable>País</HeaderTable>
          <HeaderTable>Data da corrida</HeaderTable>
          <HeaderTable>Vencedor</HeaderTable>
        </TableRow>
        <TableBody>
          {map(circuitList, (item, key) => {
            return (
              <ScheduleItem
                name={item?.name}
                country={item?.country}
                racedate='N/D'
                racewinner={item?.fastestlap}
              />
            )
          })}
        </TableBody>
      </MyTable>
    </Container>
  )
}

export default RaceSchedule
