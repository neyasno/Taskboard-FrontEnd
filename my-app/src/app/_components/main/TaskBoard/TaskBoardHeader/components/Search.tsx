'use client'

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState } from 'react'

export default function Search({className}: {className?: string}) {

  const [text, setText] = useState('');

  const {theme , setTheme} = useTheme();

  const t = useTranslations('components.header')

  return (
    <div className={`flex bg-white dark:bg-black rounded-md ${className? className : ''}`}>
      <input 
        className='px-3 py-1 bg-transparent '
        value={text} placeholder={t('search')}
        onChange={e => setText(e.target.value)} 
      />
      <button className='flex p-1 hover:bg-white_dd dark:hover:bg-black'>
        <Image alt='search' src={theme == "dark" ? "/search.svg" : "dark/search.svg"} width={25} height={25}/>
      </button>
    </div>
    
  )
}
