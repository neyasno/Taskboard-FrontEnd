
import dbConnect from "@/_server/dbConnect";
import { ETaskBoardStatus, TaskBoard } from "@/_server/models/Taskboard";
import { IUser, User } from "@/_server/models/User";
import { ITaskBoard } from "@/_server/models/Taskboard";

import { isAuthenticated } from "@/utils/jwt";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const userEmail = await isAuthenticated(req);
    if (!userEmail) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const user = await User.findOne({email : userEmail})

    const invitedUsers : IUser[] = [];

    for( const userEmail of body.users){
      const invitedUser : IUser | null = await User.findOne({email : userEmail});
        if(invitedUser){
          invitedUsers.push(invitedUser);
        }
    }

    const inviteIds : string[] = [] 
    invitedUsers.forEach( invited => inviteIds.push(invited._id))
    inviteIds.push(user.id)
    console.log(inviteIds)

    const newTaskBoard = {
      title : body.title , 
      status : ETaskBoardStatus.COMPLETED , 
      admins:[user.id] , 
      users: inviteIds
    }

    console.log(newTaskBoard)

    const createdTaskBoard = await TaskBoard.create(newTaskBoard)
    console.log(createdTaskBoard)

    user.taskBoards = [...user.taskBoards , createdTaskBoard._id ]
    user.save()

    for( const invited of invitedUsers){
      invited.taskBoards = [...invited.taskBoards , createdTaskBoard.id]
      invited.save()
    }
    
    return NextResponse.json(createdTaskBoard, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ error: `Create taskboard Error: ${error}` }, { status: 500 });
  }
}

export async function GET(req: Request) {
    try {
      await dbConnect();
      
      const userEmail = await isAuthenticated(req);
      if (!userEmail) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

      const user = await User.findOne({email : userEmail})
      console.log(user)
      const taskBoardsIds: string[] = await user.taskBoards;

      const taskBoards : ITaskBoard[] = [] 
      
      for (const id of taskBoardsIds) {
        const taskBoard = await TaskBoard.findById(id);
        if (taskBoard) {
          taskBoards.push(taskBoard);
        }
      }

      return NextResponse.json(taskBoards, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
    }
}
