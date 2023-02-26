import MUITable from 'components/BasicComponents/MUITable';
import { useState } from 'react';

import { headCells } from './data'

const Table = ({ rows, handleEditItem }: any) => {

  return (
    <MUITable
      handleEditItem={handleEditItem}
      headCells={headCells}
      rows={rows}
    />
  )
}

export default Table