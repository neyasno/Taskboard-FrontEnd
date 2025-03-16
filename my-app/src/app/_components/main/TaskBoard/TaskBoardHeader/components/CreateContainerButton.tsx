import { ModalType, setModalType } from '@/store/slices/modalSlice'
import { useAppDispatch } from '@/store/store'
import React from 'react'

export default function CreateContainerButton({className}: {className?: string}) {

  const dispatch  = useAppDispatch()

  return (
    <button className={`bg-white hover:bg-white_d
                      dark:bg-black_l rounded-full text-center 
                        p-1.5 px-3 dark:hover:bg-black_ll
                        border-white border-2
                        ${className? className : ''}`}
            onClick={e=> { e.preventDefault(); dispatch(setModalType(ModalType.NewContainer))}}
    >New Category+</button>
  )
}
