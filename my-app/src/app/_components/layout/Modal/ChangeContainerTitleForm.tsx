import React, { useState } from 'react'
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import { ModalType, setModalType } from '@/store/slices/modalSlice';
import fetchApi from '@/utils/fetchApi';
import { EApi } from '@/enums';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ContentStatus, setContainerStatus } from '@/store/slices/taskBoardsSlice';
import { useTranslations } from 'next-intl';

export default function ChangeContainerTitleForm() {
    const [title , setTitle] = useState("");
  
    const {currentTaskBoardId , currentContainerId} = useAppSelector(state => state.taskBoards)
    const dispatcher = useAppDispatch()
    const t = useTranslations('components.main.taskboard.forms.category_settings')
  
    const changeContainerReq = async (e : React.MouseEvent<HTMLElement,MouseEvent>) =>{
      e.preventDefault()
      const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId + "/delete" , 'PUT' , {title : title})
      console.log(res) 
      
      dispatcher(setContainerStatus(ContentStatus.NOT_ACTUAL))
      dispatcher(setModalType(ModalType.None))
    }
  
    return (
      <div className='flex flex-col gap-2'>
          <TextInput value={title} handleChange={setTitle} placeholder={t('title')}/>
          <Button text={t('change_category')} handleClick={changeContainerReq}/>
      </div>
    )
}
