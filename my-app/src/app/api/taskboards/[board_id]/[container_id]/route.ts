import dbConnect from "@/_server/dbConnect";
import { IUser, User } from "@/_server/models/User";
import { ITaskBoard, TaskBoard } from "@/_server/models/Taskboard";
import { TaskContainer , ITaskContainer } from "@/_server/models/TaskContainer";
import { isAuthenticated } from "@/utils/jwt";
import { NextResponse } from "next/server";
import { ITask, Task } from "@/_server/models/Task";


export async function GET(req: Request , {params} : { params : { board_id : string , container_id : string} }) {
  try {
    await dbConnect();

    const {board_id , container_id} = (await params);

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

    const tasks : ITask[] = []

    for ( const taskId of taskContainer.tasks!){
        const fechedTask = await Task.findById(taskId);
        if(fechedTask){
          tasks.push(fechedTask);
        }
    }
    
    return NextResponse.json(tasks, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
  }
}


export async function POST(req: Request , {params} : { params : { board_id : string , container_id : string} }) {
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
     
    const newTask = await Task.create({title : body.title , description : body.description , isCompleted : false , priority : 1})
    taskContainer.tasks.push(newTask._id)
    taskContainer.save()

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


export async function DELETE(req: Request , {params} : { params : { board_id : string , container_id : string} }) {
  try {
    await dbConnect();

    const {board_id , container_id} = (await params);

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

    const deletedCon = await TaskContainer.findByIdAndDelete(container_id)
    if (deletedCon){
      console.log("Delete con")
    }

    taskBoard.taskContainers = taskBoard.taskContainers?.filter(item => item != container_id)
    taskBoard.save()




    

    return NextResponse.json("OK", { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
  }
}

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

    const sourseId = body.sourse_id
    const taskId = body.task_id
     
    const task : ITask | null = await Task.findById(taskId)
    if(!task) return;

    taskContainer.tasks.push(task._id)
    await taskContainer.save()

    await TaskContainer.findByIdAndUpdate(
      sourseId,
      { $pull: { tasks: task._id } },
      { new: true }
    );
    console.log("COMPLETE PUT REQ")

    return NextResponse.json("ok", { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
  }
}