import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import {PageShell} from '@/components/layout/page-shell';
import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';
import {caseStudies} from '@/data/case-studies';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/lib/site';

export function generateStaticParams() {
  return caseStudies.map((study) => ({slug: study.slug}));
}

export async function generateMetadata({params}: {params: Promise<{locale: Locale; slug: string}>}) {
  const {locale, slug} = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};

  return pageMetadata({
    locale,
    path: `/case-studies/${study.slug}`,
    title: study.title[locale],
    description: study.summary[locale]
  });
}

export default async function CaseStudyDetailPage({params}: {params: Promise<{locale: Locale; slug: string}>}) {
  const {locale, slug} = await params;
  const t = await getTranslations({locale, namespace: 'CaseStudyDetail'});
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <PageShell locale={locale}>
      <article className="container py-16">
        <Badge>{study.industry[locale]}</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold">{study.title[locale]}</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">{study.summary[locale]}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <h2 className="text-2xl font-semibold">{t('challenge')}</h2>
            <p className="mt-4 text-muted-foreground">{study.challenge[locale]}</p>
            <h2 className="mt-8 text-2xl font-semibold">{t('approach')}</h2>
            <ul className="mt-4 list-disc space-y-2 ps-5 text-muted-foreground">
              {study.approach[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="mt-8 text-2xl font-semibold">{t('results')}</h2>
            <ul className="mt-4 list-disc space-y-2 ps-5 text-muted-foreground">
              {study.results[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">{t('architectureDiagram')}</h3>
            <div className="mt-4 rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
              {t('architecturePlaceholder')}
            </div>
            <h3 className="mt-6 text-lg font-semibold">{t('stack')}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
            <h3 className="mt-6 text-lg font-semibold">{t('screenshots')}</h3>
            <div className="mt-4 rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
              {t('screenshotsPlaceholder')}
            </div>
          </Card>
        </div>
      </article>
    </PageShell>
  );
}
