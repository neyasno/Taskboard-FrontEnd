'use client'

import { EApi } from '@/enums';
import { useAppSelector } from '@/store/store';
import fetchApi from '@/utils/fetchApi';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react'

export default function DeleteButton({className}: {className?: string}) {

  const currentTaskBoardId = useAppSelector(state => state.taskBoards.currentTaskBoardId)
  const {theme, setTheme} = useTheme();

  const deleteHandler = async ( e : React.MouseEvent<HTMLElement , MouseEvent>) => {
    const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId , "DELETE")
    console.log(res)
  };

  return (
    <button className={`flex rounded-full p-2 hover:bg-black ${className? className : ""}`} onClick={deleteHandler}>
      <Image alt='delete' src={ theme == 'dark' ? '/cross.svg' :'dark/cross.svg'} width={20} height={20}/>
    </button>
);
};
