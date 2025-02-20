import { ModalType, setModalType } from "@/store/slices/modalSlice";
import { useAppDispatch } from "@/store/store";
import { ReactNode } from "react";

export default function BaseModalLayout({children}: {children: ReactNode}) {
    const dispatcher = useAppDispatch();
    
    const closeModal = ()=>{dispatcher(setModalType(ModalType.None))};

    return (
        <div className={`z-50 w-screen h-screen bg-modal fixed`} onClick={closeModal}>
            <div className="min-w-5">
                <div className='bg-slate-500'>
                    <button onClick={closeModal}>X</button>
                </div>
                <div>
                    {children}
                </div>
            </div>
            
      </div>    

    );
}