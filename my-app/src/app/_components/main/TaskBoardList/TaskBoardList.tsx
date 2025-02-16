import React from 'react'
import TaskBoardHead from './TaskBoardHead'
import CreateTaskBoardButton from './CreateTaskBoardButton'

const testBoards = [
  {
    title : "Decode Team" ,
    status : "COMPLETED" ,
    isActive : true ,
  },
  {
    title : "sEFDAS Team" ,
    status : "NOT_COMPLETED" ,
    isActive : false ,
  },
  {
    title : "aLABAMA Team" ,
    status : "COMPLETED" ,
    isActive : false ,
  },
  {
    title : "PROJECT 1" ,
    status : "COMPLETED" ,
    isActive : false ,
  },
  {
    title : "Sasha shop" ,
    status : "NOT_COMPLETED" ,
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
