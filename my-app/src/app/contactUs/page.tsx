import React from 'react'
import DevCard from '../_components/DevCard/DevCard';

export default function ContactUs() {
  return (
    <>
      <div className='container w-[80%] mx-auto mt-12 border-2 border-gray-300 rounded-lg p-2 m-5 h-full'>
        <h1 className='text-2xl text-navy font-bold text-center'>Developer Contact Info</h1>
        <div className=' flex gap-8 flex-col md:flex-row p-8'>
          <DevCard></DevCard>
          <DevCard></DevCard>
          <DevCard></DevCard>
        </div>
      </div>
    </>
  )
}
