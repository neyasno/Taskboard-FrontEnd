import React from 'react'
import StatusIndicator, { ETaskBoardStatus } from './StatusIndicator'

type TaskBoardHeadProps = {

    title : string ,
    status : ETaskBoardStatus ,
    isActive : boolean ,

}

export default function TaskBoardHead({isActive, status ,title} : TaskBoardHeadProps) {
  return (
    <li className={`flex gap-2 items-center px-4 py-2 rounded-t-lg ${isActive ? "bg-gray-500" : "bg-gray-600"}`}> 
        <div>{title}</div>
        <StatusIndicator status={status}/>
    </li>
  )
}
