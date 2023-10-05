import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import TransitionsModal from './Modal';

const images = [
    "https://4.bp.blogspot.com/-XBHVmMlvP4w/VmsqEm1zkeI/AAAAAAABhzE/6vxIKM9hUH4/s1600/funny-animals-190-02.jpg",
    "http://www.brostrick.com/wp-content/uploads/2017/03/Goodfellas_094Pyxurz-1.jpg",
    "https://i.imgflip.com/1mbcm8.jpg",
    "https://i0.wp.com/comicsandmemes.com/wp-content/uploads/blank-meme-template-045-shocked-kevin-hart.jpg?fit=1280%2C852&ssl=1",
]

export default function Gallery() {
    return (
        <div className='m-3 h-full '>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px' className='pr-20 scroll-m-1 mr-32'>
                    {images.map((image, i) => (
                        <>
                            <img
                                key={1}
                                src={image}
                                style={{ width: '100%', display: 'block' }}
                                alt='' />
                            <TransitionsModal /> {/* Modal should open up with the selected photo as backgroud and empty text field */}
                        </>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
