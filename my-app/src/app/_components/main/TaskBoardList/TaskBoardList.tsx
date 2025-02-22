'use client'

import React, { useEffect, useState } from 'react'
import TaskBoardHead, { TaskBoardHeadProps } from './TaskBoardHead'
import CreateTaskBoardButton from './CreateTaskBoardButton'
import fetchApi from '@/utils/fetchApi'
import { EApi } from '@/enums'
import Loading from '../../common/Loading'
import { useAppDispatch } from '@/store/store'
import { setCurrentTaskBoard } from '@/store/slices/taskBoardsSlice'
import { ETaskBoardStatus } from './StatusIndicator'

const testBoards = [
  {
    title : "Decode Team" ,
    status : ETaskBoardStatus.COMPLETED ,
    id: "0" , 
  },
  {
    title : "sEFDAS Team" ,
    status : ETaskBoardStatus.COMPLETED ,
    id: "3" , 
  },
  {
    title : "aLABAMA Team" ,
    status : ETaskBoardStatus.IN_WORK,
    id: "2" , 
  },
  {
    title : "PROJECT 1" ,
    status : ETaskBoardStatus.EXPIRED ,
    id: "4" , 
  },
  {
    title : "Sasha shop" ,
    status : ETaskBoardStatus.COMPLETED ,
    id: "5" , 
  },
]

export default function TaskBoardList() {

  const [taskBoards , setTaskBoards] = useState<TaskBoardHeadProps[]>(testBoards) 
  const [isLoading , setIsLoading] = useState(true)
  
  const dispatch = useAppDispatch();

  useEffect(()=>{

    const getTaskBoards = async () => {
      const result : [] = await fetchApi(EApi.TASKBOARDS , "GET" );
      console.log(result)
      if(result.length > 0 ){
        dispatch(setCurrentTaskBoard(result[0].id))
      }

      setTaskBoards(result)
      
    }
    
    getTaskBoards();
    
    setIsLoading(false)
  } ,[])

  return (
    <nav>
      {isLoading? 
        <Loading/> 
        : 
        <ul className='flex gap-1'>
          {taskBoards.map((item , index) => <TaskBoardHead     
                                                           id={item.id}  
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
