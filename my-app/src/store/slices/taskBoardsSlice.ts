import { createSlice } from "@reduxjs/toolkit";

type TaskBoardsSlice = {
    currentTaskBoardId : string 
    currentContainerId : string
}

const initialState : TaskBoardsSlice  = {
    currentTaskBoardId : "0" ,
    currentContainerId : "0"
}

const taskBoardsSlice = createSlice({
    name: "taskBoards" , 
    initialState : initialState ,
    reducers : {
        setCurrentTaskBoard : (state , action) =>{
            state.currentTaskBoardId = action.payload
        },
        setCurrentContainer : (state , action) =>{
            state.currentContainerId = action.payload
        }
    }
})

export const { setCurrentTaskBoard , setCurrentContainer } = taskBoardsSlice.actions;
export default taskBoardsSlice.reducer;