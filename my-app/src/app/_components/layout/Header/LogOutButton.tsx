'use client'

import React from 'react'
import Button from '../../common/Button'
import { useTranslations } from 'next-intl';
import { ERoutes } from '@/enums';
import { useRouter } from '@/i18n/routing';
import { useAppDispatch } from '@/store/store';
import { setIsLogined } from '@/store/slices/userSlice';

export default function LogOutButton() {

  const t = useTranslations('components.header');
  const router = useRouter()
  const dispatch = useAppDispatch()

  const logOut = () =>{
    localStorage.clear(); 
    dispatch(setIsLogined(false))
    router.push(ERoutes.LOGIN);
  }

  return (
    <Button text={t("logout")} handleClick={logOut}/>
  )
}
