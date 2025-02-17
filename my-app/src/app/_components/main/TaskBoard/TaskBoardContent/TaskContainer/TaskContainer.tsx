import React from 'react'
import Task, { TaskProps } from './Task'

export type TaskContainerProps ={
    title : string 
}

const testData : TaskProps[] = [
    {
        id : "" ,
        title : "Sasha ",
        isCompleted : false ,
    },
    {
        id : "" ,
        title : "Sasha ",
        isCompleted : false ,
    },
    {
        id : "" ,
        title : "Sasha ",
        isCompleted : false ,
    },
    {
        id : "" ,
        title : "Sasha ",
        isCompleted : false ,
    },
]

export default function TaskContainer({title} : TaskContainerProps) {
  return (
    <li className='flex flex-col bg-red-400 gap-3'>
        <p>{title}</p>
        <ul className='flex flex-col gap-2'>
            {testData.map( (t,index) => <Task id={t.id} isCompleted={t.isCompleted} title={t.title} key={index}/>)}
        </ul>
    </li>
  )
}
