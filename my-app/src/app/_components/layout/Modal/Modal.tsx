'use client'

import { useAppSelector } from '@/store/store'
import React from 'react'

export default function Modal() {
    const isVisible = useAppSelector(state => state.modal.isVisible)
    console.log("Modal vis:" + isVisible)

  return (
    <div className={`w-screen h-screen bg-modal fixed ${!isVisible && "hidden"}`}>Modal</div>
  )
}
