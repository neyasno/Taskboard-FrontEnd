import mongoose, { Schema, Document } from "mongoose";

export interface ITaskContainer extends Document {
  title: string ;
  tasks : string[] ;
}

const TaskContainerSchema: Schema = new Schema(
  {
    title : {type : String , required : true } ,
    tasks :[{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
  }
);

export const TaskContainer = mongoose.models.TaskContainer || mongoose.model<ITaskContainer>("TaskContainer", TaskContainerSchema);
