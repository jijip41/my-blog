"use client";

import { sendEmail } from "@/service/contact";
import React, { ChangeEvent, FormEvent, useState } from "react";

export interface Form {
  name: string;
  from: string;
  message: string;
  subject: string;
}

const initialFormData = {
  name: "",
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(initialFormData);
  const [banner, setBanner] = useState<{
    message: string;
    state: number;
  } | null>();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendEmail(form)
      .then(({ message, status }) => {
        setBanner({ message, state: status });
        setForm(initialFormData);
      })
      .catch(({ message, status }) => {
        setBanner({ message, state: status });
      })
      .finally(() =>
        setTimeout(() => {
          setBanner(null);
        }, 3000)
      );
  };

  return (
    <>
      {banner && (
        <p className="fixed top-0 m-auto rounded-md bg-yellow-200 p-2">
          {banner.message}
        </p>
      )}
      <section>
        <h2 className="text-lg font-semibold text-gray-500">Email 💌</h2>
        <form
          onSubmit={onSubmit}
          className="rounded-md bg-rose-100 p-4 text-blue-950"
        >
          <div className="mb-4 flex w-[50svw] flex-col gap-y-4">
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                autoComplete="name"
                maxLength={50}
                className="flex-1 text-black"
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
                className="flex-1 text-black"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                required
                maxLength={80}
                className="flex-1 text-black"
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
                className="flex-1 text-black"
                onChange={onChange}
              />
            </div>
          </div>
          <button
            className="m-auto block rounded bg-rose-500 p-2 font-semibold text-white hover:bg-rose-600"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
