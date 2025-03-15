import dbConnect from "@/_server/dbConnect";
import { ITask, Task } from "@/_server/models/Task";
import { ITaskBoard, TaskBoard } from "@/_server/models/Taskboard";
import { ITaskContainer, TaskContainer } from "@/_server/models/TaskContainer";
import { IUser, User } from "@/_server/models/User";
import { isAuthenticated } from "@/utils/jwt";
import { NextResponse } from "next/server";

async function validateAccess(board_id: string, container_id: string, task_id: string, req: Request) {
    await dbConnect();
  
    const userEmail = await isAuthenticated(req);
    if (!userEmail) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user : IUser | null = await User.findOne({email : userEmail})
    if(!user) return;

    const taskBoard : ITaskBoard | null = await TaskBoard.findById(board_id)
    if(!taskBoard) return;

    if ( !taskBoard.users.includes(user.id)){
        return NextResponse.json({ error: `User Access Error` }, { status: 403 });
    }

    const taskContainer : ITaskContainer | null = await TaskContainer.findById(container_id)
    if(!taskContainer) return;

    if (!taskContainer.tasks.includes(task_id)) {
      return NextResponse.json({ error: `Task Access Error` }, { status: 403 });
    }
}

export async function GET(req: Request , {params} : { params : { board_id : string , container_id : string, task_id : string} }) {
    try {
      await dbConnect();
  
      const {board_id , container_id, task_id} = (await params);

      validateAccess(board_id, container_id, task_id, req);

      const task : ITask | null = await Task.findById(task_id);
      if(!task) return;
    
      return NextResponse.json(task, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error: `Get Task Error: ${error}` }, { status: 500 });
    }
}


export async function PUT(req: Request , {params} : { params : { board_id : string , container_id : string, task_id : string} }) {
  try {
    await dbConnect();

    const {board_id , container_id, task_id} = (await params);
    const body = await req.json();
    
    validateAccess(board_id, container_id, task_id, req);

    const updatedTask : ITask | null = body;
    
    if(!updatedTask) return;

    await Task.findByIdAndUpdate(
        task_id, 
        { $set: updatedTask },
        { new: true },
    );

    return NextResponse.json("ok", { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: `PUT Task Error: ${error}` }, { status: 500 });
  }
}


export async function DELETE(req: Request , {params} : { params : { board_id : string , container_id : string, task_id : string} }) {
    try {
      const {board_id , container_id, task_id} = (await params);

      validateAccess(board_id, container_id, task_id, req);
     
      const deleted = await Task.findByIdAndDelete(task_id);
  
      if(!deleted) return;

      return NextResponse.json("ok", { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error: `DELETE Task Error: ${error}` }, { status: 500 });
    }
}

