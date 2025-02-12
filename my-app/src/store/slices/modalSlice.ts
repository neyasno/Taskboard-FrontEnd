import { createSlice } from "@reduxjs/toolkit";

type ModalSlice = {
    isVisible : boolean 

}

const initialState : ModalSlice  = {
    isVisible : false
}

const modalSlice = createSlice({
    name: "modal" , 
    initialState : initialState ,
    reducers : {
        hideModal : (state)=>{
            state.isVisible = false;
        },
        showModal : (state)=>{
            state.isVisible = true;
        }
    }
})

export const { hideModal , showModal} = modalSlice.actions;
export default modalSlice.reducer;