'use client'
import React, { ReactNode, useState } from 'react'
import TaskElement from './TaskElement';

export type TaskProps ={
    title : string , 
    isCompleted : boolean ,
    id : string ,
}

export default function Task({title , isCompleted , id} : TaskProps) {

    const taskNode = <TaskElement id='' title='task' isCompleted={false}/>;
    const skeletonNode = <div className='flex p-3 items-center gap-2 bg-black_d rounded-lg'></div>

    const [node , setNode] = useState<ReactNode>(taskNode);

    const handleDragStart = ( e : React.DragEvent<HTMLLIElement>) => {
        e.dataTransfer.setData('taskID' , id)
        console.log("DRAG_START")
        
    }

    const handleDragEnd = (e :  React.DragEvent<HTMLLIElement>) =>{
        e.preventDefault()
        console.log("DRAG_END")
    }

  return (
    <li className='cursor-grab'       
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
                            
        {node}
        
    </li>
)
}