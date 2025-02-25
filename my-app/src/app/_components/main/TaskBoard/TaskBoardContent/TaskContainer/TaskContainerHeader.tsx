'use client'
import { EApi } from '@/enums'
import { ModalType, setModalType } from '@/store/slices/modalSlice'
import { ContentStatus, setContainerStatus, setCurrentContainer } from '@/store/slices/taskBoardsSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import fetchApi from '@/utils/fetchApi'
import Image from 'next/image'
import React from 'react'

export default function TaskContainerHeader({title , _id} : {title : string , _id : string }) {


  const state = useAppSelector(state => state.taskBoards)
  const dispatch = useAppDispatch()

  const openCreateTaskForm = (e : React.MouseEvent<HTMLElement , MouseEvent>) => {
    e.preventDefault()
    dispatch(setCurrentContainer(_id))
    dispatch(setModalType(ModalType.NewTask))
  }

  const deleteContainerReq = async (e : React.MouseEvent<HTMLElement , MouseEvent>) => {
    e.preventDefault()

    const res = await fetchApi(EApi.TASKBOARD + state.currentTaskBoardId + "/"+ _id , "DELETE").then(()=>{
      dispatch(setContainerStatus(ContentStatus.NOT_ACTUAL))
    });

  } 
  return (
    <div className='flex gap-2 py-2 content-between justify-between items-center'>
        <p className='text-xl font-bold'>{title}</p>
        <div className='flex gap-2'>
            <button className='bg-white_d dark:bg-black_l rounded-full text-center p-1.5 px-3 dark:hover:bg-black_ll'
                    onClick={openCreateTaskForm}
            >+</button>
            <button className='bg-white_d dark:bg-black_l rounded-full text-center p-1.5 pt-2 px-2 justify-center items-center dark:hover:bg-black_ll'>
              <Image src={'/settings.svg'} alt='settings' width={20} height={20}/>
            </button>
            <button className='bg-white_d dark:bg-black_l rounded-full text-center p-1.5 pt-2 px-2 justify-center items-center dark:hover:bg-black_ll'
                    onClick={deleteContainerReq}>
              <Image src={'/cross.svg'} alt='settings' width={12} height={12}/>
            </button>
        </div>
    </div>
  )
}
