'use client'

import Button from "@/app/_components/common/Button";
import TextInput from "@/app/_components/common/TextInput";
import { ERoutes } from "@/enums";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react"

export default function Page() {

  const t = useTranslations('verification.registration');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  
  const sendForm = (e : React.MouseEvent<HTMLElement , MouseEvent>) => {
    e.preventDefault()
    console.log(`Send form: ${email}, ${password}, ${passwordAgain}`);
    
  };

  return (
    <div className='w-full flex items-center justify-center flex-col mt-10'>
      
      <div className=' flex flex-col gap-3 items-center justify-items-center w-10/12 max-w-md'>

        <h1 className="text-3xl">{t("registration")}</h1>

        <TextInput
            placeholder={t("email")}
            value={email}
            handleChange={setEmail}/>
        
        <TextInput 
            isPassword
            placeholder={t("password")}
            value={password} 
            handleChange={setPassword}/>

        <TextInput 
            isPassword
            placeholder={t("confirm")}
            value={passwordAgain} 
            handleChange={setPasswordAgain}/>
      
        <div className="w-28">
          <Button text={t("create")} handleClick={sendForm}/>
        </div>

        <div className="flex gap-1">
          <p>{t('have_account')}</p>
          <Link href={ERoutes.LOGIN}>
            <p className="hover:underline text-link">{t('sing_in')}</p>
          </Link>
        </div>

      </div>
    </div>
  )
}
