import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Serif } from "next/font/google";
import React from 'react';
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: 'david', lastName: 'Test'};
  return (
    <main className='flex h-screen w-full font-inter'>
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="icons/logo.svg"
            width={30}
            height={30}
            alt = "menu icon"
            />
            <div>
              MOBILE NAV BAR
            </div>
          </div>
        </div>

        {children}
    </main>
  );
}
