import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import client from "@/db";
// const client = new PrismaClient();

interface User {
    email: string,
    username: string
}
export function GET() {
    return NextResponse.json({
        email: "mahe@gam.com",
        name: "mahe"
    })
}

export async function POST(req: NextRequest) {

    const body = await req.json()
    console.log(body);
    await client.user.create({
        data: {
            userName: body.username,
            password: body.password
        }
    })
    return Response.json({

        message: "You are signed Up"
    })
}

// export function PUT() {
//     return new Response.json({
//         email: "mahe@gam.com",
//         name: "mahe"
//     })
// }



