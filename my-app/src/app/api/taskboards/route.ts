
import dbConnect from "@/_server/dbConnect";
import { User } from "@/_server/models/User";
import { generateToken, isAuthenticated } from "@/utils/jwt";

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
    console.log(user)
    const taskBoards = await user.taskBoards;
    
    return NextResponse.json(taskBoards, { status: 200 });
    
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
      const taskBoards = await user.taskBoards;
      console.log(taskBoards)
      
      return NextResponse.json(taskBoards, { status: 200 });
      
    } catch (error) {
      return NextResponse.json({ error: `Get taskboards Error: ${error}` }, { status: 500 });
    }
}
