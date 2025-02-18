'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DropdownMenu from '../../common/DropdownMenu'
import Button from '../../common/Button'
import { useAppSelector } from '@/store/store'
import { useRouter } from '@/i18n/routing'
import { ERoutes } from '@/enums'
import { useTranslations } from 'next-intl'

export default function Header() {

    const t = useTranslations('components.header');

  const [enableDropdown, setEnableDropdown] = useState(false);
  const user = useAppSelector(state=>state.user);

  const router = useRouter();

  useEffect(()=>{} , [user.isLogined])

  

  return (
    <div className='bg-header
                    w-full
                    flex flex-nowrap
                    justify-between
                    px-2 py-1
                    '>
      
      <div className='flex flex-nowrap 
                      gap-x-2'>
        
        <div className='text-2xl my-auto'>TaskBoard</div>

      </div>

      { user.isLogined && (
        <div className='relative inline-block'
          onMouseEnter={() => setEnableDropdown(true)}
          onMouseLeave={() => setEnableDropdown(false)}
        >

          <Image alt='profile-img' src={'/globe.svg'} width={48} height={48}/>
          <DropdownMenu enabled={enableDropdown} className='right-0'>
            <div className='w-40 p-2'>
              <Button text={t("settings")} handleClick={()=>{console.log("SETTINGS"); router.push(ERoutes.PROFILE)}}/>
              <Button text={t("logout")} handleClick={()=>{console.log("EXIT"); localStorage.clear(); router.push(ERoutes.LOGIN)}}/>
            </div>
          </DropdownMenu>
            
        </div>
      )}
      
    </div>
  )
}
