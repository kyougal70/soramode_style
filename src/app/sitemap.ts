import { MetadataRoute } from 'next';
import { products, journalArticles } from '@/lib/constants';

export const dynamic = 'force-static';
const BASE_URL = 'https://soramode-style.example.com'; // Replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/policies',
    '/journal',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const collectionPages = [
    ...new Set(products.map(p => p.category))
  ].map((category) => ({
    url: `${BASE_URL}/collections/${category}`,
    lastModified: new Date(),
  }));

  const articlePages = journalArticles.map((article) => ({
    url: `${BASE_URL}/journal/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticPages, ...collectionPages, ...articlePages];
}
