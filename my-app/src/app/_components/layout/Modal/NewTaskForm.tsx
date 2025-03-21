'use client'

import { useState } from "react";
import Button from "../../common/Button";
import TextInput from "../../common/TextInput";
import { useAppDispatch, useAppSelector } from "@/store/store";
import fetchApi from "@/utils/fetchApi";
import { EApi } from "@/enums";
import { ModalType, setModalType } from "@/store/slices/modalSlice";
import { ContentStatus, setTasksStatus } from "@/store/slices/taskBoardsSlice";
import { useTranslations } from "next-intl";


export default function NewTaskForm({}) {

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");

    const {currentContainerId , currentTaskBoardId} = useAppSelector(state => state.taskBoards)
    const dispatcher = useAppDispatch()
    const t = useTranslations('components.main.taskboard.forms.new_task')

    const createContainerReq = async (e : React.MouseEvent<HTMLElement,MouseEvent>) =>{
        e.preventDefault()

        console.log(EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId) 
        const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId , 'POST' , {title : title , description:description})
        console.log(res) 
        

        dispatcher(setTasksStatus(ContentStatus.NOT_ACTUAL))
        dispatcher(setModalType(ModalType.None))
        
    }

    return (
        <div className='flex flex-col gap-2'>
            <TextInput value={title} handleChange={setTitle} placeholder={t('title')}/>
            <TextInput value={description} handleChange={setDescription} placeholder={t('description')}/>
            <Button text={t('create_task')} handleClick={createContainerReq}/>
        </div>
    );
}