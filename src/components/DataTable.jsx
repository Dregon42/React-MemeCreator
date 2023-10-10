import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { server_calls } from '../api/server';
import { useGetData } from '../CustomHook/FetchData';


const columns = [
  { field: 'id', headerName: 'ID', flex: 1, hide:true },
  { field: 'image',headerName: 'Image', flex: 1 },
  { field: 'quote', headerName: 'Quote', flex: 1 },
  { field: 'user_token', headerName: 'User', type: 'number', flex: 1 },
];

export default function DataGridDemo() {
  const { memeData, getData } = useGetData();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const deleteData = () => {
    server_calls.delete(rowSelectionModel[0]);
    getData();
    console.log(`Selection model: ${rowSelectionModel}`);
    setTimeout( () => { window.location.reload(), 500})
  };

  return (
    <div className='p-20'>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            sx={{
              fontSize: 17,
              height: 400,
              width: '100%',
              opacity: 0.75,
              backgroundColor: 'grey',
              boxShadow: 2,
              border: 2,
              borderColor: 'primary.light',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
            rows={memeData} columns={columns}
            autoPageSize checkboxSelection={true} onSelectionModelChange={(item) => {
              setRowSelectionModel(item)}}/>
      </Box>
    </div>
  );
}
