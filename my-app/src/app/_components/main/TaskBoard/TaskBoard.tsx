'use client'
import React, { useEffect, useState } from 'react'
import TaskBoardHeader from './TaskBoardHeader/TaskBoardHeader'
import TaskBoardContent from './TaskBoardContent/TaskBoardContent'
import { useAppSelector } from '@/store/store'
import fetchApi from '@/utils/fetchApi'
import { EApi } from '@/enums'
import { TaskContainerProps } from './TaskBoardContent/TaskContainer/TaskContainer'

export default function TaskBoard() {
  const [taskContainers, setTaskContainers] = useState<TaskContainerProps[]>([])
  const currentTaskBoardId = useAppSelector(state => state.taskBoards.currentTaskBoardId)

  useEffect(()=>{
    const fetchTaskBoard = async ()=> {
      if(currentTaskBoardId != "0"){
        const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId , 'GET')
        console.log(res)
        setTaskContainers(res)
      }
    }
    
    fetchTaskBoard();

  } , [currentTaskBoardId])

  return (
    <div className='flex flex-col bg-black_l px-4 py-2'>
      <TaskBoardHeader/>
      <TaskBoardContent taskContainers={taskContainers}/>
    </div>
  )
}
