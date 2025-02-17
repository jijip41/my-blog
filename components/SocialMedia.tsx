import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SocialMedia() {
  return (
    <ul className="flex justify-center space-x-4">
      <li>
        <Link href="https://github.com/jijip41" target="_blank">
          <Image
            src="/svgs/github.svg"
            width={30}
            height={30}
            alt="github logo"
            className="bg-gray-400 hover:bg-rose-300 rounded-md p-1"
          />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/jihyepak" target="_blank">
          <Image
            src="/svgs/linkedin.svg"
            width={30}
            height={30}
            alt="linkedin logo"
            className="bg-gray-400 hover:bg-rose-300 rounded-md p-1"
          />
        </Link>
      </li>
      <li>
        <Link href="https://x.com/jihye_pak" target="_blank">
          <Image
            src="/svgs/x.svg"
            width={30}
            height={30}
            alt="x logo"
            className="bg-gray-400 hover:bg-rose-300 rounded-md p-1"
          />
        </Link>
      </li>
    </ul>
  );
}
