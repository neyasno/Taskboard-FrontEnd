import { ModalType, setModalType } from '@/store/slices/modalSlice'
import { useAppDispatch } from '@/store/store'
import React from 'react'
import { useTranslations } from "next-intl";


export default function CreateContainerButton({className}: {className?: string}) {

  const dispatch  = useAppDispatch()
  const t = useTranslations("components.main.taskboard.buttons")

  return (
    <button className={`bg-white hover:bg-white_d
                      dark:bg-black_l rounded-full text-center 
                        p-1.5 px-3 dark:hover:bg-black_ll
                        border-white border-2
                        ${className? className : ''}`}
            onClick={e=> { e.preventDefault(); dispatch(setModalType(ModalType.NewContainer))}}
    >{t('create_new_category')}</button>
  )
}
