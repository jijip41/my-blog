import { getEnvironmentVariable } from "@/lib/configUtils";
import nodemailer from "nodemailer";

export interface EmailData {
  name: string;
  from: string;
  message: string;
  subject: string;
}

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: getEnvironmentVariable("ADMIN_EMAIL"),
    pass: getEnvironmentVariable("ADMIN_EMAIL_PASSWORD"),
  },
});

export async function email({ from, subject, message, name }: EmailData) {
  const emailData = {
    from,
    to: getEnvironmentVariable("ADMIN_EMAIL"),
    replyTo: from,
    subject: `[Blog]: ${subject}`,
    html: `
        <p>From: ${name}</p>
        <p>Email address: ${from}</p>
        <p>Message: ${message}</p>
        `,
  };

  return transporter.sendMail(emailData);
}
