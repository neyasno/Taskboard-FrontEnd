import React, { ReactNode } from "react";



export default function Layout({children}: {children: ReactNode}) {

    return (<div className="w-1/2 bg-form">{children}</div>)
}