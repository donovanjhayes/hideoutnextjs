import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types/property';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 mb-12">
      {/* Main Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
        <Image 
          src={property.heroImage} 
          alt={`Image of ${property.name}`} 
          fill 
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{property.name}</h2>
          <p className="text-lg text-gray-500 italic mb-4">{property.tagline}</p>
          <p className="text-gray-700 mb-6 line-clamp-3">{property.description}</p>
          
          {/* Quick Amenities */}
          <ul className="flex flex-wrap gap-2 mb-8">
            {property.amenities.map((amenity) => (
              <li key={amenity} className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-600">
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href={property.links.booking}
            className="px-6 py-3 bg-black text-white text-center rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Book Now
          </Link>
          <Link 
            href={property.links.details}
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 text-center rounded-lg font-medium hover:bg-gray-50 transition"
          >
            More Info
          </Link>
          <Link 
            href={property.links.gallery}
            className="px-6 py-3 text-gray-600 text-center rounded-lg font-medium hover:text-black transition"
          >
            Photos
          </Link>
        </div>
      </div>
    </div>
  );
}