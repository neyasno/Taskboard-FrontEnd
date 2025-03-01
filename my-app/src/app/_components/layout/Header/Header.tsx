'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DropdownMenu from '../../common/DropdownMenu'
import Button from '../../common/Button'
import { useAppSelector } from '@/store/store'
import { useRouter } from '@/i18n/routing'
import { ERoutes } from '@/enums'
import { useTranslations } from 'next-intl'
import ThemeButton from './ThemeButton'
import { useTheme } from 'next-themes'

export default function Header() {

    const t = useTranslations('components.header');

  const [enableDropdown, setEnableDropdown] = useState(false);
  const user = useAppSelector(state=>state.user);

  const router = useRouter();
  const {theme , setTheme} = useTheme();

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
        <ThemeButton/>
        { user.isLogined && (
          <div className='relative inline-block p-1 m-1 rounded-full hover:bg-black_l'
            onMouseEnter={() => setEnableDropdown(true)}
            onMouseLeave={() => setEnableDropdown(false)}
          >

            <Image alt='profile' src={theme == "dark" ? '/profile.svg' : 'dark/profile.svg'} width={30} height={30}/>
            
            <DropdownMenu enabled={enableDropdown} className='right-0'>
              <div className='w-40 p-2 flex-col gap-4'>
                <Button text={t("settings")} handleClick={()=>{router.push(ERoutes.PROFILE_SETTINGS)}}/>
                <div className='h-1'></div>
                <Button text={t("logout")} handleClick={()=>{localStorage.clear(); router.push(ERoutes.LOGIN)}}/>
              </div>
            </DropdownMenu>
              
          </div>
        )}
      </div>
      
      
    </div>
  )
}
