import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {PageShell} from '@/components/layout/page-shell';
import {SectionTitle} from '@/components/sections/section-title';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardDescription, CardTitle} from '@/components/ui/card';
import {caseStudies} from '@/data/case-studies';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/lib/site';
import {localePath} from '@/lib/utils';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO.CaseStudies'});
  return pageMetadata({locale, path: '/case-studies', title: t('title'), description: t('description')});
}

export default async function CaseStudiesPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'CaseStudiesPage'});

  return (
    <PageShell locale={locale}>
      <section className="container py-16">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.slug}>
              <Badge>{study.industry[locale]}</Badge>
              <CardTitle className="mt-4 text-xl">{study.title[locale]}</CardTitle>
              <CardDescription>{study.summary[locale]}</CardDescription>
              <Button asChild variant="link" className="mt-4 px-0">
                <Link href={localePath(locale, `/case-studies/${study.slug}`)}>{t('viewCase')}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
