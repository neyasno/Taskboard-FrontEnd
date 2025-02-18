'use client'

import Button from '@/app/_components/common/Button'
import React from 'react'

export default function DeleteButton() {

  const deleteHandler = () => {
  };

  return (
    <Button text='Delete' handleClick={deleteHandler} />
  );
};
