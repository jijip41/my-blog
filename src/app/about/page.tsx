import Image from "next/image";
import React from "react";
import { getEnvironmentVariable } from "../utils/configUtils";
import Link from "next/link";

export default function aboutPage() {
  return (
    <main className="flex flex-col gap-y-8 p-4 items-center">
      <section className="flex items-center gap-x-8">
        <div className="flex flex-col gap-y-4 p-4">
          <Image
            src={`${getEnvironmentVariable("PROFILE_PHOTO_URL")}`}
            width={150}
            height={150}
            alt="profile photo"
            className="rounded-full"
          />
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
        </div>
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
