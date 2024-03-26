import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export  async function POST(req:NextRequest, res:any){
  try {
    // const { name, email } = JSON.parse(req.body);

    // const data = await resend.sendEmail({
    //     from: `${process.env.FROM_EMAIL}`,
    //     to: `${process.env.TO_EMAIL}`,
    //     subject: "🎉New submission to your contact form!",
    //     html: "",
    //     react: EmailTemplate({ name, email })
    // });
    console.log(req)
    return Response.json({
        msg: "success"
    })
    // res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};