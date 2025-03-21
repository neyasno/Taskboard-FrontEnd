import { ModalType, setModalType } from '@/store/slices/modalSlice';
import { useAppDispatch } from '@/store/store';

import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

export default function ChangeTaskBoardTitle({className}: {className?: string}) {

  const {theme} = useTheme();
  const dispatch  = useAppDispatch()

  const deleteHandler = async ( e : React.MouseEvent<HTMLElement , MouseEvent>) => {
    e.stopPropagation()
    dispatch(setModalType(ModalType.ChangeTaskboardTitle))
  };

  return (
    <button className={`flex rounded-full p-2 hover:bg-black ${className? className : ""}`} onClick={deleteHandler}>
        <Image alt='delete' src={ theme == 'dark' ? '/settings.svg' :'dark/settings.svg'} width={20} height={20}/>
    </button>
  )
}
