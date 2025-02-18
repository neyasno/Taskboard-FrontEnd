import React from 'react'

export default function TaskContainerHeader({title} : {title : string}) {
  return (
    <div className='flex gap-2 py-2 content-between justify-between items-center'>
        <p className='text-xl font-bold'>{title}</p>
        <div className='flex gap-2'>
            <div className='bg-gray-500 rounded-full text-center p-1.5 px-3'>+</div>
            <div className='bg-gray-500 rounded-full text-center p-1.5'>Settings</div>
        </div>
    </div>
  )
}
