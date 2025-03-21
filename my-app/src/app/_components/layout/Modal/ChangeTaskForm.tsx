import { useAppDispatch, useAppSelector } from "@/store/store";
import Button from "../../common/Button";
import TextInput from "../../common/TextInput";
import { TaskProps } from "../../main/TaskBoard/TaskBoardContent/TaskContainer/Task";
import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";
import { EApi } from "@/enums";
import { ModalType, setModalType } from "@/store/slices/modalSlice";
import { ContentStatus, setTasksStatus } from "@/store/slices/taskBoardsSlice";
import { useTranslations } from "next-intl";

export default function ChangeTaskForm({}) {
    const dispatch = useAppDispatch();
    
    const {currentContainerId, currentTaskBoardId, currentTaskId} = useAppSelector(state => state.taskBoards);
    const apiPath = EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId + "/" + currentTaskId;
    const t = useTranslations('components.main.taskboard.forms.task_settings');

    const [task, setTask] = useState<TaskProps>({
        title: "",
        isCompleted: false,
        description: "",
        _id: currentTaskId,
        containerId: currentContainerId
    } as TaskProps);

    useEffect(() => {
        fetchApi(apiPath, 'GET').then((res) => {
            setTask(res);
        });
    }, []);

    const handleChange = async () => {
        try {
            await fetchApi(apiPath, 'PUT', task);
            dispatch(setTasksStatus(ContentStatus.NOT_ACTUAL));
        }
        catch (error) {
            console.log(error);
        }finally{
            dispatch(setModalType(ModalType.None));
        }
    }

    const handleDelete = async () => {
        try {
            await fetchApi(apiPath, 'DELETE');
            dispatch(setTasksStatus(ContentStatus.NOT_ACTUAL));
        }
        catch (error) {
            console.log(error);
        }finally{
            dispatch(setModalType(ModalType.None)); 
        }
    }

    return (
        <div className='flex flex-col gap-2'>
            <TextInput placeholder={t('title')} value={task.title} handleChange={value => setTask(prev =>({ ...prev, title: value }))}/>
            <TextInput placeholder={t('description')} value={task.description} handleChange={value => setTask(prev =>({...prev, description: value}))}/>
            <Button text={`${t('status_message')}: ${task.isCompleted ? t('status_complete') : t('status_incomplete')}`} handleClick={() => setTask(prev => ({...prev, isCompleted: !prev.isCompleted}))}/>
            <Button text={t('change_task')} handleClick={handleChange}/>
            
            <button className='w-full py-2 border-2 transition mt-5 
                        px-1 md:px-3
                        text-center 
                        border-red-500 text-red-500 hover:bg-red-500 hover:text-white'

                    onClick={handleDelete}>{t('delete_task')}
            </button>
        </div>
    );
}