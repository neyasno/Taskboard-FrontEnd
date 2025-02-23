'use client'
import React, { useEffect } from 'react'
import TaskBoardHeader from './TaskBoardHeader/TaskBoardHeader'
import TaskBoardContent from './TaskBoardContent/TaskBoardContent'
import { useAppSelector } from '@/store/store'
import fetchApi from '@/utils/fetchApi'
import { EApi } from '@/enums'

export default function TaskBoard() {
  const currentTaskBoardId = useAppSelector(state => state.taskBoards.currentTaskBoardId)

  useEffect(()=>{
    const fetchTaskBoard = async ()=> {
      if(currentTaskBoardId != "0"){
        const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId , 'GET')
        console.log(res)

      }
    }
    
    fetchTaskBoard();

  } , [currentTaskBoardId])

  return (
    <div className='flex flex-col bg-black_l px-4 py-2'>
      <TaskBoardHeader/>
      <TaskBoardContent/>
    </div>
  )
}
