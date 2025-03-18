import React, { useState } from 'react'
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import { ModalType, setModalType } from '@/store/slices/modalSlice';
import fetchApi from '@/utils/fetchApi';
import { EApi } from '@/enums';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ContentStatus, setTaskBoardsStatus } from '@/store/slices/taskBoardsSlice';
import { useTranslations } from 'next-intl';

export default function ChangeTaskboardTitleForm() {
    const [title , setTitle] = useState("");
  
    const current_id = useAppSelector(state => state.taskBoards.currentTaskBoardId)
    const dispatcher = useAppDispatch()
    const t = useTranslations('components.main.taskboard.forms.taskboard_settings')

    const createContainerReq = async (e : React.MouseEvent<HTMLElement,MouseEvent>) =>{
      e.preventDefault()
      const res = await fetchApi(EApi.TASKBOARD + current_id , 'PUT' , {title : title})
      console.log(res) 
  
      dispatcher(setTaskBoardsStatus(ContentStatus.NOT_ACTUAL))
      dispatcher(setModalType(ModalType.None))
    }
  
    return (
      <div className='flex flex-col gap-2'>
          <TextInput value={title} handleChange={setTitle} placeholder={t('title')}/>
          <Button text={t('change_taskboard')} handleClick={createContainerReq}/>
      </div>
    )
}
