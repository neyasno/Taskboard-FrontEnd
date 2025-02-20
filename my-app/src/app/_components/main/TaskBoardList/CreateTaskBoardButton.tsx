'use client'
import React from 'react'

export default function CreateTaskBoardButton() {

  const openCreateTableModal = ( e : React.MouseEvent<HTMLElement , MouseEvent>) =>{
    e.preventDefault()
  }

  return (
    <li className='px-4 py-2 bg-black hover:bg-black_l rounded-t-lg'> 
        <button onClick={openCreateTableModal}>+</button>
    </li>
  )
}
