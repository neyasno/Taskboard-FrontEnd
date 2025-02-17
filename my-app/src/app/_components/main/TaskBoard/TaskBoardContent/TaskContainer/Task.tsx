import React from 'react'

export type TaskProps ={
    title : string , 
    isCompleted : boolean ,
    id : string ,
}

export default function Task({title , isCompleted , id} : TaskProps) {
  return (
    <li className='flex p-3'>
        <p>{title}</p>
        {isCompleted ? 
            <div className='size-2 bg-blue-500 border-black rounded-full'></div>
            : 
            <div className='size-2 bg-transparent border-2 border-black rounded-full '></div>              
        }
    </li>
)
}
