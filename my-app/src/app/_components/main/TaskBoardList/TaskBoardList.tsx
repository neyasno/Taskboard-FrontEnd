import React from 'react'
import TaskBoardHead from './TaskBoardHead'
import CreateTaskBoardButton from './CreateTaskBoardButton'
import { ETaskBoardStatus } from './StatusIndicator'

const testBoards = [
  {
    title : "Decode Team" ,
    status : ETaskBoardStatus.COMPLETED ,
    isActive : true ,
  },
  {
    title : "sEFDAS Team" ,
    status : ETaskBoardStatus.WORKING ,
    isActive : false ,
  },
  {
    title : "aLABAMA Team" ,
    status : ETaskBoardStatus.WORKING ,
    isActive : false ,
  },
  {
    title : "PROJECT 1" ,
    status : ETaskBoardStatus.EXPIRED ,
    isActive : false ,
  },
  {
    title : "Sasha shop" ,
    status : ETaskBoardStatus.WAITING ,
    isActive : false ,
  },
]

export default function TaskBoardList() {
  return (
    <nav>
      <ul className='flex gap-1'>
        {testBoards.map((item , index) => <TaskBoardHead isActive={item.isActive} title={item.title} status={item.status} key={index} />)}
        <CreateTaskBoardButton/>
      </ul>
    </nav>
  )
}
