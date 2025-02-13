import nodemailer from "nodemailer";
import { getEnvironmentVariable } from "../utils/configUtils";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: getEnvironmentVariable("ADMIN_EMAIL"),
    pass: getEnvironmentVariable("ADMIN_EMAIL_PASSWORD"),
  },
});

export async function sendEmail(
  from: string,
  to: string,
  subject: string,
  text: string
) {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
    });
    if (info) {
      console.log("message sent: %s", info.messageId);
    }
  } catch (error) {
    console.error("error sending email: %s", error);
  }
}
