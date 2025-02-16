import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password : string;
  avatarUrl : string;
  boardsIds : string[];
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatarUrl : {type : String , required : false},
    boardsIds : [{ type: mongoose.Schema.Types.ObjectId, ref: "TaskBoard" }]
  }
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
