import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  let sitename = process.env.SITE_NAME || 'https://example.com';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${sitename}/sitemap.xml`,
  };
}