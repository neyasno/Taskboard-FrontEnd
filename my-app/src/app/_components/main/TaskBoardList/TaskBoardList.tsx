'use client'

import React, { useEffect, useState } from 'react'
import TaskBoardHead, { TaskBoardHeadProps } from './TaskBoardHead'
import CreateTaskBoardButton from './CreateTaskBoardButton'
import fetchApi from '@/utils/fetchApi'
import { EApi } from '@/enums'
import Loading from '../../common/Loading'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { ContentStatus, setCurrentTaskBoard, setTaskBoardsStatus } from '@/store/slices/taskBoardsSlice'
import { ETaskBoardStatus } from './StatusIndicator'
import { ITaskBoard } from '@/_server/models/Taskboard'

const testBoards = [
  {
    title : "Decode Team" ,
    status : ETaskBoardStatus.COMPLETED ,
    _id: "0" , 
  },
  {
    title : "sEFDAS Team" ,
    status : ETaskBoardStatus.COMPLETED ,
    _id: "3" , 
  },
  {
    title : "aLABAMA Team" ,
    status : ETaskBoardStatus.IN_WORK,
    _id: "2" , 
  },
  {
    title : "PROJECT 1" ,
    status : ETaskBoardStatus.EXPIRED ,
    _id: "4" , 
  },
  {
    title : "Sasha shop" ,
    status : ETaskBoardStatus.COMPLETED ,
    _id: "5" , 
  },
]

export default function TaskBoardList() {

  const [taskBoards , setTaskBoards] = useState<TaskBoardHeadProps[]>(testBoards) 
  const [isLoading , setIsLoading] = useState(true)
  
  const taskBoardsStatus = useAppSelector(state => state.taskBoards.taskBoardsStatus)
  const dispatch = useAppDispatch();


  useEffect(()=>{

    const getTaskBoards = async () => {
      const result : ITaskBoard[] = await fetchApi(EApi.TASKBOARDS , "GET" );

      if(result.length  > 0){
        if(result[0])
        dispatch(setCurrentTaskBoard(result[0]._id))
      }

      setTaskBoards(result)
      
    }
    
    getTaskBoards();
    
    setIsLoading(false)
    dispatch(setTaskBoardsStatus(ContentStatus.ACTUAL))
  } ,[taskBoardsStatus]);

  return (
    <nav>
      {isLoading? 
        <Loading/> 
        : 
        <ul className='flex gap-1 overflow-x-scroll overflow-y-hidden sm:overflow-clip'>
          {taskBoards.map((item , index) => <TaskBoardHead     
                                                           _id={item._id}  
                                                           title={item.title} 
                                                           status={item.status} 
                                                           key={index}

                                                            />)}
          <CreateTaskBoardButton/>
        </ul>  
      }
    </nav>   
  )
}
