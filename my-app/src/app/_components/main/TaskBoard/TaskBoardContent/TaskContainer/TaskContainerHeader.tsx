import Image from 'next/image'
import React from 'react'

export default function TaskContainerHeader({title} : {title : string}) {
  return (
    <div className='flex gap-2 py-2 content-between justify-between items-center'>
        <p className='text-xl font-bold'>{title}</p>
        <div className='flex gap-2'>
            <button className='bg-black_l rounded-full text-center p-1.5 px-3 hover:bg-black_ll'>+</button>
            <button className='bg-black_l rounded-full text-center p-1.5 pt-2 px-2 justify-center items-center hover:bg-black_ll'>
              <Image src={'/settings.svg'} alt='settings' width={20} height={20}/>
            </button>
        </div>
    </div>
  )
}
