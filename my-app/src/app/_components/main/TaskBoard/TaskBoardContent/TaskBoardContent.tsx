'use client'
import React, { useEffect } from 'react'
import TaskContainer, { TaskContainerProps } from './TaskContainer/TaskContainer'
import { useAppSelector } from '@/store/store'

const testData : TaskContainerProps[] = [
    {
        title : "Da da"
    },
    {
        title : "Da da"
    },
    {
        title : "Da da"
    },
    {
        title : "Da da"
    },

]

export default function TaskBoardContent() {

    const currentTaskBoardId = useAppSelector(state => state.taskBoards.currentTaskBoardId)

    useEffect(()=>{
        console.log("TASKSRELOADED")
    },[currentTaskBoardId])

  return (
    <ul className='flex gap-2'>
        {testData.map( (tc,index) => <TaskContainer title={tc.title} key={index}/>)}
    </ul>
  )
}
