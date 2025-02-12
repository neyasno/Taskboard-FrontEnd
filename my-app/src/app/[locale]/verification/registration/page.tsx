'use client'

import Button from "@/app/_components/common/Button";
import TextInput from "@/app/_components/common/TextInput";
import { useState } from "react"

export default function Page() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const changeEmail = (value: string) => setEmail(value);
  const changePassword = (value: string) => setPassword(value);
  const changePasswordAgain = (value: string) => setPasswordAgain(value);
  
  const sendForm = () => {
    console.log(`Send form: ${email}, ${password}, ${passwordAgain}`);
    
  };

  return (
    <div className='w-full flex items-center justify-center flex-col mt-10'>
      
      <h1 className="text-5xl mb-5">Registration</h1>
      
      <div className='flex-col justify-items-center w-10/12 max-w-md'>

        <div className="my-3 w-full p-0">
          <TextInput
              placeholder="email"
              value={email}
              handleChange={changeEmail}/>
        </div>
          
        <div className="my-3 w-full p-0">
          <TextInput 
              isPassword
              placeholder="password" 
              value={password} 
              handleChange={changePassword}/>
        </div>

        <div className="my-3 w-full p-0">
          <TextInput 
              isPassword
              placeholder="password again" 
              value={passwordAgain} 
              handleChange={changePasswordAgain}/>
        </div>
        
        <div className="w-28
                        my-3
                        p-0
        ">
          <Button text="Login" handleClick={sendForm}/>
        </div>
      </div>
    </div>
  )
}
