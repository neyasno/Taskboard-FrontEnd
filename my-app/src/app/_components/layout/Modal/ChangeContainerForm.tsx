import React, { useState } from 'react'
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import { ModalType, setModalType } from '@/store/slices/modalSlice'; 
import fetchApi from '@/utils/fetchApi';
import { EApi } from '@/enums';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ContentStatus, setContainerStatus } from '@/store/slices/taskBoardsSlice';

export default function ChangeContainerForm() {
    const [title , setTitle] = useState("");
  
    const {currentTaskBoardId , currentContainerId} = useAppSelector(state => state.taskBoards)
    const dispatcher = useAppDispatch()

    const changeContainerTitleReq = async (e : React.MouseEvent<HTMLElement,MouseEvent>) =>{
      e.preventDefault()
      const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId + "/put" , 'PUT' , {title , position:0})
      console.log(res) 
      
      dispatcher(setContainerStatus(ContentStatus.NOT_ACTUAL))
      dispatcher(setModalType(ModalType.None))
    }
  
    const containerToRightReq = async (e : React.MouseEvent<HTMLElement,MouseEvent>) =>{
      e.preventDefault()
      const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId + "/put" , 'PUT' , {title , position:1})
      console.log(res) 
      
      dispatcher(setContainerStatus(ContentStatus.NOT_ACTUAL))
      dispatcher(setModalType(ModalType.None))
    }

    const containerToLeftReq = async (e : React.MouseEvent<HTMLElement,MouseEvent>) =>{
      e.preventDefault()
      const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId + "/put" , 'PUT' , {title , position:-1})
      console.log(res) 
      
      dispatcher(setContainerStatus(ContentStatus.NOT_ACTUAL))
      dispatcher(setModalType(ModalType.None))
    }
  
    return (
      <div className='flex flex-col gap-2'>
          <p>ChangeTitle:</p>
          <TextInput value={title} handleChange={setTitle} placeholder='title'/>
          <div className='flex gap-2'>
            <button className='py-2 px-4 bg-white_d rounded-full dark:bg-black_l' onClick={containerToLeftReq}>{"<"}</button>
            <button className='py-2 px-4 bg-white_d rounded-full dark:bg-black_l' onClick={containerToRightReq}>{">"}</button>
          </div>
          <Button text='Change' handleClick={changeContainerTitleReq}/>
      </div>
    )
}
