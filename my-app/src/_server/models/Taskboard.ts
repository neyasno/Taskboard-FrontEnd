import mongoose, { Schema, Document } from "mongoose";

enum ETaskBoardStatus{
    EXPIRED ,
    IN_WORK ,
    COMPLETED , 
}

export interface ITaskBoard extends Document {
  title: string ;
  status : ETaskBoardStatus , 
  users : string[] ,
  admins : string[] , 
  taskContainers : string[] ;
}

const TaskBoardSchema: Schema = new Schema(
  {
    title : {type : String , required : true } ,
    status : {type : String } ,
    users : [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    admins : [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    taskContainers :[{ type: mongoose.Schema.Types.ObjectId, ref: "TaskContainer" }]

  }
);

export const TaskBoard = mongoose.models.TaskBoard || mongoose.model<ITaskBoard>("TaskBoard", TaskBoardSchema);
