'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import DropdownMenu from '../../common/DropdownMenu'
import Button from '../../common/Button'
import { useAppSelector } from '@/store/store'
import { useRouter } from '@/i18n/routing'
import { ERoutes } from '@/enums'
import { useTranslations } from 'next-intl'

export default function Header() {

    const t = useTranslations('components.header');

  const [enableDropdown, setEnableDropdown] = useState(false);
  const isUserLogined = useAppSelector(state=>state.user.isLogined);

  const router = useRouter();

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

        {/* <div className='flex flex-nowrap h-4/5 my-auto'>
          <Button text='Home' handleClick={()=>{}}/>
          <Button text='Boards' handleClick={()=>{}}/>
          <Button text='Other' handleClick={()=>{}}/>
        </div> */}

      </div>

      { isUserLogined && (
        <div className='relative inline-block'
          onMouseEnter={() => setEnableDropdown(true)}
          onMouseLeave={() => setEnableDropdown(false)}
        >

          <Image alt='profile-img' src={'/globe.svg'} width={48} height={48}/>
          <DropdownMenu enabled={enableDropdown}>
            <div className='w-40 p-2'>
              <Button text={t("settings")} handleClick={()=>{console.log("SETTINGS"); router.push(ERoutes.PROFILE)}}/>
              <Button text={t("logout")} handleClick={()=>{console.log("EXIT"); router.push(ERoutes.EXIT)}}/>
            </div>
          </DropdownMenu>
            
        </div>
      )}
      
    </div>
  )
}
