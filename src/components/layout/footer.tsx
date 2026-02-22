import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {localePath} from '@/lib/utils';
import {navItems, siteConfig, socialLinks} from '@/lib/site';

export async function Footer({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: 'Navigation'});
  const ft = await getTranslations({locale, namespace: 'Footer'});

  return (
    <footer className="mt-24 py-12">
      <div className="container section-shell noise-overlay grid gap-10 md:grid-cols-3">
        <div className="relative z-10">
          <h3 className="text-lg font-semibold">HiAgent</h3>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{ft('tagline')}</p>
        </div>

        <div className="relative z-10">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{ft('links')}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link href={localePath(locale, item.href)} className="hover:text-primary">
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link href={localePath(locale, '/privacy')} className="hover:text-primary">
                {ft('privacy')}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, '/terms')} className="hover:text-primary">
                {ft('terms')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="relative z-10">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{ft('contact')}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                {siteConfig.email}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="container mt-10 text-xs text-muted-foreground">© {new Date().getFullYear()} HiAgent. {ft('copyright')}</p>
    </footer>
  );
}
