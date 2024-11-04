
'use client'
import React from 'react';
import Image from "next/image";
// import Carousel from '@/components/carousel'
// import Script from 'next/script';
// import BookingTool from '@/components/BookingTool'
// import asyncBook from '@/components/BookingTool'
import { useEffect } from 'react';
// import Head from 'next/head';



const Home = () => {

  useEffect(() => {
    // Load the script for the BookingToolIframe
    const script = document.createElement('script');
    script.src = 'https://login.smoobu.com/js/Settings/BookingToolIframe.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);


    script.onload = () => {
      // Initialize the BookingToolIframe after the script loads
      if (window.BookingToolIframe) {
        window.BookingToolIframe.initialize({
          url: 'https://login.smoobu.com/en/booking-tool/iframe/335356',
          baseUrl: 'https://login.smoobu.com',
          target: '#apartmentIframeAll',
        });
      }
    };

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
{/*        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hideout Vacation Rentals&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>*/}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
       {/*   <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >*/}
            Hideout <br/>
            {" "}Vacation <br/>
            Rentals{" "}
            <Image
              src="/hideoutvacation.svg"
              alt="Hideout Vacation Logo"
              className="dark:invert place-items-center"
              width={100}
              height={24}
              priority
            />
            {/*Need to make a link back to home*/}
{/*            <div>
            <a
              href="/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Home{" "}
              </h2>
            </a>
            </div>*/}


        </div>
      </div>
      <br />
      <div>
        <div className="flex flex-col items-center">
                <iframe height = "300px"
                  src="https://login.smoobu.com/en/cockpit/widget/show-calendar-iframe/1033732/c22875e49828e2655f7ba23da50b88125546858782c62311d23cc76f6c464810"
                  loading="lazy"
                ></iframe>
        </div>
        <h2 className="text-xl font-mono justify-center center">
        <br/>
        Select your dates below. <br/>The rates shown includes all taxes and fees.
        </h2>
        <br/>
        <div className ="flex-col items-center">
          <div id="apartmentIframeAll"></div>
        
      </div>
      </div>
{/*        <h2 className="text-xl font-mono justify-center" align ="center">
        <br/>
        Questions? Contact us<br/>
        </h2>
        <div>
        <h2 className="text-xl font-mono justify-center" align ="center">
        <b>info@hideoutvacation.com</b> <br/>
        and a human being will get back to you within a day
        </h2>*/}


        {/*</div>*/}



    </main>

  );
}
export default Home;


