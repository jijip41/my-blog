import { EmailData } from "./email";

export async function sendEmail(email: EmailData) {
  const response = await fetch("contact/api", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}
