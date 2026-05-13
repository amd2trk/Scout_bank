import React from 'react'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import stock from '../../../../public/logo-sporting.png'
import Image from 'next/image'


export default function DevCard() {
    return (
        <>
            <Card className="relative mx-auto w-[60%] max-w-sm p-4 border-gray-300 border">
                <div className="absolute inset-0 z-30 " />
                <Image src={stock} alt="Event cover" className="relative z-20 brightness-60 grayscale rounded-full w-fit mx-auto dark:brightness-40 object-center " width={120} height={120} />
                <CardHeader>
                    <CardDescription>
                        <ul className='text-black '>
                            <li className='m-1'>Name :</li>
                            <li className='m-1'>Telephone : </li>
                            <li className='m-1'>Email :</li>
                            <li className='m-1'>Role :</li>
                        </ul>
                    </CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}
