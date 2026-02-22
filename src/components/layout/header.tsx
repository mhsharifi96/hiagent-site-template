import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {Bot} from 'lucide-react';
import {navItems, siteConfig} from '@/lib/site';
import {localePath} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {LanguageSwitcher} from '@/components/ui/language-switcher';
import {ThemeToggle} from '@/components/ui/theme-toggle';

export async function Header({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'Navigation'});
  const cta = await getTranslations({locale, namespace: 'CTA'});

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href={localePath(locale)} className="flex items-center gap-2 text-lg font-semibold">
          <span className="rounded-xl bg-gradient-to-br from-cyan-500 via-sky-500 to-indigo-500 p-2 text-white shadow-lg">
            <Bot className="h-5 w-5" />
          </span>
          <span className="tracking-tight">HiAgent</span>
        </Link>

        <nav
          className="hidden items-center gap-2 rounded-2xl border border-border/70 bg-card/70 p-1 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={localePath(locale, item.href)}
              className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
          <Button asChild className="hidden lg:inline-flex">
            <Link href={siteConfig.calendly} target="_blank" rel="noreferrer">
              {cta('bookCall')}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
