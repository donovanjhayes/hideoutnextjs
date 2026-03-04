import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/data/properties';

interface PropertyDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailsPage({ params }: PropertyDetailsProps) {
  const resolvedParams = await params;
  const property = properties.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Top Navigation */}
      <nav className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <Link href="/" className="text-gray-600 hover:text-black font-medium transition flex items-center gap-2">
          ← Back to All Properties
        </Link>
      </nav>

      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src={property.heroImage}
          alt={`Cover photo of ${property.name}`}
          fill
          className="object-cover"
          priority // Loads this image first for better performance
        />
        {/* Optional: A dark gradient overlay to make a potential text overlay readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: Details (Takes up 2/3 of the space on desktop) */}
        <div className="md:col-span-2 space-y-10">
          
          {/* Header Info */}
          <section>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{property.name}</h1>
            <p className="text-xl text-gray-600 italic">{property.tagline}</p>
          </section>

          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Property</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {property.description}
            </p>
          </section>

          {/* Amenities Grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 text-gray-700 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  {/* A simple SVG checkmark */}
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery Teaser */}
          <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">See More Photos</h3>
              <p className="text-gray-600">Explore our full gallery to get a better feel for the space.</p>
            </div>
            <Link 
              href={property.links.gallery}
              className="px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition flex-shrink-0"
            >
              View Gallery
            </Link>
          </section>

        </div>

        {/* Right Column: Sticky Booking Widget (Takes up 1/3 of the space on desktop) */}
        <div className="md:col-span-1">
          <div className="sticky top-8 bg-white p-1 sm:p-4 rounded-2xl border border-gray-200 shadow-lg">
            
            {/* The Embedded Iframe */}
            <div id ="booking-section" className="w-full overflow-hidden rounded-xl bg-gray-50 min-h-[500px]">
                <iframe id="booking-iframe" sandbox="allow-top-navigation allow-scripts allow-same-origin" style={{ width: '100%', height: '600px' }} frameBorder="0" src={property.links.booking}/>
            </div>
            
            <p className="text-xs text-center text-gray-400 mt-4 px-4">
              Hospitable is our trusted partner for secure booking without any added fees.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}