import Image from "next/image";
import React from "react";

import { getEnvironmentVariable } from "@/lib/configUtils";
import SocialMedia from "@/components/SocialMedia";

export default function aboutPage() {
  return (
    <main className="flex flex-col items-center gap-x-8 p-12 md:flex-row">
      <section className="flex flex-none flex-col gap-y-4 p-2">
        <Image
          src={`${getEnvironmentVariable("PROFILE_PHOTO_URL")}`}
          width={150}
          height={150}
          alt="profile photo"
          className="rounded-full"
        />
        <SocialMedia />
      </section>
      <section className="text-md flex flex-col font-semibold text-gray-500">
        <p>{"Hi 👋 I'm Jihye."}</p>
        <p>{"I'm a software engineer who loves to build things."}</p>
        <p>
          {
            "I'm passionate about learning new technologies and sharing my knowledge with others."
          }
        </p>
        <p>I hope I can share my journey with you through this blog.</p>
      </section>
    </main>
  );
}
