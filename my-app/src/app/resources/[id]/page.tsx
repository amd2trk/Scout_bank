import Link from 'next/link'
import React from 'react'

export default function page() {
  const id  = 1
    return (
    <>
      <section className='container mx-auto w-[80%] flex gap-10 mt-6 mb-6'>
        <div className='flex flex-col gap-6'>
            <div className=' shadow-2xl  text-center rounded-2xl overflow-hidden '>
                <ul>
                    <li className='text-white p-2 bg-navy w-full h-full'>Scouting Stages</li>
                <li>
                    <ul className='border-4 border-gray-300 border-t-0 rounded-2xl rounded-t-none'>
                    <li className='p-1'><Link href={`/resorces/${id}/smurfs`}><span className=' text-blue-950 font-semibold text-center mt-1 mb-1'>Smurfs</span> <br /><span className='text-muted-foreground'>7-9 year olds</span> </Link></li>
                    <li className='p-1'><Link href={`/resorces/${id}/cubs`}><span className=' text-blue-950 font-semibold text-center mt-1 mb-1'>Cubs</span><br /><span className='text-muted-foreground'>9-12 year olds</span></Link></li>
                    <li className='p-1'><Link href={`/resorces/${id}/scouts`}><span className=' text-blue-950 font-semibold text-center mt-1 mb-1'>Scouts</span><br /><span className='text-muted-foreground'>12-15 year olds</span></Link></li>
                    <li className='p-1'><Link href={`/resorces/${id}/senior scouts`}><span className=' text-blue-950 font-semibold text-center mt-1 mb-1'>Senior Scouts </span><br /><span className='text-muted-foreground'>15-18 year olds</span> </Link></li>
                    <li className='p-1'><Link href={`/resorces/${id}/rovers`}><span className=' text-blue-950 font-semibold text-center mt-1 mb-1'>Rovers</span> <br /><span className='text-muted-foreground'>18+ years old</span></Link></li>
                    <li className='p-1'><Link href={`/resorces/${id}/leaders`}><span className=' text-blue-950 font-semibold text-center mt-1 mb-1'>Leaders</span> <br /><span className='text-muted-foreground'>19+ year olds</span></Link></li>
                </ul>
                </li>
                </ul>
            </div>
            <div className=' shadow-2xl  text-center rounded-2xl overflow-hidden '>
                <ul>
                    <li className='text-white p-2 bg-navy w-full h-full'>Quick Actions</li>
                <li>
                    <ul className='border-4 border-gray-300 border-t-0 rounded-2xl rounded-t-none'>
                    <li className='p-2'><Link href={`/resorces/${id}/smurfs`} className='text-blue-950'><span className='  font-semibold text-center mt-1 mb-1'>Download PDF<i className="fa-solid fa-download ms-2"></i></span></Link></li>
                    <li className='p-2'><Link href={`/resorces/${id}/cubs`} className='text-blue-950'><span className='  font-semibold text-center mt-1 mb-1'>Share</span><i className="fa-solid fa-share ms-2"></i></Link></li>
                    <li className='p-2'><Link href={`/resorces/${id}/scouts`} className='text-blue-950'><span className='  font-semibold text-center mt-1 mb-1'>Save for Later</span> <i className="fa-solid fa-bookmark ms-2"></i></Link></li>
                </ul>
                </li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col gap-6 flex-1'>
            <div className='shadow-2xl border-4 border-gray-300 rounded-2xl overflow-hidden flex-1 p-4 w-full'>
                
            </div>
            <div className='shadow-2xl border-4 border-gray-300 rounded-2xl overflow-hidden flex-1 p-4 w-full'>
                <h3 className='text-blue-950 font-bold  mt-1 mb-1 text-2xl '>Related Resources and references</h3>
                <ul className='list-disc ps-6'>
                    <Link href='/'><li className='text-blue-950 m-1'>Link</li></Link>
                    <Link href='/'><li className='text-blue-950 m-1'>Link</li></Link>
                    <Link href='/'><li className='text-blue-950 m-1'>Link</li></Link>
                </ul>
            </div>
        
        </div>
      </section>
    </>
  )
}
