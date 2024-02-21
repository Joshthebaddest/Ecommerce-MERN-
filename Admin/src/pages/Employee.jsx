import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


import { Header } from '../components'
import { employeesData as rows, employeesGrid as columns } from '../assets/dummyText2'


const Employee = () => {

  return (
    <div>
      <h1>Employees</h1>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.EmployeeID}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
        />
      </Box>
  </div>
  )
}

export default Employee