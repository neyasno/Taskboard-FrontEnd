import { createSlice } from "@reduxjs/toolkit";

type TaskBoardsSlice = {
    currentTaskBoardId : string 

}

const initialState : TaskBoardsSlice  = {
    currentTaskBoardId : "0"
}

const taskBoardsSlice = createSlice({
    name: "taskBoards" , 
    initialState : initialState ,
    reducers : {
        setCurrentTaskBoard : (state , action) =>{
            state.currentTaskBoardId = action.payload
        }
    }
})

export const { setCurrentTaskBoard } = taskBoardsSlice.actions;
export default taskBoardsSlice.reducer;