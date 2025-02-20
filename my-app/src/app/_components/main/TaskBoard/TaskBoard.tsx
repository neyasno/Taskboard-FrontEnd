import React from 'react'
import TaskBoardHeader from './TaskBoardHeader/TaskBoardHeader'
import TaskBoardContent from './TaskBoardContent/TaskBoardContent'

export default function TaskBoard() {
  return (
    <div className='flex flex-col bg-black_l px-4 py-2'>
      <TaskBoardHeader/>
      <TaskBoardContent/>
    </div>
  )
}
