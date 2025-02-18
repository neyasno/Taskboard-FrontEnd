import React from 'react'
import TaskBoardHeader from './TaskBoardHeader/TaskBoardHeader'
import TaskBoardContent from './TaskBoardContent/TaskBoardContent'

export default function TaskBoard() {
  return (
    <div className='flex flex-col bg-gray-500 px-4'>
      <TaskBoardHeader/>
      <TaskBoardContent/>
    </div>
  )
}
