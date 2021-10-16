import { CellTable } from "../Styleguide/styled";

export type RaceItemProps = {
  circuitname: string;
  circuitcountry: string;
  racedate: string;
  racewinner: string;
};

const RaceItem = ({
  circuitname,
  circuitcountry,
  racedate,
  racewinner,
}: RaceItemProps) => {
  return (
    <tr>
      <CellTable>{circuitname}</CellTable>
      <CellTable>{circuitcountry}</CellTable>
      <CellTable>{racedate}</CellTable>
      <CellTable>{racewinner}</CellTable>
    </tr>
  );
};

export default RaceItem;
