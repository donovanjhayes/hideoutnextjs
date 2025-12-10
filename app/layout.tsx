import React from 'react';
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/next"
// import { SpeedInsights } from "@vercel/speed-insights/next"

// const inter = Inter({ subsets: ["latin"] });

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
    <body>{children}</body>
      {/*<body className={inter.className}>{children}</body>*/}
      {/* <Analytics/>
      <SpeedInsights/> */}
            <GoogleTagManager gtmId="G-B6CZTMZ81K"/>
    </html>
  );
}
