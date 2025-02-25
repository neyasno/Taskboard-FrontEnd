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

    console.log(state.currentTaskBoardId)
    const fetchTaskBoard = async ()=> {
      if(state.currentTaskBoardId != "0"){
        console.log("state.currentTaskBoardId")
        const res = await fetchApi(EApi.TASKBOARD + state.currentTaskBoardId , 'GET')
        console.log(res)
        setTaskContainers(res)
      }
    }
    
    fetchTaskBoard().finally(()=>{
      console.log("EFFFFFFF2222")
      setTimeout(()=>{},2000)
      dispatch(setContainerStatus(ContentStatus.ACTUAL))
    })

  } , [ state.currentTaskBoardId , state.taskContainersStatus])

  return (
    <div className='flex flex-col bg-white_d dark:bg-black_l px-4 py-2'>
      <TaskBoardHeader/>
      <TaskBoardContent taskContainers={taskContainers}/>
    </div>
  )
}
