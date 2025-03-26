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
        <p className="fixed top-0 mx-auto mt-4 rounded-md bg-yellow-200 p-2 opacity-80">
          {banner.message}
        </p>
      )}
      <section className="flex flex-col gap-y-4 text-gray-700 ">
        <h2 className="text-lg font-semibold">Send Email</h2>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-y-2 overflow-hidden rounded-t-md border bg-orange-50 p-4 shadow-sm hover:shadow-md"
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
                className="rounded border pl-2 focus:border-gray-200 focus:outline focus:outline-gray-500 focus:invalid:border-rose-500 focus:invalid:outline-rose-500"
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
                className="rounded border pl-2 focus:border-gray-200 focus:outline focus:outline-gray-500 focus:invalid:border-rose-500 focus:invalid:outline-rose-500"
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
                className="rounded border pl-2 focus:border-gray-200 focus:outline focus:outline-gray-500 focus:invalid:border-rose-500 focus:invalid:outline-rose-500"
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
                className="rounded border pl-2 focus:border-gray-200 focus:outline focus:outline-gray-500 focus:invalid:border-rose-500 focus:invalid:outline-rose-500"
                onChange={onChange}
              />
            </div>
          </div>
          <button
            className="m-auto block rounded bg-rose-400 p-2 font-semibold text-white hover:bg-rose-500"
            type="submit"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
