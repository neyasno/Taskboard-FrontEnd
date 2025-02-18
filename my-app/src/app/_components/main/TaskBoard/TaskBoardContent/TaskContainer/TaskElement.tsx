import React from 'react'
import { TaskProps } from './Task'

export default function TaskElement({id , title , isCompleted} : TaskProps) {
  return (
    <div className='flex p-3 items-center gap-2 hover:bg-gray-600 rounded-lg'>
        <p>{title}</p>
        {isCompleted ? 
            <div className='size-3 bg-green-500 border-2 border-black rounded-full'></div>
            : 
            <div className='size-3 bg-transparent border-2 border-black rounded-full '></div>              
        }
    </div>
  )
}
