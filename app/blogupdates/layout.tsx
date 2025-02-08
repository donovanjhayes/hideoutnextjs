import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from './components/nav'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poconos Updates",
  description: "by Donovan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-900 text-white max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          {/*<Footer />*/}
{/*          <Analytics />
          <SpeedInsights />*/}
        </main>
      </body>
    </html>
    // <html lang="en" className='bg-slate-900 text-white max-w-3xl mx-auto py-20 px-4'>
    //   <body>{children}</body>
    // </html>
  );
}
