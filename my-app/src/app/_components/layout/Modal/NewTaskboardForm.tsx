import { useState } from "react";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";
import { EApi } from "@/enums";
import fetchApi from "@/utils/fetchApi";
import { useAppDispatch } from "@/store/store";
import { ModalType, setModalType } from "@/store/slices/modalSlice";
import { useTranslations } from "next-intl";


export default function NewTaskboardForm({}) {

    const t = useTranslations('components.main.taskboard.forms');

    const dispatcher = useAppDispatch();

    const [title, setTitle] = useState('');
    const [users, setUsers] = useState<{id: number, email: string}[]>([]);
    
    const addUser = () => {
        setUsers(prev => {
            const lastId = prev.length > 0 ? (prev[prev.length - 1].id + 1) : 0;
            return [...prev, {id: lastId, email: ""}];
        });
    };

    const changeUser = (id: number, email: string) =>{
        setUsers(prev => 
            prev.map(user => 
                user.id === id ? { ...user, email } : user
            )
        );
    };

    const removeUser = (id: number) => {
        setUsers(prev =>
            [...prev].filter(x=>x.id!=id)
        );
    };

    const createHandler = async () => {
        try{
            await fetchApi(EApi.TASKBOARDS, "POST", {
                title: title,
                users: users
            });

        } catch(e){
            console.log(e);  
        } finally{
            dispatcher(setModalType(ModalType.None));
        }
    };

    return <>
        <div>
            <TextInput placeholder={t("title")} value={title} handleChange={setTitle}/>

            <div className='ps-5 py-2'>
                {users.map((user) => <div key={user.id} className="flex items-center">
                    <span className="w-full">
                        <TextInput key={user.id} value={user.email} placeholder={t("email")} handleChange={(text)=>changeUser(user.id, text)}/>
                    </span>

                    <button className="w-10 h-10 border-2 border-solid rounded-full" onClick={()=>removeUser(user.id)}>-</button>
                </div>)}

                <div className="flex items-center">
                    
                    <span className="w-full shadow-inner [box-shadow:inset_0_-25px_15px_rgba(0,0,0,0.4);]">
                        <TextInput value="" placeholder={t("add_user")} handleChange={()=>{}} readonly/>
                    </span>
                    <button className="w-10 h-10 border-2 border-solid rounded-full" onClick={addUser}>+</button>

                </div>
            </div>
            
            <div className="mt-5">
                <Button text={t("create_taskboard")} handleClick={createHandler}/>
            </div>
        </div>
    </>;
}