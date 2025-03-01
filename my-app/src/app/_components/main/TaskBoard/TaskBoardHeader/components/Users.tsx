import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

export default function Users() {
  const {theme, setTheme} = useTheme();

  return (
    <button className='flex rounded-full p-1 hover:bg-black'>
      <Image alt='users' src={ theme == 'dark' ? "/users.svg" : "dark/users.svg"} width={30} height={30}/>
    </button>
  )
}
