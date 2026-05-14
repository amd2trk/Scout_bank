import Tag from '@/app/_components/Tag/Tag'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import userPic from '../../../../public/profile.png'


export default function page() {
  const id : number = 1
  const tag : string = "boom"
    return (
    <>
      <section className='container mx-auto w-[80%] flex gap-10 mt-6 mb-6'>
        <aside className='flex flex-col gap-6 stages   '>
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
        </aside>
        <main className='flex flex-col gap-6 flex-1 main'>
            <div className='shadow-2xl border-4 border-gray-300 rounded-2xl overflow-hidden flex-col flex-1 pt-4 pb-4 w-full'>
                <div className='flex flex-row  justify-between ps-4 pe-4'>
                    <h1 className='text-blue-950  p-4 text-4xl font-bold text-center mt-1 mb-1'>Title</h1>
                    <ul className='grid grid-cols-2'>
                        <li className='p-0.5'><Tag>{tag}</Tag></li>
                        <li className='p-0.5'><Tag>{tag}</Tag></li>
                        <li className='p-0.5'><Tag>{tag}</Tag></li>
                        <li className='p-0.5'><Tag>{tag}</Tag></li>
                        <li className='p-0.5'><Tag>{tag}</Tag></li>
                        <li className='p-0.5'><Tag>{tag}</Tag></li>
                    </ul>
                </div>
                <div className='  mt-2 mb-2'>
                    <Image src={userPic} alt="cover pic" width={100} height={50} className='object-center  w-full h-28'></Image>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-8  gap-4 p-4 '>
                    <div className='md:col-span-5'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ducimus deleniti ab accusantium eaque veniam, nemo, sint quae quasi consectetur dolores. Consectetur nam itaque amet voluptate molestias facilis similique sed!\
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolores voluptatibus temporibus aspernatur illum optio fugit molestiae voluptate assumenda ipsum fugiat inventore quasi, at nulla dolor officiis, ratione aliquid labore veritatis commodi! Voluptatem aliquam facere minima similique rerum adipisci beatae.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iure voluptate quidem minus illum neque tempore voluptas sit corporis? Mollitia reprehenderit et, adipisci, exercitationem non provident modi eligendi ullam tenetur odio nemo fugit. Deserunt magni assumenda alias nam provident ipsum.
                        </p>
                    </div>
                    <div className='md:col-span-3'>
                        <figure className='flex justify-center flex-col items-center'>
                            <Image src={userPic} alt="cover pic" className='object-cover aspect-square w-[60%] '  ></Image> 
                            <figcaption>Cption describing the image</figcaption>    
                        </figure>                       
                        <figure className='flex justify-center flex-col items-center'>
                            <Image src={userPic} alt="cover pic" className='object-cover aspect-square w-[60%] '  ></Image> 
                            <figcaption>Cption describing the image</figcaption>    
                        </figure>                         
                    </div>
                </div>                
            </div>
            <div className='shadow-2xl border-4 border-gray-300 rounded-2xl overflow-hidden  p-4 w-full'>
                <h3 className='text-blue-950 font-bold  mt-1 mb-1 text-2xl '>Related Resources and references</h3>
                <ul className='list-disc ps-6'>
                    <Link href='/'><li className='text-blue-950 m-1'>Link</li></Link>
                    <Link href='/'><li className='text-blue-950 m-1'>Link</li></Link>
                    <Link href='/'><li className='text-blue-950 m-1'>Link</li></Link>
                </ul>
            </div>
        
        </main>
      </section>
    </>
  )
}
