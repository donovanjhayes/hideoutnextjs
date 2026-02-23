export interface Property {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  thumbnails: string[];
  amenities: string[];
  links: {
    details: string;
    gallery: string;
    booking: string;
  };
}