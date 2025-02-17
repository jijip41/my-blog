import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jihye&apos;s blog",
  description: "Jihye&apos;s journey to be an awesome developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen p-8`}
      >
        <header className="flex justify-between">
          <h1 className="font-bold text-lg">
            <Link href="/">Jihye&apos;s Blog</Link>
          </h1>
          <nav>
            <ul className="flex justify-evenly space-x-2 font-semibold">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="text-center mt-auto">&copy; 2025 Jihye Pak</footer>
      </body>
    </html>
  );
}
