import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Serif } from "next/font/google";
import React from 'react';
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children}
    </main>
  );
}
