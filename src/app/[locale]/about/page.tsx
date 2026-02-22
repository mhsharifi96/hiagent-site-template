import {getTranslations} from 'next-intl/server';
import {PageShell} from '@/components/layout/page-shell';
import {SectionTitle} from '@/components/sections/section-title';
import {Card, CardDescription, CardTitle} from '@/components/ui/card';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/lib/site';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO.About'});
  return pageMetadata({locale, path: '/about', title: t('title'), description: t('description')});
}

export default async function AboutPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'AboutPage'});

  return (
    <PageShell locale={locale}>
      <section className="container py-16">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardTitle>{t('mission.title')}</CardTitle>
            <CardDescription>{t('mission.text')}</CardDescription>
          </Card>
          <Card>
            <CardTitle>{t('values.title')}</CardTitle>
            <CardDescription>{t('values.text')}</CardDescription>
          </Card>
          <Card>
            <CardTitle>{t('workflow.title')}</CardTitle>
            <CardDescription>{t('workflow.text')}</CardDescription>
          </Card>
        </div>
        <Card className="mt-8">
          <CardTitle>{t('why.title')}</CardTitle>
          <CardDescription>{t('why.text')}</CardDescription>
        </Card>
      </section>
    </PageShell>
  );
}
