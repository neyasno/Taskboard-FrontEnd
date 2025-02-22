import React from 'react'

export enum ETaskBoardStatus{
    EXPIRED = "EXPIRED" ,
    IN_WORK = "IN_WORK" ,
    COMPLETED = "COMPLETED" , 
}

export default function StatusIndicator( {status} : {status : ETaskBoardStatus}) {

    switch(status){
        case ETaskBoardStatus.COMPLETED : return <div className='size-2 rounded-full bg-blue-500'></div>
        case ETaskBoardStatus.IN_WORK : return <div className='size-2 rounded-full bg-green-500'></div>
        case ETaskBoardStatus.EXPIRED : return <div className='size-2 rounded-full bg-warn'></div>
    }
}
