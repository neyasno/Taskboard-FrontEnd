'use client'

import { ModalType } from '@/store/slices/modalSlice';
import { useAppSelector } from '@/store/store'
import React from 'react'
import BaseModalLayout from './BaseModalLayout';
import NewTaskboardForm from './NewTaskboardForm';
import NewTaskForm from './NewTaskForm';
import NewCategoryForm from './NewCategoryForm';

export default function Modal() {
    const state = useAppSelector(state => state.modal)
    
    switch (state.type) {
      case ModalType.None:
        return <></>;
      
      case ModalType.NewTaskboard:
        return <BaseModalLayout>
                <NewTaskboardForm />
              </BaseModalLayout>;

      case ModalType.NewTask:
        return <BaseModalLayout>
                <NewTaskForm />
              </BaseModalLayout>;

      case ModalType.NewCategory:
        return <BaseModalLayout>
                <NewCategoryForm />
              </BaseModalLayout>;

      default:
        throw new Error("NO SUCH MODAL TYPE EXISTS. HOW YOU DID IT?");
    }
}
