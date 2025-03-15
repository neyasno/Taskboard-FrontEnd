import { useAppDispatch, useAppSelector } from "@/store/store";
import Button from "../../common/Button";
import TextInput from "../../common/TextInput";
import { TaskProps } from "../../main/TaskBoard/TaskBoardContent/TaskContainer/Task";
import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";
import { EApi } from "@/enums";
import { ModalType, setModalType } from "@/store/slices/modalSlice";
import { ContentStatus, setTasksStatus } from "@/store/slices/taskBoardsSlice";

export default function ChangeTaskForm({}) {
    const dispatch = useAppDispatch();
    
    const {currentContainerId, currentTaskBoardId, currentTaskId} = useAppSelector(state => state.taskBoards);
    const apiPath = EApi.TASKBOARD + currentTaskBoardId + "/" + currentContainerId + "/" + currentTaskId;

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

    return (
        <div>
            <TextInput placeholder="Title" value={task.title} handleChange={value => setTask(prev =>({ ...prev, title: value }))}/>
            <TextInput placeholder="Description" value={task.description} handleChange={value => setTask(prev =>({...prev, description: value}))}/>
            <Button text={`Status: ${task.isCompleted ? "Complete" : "Incomplete"}`} handleClick={() => setTask(prev => ({...prev, isCompleted: !prev.isCompleted}))}/>
            <Button text="Change" handleClick={handleChange}/>
        </div>
    );
}