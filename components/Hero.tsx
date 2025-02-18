import Image from "next/image";
import React from "react";
import { getEnvironmentVariable } from "@/lib/configUtils";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-center gap-y-4">
        <Image
          src={`${getEnvironmentVariable("PROFILE_PHOTO_URL")}`}
          width={150}
          height={150}
          alt="profile photo"
          className="rounded-full"
        />
        <div className="flex flex-col items-center">
          <p className="mb-2 font-semibold">{"Hi 👋 I'm Jihye."}</p>
          <p>{"I'm a software engineer who loves to build things."}</p>
          <p>
            {
              "I'm passionate about learning new technologies and sharing my knowledge with others."
            }
          </p>
          <p>I hope I can share my journey with you through this blog.</p>
        </div>
      </section>
    </>
  );
}
