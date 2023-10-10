import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useDispatch, useStore, useSelector } from "react-redux";
import { chooseQuote, chooseImage } from "../redux/slices/RootSlice";
import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateModal({ closeModal, backgroundImage }) {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState('');
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  // const quote = useSelector((state) => state.quote);
  // const image = useSelector((state) => state.image);
  // const userToken = useSelector((state) => state.user_token);

  const handleClose = () => {
    setOpen(false);
    closeModal();
  }; 

  const onSubmit = async (data, event) => {
    console.log(`ID: ${typeof data.id}`);
    console.log(data.id)
    console.log(data)
    
    dispatch(chooseQuote(data.quote));
    dispatch(chooseImage(data.image));
    dispatch(chooseUser(data.user_token));

    server_calls.create(store.getState());
    setTimeout(() => {window.location.reload()}, 3000)
  
  }

  const handleText = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit(onSubmit)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} style={{
            height:500,
            width:500
          }}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Text!
              <input type="text" placeholder='Type here' className='border-1' name='quote' {... register('quote')}
                value={text} onChange={handleText} />
            </Typography>
            <div className="image-wrapper relative">
                <img 
                  {... register('image')}
                  name='image'
                  src={backgroundImage} alt="" className='image h-full' />
                <h1 className='absolute bottom-5 left-0 right-0 text-white text-xl font-bold text-center h-auto w-max-1/4 break-words'>
                  {text}
                </h1>
            </div>
            <Button variant='contained' type='submit' onClick={handleClose}>Submit</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
