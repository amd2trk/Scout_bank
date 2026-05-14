"use client"
import Link from 'next/link'
import React from 'react'
import mascot from '../../../../public/gamol (Edited).png'
import Image from 'next/image';

export default function Footer() {

   function callGamol() {
    //API to call gamol for chat
    console.log("يا جمول الحقنا  ");
    
  }
  return (
    <>
      <footer className='bg-navy text-white bottom-0 right-0 left-0 p-4 '>
        <ul className=' flex items-center gap-4 lg:text-lg md:text-sm justify-between   '>
          <li><Link href='/suggestions'>Propose Suggestions</Link></li>
          <li>
            <ul className='flex  justify-center gap-10'>
              <li><Link href=""><i className=" fa-brands fa-facebook text-white"></i></Link></li>
              <li><Link href=""><i className=" fa-brands fa-instagram text-white"></i></Link></li>
              <li><Link href="">sporting scout</Link></li>
            </ul>
          </li>
          <li> 
            <button className='relative overflow-visible cursor-pointer bg-white z-50'  onClick={() => { callGamol() }}>
              <div className='absolute w-18  right-[-2] bottom-15 rounded-full '>
              <Image src={mascot} alt='gamol' width={90} height={100} className=' border-2 rounded-full object-contain border-emerald-700 bg-white p-1.5 '></Image>
            </div>
            </button>
          </li>
        </ul>
      </footer>
    </>
  )
}
