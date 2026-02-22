import './globals.css';
import {headers} from 'next/headers';
import {Inter, Vazirmatn, Noto_Kufi_Arabic} from 'next/font/google';
import type {Metadata} from 'next';
import {ThemeProvider} from '@/components/theme-provider';
import {defaultLocale, locales, rtlLocales, siteConfig, type Locale} from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn',
  display: 'swap'
});

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-kufi-arabic',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: 'HiAgent | AI Automation Agency',
    template: '%s | HiAgent'
  },
  description: siteConfig.description,
  keywords: ['AI automation', 'RAG', 'GraphRAG', 'AI agents', 'Next.js AI products'],
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
  alternates: {
    languages: {
      en: `${siteConfig.baseUrl}/en`,
      fa: `${siteConfig.baseUrl}/fa`,
      ar: `${siteConfig.baseUrl}/ar`,
      'x-default': `${siteConfig.baseUrl}/en`
    }
  },
  applicationName: 'HiAgent',
  category: 'technology',
  creator: 'HiAgent',
  publisher: 'HiAgent',
  authors: [{name: 'HiAgent'}],
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    siteName: 'HiAgent',
    title: 'HiAgent | AI Automation Agency',
    description: siteConfig.description,
    url: siteConfig.baseUrl
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiAgent | AI Automation Agency',
    description: siteConfig.description
  }
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const headerStore = await headers();
  const localeHeader = (headerStore.get('x-locale') || defaultLocale) as Locale;
  const locale = locales.includes(localeHeader) ? localeHeader : defaultLocale;
  const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${inter.variable} ${vazirmatn.variable} ${notoKufi.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
