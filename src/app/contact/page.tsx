"use client";

import Form from "next/form";
import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { sendEmail } from "@/lib/email";

export interface Form {
  name: string;
  from: string;
  message: string;
  subject: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<Form>({
    name: "",
    from: "",
    subject: "",
    message: "",
  });

  const [banner, setBanner] = useState<{
    message: "Success";
    state: "success";
  } | null>();
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      setBanner(null);
    }, 3000);

    const res = await sendEmail(form);
    console.log({ res });
  };
  return (
    <main className="flex flex-col gap-y-8 p-4 items-center">
      <section>
        <h2 className="text-lg font-semibold text-gray-500">Email 💌</h2>
        <form
          onSubmit={onSubmit}
          className="bg-rose-100 p-4 rounded-md text-blue-950"
        >
          <div className="mb-4 flex flex-col gap-y-4 w-[50svw]">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="form-name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                autoComplete="name"
                maxLength={50}
                className="text-black flex-1"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="from">
                Email
              </label>
              <input
                id="from"
                name="from"
                value={form.from}
                required
                autoComplete="email"
                maxLength={80}
                type="email"
                className="text-black flex-1"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="subject">
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                value={form.subject}
                required
                className="text-black flex-1"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                required
                rows={5}
                className="text-black flex-1"
                onChange={onChange}
              />
            </div>
          </div>
          <button
            className="rounded bg-rose-500 text-white font-semibold p-2 block m-auto hover:bg-rose-600"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>
      <section>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="https://github.com/jijip41" target="_blank">
              <Image
                src="/svgs/github.svg"
                width={25}
                height={25}
                alt="github logo"
                className="hover:bg-gray-50 rounded-full"
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jihyepak" target="_blank">
              <Image
                src="/svgs/linkedin.svg"
                width={25}
                height={25}
                alt="linkedin logo"
                className="hover:bg-gray-50 rounded-full"
              />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/jihye_pak" target="_blank">
              <Image
                src="/svgs/x.svg"
                width={25}
                height={25}
                alt="x logo"
                className="hover:bg-gray-50 rounded-full"
              />
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
