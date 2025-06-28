import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import React from 'react';


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" 
});
const ibmPlexSerif = IBM_Plex_Serif({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-ibm-plex-serif"
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "Budget tracker is a modern banking platform that helps you manage your finances automatically.",
  icons: {
    icon: "/icons/logo.svg",
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
        className={'${inter.variable} ${ibmPlexSerif.variable}'}>{children}</body>
    </html>
  );
}
