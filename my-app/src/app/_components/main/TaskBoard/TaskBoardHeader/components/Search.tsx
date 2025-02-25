'use client'

import Image from 'next/image';
import React, { useState } from 'react'

export default function Search() {

  const [text, setText] = useState('');

  const {theme , setTheme} = useState('')

  return (
    <div className='flex bg-white dark:bg-black rounded-md'>
      <input 
        className='px-3 py-1 bg-transparent '
        value={text} placeholder={"Search"}
        onChange={e => setText(e.target.value)} 
      />
      <button className='flex p-1 hover:bg-white_dd dark:hover:bg-black'>
        <Image alt='search' src={theme == "dark" ? "/search.svg" : "dark/search.svg"} width={25} height={25}/>
      </button>
    </div>
    
  )
}
