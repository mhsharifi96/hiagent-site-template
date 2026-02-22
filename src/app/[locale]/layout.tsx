import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {ToastProvider} from '@/components/ui/toast';
import {locales, rtlLocales, siteConfig, type Locale} from '@/lib/site';
import {buildAlternates, organizationJsonLd, websiteJsonLd} from '@/lib/seo';
import {AnalyticsPlaceholder} from '@/components/analytics-placeholder';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const t = await getTranslations({locale, namespace: 'SEO.Global'});

  return {
    title: {
      default: t('title'),
      template: `%s | HiAgent`
    },
    description: t('description'),
    alternates: buildAlternates('', locale as Locale),
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      type: 'website',
      title: t('title'),
      description: t('description'),
      url: `${siteConfig.baseUrl}/${locale}`,
      siteName: 'HiAgent'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description')
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const dir = rtlLocales.includes(locale as Locale) ? 'rtl' : 'ltr';
  const localeFont = locale === 'en' ? 'font-sans' : locale === 'fa' ? 'font-vazir' : 'font-kufi';

  const messages = await getMessages({locale});
  const orgJsonLd = organizationJsonLd(locale as Locale);
  const webJsonLd = websiteJsonLd(locale as Locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ToastProvider>
        <div lang={locale} dir={dir} className={localeFont}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(orgJsonLd)}}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(webJsonLd)}}
          />
          {children}
          <AnalyticsPlaceholder />
        </div>
      </ToastProvider>
    </NextIntlClientProvider>
  );
}
