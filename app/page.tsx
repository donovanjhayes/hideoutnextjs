import Image from "next/image";
// Initialization for ES Users
import {
  Carousel,
  initTWE,
} from "tw-elements";

// initTWE({ Carousel });

export default function Home() {
  const imageStyle = {
  borderRadius: '8px',
  // borderRadius: '8px';
  border: '3px ridge rgba(28,110,164,0.18)',
}
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
       {/*<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
         <div class="-m-1 flex flex-wrap md:-m-2">
           <div class="flex w-1/3 flex-wrap">
             <div class="w-full p-1 md:p-2">
               <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            </div>
          </div>
        </div>
      </div>*/}
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
      </div>
    </div>
  </div>
</div>



      {/*<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
            </div>
        <div className="">
          <Image
            className="object-fill relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg max-width"
            src="/bedroom.jpg"
            alt="Main Floor Bedroom"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={280}
            height={37}
            style={imageStyle}
            priority
          />
        </div>
        <div className="">
          <Image
            className="object-fill relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg"
            src="/fireplace.jpg"
            alt="Fireplace"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={280}
            height={37}
            style={imageStyle}
            priority
          />
        </div>
        <div className="">
          <Image
            className="object-fill relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg"
            src="/northbeach.jpg"
            alt="North Beach Photo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={280}
            height={37}
            style={imageStyle}
            priority
          />
        </div>
        <div className="">
          <Image
            className="object-fill relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-lg"
            src="/mountains.jpg"
            alt="North Beach Photo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={280}
            height={37}
            style={imageStyle}
            priority
          />
        </div>*/}


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
            Book Now{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {/*Learn about Next.js in an interactive course with&nbsp;quizzes!*/}
            Check our calendar for availability and rates.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
            See more photos, contact us directly, and read reviews from prior guests
          </p>
        </a>
      
      </div>
    </main>
  );
}
