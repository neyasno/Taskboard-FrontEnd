'use client'
import React, { ReactNode, useState } from 'react'
import TaskElement from './TaskElement';

export type TaskProps ={
    title : string , 
    isCompleted : boolean ,
    _id : string ,
}

export default function Task({title , isCompleted , _id} : TaskProps) {

    const taskNode = <TaskElement _id={_id} title={title} isCompleted={isCompleted}/>;
    const skeletonNode = <div className='flex p-3 items-center gap-2 bg-black_d rounded-lg'></div>

    const [node , setNode] = useState<ReactNode>(taskNode);

    const handleDragStart = ( e : React.DragEvent<HTMLLIElement>) => {
        e.dataTransfer.setData('taskID' , _id)
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