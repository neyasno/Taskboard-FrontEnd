import { createSlice } from "@reduxjs/toolkit";

export enum ModalType {
    None,
    NewTaskboard,
    NewTask , 
    NewContainer
};

type ModalSlice = {
    type : ModalType
}

const initialState : ModalSlice  = {
    type : ModalType.None
}

const modalSlice = createSlice({
    name: "modal" , 
    initialState : initialState ,
    reducers : {
        setModalType: (state, action)=>{
            console.log(action.payload)
            state.type = action.payload
        }
    }
})

export const {setModalType: setModalType} = modalSlice.actions;
export default modalSlice.reducer;