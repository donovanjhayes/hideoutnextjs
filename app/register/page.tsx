'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function RegisterPage() {
  // This tells Tally to render the form whenever this page loads
  useEffect(() => {
    // We check if the window exists to prevent server-side rendering crashes
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.loadEmbeds();
    }
  }, []);

  return (
    <main className="min-h-screen bg-stone-100 flex flex-col">
      {/* Top Navigation */}
      {/* <nav className="bg-stone-50 px-6 py-4 flex items-center justify-between border-b border-stone-200">
        <Link href="/" className="text-stone-600 hover:text-stone-900 font-medium transition flex items-center gap-2">
          ← Back to Home
        </Link>
      </nav> */}

      {/* Main Content Area */}
      <section className="flex-grow max-w-4xl mx-auto w-full px-6 py-12 flex flex-col items-center">
        
        {/* <div className="w-full text-center mb-8">
          <h1 className="text-4xl font-extrabold text-stone-900 mb-2">Hideout Guests</h1>
        </div> */}

        <div className="w-full bg-white rounded-2xl border border-stone-200 shadow-lg p-4 md:p-8">
          
          {/* The Next.js way to load external scripts safely */}
          <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

          {/* The React-compliant Tally Iframe */}
          <iframe 
            data-tally-src="https://tally.so/embed/0V7eWj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="957" 
            frameBorder={0} 
            marginHeight={0} 
            marginWidth={0} 
            title="Wildwood Terrace Guest Registration"
          ></iframe>

        </div>
      </section>

      <Footer />
    </main>
  );
}