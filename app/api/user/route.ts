
import { MailTemplate } from "@/components/mail-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
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
const resend = new Resend(process.env.RESEND_API_KEY);

export  async function POST(req:NextRequest, res:any){
  try {
    const { fromAddress, toAddress } =await req.json()
    // const body = await req.json()
    console.log(fromAddress);
    
    const data = await resend.emails.send({
        from: fromAddress,
        to: toAddress,
        text:"Hello there!",
        subject: "🎉New Email Request!",
        react: MailTemplate({firstName:"mahend"})
    });
    console.log(data);
    
    return Response.json({
        msg: "success"
    })
    // res.status(200).json(data);
  } catch (error) {
    console.log(error);
    
    return Response.json({
        error: error
    })
    // res.status(400).json(error);
  }
};
// export async function POST(req: NextRequest) {

//     const body = await req.json()
//     console.log(body);
//     await client.user.create({
//         data: {
//             userName: body.username,
//             password: body.password
//         }
//     })
//     return Response.json({

//         message: "You are signed Up"
//     })
// }

// export function PUT() {
//     return new Response.json({
//         email: "mahe@gam.com",
//         name: "mahe"
//     })
// }



