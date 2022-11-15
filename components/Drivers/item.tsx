import { CellTable } from '../Styleguide/styled'

export type DriverItemProps = {
  name: string
  nickname: string
  birth: string
  country: string
  team: string
  lastwin: string
}

const DriverItem = ({
  name,
  nickname,
  birth,
  country,
  team,
  lastwin,
}: DriverItemProps) => {
  return (
    <tr>
      <CellTable>{name}</CellTable>
      <CellTable>{nickname}</CellTable>
      <CellTable>{birth}</CellTable>
      <CellTable>{country}</CellTable>
      <CellTable>{team}</CellTable>
      <CellTable>{lastwin}</CellTable>
    </tr>
  )
}

export default DriverItem
