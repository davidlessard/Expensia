export const dynamic = 'force-dynamic'; // This layout is dynamic and should not be cached by Next.js

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import React from 'react';

const inter= Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], variable: "--font-ibm-plex-serif", weight: ["400", "700"]});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expensia",
  description: "Expensia is a simple app to track your expenses and income automatically.",
  icons :{
    icon: '/icons/expensia-logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'${inter.variable} ${ibmPlexSerif.variable} ${geistSans.variable} ${geistMono.variable}'}
      >
        {children}
      </body>
    </html>
  );
}

