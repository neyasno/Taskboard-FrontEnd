'use client'

import DropdownMenu from "@/app/_components/common/DropdownMenu";
import { useState } from "react";

type HistoryItemProps = {
    author: string
    changeTimestamp: string
    changes: string[]
};

export default function HistoryItem({author, changeTimestamp, changes}: HistoryItemProps) {

    const [selected, setSelected] = useState(false);

    return (
        <div 
            onMouseEnter={()=>setSelected(true)}
            onMouseLeave={()=>setSelected(false)}
        >
            <span>{author} {changeTimestamp}</span>
            <DropdownMenu enabled={selected} className="left-full -mt-8 px-2 w-max max-w-72 text-center">
                {changes.map((x,i)=><div key={i} className={`${i%2===0 ? 'bg-slate-800' : 'bg-slate-700'} px-2 py-1`}>{x}</div>)}
            </DropdownMenu>
        </div>
    );
};