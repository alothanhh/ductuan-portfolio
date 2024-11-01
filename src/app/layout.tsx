import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import styles from "./styles.module.css"
import Header from "@/components/Header";
import MantineRegistry from "@/contexts/MantineRegistry";
import { useButtonStore } from '../contexts/ActiveButtonStore';

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
          <Header />
          {children}
        </MantineRegistry>
      </body>
    </html>
  );
}
