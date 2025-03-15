import React from 'react'
import Search from './components/Search'
import Users from './components/Users'

import DeleteButton from './components/DeleteButton'
import CreateContainerButton from './components/CreateContainerButton'
import ChangeTaskBoardTitle from './components/ChangeTaskBoardTitle'

export default function TaskBoardHeader() {
  return (
    <nav className='flex w-full bg-transparent items-center justify-end gap-2 pb-2'>
        <CreateContainerButton/>
        <Search/>
        <Users/>
        <ChangeTaskBoardTitle/>
        {/* <History/> */}
        <DeleteButton/>
    </nav>
  )
}
