import { CellTable } from '../Schedule/styled'

interface PilotItemProps {
  name: string;
  nickname: string;
  country: string;
  birth: string;
  team: string;
  lastwin: string;
}

const PilotItem = ({
  name,
  nickname,
  birth,
  team,
  lastwin
}: PilotItemProps) => {
  return (
    <tr>
      <CellTable>{name}</CellTable>
      <CellTable>{nickname}</CellTable>
      <CellTable>{birth}</CellTable>
      <CellTable>{team}</CellTable>
      <CellTable>{lastwin}</CellTable>
    </tr>
  )
}

export default PilotItem