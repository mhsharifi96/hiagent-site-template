import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function localePath(locale: string, path = '') {
  return `/${locale}${path}`;
}

export function isRtl(locale: string) {
  return locale === 'fa' || locale === 'ar';
}

export function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
}
