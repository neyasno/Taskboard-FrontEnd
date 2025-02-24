import { ModalType, setModalType } from '@/store/slices/modalSlice'
import { useAppDispatch } from '@/store/store'
import React from 'react'

export default function CreateContainerButton() {

  const dispatch  = useAppDispatch()

  return (
    <button className='bg-black_l rounded-full text-center 
                        p-1.5 px-3 hover:bg-black_ll
                         border-white border-2'
            onClick={e=> { e.preventDefault(); dispatch(setModalType(ModalType.NewContainer))}}
    >New Category+</button>
  )
}
