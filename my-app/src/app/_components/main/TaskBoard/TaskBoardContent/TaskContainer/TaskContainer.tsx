'use client'
import React, { useEffect, useState } from 'react'
import Task, { TaskProps } from './Task'
import TaskContainerHeader from './TaskContainerHeader'
import fetchApi from '@/utils/fetchApi'
import { EApi } from '@/enums'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { EDragAndDropStatus, setDragStatus } from '@/store/slices/dragSlice'
import Loading from '@/app/_components/common/Loading'
import { ContentStatus, setTasksStatus } from '@/store/slices/taskBoardsSlice'

export type TaskContainerProps ={
    _id : string
    title : string 
    position? : number
}

export default function TaskContainer({title , _id} : TaskContainerProps) {

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isLoading , setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  const state = useAppSelector(state => state.taskBoards)

  useEffect(()=>{

    const getTasksReq = async () => {
        const res = await fetchApi(EApi.TASKBOARD + state.currentTaskBoardId + "/" + _id , 'GET')
        setTasks(res)
    }

    getTasksReq().finally(()=>{
        setTimeout(()=>{setIsLoading(false)} , 2000)
        dispatch(setTasksStatus(ContentStatus.ACTUAL))
    });

  } , [state.tasksStatus])

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    console.log("over")
    e.preventDefault();
  };

  const handleDrop = async (e : React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    
    const taskId = e.dataTransfer.getData("taskId");
    const taskTitle = e.dataTransfer.getData("title");
    const containerID = e.dataTransfer.getData("containerID");

    if (_id == containerID) return;

    console.log( taskId + "with text | " + taskTitle + " | to" + _id )

    setTasks([...tasks , {_id : taskId , isCompleted : false , title: taskTitle}]);
    
    dispatch(setDragStatus(EDragAndDropStatus.COMPLETED))

    await fetchApi(EApi.TASKBOARD + state.currentTaskBoardId + "/" + _id , 'PUT' , {task_id : taskId , sourse_id : containerID })
  };

  return (
    <>
        {isLoading ? <Loading/> : 

            <li className='flex flex-col bg-white dark:bg-black gap-3 px-3 rounded-lg min-w-72
            ' onDrop={handleDrop} onDragOver={handleDragOver}>
                <div className='pl-2'>
                    <TaskContainerHeader title={title} _id={_id}/>
                </div>
                <ul className={`flex flex-col gap-2 bg-white_d dark:bg-black_l rounded-lg mb-3`}>
                    
                {isLoading ? <Loading/> : 

                    <>{tasks.map( (t,index) => 
                        <Task _id={t._id} isCompleted={t.isCompleted} title={t.title} key={index}
                            containerId={_id} setContainerTasks={setTasks}/>
                    )}</>

                }
                </ul>
            </li>
        
        }
    </>
  )
}
