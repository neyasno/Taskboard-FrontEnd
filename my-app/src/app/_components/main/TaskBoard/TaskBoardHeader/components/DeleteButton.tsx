'use client'

import { EApi } from '@/enums';
import fetchApi from '@/utils/fetchApi';
import Image from 'next/image';
import React from 'react'

export default function DeleteButton() {

  const deleteHandler = async () => {
    try{
      await fetchApi(EApi.TASKBOARDS, "DELETE");
    }catch(e){
      console.log(e);
    }
  };

  return (
    <button className='flex rounded-full p-2 hover:bg-black' onClick={deleteHandler}>
      <Image alt='delete' src={"/cross.svg"} width={20} height={20}/>
    </button>
);
};
