import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-moan-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntelliPrep",
  description: "An AI-powered platform to prepare yourself for Interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
