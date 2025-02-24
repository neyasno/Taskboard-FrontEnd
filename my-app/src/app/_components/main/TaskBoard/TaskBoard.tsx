'use client'
import React, { useEffect, useState } from 'react'
import TaskBoardHeader from './TaskBoardHeader/TaskBoardHeader'
import TaskBoardContent from './TaskBoardContent/TaskBoardContent'
import { useAppDispatch, useAppSelector } from '@/store/store'
import fetchApi from '@/utils/fetchApi'
import { EApi } from '@/enums'
import { TaskContainerProps } from './TaskBoardContent/TaskContainer/TaskContainer'
import { ContentStatus, setContainerStatus } from '@/store/slices/taskBoardsSlice'

export default function TaskBoard() {

  const [taskContainers, setTaskContainers] = useState<TaskContainerProps[]>([])

  const state = useAppSelector(state => state.taskBoards)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    const fetchTaskBoard = async ()=> {
      if(state.currentTaskBoardId != "0"){
        const res = await fetchApi(EApi.TASKBOARD + state.currentTaskBoardId , 'GET')
        console.log(res)
        setTaskContainers(res)
      }
    }
    
    fetchTaskBoard().finally(()=>{
      dispatch(setContainerStatus(ContentStatus.ACTUAL))
    })

  } , [state.taskContainersStatus])

  return (
    <div className='flex flex-col bg-black_l px-4 py-2'>
      <TaskBoardHeader/>
      <TaskBoardContent taskContainers={taskContainers}/>
    </div>
  )
}
