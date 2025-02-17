import React from 'react'
import TaskContainer, { TaskContainerProps } from './TaskContainer/TaskContainer'

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
  return (
    <ul className='flex gap-2'>
        {testData.map( (tc,index) => <TaskContainer title={tc.title} key={index}/>)}
    </ul>
  )
}
