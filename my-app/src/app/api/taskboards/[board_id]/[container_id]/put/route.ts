import dbConnect from "@/_server/dbConnect";
import { ITaskBoard, TaskBoard } from "@/_server/models/Taskboard";
import { ITaskContainer, TaskContainer } from "@/_server/models/TaskContainer";
import { IUser, User } from "@/_server/models/User";
import { isAuthenticated } from "@/utils/jwt";
import { NextResponse } from "next/server";

export async function PUT(req: Request , {params} : { params : { board_id : string , container_id : string} }) {
  try {
    await dbConnect();

    const {board_id , container_id} = (await params);
    const body = await req.json();

    const userEmail = await isAuthenticated(req);
    if (!userEmail) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user : IUser | null = await User.findOne({email : userEmail})
    if(!user) return;

    const taskBoard : ITaskBoard | null = await TaskBoard.findById(board_id)
    if(!taskBoard) return;

    const taskContainer : ITaskContainer | null = await TaskContainer.findById(container_id)
    if(!taskContainer) return;
    

    if ( !taskBoard.users.includes(user.id)){
      return NextResponse.json({ error: `User Access Error` }, { status: 403 });
    }
     
    if(body.title){
      taskContainer.title = body.title
    }

    const oldPosition = taskContainer.position;
    const newPosition = oldPosition + body.position;

    for ( const containerId of taskBoard.taskContainers!){
      const container : ITaskContainer | null = await TaskContainer.findById(containerId)
      
      if(container){
      
        if(container.position == oldPosition){
          container.position = newPosition
          container.save()
        }
        else if(container.position == newPosition){
          container.position = oldPosition
          container.save()
        }

      }
    }    
    
    return NextResponse.json("ok", { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
  }
}