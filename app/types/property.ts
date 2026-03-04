import { Url } from "next/dist/shared/lib/router/router";

export interface Property {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  thumbnails: string[];
  amenities: string[];
  links: {
    embedbooking: Url;
    details: string;
    gallery: string;
    booking: string;
  };
}