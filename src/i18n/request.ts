import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, locales} from '@/lib/site';

export default getRequestConfig(async ({locale}) => {
  const requestedLocale = locale ?? defaultLocale;
  const validatedLocale = locales.includes(requestedLocale as (typeof locales)[number])
    ? requestedLocale
    : defaultLocale;

  return {
    locale: validatedLocale,
    messages: (await import(`../../messages/${validatedLocale}.json`)).default
  };
});
