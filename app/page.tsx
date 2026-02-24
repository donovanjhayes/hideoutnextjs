import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Poconos Family Getaway | Hideout Vacation Rental in PA',
  description: 'Experience the ultimate Poconos getaway. A spacious, family-friendly vacation rental close to skiing, swimming, and lakes. Book your stay today.',
  keywords: ['Poconos', 'Getaway', 'Vacation Rental', 'Pennsylvania', 'Skiing', 'Family Reunion', 'Hideout', 'Cozy', 'Hot Tub', 'Fireplace', 'Pet Friendly'],
  openGraph: {
    title: 'Poconos Family Getaway',
    description: 'The perfect spot for your next family vacation.',
    images: ['/hero-image.png'], // Make sure you have an image in your public folder
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Simple Hero Section */}
      <section className="bg-white border-b border-gray-200 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Hideout Vacations
          </h1>
          <p className="text-xl text-gray-600">
            Curated escapes designed for comfort, design, and unforgettable memories. Choose your getaway.
          </p>
        </div>
      </section>

      {/* Properties Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}