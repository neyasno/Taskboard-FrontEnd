'use client'
import React, { useEffect, useState } from 'react'
import Task, { TaskProps } from './Task'
import TaskContainerHeader from './TaskContainerHeader'
import fetchApi from '@/utils/fetchApi'
import { EApi } from '@/enums'
import { useAppSelector } from '@/store/store'

export type TaskContainerProps ={
    _id : string
    title : string 
}

export default function TaskContainer({title , _id} : TaskContainerProps) {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const {currentContainerId , currentTaskBoardId} = useAppSelector(state => state.taskBoards)

  useEffect(()=>{

    const getTasksReq = async () => {
        const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId + "/" + _id , 'GET')
        console.log(res)
        setTasks(res)
    }

    getTasksReq();

  } , [])

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    console.log("over")
    e.preventDefault();
  };

  const handleDrop = (e : React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    console.log("DROPP")
    const taskId = e.dataTransfer.getData("taskId");
    //if (!taskId) return;

    setTasks([...tasks , {id : "haha" , isCompleted : false , title: " new"}]);
  };

  return (
    <li className='flex flex-col bg-black gap-3 px-3 rounded-lg min-w-72
    ' onDrop={handleDrop} onDragOver={handleDragOver}>
        <div className='pl-2'>
            <TaskContainerHeader title={title} _id={_id}/>
        </div>
        <ul className='flex flex-col gap-2 bg-black_l rounded-lg mb-3'>
            {tasks.map( (t,index) => {console.log(t.title) ; return <Task _id={t._id} isCompleted={t.isCompleted} title={t.title} key={index}/>})}
        </ul>
    </li>
  )
}
