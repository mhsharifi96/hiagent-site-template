'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Button} from '@/components/ui/button';
import {locales} from '@/lib/site';

export function LanguageSwitcher({locale}: {locale: string}) {
  const pathname = usePathname();

  const switchLocalePath = (targetLocale: string) => {
    const parts = pathname.split('/').filter(Boolean);
    if (!parts.length) return `/${targetLocale}`;
    parts[0] = targetLocale;
    return `/${parts.join('/')}`;
  };

  return (
    <div className="flex items-center gap-1 rounded-xl border border-border bg-background/70 p-1">
      {locales.map((item) => (
        <Button
          key={item}
          variant={item === locale ? 'default' : 'ghost'}
          size="sm"
          asChild
          className="uppercase"
        >
          <Link href={switchLocalePath(item)} hrefLang={item}>
            {item}
          </Link>
        </Button>
      ))}
    </div>
  );
}
