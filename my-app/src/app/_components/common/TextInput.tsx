import React from 'react'

type TextInputProps = {
  handleChange: (value: string) => void
  value: string
  placeholder: string
  isPassword?: boolean
}

export default function TextInput({ value, placeholder, isPassword, handleChange }: TextInputProps) {
  return (
    <input 
      type={isPassword ? "password" : "text"}
      
      className='px-3 py-2 border-2 w-full bg-transparent
                      border-black dark:border-white'

      value={value} placeholder={placeholder}

      onChange={e => handleChange(e.target.value)} />
  )
}
