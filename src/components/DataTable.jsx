import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { server_calls } from '../api/server';
import { useGetData } from '../CustomHook/FetchData';

import DisplayModal from './DisplayModal';


const columns = [
  { field: 'id', headerName: 'ID', flex: 1, hide:true },
  { field: 'image',headerName: 'Image', flex: 1 },
  { field: 'quote', headerName: 'Quote', flex: 1 },
  { field: 'user_token', headerName: 'User', type: 'number', flex: 1 },
];

export default function DataGridDemo() {
  const { memeData, getData } = useGetData();
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [openDialog, setOpenDialog] = useState(false); 
  const [selectedMeme, setSelectedMeme] = useState({}); 


  useEffect(() => {
    getData();
  }, []);

  const openModal = () => {
    if (rowSelectionModel.length > 0) {
      setSelectedMeme(memeData.find((meme) => meme.id === rowSelectionModel[0]));
      setOpenDialog(true);
    }
  };


  const deleteData = () => {
    server_calls.delete(rowSelectionModel[0]);
    getData();
    console.log(`Selection model: ${rowSelectionModel}`);
  };

  return (
    <>
      <div className="flex flex-row">
        <button onClick={openModal} className="p-3 bg-slate-300 rounded m-3 hover:text-white transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 hover:bg-dark-purple duration-300 hover:drop-shadow-xl">View</button>
        <button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:text-white transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 hover:bg-dark-purple duration-300 hover:drop-shadow-xl">Delete</button>
      </div>
      <div className='p-10 p1-10'>
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
              setRowSelectionModel(item);
            } } />
        </Box>
        <DisplayModal open={openDialog} selectedMeme={selectedMeme} setOpenDialog={setOpenDialog}/>
      </div>
    </>
  );
}
