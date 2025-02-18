'use client'
import React, { useState } from 'react'
import Task, { TaskProps } from './Task'
import TaskContainerHeader from './TaskContainerHeader'

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
        isCompleted : true ,
    },
]

export default function TaskContainer({title} : TaskContainerProps) {

  const [tasks, setTasks] = useState<TaskProps[]>(testData);

  const handleDragOver = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e : React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    console.log(e.dataTransfer)
    const taskId = e.dataTransfer.getData("taskId");
    if (!taskId) return;

    setTasks((prev) => {
      const taskExists = prev.some((task) => task.id === taskId);
      if (!taskExists) {
        return [...prev, { id: taskId, title: `Task ${taskId}`, isCompleted: false }];
      }
      return prev;
    });
  };

  return (
    <li className='flex flex-col bg-gray-400 gap-3 px-3 w-full rounded-lg ' onDrop={handleDrop} onDragOver={handleDragOver}>
        <div className='pl-2'><TaskContainerHeader title={title}/></div>
        <ul className='flex flex-col gap-2 bg-gray-500 rounded-lg mb-3'>
            {tasks.map( (t,index) => <Task id={t.id} isCompleted={t.isCompleted} title={t.title} key={index}/>)}
        </ul>
    </li>
  )
}
