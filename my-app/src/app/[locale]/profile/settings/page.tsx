'use client'

import { useAppSelector } from "@/store/store";

export default function Page() {
    const userData = useAppSelector(selector=> selector.user);

    console.log(userData);
    

    return (<>
        <div>{userData.email || "NO EMAIL"}</div>
        <div>{userData.password || "NO PASSWORD"}</div>
        <div>{userData.isLogined && "LOGINED"}</div>
    </>);
}