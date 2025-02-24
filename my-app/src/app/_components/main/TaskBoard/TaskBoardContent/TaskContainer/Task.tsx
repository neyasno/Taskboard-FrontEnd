'use client'
import React, { ReactNode, useState } from 'react'
import TaskElement from './TaskElement';
import { setTasks } from '@/store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { EDragAndDropStatus, setDragStatus } from '@/store/slices/dragSlice';

export type TaskProps ={
    title : string , 
    isCompleted : boolean ,
    _id : string ,
    containerId? : string,
    setContainerTasks? : React.Dispatch<React.SetStateAction<TaskProps[]>> 
}

export default function Task({title , isCompleted , _id , containerId ,setContainerTasks} : TaskProps) {

    const dispatch = useAppDispatch();
    const dragStatus = useAppSelector(state => state.drag.status)

    const taskNode = <TaskElement _id={_id} title={title} isCompleted={isCompleted}/>;

    const handleDragStart = ( e : React.DragEvent<HTMLLIElement>) => {
        e.dataTransfer.setData('taskID' , _id)
        e.dataTransfer.setData('title' , title)
        e.dataTransfer.setData('description' , "")
        e.dataTransfer.setData('containerID' , containerId!)
        console.log("DRAG_START :" +  _id)
        
        dispatch(setDragStatus(EDragAndDropStatus.IN_PROCESS))
    }

    const handleDragEnd = (e :  React.DragEvent<HTMLLIElement>) =>{
        e.preventDefault()
        if(dragStatus == EDragAndDropStatus.COMPLETED){
            setContainerTasks!((prev : TaskProps[]) => [...prev].filter(item => item._id != _id));
        }
        console.log("DRAG_END :" +  _id)
    }

  return (
    <li className='cursor-grab'       
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
                            
        {taskNode}
        
    </li>
)
}