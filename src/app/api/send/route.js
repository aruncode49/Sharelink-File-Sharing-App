import { NextResponse } from "next/server";
import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const emailData = await req.json();
    const data = await resend.emails.send({
      from: "sharelink@resend.dev",
      to: ["aruncode49@gmail.com"],
      subject: "Hello",
      react: EmailTemplate({ emailData }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
