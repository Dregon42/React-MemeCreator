import React from 'react';
import Background from '../assets/nigel-hoare-WTYHayV4-j0-unsplash.jpg';


export default function Home() {
  return (
    <>
    <div className='p-20 bg-cover bg-center w-screen flex-col justify-start' 
      style={{ backgroundImage: `url(${ Background })`}} >
      <h1 className='font-serif text-2xl font-extrabold text-white'>HAHAHAHAHAHAHA!!!!</h1>
      <img className='h-full bottom-3 rounded-2xl shadow-2xl' src="https://www.reactiongifs.com/r/eevl.gif" alt="" />
    </div>
    </>
  )
}
