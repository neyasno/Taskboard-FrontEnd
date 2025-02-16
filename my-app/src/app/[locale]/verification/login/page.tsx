'use client'

import Button from "@/app/_components/common/Button";
import TextInput from "@/app/_components/common/TextInput";
import { ERoutes } from "@/enums";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react"

export default function Page() {

  const t = useTranslations('verification.login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendForm = (e : React.MouseEvent<HTMLElement , MouseEvent>) => {
    e.preventDefault();
    console.log(`Send form: ${email}, ${password}`);

  };

  return (
    <div className='w-full flex items-center justify-center flex-col mt-10'>

      <div className='flex flex-col justify-items-center w-10/12 max-w-md gap-4 items-center'>

        <h1 className="text-3xl">{t("login")}</h1>

        <div className="w-full p-0">
          <TextInput
            placeholder={t("email")}
            value={email}
            handleChange={setEmail} />
        </div>

        <div className="w-full p-0">
          <TextInput
            isPassword
            placeholder={t("password")}
            value={password}
            handleChange={setPassword} />
        </div>

        <div className="w-28 p-0">
          <Button text={t("sing_in")} handleClick={sendForm} />
        </div>

        <div className="flex gap-1">
          <p>{t('no_account')}</p>
          <Link href={ERoutes.REGISTRATION}>
            <p className="hover:underline text-link">{t('create')}</p>
          </Link>
        </div>
      </div>

    </div>
  )
}
