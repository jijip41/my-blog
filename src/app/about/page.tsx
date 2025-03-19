import React from "react";

import Hero from "@/components/Hero";
import SocialMedia from "@/components/SocialMedia";
import About from "@/components/About/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Jihye's skills and experience",
};

export default function aboutPage() {
  return (
    <section className="w-max-md mx-auto flex flex-col items-center gap-y-8">
      <Hero />
      <About />
      <SocialMedia />
    </section>
  );
}
