import MUITable from 'components/BasicComponents/MUITable';

import { headCells } from './data'

const Table = ({rows, handleDeleteItem, handleEditItem }: any) => {

  return (
    <MUITable
    handleEditItem={handleEditItem}
    handleDeleteItem={handleDeleteItem}
    headCells={headCells}
    rows={rows}
  />
  )
}

export default Table