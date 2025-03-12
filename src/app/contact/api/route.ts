import { email } from "@/service/email";

export async function POST(request: Request) {
  const body = await request.json();
  console.log({ body });
  return email(body)
    .then(() => {
      return new Response(
        JSON.stringify({ message: "💌 Email sent successfully ", status: 200 })
      );
    })
    .catch((error) => {
      console.error(error);
      return new Response(
        JSON.stringify({
          message: "❗️ Failed to send email. Please try again later.",
          status: 500,
        })
      );
    });
}
