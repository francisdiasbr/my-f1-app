import { CellTable } from "../Styleguide/styled"

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
    <tr>
      <CellTable>{name}</CellTable>
      <CellTable>{country}</CellTable>
      <CellTable>{racedate}</CellTable>
      <CellTable>{racewinner}</CellTable>
    </tr>
  )
}

export default ScheduleItem
