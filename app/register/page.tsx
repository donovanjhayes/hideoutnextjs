import Link from 'next/link';
import Footer from '@/components/Footer';

export default function MapPage() {
  return (
    <main className="min-h-screen bg-stone-100 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-stone-50 px-6 py-4 flex items-center justify-between border-b border-stone-200">
        <Link href="/" className="text-stone-600 hover:text-stone-900 font-medium transition flex items-center gap-2">
          ← Back to All Properties
        </Link>
      </nav>

      {/* Main Content Area - flex-grow pushes the footer to the bottom */}
      <section className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 flex flex-col items-center">
        
        {/* Header Title */}
        <div className="w-full text-center mb-8">
          <h1 className="text-4xl font-extrabold text-stone-900 mb-2">Property Map</h1>
          <p className="text-lg text-stone-600">Explore the grounds and local trails.</p>
        </div>

        {/* Action Button for Mobile Users (or anyone who prefers to download) */}
        <div className="w-full flex justify-end mb-4">
          <a 
            href="/hideoutmap.pdf" 
            download 
            className="px-6 py-2 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition shadow-sm"
          >
            Download Map
          </a>
        </div>

        {/* The PDF Viewer Container */}
        <div className="w-full h-[75vh] min-h-[600px] bg-stone-200 rounded-2xl border border-stone-300 shadow-lg overflow-hidden">
          {/* By setting src="/map.pdf", Next.js automatically looks in the public folder.
            The iframe will use the browser's native PDF viewer.
          */}
          <iframe 
            src="/hideoutmap.pdf" 
            className="w-full h-full border-none" 
            title="Hideout Vacation Grounds Map"
          />
        </div>

      </section>

      {/* Your Global Footer */}
      <Footer />
    </main>
  );
}