import Image from "next/image";
import Carousel from '@/components/carousel'
import Iframe from 'react-iframe'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
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
              alt="Vercel Logo"
              className="dark:invert place-items-center"
              width={100}
              height={24}
              priority
            />
          {/*</a>*/}
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <div className ="">
        <Iframe url="https://login.smoobu.com/en/cockpit/widget/show-calendar-iframe/1033732/c22875e49828e2655f7ba23da50b88125546858782c62311d23cc76f6c464810"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
        </div>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
      </div>
    </main>
  );
}
