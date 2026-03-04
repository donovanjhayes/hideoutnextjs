import React from 'react';
import type { Metadata } from "next";
import "./globals.css";


import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: "Hideout Vacations",
  description: "Book your next Poconos Getaway",
};

// # Help on 3rd parties: https://nextjs.org/docs/pages/api-reference/components/head 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`font-sans bg-stone-50 text-stone-900`}>{children}</body>

      {/*<body className={inter.className}>{children}</body>*/}
      {/* <Analytics/>
      <SpeedInsights/> */}
            <GoogleTagManager gtmId="G-B6CZTMZ81K"/>
    </html>
  );
}
