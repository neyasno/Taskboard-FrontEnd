import { ModalType, setModalType } from "@/store/slices/modalSlice";
import { useAppDispatch } from "@/store/store";
import fetchApi from "@/utils/fetchApi";
import { useTranslations } from "next-intl";
import { useState } from "react";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";
import { EApi } from "@/enums";

export default function NewTaskForm({}) {
    const t = useTranslations('components.main.taskboard.forms.new_task');

    const dispatcher = useAppDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');
   
    const createHandler = async () => {
        try{
            await fetchApi(EApi.TASK, "POST", {
                title: title,
                description: description,
                priority: priority
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
            <TextInput placeholder={t("description")} value={description} handleChange={setDescription}/>
            <TextInput placeholder={t("priority")} value={priority} handleChange={setPriority}/>
            
            <div className="mt-5">
                <Button text={t("create_task")} handleClick={createHandler}/>
            </div>
        </div>
    </>;
}