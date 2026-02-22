import createMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
import {defaultLocale, locales} from '@/lib/site';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default function proxy(request: NextRequest) {
  const pathLocale = request.nextUrl.pathname.split('/')[1];
  const locale = locales.includes(pathLocale as (typeof locales)[number])
    ? pathLocale
    : defaultLocale;

  const response = intlMiddleware(request);
  response.headers.set('x-locale', locale);
  response.headers.set('content-language', locale);
  response.headers.set('vary', 'Accept-Language');
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
