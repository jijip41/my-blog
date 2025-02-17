import { getEnvironmentVariable } from "@/lib/configUtils";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Form } from "../page";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: getEnvironmentVariable("ADMIN_EMAIL"),
    pass: getEnvironmentVariable("ADMIN_EMAIL_PASSWORD"),
  },
});

export async function POST(request: NextRequest) {
  const res: Form = await request.json();
  const { from, message, name, subject } = res;
  try {
    await transporter.sendMail({
      from,
      to: getEnvironmentVariable("ADMIN_EMAIL"),
      replyTo: from,
      subject: `[Blog]: ${subject}`,
      html: `
          <p>From: ${name}</p>
          <p>Email address: ${from}</p>
          <p>Message: ${message}</p>
          `,
    });
    return NextResponse.json({ message: "💌 Email sent successfully " });
  } catch (error) {
    console.error("❗️ Failed to send email. Please try again later.", error);
    throw error;
  }
}
