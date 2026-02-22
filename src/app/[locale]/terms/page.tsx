import {getTranslations} from 'next-intl/server';
import {PageShell} from '@/components/layout/page-shell';
import {pageMetadata} from '@/lib/seo';
import type {Locale} from '@/lib/site';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO.Terms'});
  return pageMetadata({locale, path: '/terms', title: t('title'), description: t('description')});
}

export default async function TermsPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'TermsPage'});

  return (
    <PageShell locale={locale}>
      <section className="container max-w-4xl py-16">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="mt-4 text-muted-foreground">{t('intro')}</p>
        <h2 className="mt-10 text-2xl font-semibold">{t('services.title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('services.text')}</p>
        <h2 className="mt-8 text-2xl font-semibold">{t('payment.title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('payment.text')}</p>
        <h2 className="mt-8 text-2xl font-semibold">{t('liability.title')}</h2>
        <p className="mt-3 text-muted-foreground">{t('liability.text')}</p>
      </section>
    </PageShell>
  );
}
