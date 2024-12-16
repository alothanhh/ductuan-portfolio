import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import styles from "./styles.module.css"
import Header from "@/components/Header";
import MantineRegistry from "@/contexts/MantineRegistry";
import { useButtonStore } from '../contexts/ActiveButtonStore';
import ScrollContextProvider from "@/contexts/ScrollContext";
import { useContext } from "react";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aiden's Portfolio",
  description: "Aiden's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineRegistry>
          <ScrollContextProvider>
            <Header />
            {children}
          </ScrollContextProvider >
        </MantineRegistry>
      </body>
    </html>
  );
}
