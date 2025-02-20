'use client'

import Image from 'next/image';
import React, { useState } from 'react'

export default function Search() {

  const [text, setText] = useState('');

  return (
    <div className='flex bg-black rounded-md'>
      <input 
        className='px-3 py-1 bg-transparent '
        value={text} placeholder={"Search"}
        onChange={e => setText(e.target.value)} 
      />
      <button className='flex rounded-full p-1 hover:bg-black'>
        <Image alt='search' src={"/search.svg"} width={25} height={25}/>
      </button>
    </div>
    
  )
}
