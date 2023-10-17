import React, { useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import CreateModal from './CreateModal';

const images = [
    "https://th.bing.com/th/id/OIP.nstpSVDiUcVAvSHfFtHASwHaEK?w=268&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://4.bp.blogspot.com/-XBHVmMlvP4w/VmsqEm1zkeI/AAAAAAABhzE/6vxIKM9hUH4/s1600/funny-animals-190-02.jpg",
    "http://www.brostrick.com/wp-content/uploads/2017/03/Goodfellas_094Pyxurz-1.jpg",
    "https://i.imgflip.com/1mbcm8.jpg",
    "https://i0.wp.com/comicsandmemes.com/wp-content/uploads/blank-meme-template-045-shocked-kevin-hart.jpg?fit=1280%2C852&ssl=1",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDNjOHVsdXJqd2F1MHR5ZmZxaW5lNGZscm91cHA1b2JqZWRxemlmYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g0yvD3A7pwNVzArTSB/giphy.gif",
]

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (image) => {
      setSelectedImage(image);
    };

    const closeModal = () => {
    setSelectedImage('');
    };  

    return (
        <div className='p-5 h-full w-3/4'>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px' className='pr-20 scroll-m-1 mr-32'>
                    {images.map((image, i) => (
                        <div key={i}>
                            <img
                                className='shadow-lg'
                                src={image}
                                style={{ width: '100%', display: 'block', borderRadius:10, boxShadow: 20}}
                                alt='' 
                                onClick={() => openModal(image)}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            {selectedImage && (
                <CreateModal backgroundImage={selectedImage} closeModal={closeModal} /> 
            )}
        </div>
    )
}
