'use client'

import React, { useEffect} from 'react'
import { useAppSelector } from '@/store/store'
import { useRouter } from '@/i18n/routing'
import { ERoutes } from '@/enums'
import ThemeButton from './ThemeButton'
import LanguageButton from './LanguageButton'
import LogOutButton from './LogOutButton'

export default function Header() {

  const user = useAppSelector(state=>state.user);
  const router = useRouter();

  useEffect(()=>{} , [user.isLogined]);

  return (
    <div className='         
                    dark:bg-black
                    w-full
                    flex flex-nowrap
                    justify-between
                    px-6 py-1
                    '>
      
      <div className='flex flex-nowrap 
                      gap-x-2'>
        
        <div className='text-xl my-auto hover:cursor-pointer' onClick={()=> user.isLogined && router.push(ERoutes.DEFAULT)}>TaskBoard</div>

      </div>
      <div className='flex gap-4'>
        <LanguageButton/>
        <ThemeButton/>
        { user.isLogined && 
            <LogOutButton/>
        }
      </div>
      
      
    </div>
  )
}
