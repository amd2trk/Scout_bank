import Image from 'next/image'
import React from 'react'
import userPic from '../../../public/profile.png'

export default function Dashboard() {
  //user data logic missing 
  return (
    <>
      <section className='container w-[80%] lg:w-[60%] mx-auto flex flex-col'>
        <h1 className='text-2xl text-blue-950 font-bold text-center mt-6 mb-6'>Profile Page</h1>
        <div className='flex flex-col gap-8 m-8'>
          <div className='border-gray-300 border-4 rounded-xl flex justify-between p-4 shadow-2xl'>
          <div>
            <h2 className='text-xl text-blue-950 font-bold text-center mt-6 mb-6'>Personal Info:</h2>
            <div>
              <ul className='grid grid-cols-2 gap-7'>
                <li className='p-2 pt-4 pb-4'>ID:</li>
                <li className='p-2 pt-4 pb-4'>Name:</li>
                <li className='p-2 pt-4 pb-4'>Role:</li>
                <li className='p-2 pt-4 pb-4'>Rank:</li>
              </ul>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <Image src={userPic} alt="User Profile Picture" width={150} height={150} className='w-full  object-contain rounded-full'></Image>
          </div>
        </div>
        <div className='border-gray-300 border-4 rounded-xl p-4 shadow-2xl'>
          <div>
            <h2 className='text-xl text-blue-950 font-bold ps-6 mt-6 mb-6'>Article Info:</h2>
            <ul className='flex justify-around items-center gap-5'>
              <div>
                <li className='p-4'>Articles Created:</li>
                <li className='p-4'>Articles pending to be reviewed :</li>
              </div>
              <div>
                <li className='p-4'>Articles Reviewed:</li>
                <li className='p-4'>Articles reviewed & accepted:</li>
              </div>
            </ul>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
