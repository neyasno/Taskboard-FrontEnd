import { ReactNode } from "react";

type DropdownProps = {
    enabled?: boolean
    children: ReactNode
    className?: string
};

export default function DropdownMenu({children, enabled, className}: DropdownProps) {
    return (
        <>
            {enabled && enabled === true &&
                <div className="absolute right-0 z-10 
                                me-1 mt-2
                                border-solid border-white border-2
                                ">
                    <div className={className}>
                        {children}
                    </div>
                </div> 
            }

        </>        
    );
}