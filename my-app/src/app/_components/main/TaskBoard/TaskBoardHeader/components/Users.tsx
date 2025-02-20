import Image from 'next/image'
import React from 'react'

export default function Users() {
  return (
    <button className='flex rounded-full p-1 hover:bg-black'>
      <Image alt='users' src={"/users.svg"} width={30} height={30}/>
    </button>
  )
}
