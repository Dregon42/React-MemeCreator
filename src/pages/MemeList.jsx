import React from 'react';
import DataTable from '../components/DataTable';
import Background from '../assets/nigel-hoare-WTYHayV4-j0-unsplash.jpg';


export default function MemeList() {
  return (
    <div className='flex flex-col p-20 w-full h-screen bg-center bg-cover '
      style={{ backgroundImage: `url(${ Background })`}}>
      <h1 className='font-serif text-2xl font-extrabold text-white'>HALL of FAME</h1>
      <DataTable />
    </div>
  );
}
