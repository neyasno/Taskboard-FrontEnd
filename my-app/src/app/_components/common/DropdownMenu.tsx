import { ReactNode } from "react";

type DropdownProps = {
    enabled?: boolean
    children: ReactNode
};

export default function DropdownMenu({children, enabled}: DropdownProps) {

    return (
        <>
            {enabled && (
                <div className="absolute right-0">
                    <div className="mt-2 bg-slate-700 border rounded-md shadow-lg">
                        {children}
                    </div>
                </div> 
            )}
        </>        
    );
}