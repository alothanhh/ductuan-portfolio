import type { Metadata } from "next";
// import { Inter, Montserrat, Geist } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import styles from "./styles.module.css"
import Header from "@/components/Header";
import MantineRegistry from "@/contexts/MantineRegistry";
import { useButtonStore } from '../contexts/ActiveButtonStore';
import ScrollContextProvider from "@/contexts/ScrollContext";
import { useContext } from "react";

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
          <ScrollContextProvider>
            {children}
          </ScrollContextProvider >
        </MantineRegistry>
      </body>
    </html>
  );
}
