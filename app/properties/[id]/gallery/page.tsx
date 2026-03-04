import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/data/properties';

// This defines the expected props for our dynamic route
interface GalleryProps {
  params: Promise<{ id: string }>;
}

export default async function GalleryPage({ params }: GalleryProps) {
  // Await the params (standard practice in modern Next.js App Router)
  const resolvedParams = await params;
  
  // Find the specific property based on the URL ID
  const property = properties.find((p) => p.id === resolvedParams.id);

  // If someone types a bad URL (e.g., /properties/fake-house/gallery), show a 404
  if (!property) {
    notFound();
  }

  // Combine the hero image and the thumbnails into one array for the gallery
  const allImages = [property.heroImage, ...property.thumbnails];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-black transition flex items-center gap-2 text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
        <Link 
          href={property.links.embedbooking}
          className="px-4 py-2 bg-black text-white text-sm rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Book Now
        </Link>
      </nav>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{property.name} Gallery</h1>
        <p className="text-gray-500 text-lg">{allImages.length} photos of your next getaway</p>
      </header>

      {/* Responsive Image Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {allImages.map((imgSrc, index) => (
            <div 
              key={index} 
              // Make the very first image larger by spanning 2 columns and 2 rows on medium+ screens
              className={`relative rounded-xl overflow-hidden bg-gray-100 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <Image
                src={imgSrc}
                alt={`${property.name} photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}