import { CellTable, TableRow } from '../Styleguide/styled'

interface ScheduleItemProps {
  name: string
  country: string
  racedate: string
  racewinner: string
}

const ScheduleItem = ({
  name,
  country,
  racedate,
  racewinner,
}: ScheduleItemProps) => {
  return (
    <TableRow>
      <CellTable>{name}</CellTable>
      <CellTable>{country}</CellTable>
      <CellTable>{racedate}</CellTable>
      <CellTable>{racewinner}</CellTable>
    </TableRow>
  )
}

export default ScheduleItem
