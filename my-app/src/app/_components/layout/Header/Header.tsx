'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import DropdownMenu from '../../common/DropdownMenu'
import Button from '../../common/Button'
import { useAppSelector } from '@/store/store'
import { useRouter } from '@/i18n/routing'
import { ERoutes } from '@/enums'

export default function Header() {

  const [enableDropdown, setEnableDropdown] = useState(false);
  const isUserLogined = useAppSelector(state=>state.user.isLogined);
  const router = useRouter();

  return (
    <div className='bg-header
                    w-full
                    flex flex-row flex-nowrap
                    justify-between
                    px-2 py-1
                    '>
      
      <div className='flex flex-row flex-nowrap 
                      gap-x-2'>
        
        <div className='text-2xl my-auto'>TaskBoard</div>

        {/* <div className='flex flex-row flex-nowrap h-4/5 my-auto'>
          <Button text='Home' handleClick={()=>{}}/>
          <Button text='Boards' handleClick={()=>{}}/>
          <Button text='Other' handleClick={()=>{}}/>
        </div> */}

      </div>
      
      <div>
        <Image alt='profile-img' src={'/globe.svg'} width={48} height={48} onClick={()=>setEnableDropdown(!enableDropdown)}/>
        <DropdownMenu enabled={enableDropdown}>
          <div className='w-28'>

            {isUserLogined? 
              <Button text='Logout' handleClick={()=>{console.log("EXIT"); router.push(ERoutes.EXIT)}}></Button>
              :
              <Button text='Login' handleClick={()=>{console.log("LOGIN");  router.push(ERoutes.LOGIN)}}></Button>
            }

          </div>
        </DropdownMenu>
      </div>
    </div>
  )
}
