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
    <li className='px-4 py-2 bg-black hover:bg-black_l rounded-t-lg'> 
        <button onClick={openCreateTableModal}>+</button>
    </li>
  )
}
