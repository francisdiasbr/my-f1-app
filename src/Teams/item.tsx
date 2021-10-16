import { CellTable } from "../Styleguide/styled";

export type TeamItemProps = {
  teamname: string;
  teampreviousname: string;
  teamfirstrace: string;
  teamengine: string;
};

const TeamItem = ({
  teamname,
  teampreviousname,
  teamfirstrace,
  teamengine,
}: TeamItemProps) => {
  return (
    <tr>
      <CellTable>{teamname}</CellTable>
      <CellTable>{teampreviousname}</CellTable>
      <CellTable>{teamfirstrace}</CellTable>
      <CellTable>{teamengine}</CellTable>
    </tr>
  );
};

export default TeamItem;
