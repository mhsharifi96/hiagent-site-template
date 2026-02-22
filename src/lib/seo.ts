import type {Metadata} from 'next';
import {siteConfig} from '@/lib/site';
import type {Locale} from '@/lib/site';
import {localePath} from '@/lib/utils';

const localeOgMap: Record<Locale, string> = {
  en: 'en_US',
  fa: 'fa_IR',
  ar: 'ar_SA'
};

const localeKeywords: Record<Locale, string[]> = {
  en: ['AI automation agency', 'RAG development', 'GraphRAG', 'AI agents', 'workflow automation', 'LLM integration'],
  fa: ['آژانس اتوماسیون هوش مصنوعی', 'توسعه RAG', 'GraphRAG', 'ایجنت هوش مصنوعی', 'اتوماسیون ورک فلو', 'یکپارچه سازی LLM'],
  ar: ['وكالة أتمتة الذكاء الاصطناعي', 'تطوير RAG', 'GraphRAG', 'وكلاء الذكاء الاصطناعي', 'أتمتة سير العمل', 'تكامل نماذج اللغة']
};

export function buildAlternates(path: string, locale: Locale) {
  const normalizedPath = path || '';
  const canonical = `${siteConfig.baseUrl}${localePath(locale, normalizedPath)}`;
  return {
    canonical,
    languages: {
      en: `${siteConfig.baseUrl}${localePath('en', normalizedPath)}`,
      fa: `${siteConfig.baseUrl}${localePath('fa', normalizedPath)}`,
      ar: `${siteConfig.baseUrl}${localePath('ar', normalizedPath)}`,
      'x-default': `${siteConfig.baseUrl}/en${normalizedPath}`
    }
  };
}

export function pageMetadata({
  locale,
  path,
  title,
  description
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const localizedPath = localePath(locale, path);

  return {
    title,
    description,
    keywords: localeKeywords[locale],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    },
    alternates: buildAlternates(path, locale),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${siteConfig.baseUrl}${localizedPath}`,
      siteName: siteConfig.name,
      locale: localeOgMap[locale],
      alternateLocale: Object.values(localeOgMap).filter((item) => item !== localeOgMap[locale]),
      images: [
        {
          url: `${siteConfig.baseUrl}/logo.svg`,
          width: 512,
          height: 512,
          alt: `${siteConfig.name} logo`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.baseUrl}/logo.svg`]
    }
  };
}

export function organizationJsonLd(locale: Locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    email: siteConfig.email,
    sameAs: [siteConfig.telegram, siteConfig.whatsapp],
    description: siteConfig.description,
    logo: `${siteConfig.baseUrl}/logo.svg`,
    inLanguage: locale
  };
}

export function websiteJsonLd(locale: Locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.baseUrl}/${locale}/blog?query={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}
