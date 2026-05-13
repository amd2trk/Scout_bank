import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function Tag({children} : {children:string}) {
  return (
    <>
      <Badge className="bg-navy text-sm text-white dark:bg-blue-950 dark:text-blue-300 m-2 p-2 "> <i className="fa-solid fa-circle text-white text-sm"></i>{children}</Badge>
    </>
  )
}
