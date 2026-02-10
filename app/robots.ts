import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/finances/', '/updates/'], // Keep Google out of private areas
    },
    sitemap: 'https://hideoutvacation.com/sitemap.xml',
  };
}
