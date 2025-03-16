import React from 'react'
import Search from './components/Search'
import Users from './components/Users'

import DeleteButton from './components/DeleteButton'
import CreateContainerButton from './components/CreateContainerButton'
import ChangeTaskBoardTitle from './components/ChangeTaskBoardTitle'

export default function TaskBoardHeader() {
  return (
    <nav className='flex flex-wrap w-full bg-transparent items-center
                    justify-end gap-x-0 gap-y-2 pb-2
                    sm:gap-x-2 sm:gap-y-2
                    '>

        <CreateContainerButton className='order-2 sm:order-1'/>
        <Search className='order-1 sm:order-2'/>
        <Users className='order-3'/>
        <ChangeTaskBoardTitle className='order-4'/>
        {/* <History/> */}
        <DeleteButton className='order-5'/>
    </nav>
  )
}
