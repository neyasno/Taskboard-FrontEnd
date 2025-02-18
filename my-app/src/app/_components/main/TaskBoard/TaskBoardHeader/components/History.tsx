'use client'

import Button from '@/app/_components/common/Button'
import DropdownMenu from '@/app/_components/common/DropdownMenu';
import React, { useState } from 'react'

export default function History() {

  const [isVisible, setVisible] = useState(false);

  const testData = [
    {
      author: "Kolya",
      changeTimestamp: "13:00 18.02.2025",
    },
    {
      author: "Kolya",
      changeTimestamp: "12:00 18.02.2025",
    },
    {
      author: "Kolya",
      changeTimestamp: "11:46 18.02.2025",
    },
    {
      author: "Sanya",
      changeTimestamp: "21:32 17.02.2025",
    },
  ];

  return (
    <div>
      <Button text='History' handleClick={()=>setVisible(!isVisible)}/>
      <DropdownMenu enabled={isVisible}>
        {testData.map((data, i) => 
          <div key={i}>
            <span>{data.author}</span>
            <span>{data.changeTimestamp}</span>
          </div>
        )}
      </DropdownMenu>
    </div>
  )
}
