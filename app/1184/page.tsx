import Link from 'next/link';
import Footer from '@/components/Footer';

export default function DocumentPage() {
  return (
    <main className="min-h-screen bg-stone-100 flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-stone-50 px-6 py-4 flex items-center justify-between border-b border-stone-200">
        <Link href="/" className="text-stone-600 hover:text-stone-900 font-medium transition flex items-center gap-2">
          ← Back to Home
        </Link>
      </nav>

      {/* Main Content Area */}
      <section className="flex-grow max-w-5xl mx-auto w-full px-6 py-12 flex flex-col items-center">
        
        {/* Header Title */}
        <div className="w-full text-center mb-8">
          {/* <h1 className="text-4xl font-extrabold text-stone-900 mb-2">Guest Information</h1> */}
          {/* <p className="text-lg text-stone-600">Everything you need to know for your stay.</p> */}
        </div>

        {/* The Google Doc Container */}
        {/* We use max-w-4xl to keep the doc from stretching too wide and looking awkward */}
        <div className="w-full max-w-4xl h-[75vh] min-h-[800px] bg-white rounded-2xl border border-stone-300 shadow-lg overflow-hidden">
          
          {/* The React-compliant Iframe for Google Docs */}
          {/* Remember to leave the spaces around the brackets if your chat hides this! */}
          < iframe 
            src="https://docs.google.com/document/d/e/2PACX-1vQOdBuryCWys2XMg9R6KM3Iob6b-tjY-pmMgYIkn7lit-C3FkRpGHglqcBzhddqwHGPXJUr9xDPFTub/pub?embedded=true" 
            className="w-full h-full border-none" 
            title="Guest Information Document"
          / >

        </div>

      </section>

      {/* Your Global Footer */}
      <Footer />
    </main>
  );
}