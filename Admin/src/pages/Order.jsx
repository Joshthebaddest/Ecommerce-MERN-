import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


import { Header } from '../components'
import { ordersData, ordersGrid } from '../assets/dummyText2'




const Order = () => {
  const [data, setData] = useState(false)
  
  const getRowId = (row) => row.id;

  useEffect(()=>{
    const getID = () => {
      for(let i = 1; i <= ordersData.length; i++){
        for(let data of ordersData){
          if(data.id == null){
            data.id = i;
            break;
          }
        }
      }
      setData(true)
    }
    getID()
    console.log(ordersData)
  }, [])

  return (<>

    {/* <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='page' title="orders" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {ordersGrid.map((item, index)=>(
                <TableCell align='center' key={index}>{item.headerText}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell key={row.productImage} component="th" scope="row">
                  {row.productImage}
                </TableCell>
                <TableCell key={row.OrderItems} align="left">{row.OrderItems}</TableCell>
                <TableCell key={row.CustomerName} align="left">{row.CustomerName}</TableCell>
                <TableCell key={row.TotalAmount} align="left">${row.TotalAmount}</TableCell>
                <TableCell key={row.Status} align="left"><span style={{backgroundColor: row.StatusBg, padding: '10px', borderRadius: '50px'}}>{row.Status}</span></TableCell>
                <TableCell key={row.OrderID} align="left">{row.OrderID}</TableCell>
                <TableCell key={row.Location} align="left">{row.Location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      {/* {data && 
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <div style={{ minWidth: 600 }}>
          <DataGrid
            rows={ordersData}
            columns={ordersGrid}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
          />
        </div>
      </div>} */}
{/* 
      </div> */}
      {data &&
      <div className='m-2 md:m-0 p-2 md:p-10 bg-white rounded-3xl'>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={ordersData}
            columns={ordersGrid}
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
}


    </>
  )
}

export default Order