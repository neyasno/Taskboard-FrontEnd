import { useState } from "react";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";
import { EApi } from "@/enums";
import fetchApi from "@/utils/fetchApi";
import { useAppDispatch } from "@/store/store";
import { ModalType, setModalType } from "@/store/slices/modalSlice";


export default function NewTaskboardForm({}) {

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

    const createHandler = () => {
        try{
            fetchApi(EApi.TASKBOARDS, "POST", {
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
<<<<<<< HEAD
        <div>
            <TextInput placeholder="Title" value={title} handleChange={setTitle}/>

            <div>
                {users.map((user) => <TextInput key={user.id} value={user.email} placeholder="email" handleChange={(text)=>changeUser(user.id, text)}/>)}
                <Button text="Add User" handleClick={addUser} />
            </div>

            <Button text="Create" handleClick={createHandler}/>
=======
        <div >
            TEST
>>>>>>> f783bb3dc9d387ef71b14c52f24bd5311edde7a2
        </div>
    </>;
}