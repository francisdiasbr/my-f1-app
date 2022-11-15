import { CellTable, TableRow } from '../Styleguide/styled'

export type TeamItemProps = {
  teamname: string
  teampreviousname: string
  teamfirstrace: string
  teamengine: string
}

const TeamItem = ({
  teamname,
  teampreviousname,
  teamfirstrace,
  teamengine,
}: TeamItemProps) => {
  return (
    <TableRow>
      <CellTable>{teamname}</CellTable>
      <CellTable>{teampreviousname}</CellTable>
      <CellTable>{teamfirstrace}</CellTable>
      <CellTable>{teamengine}</CellTable>
    </TableRow>
  )
}

export default TeamItem
