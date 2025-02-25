'use client'
import React from 'react'
import StatusIndicator, { ETaskBoardStatus } from './StatusIndicator'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { setCurrentTaskBoard } from '@/store/slices/taskBoardsSlice'


export type TaskBoardHeadProps = {

    _id : string ,
    title : string ,
    status : ETaskBoardStatus ,

}

export default function TaskBoardHead({ _id , status ,title} : TaskBoardHeadProps) {

  const dispatch = useAppDispatch()
  const currentTaskBoardId = useAppSelector(state => state.taskBoards.currentTaskBoardId)


  const isActive = (_id === currentTaskBoardId)

  const changeTaskBoard = (e : React.MouseEvent<HTMLElement , MouseEvent>) =>{
    e.preventDefault()
    if(isActive) return;

    dispatch(setCurrentTaskBoard(_id))
  }

  return (
    <li> 
        <button onClick={changeTaskBoard} className={`flex gap-2 items-center px-4 py-2 rounded-t-lg  
                  ${isActive ? "bg-white_d dark:bg-black_l" : " bg-white_dd hover:bg-white_d dark:bg-black dark:hover:bg-black_l"}`}>
          <div>{title}</div>
          <StatusIndicator status={status}/>
        </button>
    </li>
  )
}
