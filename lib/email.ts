import { Form } from "@/src/app/contact/page";

export async function sendEmail(form: Form) {
  const data = await fetch("/contact/api", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data.status;
}
