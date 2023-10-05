import React from 'react';
import Background from '../assets/nigel-hoare-WTYHayV4-j0-unsplash.jpg';


export default function Home() {
  return (
    <div className='p-7 bg-cover bg-center w-screen'
      style={{ backgroundImage: `url(${ Background })`}} >
      <h1 className='text-2xl font-semibold'>Home</h1>
    </div>
  )
}
