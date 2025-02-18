import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jihye's blog",
  description: "Jihye's journey to be an awesome developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto flex min-h-svh w-full max-w-screen-2xl flex-col p-8 antialiased`}
      >
        <Header />
        <main className="flex grow flex-col gap-y-8 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
