'use client'
import { ModalType, setModalType } from '@/store/slices/modalSlice'
import { setCurrentContainer } from '@/store/slices/taskBoardsSlice'
import { useAppDispatch } from '@/store/store'
import Image from 'next/image'
import React from 'react'

export default function TaskContainerHeader({title , _id} : {title : string , _id : string }) {

  const dispatch = useAppDispatch()

  const openCreateTaskForm = (e : React.MouseEvent<HTMLElement , MouseEvent>) => {
    e.preventDefault()
    dispatch(setCurrentContainer(_id))
    dispatch(setModalType(ModalType.NewTask))
  }

  return (
    <div className='flex gap-2 py-2 content-between justify-between items-center'>
        <p className='text-xl font-bold'>{title}</p>
        <div className='flex gap-2'>
            <button className='bg-black_l rounded-full text-center p-1.5 px-3 hover:bg-black_ll'
                    onClick={openCreateTaskForm}
            >+</button>
            <button className='bg-black_l rounded-full text-center p-1.5 pt-2 px-2 justify-center items-center hover:bg-black_ll'>
              <Image src={'/settings.svg'} alt='settings' width={20} height={20}/>
            </button>
            <button className='bg-black_l rounded-full text-center p-1.5 pt-2 px-2 justify-center items-center hover:bg-black_ll'>
              <Image src={'/cross.svg'} alt='settings' width={12} height={12}/>
            </button>
        </div>
    </div>
  )
}
