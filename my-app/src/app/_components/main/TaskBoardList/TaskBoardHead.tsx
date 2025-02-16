import React from 'react'

type TaskBoardHeadProps = {

    title : string ,
    status : string ,
    isActive : boolean ,

}

export default function TaskBoardHead({isActive, status ,title} : TaskBoardHeadProps) {
  return (
    <li className={`px-4 py-2 rounded-t-lg ${isActive ? "bg-gray-500" : "bg-gray-600"}`}> 
        <div>{title}</div>
    </li>
  )
}
