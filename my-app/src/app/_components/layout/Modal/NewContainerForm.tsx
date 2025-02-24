'use client'
import React, { useState } from 'react'
import TextInput from '../../common/TextInput'
import Button from '../../common/Button';
import fetchApi from '@/utils/fetchApi';
import { EApi } from '@/enums';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ModalType, setModalType } from '@/store/slices/modalSlice';

export default function NewContainerForm() {
  const [title , setTitle] = useState("");
  
  const current_id = useAppSelector(state => state.taskBoards.currentTaskBoardId)
  const dispatcher = useAppDispatch()

  const createContainerReq = async (e : React.MouseEvent<HTMLElement,MouseEvent>) =>{
    e.preventDefault()
    const res = await fetchApi(EApi.TASKBOARD + current_id , 'POST' , {title : title})
    console.log(res) 

    dispatcher(setModalType(ModalType.None))
  }

  return (
    <div className='flex flex-col gap-2'>
        <TextInput value={title} handleChange={setTitle} placeholder='title'/>
        <Button text='Create' handleClick={createContainerReq}/>
    </div>
  )
}
