import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string ;
  description : string; 
  isCompleted : string ;
  priority : number ;
}

const TaskSchema: Schema = new Schema(
  {
    title : {type : String , required : true } ,
    description : {type : String } ,
    isCompleted : {type : String } ,
    priority : {type : Number} , 
  }
);

export const Task = mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);
