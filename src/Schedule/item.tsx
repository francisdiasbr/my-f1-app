import { CellTable } from './styled'

interface ScheduleItemProps {
  name: string;
  code: string;
  country: string;
}

const ScheduleItem = ({
  name,
  code,
  country
}: ScheduleItemProps) => {
  return (
    <tr>
      <CellTable>{name}</CellTable>
      <CellTable>{code}</CellTable>
      <CellTable>{country}</CellTable>
    </tr>
  )
}

export default ScheduleItem

