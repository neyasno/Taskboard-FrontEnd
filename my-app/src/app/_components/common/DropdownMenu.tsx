import { ReactNode } from "react";

type DropdownProps = {
    enabled?: boolean
    children: ReactNode
    className?: string
};

export default function DropdownMenu({children, enabled, className}: DropdownProps) {

    return (
        <>
            {enabled && (
                <div className={`absolute ${className}`}>
                    <div className="mt-2 bg-slate-700 border rounded-md">
                        {children}
                    </div>
                </div> 
            )}
        </>        
    );
}