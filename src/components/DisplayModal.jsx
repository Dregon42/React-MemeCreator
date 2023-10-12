import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'; 

export default function DisplayModal({ open, selectedMeme, setOpenDialog }) {
    

    const closeModal = () => {
        setOpenDialog(false);
    };

    if (!open) return(<></>)
    return (
        <div>
        <Dialog open={open} onClose={closeModal}>
                <DialogTitle>Meme Details</DialogTitle>
                <DialogContent className='relative' >
                    {selectedMeme && (
                        <>
                            <img src={selectedMeme.image} alt='meme photo' className='h-full'/>
                            <p className='absolute bottom-5 left-0 right-0 text-white text-xl font-bold text-center h-auto w-max-1/4 break-words'>{selectedMeme.quote}</p>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
