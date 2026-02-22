import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {PageShell} from '@/components/layout/page-shell';
import {SectionTitle} from '@/components/sections/section-title';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardDescription, CardTitle} from '@/components/ui/card';
import {ServiceIcon} from '@/components/ui/service-icon';
import {blogPosts} from '@/data/blog-posts';
import {services} from '@/data/services';
import {pageMetadata} from '@/lib/seo';
import {siteConfig} from '@/lib/site';
import type {Locale} from '@/lib/site';
import {localePath} from '@/lib/utils';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO.Services'});
  return pageMetadata({locale, path: '/services', title: t('title'), description: t('description')});
}

export default async function ServicesPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'ServicesPage'});

  return (
    <PageShell locale={locale}>
      <section className="container py-16">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
        <div className="space-y-8">
          {services.map((service) => {
            const linkedPosts = blogPosts.filter((post) => service.relatedPosts.includes(post.slug));
            return (
              <Card key={service.slug} className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <ServiceIcon name={service.icon} className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4 text-2xl">{service.title[locale]}</CardTitle>
                  <CardDescription>{service.summary[locale]}</CardDescription>
                  <p className="mt-4 text-sm text-muted-foreground">{service.pricing[locale]}</p>
                </div>
                <div className="space-y-4 lg:col-span-8">
                  <div>
                    <h3 className="font-semibold">{t('problem')}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.problem[locale]}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('solution')}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.solution[locale]}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('deliverables')}</h3>
                    <ul className="mt-2 list-disc space-y-1 ps-5 text-sm text-muted-foreground">
                      {service.deliverables[locale].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('timeline')}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.timeline[locale]}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('relatedArticles')}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {linkedPosts.length
                        ? linkedPosts.map((post) => (
                            <Badge key={post.slug} variant="outline">
                              <Link href={localePath(locale, `/blog/${post.slug}`)}>{post.title[locale]}</Link>
                            </Badge>
                          ))
                        : <Badge variant="outline">{t('comingSoon')}</Badge>}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild>
            <Link href={siteConfig.calendly} target="_blank" rel="noreferrer">
              {t('bookCall')}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={localePath(locale, '/case-studies')}>{t('viewCaseStudies')}</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
