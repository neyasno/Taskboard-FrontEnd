'use client'

import Button from '@/app/_components/common/Button'
import Image from 'next/image';
import React from 'react'

export default function DeleteButton() {

  const deleteHandler = () => {
  };

  return (
    <button className='flex rounded-full p-2 hover:bg-black'>
      <Image alt='delete' src={"/cross.svg"} width={20} height={20}/>
    </button>
);
};
