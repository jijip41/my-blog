import Image from "next/image";
import React from "react";

import { getEnvironmentVariable } from "@/lib/configUtils";
import SocialMedia from "@/components/SocialMedia";

export default function aboutPage() {
  return (
    <main className="flex gap-x-4 p-12 items-start">
      <div className="flex flex-col gap-y-4 mr-auto">
        <Image
          src={`${getEnvironmentVariable("PROFILE_PHOTO_URL")}`}
          width={150}
          height={150}
          alt="profile photo"
          className="rounded-full"
        />
        <SocialMedia />
      </div>
      <section className="flex items-center gap-x-8">
        <div className="text-md font-semibold text-gray-500">
          <p>Hi 👋 </p>
          <p>I'm a software engineer who loves to build things.</p>
          <p>
            I'm passionate about learning new technologies and sharing my
            knowledge with others.
          </p>
          <p>I hope I can share my journey with you through this blog.</p>
        </div>
      </section>
      <section className="flex items-center gap-x-8"></section>
    </main>
  );
}
