import dbConnect from "@/_server/dbConnect";
import { IUser, User } from "@/_server/models/User";
import { ITaskBoard, TaskBoard } from "@/_server/models/Taskboard";
import { TaskContainer , ITaskContainer } from "@/_server/models/TaskContainer";
import { isAuthenticated } from "@/utils/jwt";
import { NextResponse } from "next/server";


export async function GET(req: Request , {params} : { params : { board_id : string} }) {
    try {
      await dbConnect();

      const taskBoardId = (await params).board_id;

      const userEmail = await isAuthenticated(req);
      if (!userEmail) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

      const user : IUser | null = await User.findOne({email : userEmail})
      const taskBoard : ITaskBoard | null = await TaskBoard.findById(taskBoardId)

      if(!user) return;
      if(!taskBoard) return;

      if ( !taskBoard.users.includes(user.id)){
        return NextResponse.json({ error: `User Access Error` }, { status: 403 });
      }

      const taskContainers : ITaskContainer[] = []

      for ( const taskContainerId of taskBoard.taskContainers!){
          const fechedContainer = await TaskContainer.findById(taskContainerId);
          if(fechedContainer){
            taskContainers.push(fechedContainer);
          }
      }
      
      return NextResponse.json(taskContainers, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
    }
}

export async function DELETE(req: Request , {params} : { params : { board_id : string} }) {
  try {
    await dbConnect();

    const taskBoardId = (await params).board_id;

    const userEmail = await isAuthenticated(req);
    if (!userEmail) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user : IUser | null = await User.findOne({email : userEmail})
    const taskBoard : ITaskBoard | null = await TaskBoard.findById(taskBoardId)

    if(!user) return;
    if(!taskBoard) return;

    if ( !taskBoard.users.includes(user.id)){
      return NextResponse.json({ error: `User Access Error` }, { status: 403 });
    }
    
    await TaskBoard.findByIdAndDelete(taskBoardId)

    return NextResponse.json("", { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
  }
}

export async function POST(req: Request , {params} : { params : { board_id : string} }) {
  try {
    await dbConnect();

    const taskBoardId = (await params).board_id;
    const body = await req.json();

    const userEmail = await isAuthenticated(req);
    if (!userEmail) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user : IUser | null = await User.findOne({email : userEmail})
    const taskBoard : ITaskBoard | null = await TaskBoard.findById(taskBoardId)

    if(!user) return;
    if(!taskBoard) return;

    if ( !taskBoard.users.includes(user.id)){
      return NextResponse.json({ error: `User Access Error` }, { status: 403 });
    }

    const newTaskContainer = await TaskContainer.create({title : body.title })
    taskBoard.taskContainers?.push(newTaskContainer._id)
    taskBoard.save()

    const taskContainers : ITaskContainer[] = []

    for ( const taskContainerId of taskBoard.taskContainers!){
        const fechedContainer = await TaskContainer.findById(taskContainerId);
        if(fechedContainer){
          taskContainers.push(fechedContainer);
        }
    }
    
    return NextResponse.json(taskContainers, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
  }
}

export async function PUT(req: Request , {params} : { params : { board_id : string} }) {
  try {
    await dbConnect();

    const taskBoardId = (await params).board_id;
    const body = await req.json();

    const userEmail = await isAuthenticated(req);
    if (!userEmail) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user : IUser | null = await User.findOne({email : userEmail})
    const taskBoard : ITaskBoard | null = await TaskBoard.findById(taskBoardId)

    if(!user) return;
    if(!taskBoard) return;

    if ( !taskBoard.users.includes(user.id)){
      return NextResponse.json({ error: `User Access Error` }, { status: 403 });
    }

    taskBoard.title = body.title;
    taskBoard.save()
    
    return NextResponse.json("ok", { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
  }
}