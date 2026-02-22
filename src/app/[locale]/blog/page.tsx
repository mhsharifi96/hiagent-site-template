import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {PageShell} from '@/components/layout/page-shell';
import {SectionTitle} from '@/components/sections/section-title';
import {Badge} from '@/components/ui/badge';
import {Card, CardDescription, CardTitle} from '@/components/ui/card';
import {blogPosts} from '@/data/blog-posts';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/lib/site';
import {formatDate, localePath} from '@/lib/utils';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO.Blog'});
  return pageMetadata({locale, path: '/blog', title: t('title'), description: t('description')});
}

export default async function BlogPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'BlogPage'});

  return (
    <PageShell locale={locale}>
      <section className="container py-16">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(blogPosts.map((post) => post.category[locale]))).map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.slug}>
              <Badge>{post.category[locale]}</Badge>
              <CardTitle className="mt-4 text-2xl">
                <Link href={localePath(locale, `/blog/${post.slug}`)}>{post.title[locale]}</Link>
              </CardTitle>
              <CardDescription className="mt-3">{post.excerpt[locale]}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                {post.author} • {formatDate(post.publishedAt, locale)}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
