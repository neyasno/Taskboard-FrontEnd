'use client'
import React, { useEffect, useState } from 'react'
import TaskContainer, { TaskContainerProps } from './TaskContainer/TaskContainer'
import { useAppSelector } from '@/store/store'

export default function TaskBoardContent({taskContainers} : {taskContainers : TaskContainerProps[]}) {

    const {currentTaskBoardId} = useAppSelector(state => state.taskBoards)

    useEffect(()=>{
        console.log("TASKSRELOADED")
    },[currentTaskBoardId])

  return (
    <ul className='flex flex-col sm:flex-row gap-2 overflow-x-scroll'>
        {taskContainers.map( (tc, index) => <TaskContainer title={tc.title} key={tc._id} _id={tc._id}/>)}
    </ul>
  )
}
