'use client'
import { ModalType, setModalType } from '@/store/slices/modalSlice';
import { useAppDispatch } from '@/store/store';
import React from 'react'

export default function CreateTaskBoardButton() {

  const dispatcher = useAppDispatch();

  const openCreateTableModal = ( e : React.MouseEvent<HTMLElement , MouseEvent>) =>{
    e.preventDefault();

    dispatcher(setModalType(ModalType.NewTaskboard));
    
  }

  return (
    <li className='bg-white_dd hover:bg-white_d dark:bg-black dark:hover:bg-black_l rounded-t-lg'> 
        <button className='px-4 py-2 ' onClick={openCreateTableModal}>+</button>
    </li>
  )
}
