import React from 'react'
import Search from './components/Search'
import Users from './components/Users'
import History from './components/History'
import DeleteButton from './components/DeleteButton'

export default function TaskBoardHeader() {
  return (
    <nav className='flex w-full bg-transparent justify-end gap-2'>
        <Search/>
        <Users/>
        <History/>
        <DeleteButton/>
    </nav>
  )
}
