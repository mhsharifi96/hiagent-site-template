import type {MetadataRoute} from 'next';
import {siteConfig} from '@/lib/site';
import {blogPosts} from '@/data/blog-posts';
import {caseStudies} from '@/data/case-studies';

const staticRoutes = ['', '/services', '/case-studies', '/blog', '/about', '/contact', '/privacy', '/terms'];
const locales = ['en', 'fa', 'ar'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    staticRoutes.forEach((route) => {
      entries.push({
        url: `${siteConfig.baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8
      });
    });

    blogPosts.forEach((post) => {
      entries.push({
        url: `${siteConfig.baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.7
      });
    });

    caseStudies.forEach((study) => {
      entries.push({
        url: `${siteConfig.baseUrl}/${locale}/case-studies/${study.slug}`,
        lastModified: new Date(study.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.7
      });
    });
  });

  return entries;
}
