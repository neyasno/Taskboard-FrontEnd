import React from 'react'
import Search from './components/Search'
import Users from './components/Users'
import History from './components/History'
import DeleteButton from './components/DeleteButton'
import CreateContainerButton from './components/CreateContainerButton'

export default function TaskBoardHeader() {
  return (
    <nav className='flex w-full bg-transparent items-center justify-end gap-2 pb-2'>
        <CreateContainerButton/>
        <Search/>
        <NewCategoryButton/>
        <Users/>
        {/* <History/> */}
        <DeleteButton/>
    </nav>
  )
}
