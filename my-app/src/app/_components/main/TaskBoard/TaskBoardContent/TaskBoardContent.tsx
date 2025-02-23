'use client'
import React, { useEffect } from 'react'
import TaskContainer, { TaskContainerProps } from './TaskContainer/TaskContainer'
import { useAppSelector } from '@/store/store'

export default function TaskBoardContent({taskContainers} : {taskContainers : TaskContainerProps[]}) {

    const currentTaskBoardId = useAppSelector(state => state.taskBoards.currentTaskBoardId)

    useEffect(()=>{
        console.log("TASKSRELOADED")
    },[currentTaskBoardId])

  return (
    <ul className='flex gap-2'>
        {taskContainers.map( (tc,index) => <TaskContainer title={tc.title} key={index}/>)}
    </ul>
  )
}
