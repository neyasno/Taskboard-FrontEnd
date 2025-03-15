'use client'
import TaskElement from './TaskElement';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { EDragAndDropStatus, setDragStatus } from '@/store/slices/dragSlice';
import { setCurrentContainer, setCurrentTask } from '@/store/slices/taskBoardsSlice';
import { ModalType, setModalType } from '@/store/slices/modalSlice';

export type TaskProps = {
    title : string , 
    isCompleted : boolean ,
    description : string ,
    _id : string ,
    containerId? : string,
    setContainerTasks? : React.Dispatch<React.SetStateAction<TaskProps[]>> 
}

export default function Task({title , isCompleted, description , _id , containerId ,setContainerTasks} : TaskProps) {

    const dispatch = useAppDispatch();
    const dragStatus = useAppSelector(state => state.drag.status)

    const taskNode = <TaskElement _id={_id} title={title} isCompleted={isCompleted} description={description}/>;

    const handleDragStart = ( e : React.DragEvent<HTMLLIElement>) => {
        e.dataTransfer.setData('taskID' , _id)
        e.dataTransfer.setData('title' , title)
        e.dataTransfer.setData('description' , "")
        e.dataTransfer.setData('containerID' , containerId!)
        console.log("DRAG_START :" +  _id)
        
        dispatch(setDragStatus(EDragAndDropStatus.IN_PROCESS))
    }

    const handleDragEnd = (e :  React.DragEvent<HTMLLIElement>) =>{
        e.preventDefault()
        if(dragStatus == EDragAndDropStatus.COMPLETED){
            setContainerTasks!((prev : TaskProps[]) => [...prev].filter(item => item._id != _id));
        }
        console.log("DRAG_END :" +  _id)
    }
    
    const handleClick = () => {
        dispatch(setCurrentContainer(containerId))
        dispatch(setCurrentTask(_id))
        dispatch(setModalType(ModalType.ChangeTask))
    }

  return (
    <li className='cursor-grab'       
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={handleClick}>
                            
        {taskNode}
        
    </li>
)
}