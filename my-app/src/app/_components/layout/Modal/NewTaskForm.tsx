'use client'

import { useState } from "react";
import Button from "../../common/Button";
import TextInput from "../../common/TextInput";
import { useAppDispatch, useAppSelector } from "@/store/store";
import fetchApi from "@/utils/fetchApi";
import { EApi } from "@/enums";
import { ModalType, setModalType } from "@/store/slices/modalSlice";


export default function NewTaskForm({}) {

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");

    const {currentContainerId , currentTaskBoardId} = useAppSelector(state => state.taskBoards)
    const dispatcher = useAppDispatch()


    const createContainerReq = async (e : React.MouseEvent<HTMLElement,MouseEvent>) =>{
        e.preventDefault()

        console.log(EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId) 
        const res = await fetchApi(EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId , 'POST' , {title : title , description:description})
        console.log(res) 
        


        dispatcher(setModalType(ModalType.None))
        
    }

    return (
        <form action="">
            <TextInput value={title} handleChange={setTitle} placeholder='title'/>
            <TextInput value={description} handleChange={setDescription} placeholder='description'/>
            <Button text='Create' handleClick={createContainerReq}/>
        </form>
    );
}