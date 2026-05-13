import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import stock from '../../../../public/logo-sporting.png'
import Tag from '../Tag/Tag'
import Link from 'next/link'

export default function ContentCard({title , date , tags} : {title: string , date:string, tags:string}) {
const id =1
  return (
    <>
      <Link href={`/resources/${id}`}>
        <Card className="relative mx-auto w-[80%] pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <Image src={stock} alt="Event cover" className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40" width={150} height={150}/>
        <CardHeader>
          <CardAction>
            <Badge variant="secondary" className='text-md'>{date}</Badge>
          </CardAction>
          <CardTitle className=' text-navy font-bold text-2xl'>{title}</CardTitle>
        </CardHeader>
        <CardFooter>
           <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 p-2 mx-auto'>
              <Tag>{tags}</Tag>
              <Tag>{tags}</Tag>
              <Tag>{tags}</Tag>
              <Tag>{tags}</Tag>
              <Tag>{tags}</Tag>
              <Tag>{tags}</Tag>
           </div>
        </CardFooter>
      </Card>
      </Link>
    </>
  )
}
