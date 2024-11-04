import Image from "next/image";
import React from 'react';
// Initialization for ES Users
// import {
//   Carousel,
//   initTWE,
// } from "tw-elements";

// // initTWE({ Carousel });

export default function Home() {
//   const imageStyle = {
//   borderRadius: '8px',
//   // borderRadius: '8px';
//   border: '3px ridge rgba(28,110,164,0.18)',
// }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            Hideout <br/>
            {" "}Vacation <br/>
            Rentals{" "}
            <Image
              src="/hideoutvacation.svg"
              alt="Hideout Vacation Rentals Logo"
              className="dark:invert place-items-center"
              width={100}
              height={24}
              priority
            />
        </div>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/housenumber.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/tub1.jpg" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/northbeach.jpg" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/fireplace.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/smores.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="/bedroom.jpg" />
      </div>
    </div>
  </div>
</div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    <div>
        </div>
        <a
          href="/booking"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Book Directly Now{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {/*Learn about Next.js in an interactive course with&nbsp;quizzes!*/}
            Check our calendar for availability and our lowest booking rates.
          </p>
        </a>

        <a
          href="https://airbnb.com/h/hideoutvacation"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            More Photos and Info{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            at Airbnb. See more photos, and read our reviews.</p>

            <p className="m-0 max-w-[30ch] text-sm opacity-50"> ...be sure to come back to book directly for the best price.
          </p>
        </a>
      
      </div>
    </main>
  );
}
