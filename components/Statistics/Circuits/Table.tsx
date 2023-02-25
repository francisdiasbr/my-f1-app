import MUITable from 'components/BasicComponents/MUITable';
import { GridColDef } from '@mui/x-data-grid';

import { headCells } from './data'

const Table = ({rows, handleEditItem }: any) => {

  const columns: GridColDef[] = [
    { field: 'circuitName', headerName: 'Circuito', width: 80 },
    { field: 'circuitCountry', headerName: 'País', width: 130 },
    { field: 'circuitCity', headerName: 'Cidade', width: 130 },
  ];

  return (
    <MUITable
    handleEditItem={handleEditItem}
    headCells={headCells}
    rows={rows}
  />
  )
}

export default Table