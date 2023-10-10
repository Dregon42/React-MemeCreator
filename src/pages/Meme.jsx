import React from 'react';
import Background from '../assets/nigel-hoare-WTYHayV4-j0-unsplash.jpg';
import Gallery from '../components/Gallery';

export default function Meme() {
  return (
    <div className='flex flex-col p-20 w-screen h-full bg-center bg-cover '
    style={{ backgroundImage: `url(${ Background })`}}>
      <h1 className='font-serif text-2xl font-extrabold text-white'>Choose a Picture for your MEME!</h1>
      <section>
        <div className='w-full g'>
          
          <Gallery />
        </div>
      </section>
    </div>
  );
}
