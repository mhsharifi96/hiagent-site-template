import {getTranslations} from 'next-intl/server';
import {PageShell} from '@/components/layout/page-shell';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/lib/site';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO.Privacy'});
  return pageMetadata({locale, path: '/privacy', title: t('title'), description: t('description')});
}

export default async function PrivacyPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'PrivacyPage'});

  return (
    <PageShell locale={locale}>
      <section className="container max-w-4xl py-16">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="mt-4 text-muted-foreground">{t('intro')}</p>
        <h2 className="mt-10 text-2xl font-semibold">{t('data.title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('data.text')}</p>
        <h2 className="mt-8 text-2xl font-semibold">{t('usage.title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('usage.text')}</p>
        <h2 className="mt-8 text-2xl font-semibold">{t('rights.title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('rights.text')}</p>
      </section>
    </PageShell>
  );
}
