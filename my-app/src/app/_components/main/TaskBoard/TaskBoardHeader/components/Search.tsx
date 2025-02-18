'use client'

import TextInput from '@/app/_components/common/TextInput'
import React, { useState } from 'react'

export default function Search() {

  const [text, setText] = useState('');

  return (
    <TextInput placeholder='Search' value={text} handleChange={setText}/>
  )
}
