import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
<<<<<<< HEAD
import { redirect } from "next/navigation";
=======
import { isTeacher } from "@/lib/teacher";
>>>>>>> bed8e42685e04bfc762b90005269364cff930fee

export async function POST(
    req: Request,
) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId || !isTeacher(userId) ) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
        data: {
            userId,
            title
        }
    })


    return NextResponse.json(course)
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
