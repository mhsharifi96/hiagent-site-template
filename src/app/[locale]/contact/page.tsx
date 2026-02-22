import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {PageShell} from '@/components/layout/page-shell';
import {SectionTitle} from '@/components/sections/section-title';
import {ContactForm} from '@/components/sections/contact-form';
import {Badge} from '@/components/ui/badge';
import {Card, CardDescription, CardTitle} from '@/components/ui/card';
import {pageMetadata} from '@/lib/seo';
import {siteConfig, type Locale} from '@/lib/site';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO.Contact'});
  return pageMetadata({locale, path: '/contact', title: t('title'), description: t('description')});
}

export default async function ContactPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'ContactPage'});

  return (
    <PageShell locale={locale}>
      <section className="container py-16">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
        <div className="grid gap-6 lg:grid-cols-2">
          <ContactForm
            messages={{
              name: t('form.name'),
              email: t('form.email'),
              company: t('form.company'),
              projectType: t('form.projectType'),
              budget: t('form.budget'),
              message: t('form.message'),
              submit: t('form.submit'),
              success: t('form.success'),
              error: t('form.error')
            }}
          />

          <div className="space-y-6">
            <Card>
              <CardTitle>{t('quickContact')}</CardTitle>
              <CardDescription>{t('quickContactDescription')}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>
                  <Link href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WhatsApp</Link>
                </Badge>
                <Badge>
                  <Link href={siteConfig.telegram} target="_blank" rel="noreferrer">Telegram</Link>
                </Badge>
                <Badge>
                  <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
                </Badge>
              </div>
            </Card>

            <Card>
              <CardTitle>{t('calendlyTitle')}</CardTitle>
              <CardDescription>{t('calendlyDescription')}</CardDescription>
              <div className="mt-4 rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
                <Link href={siteConfig.calendly} target="_blank" rel="noreferrer" className="text-primary underline">
                  {t('calendlyLink')}
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
