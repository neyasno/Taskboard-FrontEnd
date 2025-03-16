import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

export default function Users({className}: {className?: string}) {
  const {theme, setTheme} = useTheme();

  return (
    <button className={`flex rounded-full p-1 hover:bg-black ${className ? className : ""}`}>
      <Image alt='users' src={ theme == 'dark' ? "/users.svg" : "dark/users.svg"} width={30} height={30}/>
    </button>
  )
}
