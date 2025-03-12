import React from "react";
import Skillset from "./Skillset";
import Experience from "./Experience";

export default function About() {
  return (
    <section className="flex flex-col gap-y-4">
      <Skillset />
      <Experience />
    </section>
  );
}
