'use client'

import Button from '@/app/_components/common/Button'
import DropdownMenu from '@/app/_components/common/DropdownMenu';
import React, { useState } from 'react'
import HistoryItem from './HistoryItem';

export default function History() {

  const [isVisible, setVisible] = useState(false);

  const testData = [
    {
      author: "Kolya",
      changeTimestamp: "13:00 18.02.2025",
      changes: [
        "Transfer of task1 from list1 to list2",
      ]
    },
    {
      author: "Kolya",
      changeTimestamp: "12:00 18.02.2025",
      changes: [
        "Transfer of task5 from list4 to list2",
      ]
    },
    {
      author: "Kolya",
      changeTimestamp: "11:46 18.02.2025",
      changes: [
        "Transfer of task3 from list1 to list3 Transfer of task3 from list1 to list3 Transfer of task3 from list1 to list3",
        "Transfer of task6 from list3 to list2",
        "Transfer of task7 from list2 to list3",
        "Transfer of task8 from list4 to list1",

      ]
    },
    {
      author: "Sanya",
      changeTimestamp: "21:32 17.02.2025",
      changes: [
        "Transfer of task4 from list3 to list2",
      ]
    },
  ];

  return (
    <div>
      <Button text='History' handleClick={()=>setVisible(!isVisible)}/>
      <DropdownMenu enabled={isVisible}>
        {testData.map((data, i) => 
          <HistoryItem key={i} {...data}/>
        )}
      </DropdownMenu>
    </div>
  )
}
