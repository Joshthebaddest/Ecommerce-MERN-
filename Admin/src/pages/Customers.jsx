import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { ordersData as columns, ordersGrid as rows } from '../assets/dummyText2'

const Customers = () => {
  return (
    <div>
      <h1>Customers</h1>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={columns}
          columns={rows}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          getRowId={() => Math.floor(Math.random() * 100000000)}
          // checkboxSelection
        />
      </Box>
    </div>
    
  )
}

export default Customers;