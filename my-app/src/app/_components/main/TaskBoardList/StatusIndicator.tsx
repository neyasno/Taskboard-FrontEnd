import React from 'react'

export enum ETaskBoardStatus{
    COMPLETED ,
    WAITING , 
    EXPIRED , 
    WORKING
}

export default function StatusIndicator( {status} : {status : ETaskBoardStatus}) {

    switch(status){
        case ETaskBoardStatus.COMPLETED : return <div className='size-2 rounded-full bg-blue-500'></div>
        case ETaskBoardStatus.WORKING : return <div className='size-2 rounded-full bg-green-500'></div>
        case ETaskBoardStatus.EXPIRED : return <div className='size-2 rounded-full bg-warn'></div>
        case ETaskBoardStatus.WAITING : return <div className='size-2 rounded-full bg-yellow-400'></div>
    }
}
