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

    }
})

export const {} = modalSlice.actions;
export default modalSlice.reducer;