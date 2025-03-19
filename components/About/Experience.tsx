import { experienceS } from "@/data/about/experienceS";
import { experienceV } from "@/data/about/experienceV";
import React from "react";
import ExperienceContent from "./ExperienceContent";

export default function Experience() {
  return (
    <section className="mx-auto flex max-w-lg flex-col gap-y-6">
      <h3 className="font-semibold">Experience</h3>
      <ExperienceContent
        data={experienceV}
        company="Software Engineer | Vorboss, London (Jan 2023 - Mar 2025)"
      />
      <ExperienceContent
        data={experienceS}
        company="Software Engineer | Spill, London (Sep 2021 - Dec 2022)"
      />
    </section>
  );
}
