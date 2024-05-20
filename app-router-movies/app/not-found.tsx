import { cn } from '@/lib/utils'
import React from 'react'

export default function NotFound() {
  return (
    <div className={cn("h-screen flex flex-col justify-center items-center debug")}>
        <h1 className='text-stone-500'>404 - page not found</h1>
      
    </div>
  )
}
