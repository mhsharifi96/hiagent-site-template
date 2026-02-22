import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import {PageShell} from '@/components/layout/page-shell';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {blogPosts, getBlogPostBySlug} from '@/data/blog-posts';
import {extractToc, renderMarkdown} from '@/lib/markdown';
import {pageMetadata} from '@/lib/seo';
import {siteConfig, type Locale} from '@/lib/site';
import {formatDate, localePath} from '@/lib/utils';

export function generateStaticParams() {
  return blogPosts.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({params}: {params: Promise<{locale: Locale; slug: string}>}) {
  const {locale, slug} = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return pageMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title: post.title[locale],
    description: post.excerpt[locale]
  });
}

export default async function BlogPostPage({params}: {params: Promise<{locale: Locale; slug: string}>}) {
  const {locale, slug} = await params;
  const t = await getTranslations({locale, namespace: 'BlogPost'});
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const toc = extractToc(post.content[locale]);
  const articleUrl = `${siteConfig.baseUrl}${localePath(locale, `/blog/${post.slug}`)}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title[locale],
    description: post.excerpt[locale],
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author
    },
    mainEntityOfPage: articleUrl,
    publisher: {
      '@type': 'Organization',
      name: 'HiAgent'
    }
  };

  return (
    <PageShell locale={locale}>
      <article className="container py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
        <Badge>{post.category[locale]}</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold">{post.title[locale]}</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{post.excerpt[locale]}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>•</span>
          <span>{formatDate(post.publishedAt, locale)}</span>
          <span>•</span>
          <span>{Math.max(4, Math.round(post.content[locale].split(' ').length / 200))} min read</span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 rounded-2xl border border-border bg-card/70 p-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t('toc')}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? 'ps-3 text-muted-foreground' : ''}>
                    <a href={`#${item.id}`} className="hover:text-primary">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-6">{renderMarkdown(post.content[locale])}</div>

          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-4 rounded-2xl border border-border bg-card/70 p-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t('share')}</h2>
              <div className="flex flex-col gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`} target="_blank">
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}`} target="_blank">
                    X/Twitter
                  </Link>
                </Button>
              </div>
              <h3 className="pt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t('tags')}</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </PageShell>
  );
}
