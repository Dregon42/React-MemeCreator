import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const handleOpen = () => {
    setOpen(true);
  }; 

  const handleClose = () => {
    setOpen(false);
  }; 

  const handleText = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
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
              <input type="text" placeholder='Type here' className='border-1' onChange={handleText}
                value={text} />
            </Typography>
            <div className="image-wrapper relative">
                <img src="https://i.huffpost.com/gen/1570021/images/o-BARACK-OBAMA-FROWN-facebook.jpg" alt="" className='image h-full' />{/* TODO: JUST TESTING - image should be image choosen */}
                <h1 className='absolute bottom-5 left-0 right-0 text-white text-xl font-bold text-center h-auto '>{text}</h1>{/* TODOD: wrap text box */}
            </div>
            <Button variant='contained'></Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
