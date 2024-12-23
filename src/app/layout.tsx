import type { Metadata } from "next";
// import { Inter, Montserrat, Geist } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import MantineRegistry from "@/contexts/MantineRegistry";
import AppProvider from "@/providers";
import ScrollProvider from "@/contexts/ScrollContext";

export const metadata: Metadata = {
  title: "Aiden Dang | Portfolio",
  description: "Aiden's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <MantineRegistry>
          <AppProvider>
            {children}
          </AppProvider>
        </MantineRegistry>
      </body>
    </html>
  );
}
