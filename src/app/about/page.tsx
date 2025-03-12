import React from "react";

import Hero from "@/components/Hero";
import SocialMedia from "@/components/SocialMedia";
import About from "@/components/About/About";

export default function aboutPage() {
  return (
    <section className="w-max-md mx-auto flex flex-col items-center gap-y-4">
      <Hero />
      <About />
      <SocialMedia />
    </section>
  );
}
