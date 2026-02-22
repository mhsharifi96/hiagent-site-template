import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {ArrowRight, CheckCircle2} from 'lucide-react';
import {PageShell} from '@/components/layout/page-shell';
import {SectionTitle} from '@/components/sections/section-title';
import {Reveal} from '@/components/sections/reveal';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardDescription, CardTitle} from '@/components/ui/card';
import {ServiceIcon} from '@/components/ui/service-icon';
import {blogPosts} from '@/data/blog-posts';
import {caseStudies} from '@/data/case-studies';
import {faqs, processSteps, testimonials, useCases} from '@/data/marketing';
import {services} from '@/data/services';
import type {Locale} from '@/lib/site';
import {siteConfig} from '@/lib/site';
import {pageMetadata} from '@/lib/seo';
import {localePath} from '@/lib/utils';

const techStack = ['Next.js', 'TypeScript', 'Python', 'LangChain', 'LlamaIndex', 'Vector DB', 'Postgres', 'Redis', 'OpenAI'];

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'SEO.Home'});
  return pageMetadata({
    locale,
    path: '',
    title: t('title'),
    description: t('description')
  });
}

export default async function HomePage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Home'});
  const cta = await getTranslations({locale, namespace: 'CTA'});

  return (
    <PageShell locale={locale}>
      <section className="container relative py-20">
        <div className="hero-glow" />
        <Reveal>
          <div className="section-shell noise-overlay relative grid gap-10 overflow-hidden lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-7">
              <Badge>{t('hero.badge')}</Badge>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                {t('hero.title')} <span className="gradient-text">{t('hero.highlight')}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t('hero.description')}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={siteConfig.calendly} target="_blank" rel="noreferrer">
                    {cta('bookCall')} <ArrowRight className="ms-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={localePath(locale, '/services')}>{cta('getQuote')}</Link>
                </Button>
              </div>
            </div>
            <div className="relative z-10 lg:col-span-5">
              <Card className="h-full border-primary/20 bg-gradient-to-br from-cyan-500/10 via-card to-indigo-500/10">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">{t('process.eyebrow')}</p>
                <div className="mt-5 grid gap-4">
                  {processSteps.slice(0, 3).map((step, index) => (
                    <div key={step.title.en} className="rounded-xl border border-border/70 bg-background/50 p-4">
                      <p className="text-2xl font-bold gradient-text">0{index + 1}</p>
                      <p className="mt-1 font-medium">{step.title[locale]}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description[locale]}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container py-12">
        <div className="section-shell">
        <SectionTitle eyebrow={t('services.eyebrow')} title={t('services.title')} description={t('services.description')} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <Card>
                <ServiceIcon name={service.icon} className="h-6 w-6 text-primary" />
                <CardTitle className="mt-4">{service.title[locale]}</CardTitle>
                <CardDescription>{service.summary[locale]}</CardDescription>
                <Button asChild variant="link" className="mt-4 px-0">
                  <Link href={localePath(locale, '/services')}>{t('services.learnMore')}</Link>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="section-shell">
        <SectionTitle eyebrow={t('process.eyebrow')} title={t('process.title')} description={t('process.description')} />
        <div className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Card key={step.title.en} className="relative overflow-hidden">
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <CardTitle className="text-lg">{step.title[locale]}</CardTitle>
              <CardDescription>{step.description[locale]}</CardDescription>
            </Card>
          ))}
        </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="section-shell">
        <SectionTitle eyebrow={t('useCases.eyebrow')} title={t('useCases.title')} description={t('useCases.description')} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => (
            <Card key={item.name.en}>
              <CardTitle>{item.name[locale]}</CardTitle>
              <CardDescription>{item.detail[locale]}</CardDescription>
            </Card>
          ))}
        </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="section-shell">
        <SectionTitle eyebrow={t('caseStudies.eyebrow')} title={t('caseStudies.title')} description={t('caseStudies.description')} />
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.slug}>
              <Badge variant="secondary">{study.industry[locale]}</Badge>
              <CardTitle className="mt-4 text-lg">{study.title[locale]}</CardTitle>
              <CardDescription>{study.summary[locale]}</CardDescription>
              <Button asChild variant="link" className="mt-3 px-0">
                <Link href={localePath(locale, `/case-studies/${study.slug}`)}>{t('caseStudies.viewCase')}</Link>
              </Button>
            </Card>
          ))}
        </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="section-shell">
        <SectionTitle eyebrow={t('architecture.eyebrow')} title={t('architecture.title')} description={t('architecture.description')} />
        <Card className="overflow-hidden p-0">
          <svg viewBox="0 0 900 300" className="h-full w-full" role="img" aria-label="RAG and GraphRAG architecture diagram">
            <defs>
              <linearGradient id="lineGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="900" height="300" fill="transparent" />
            <rect x="60" y="90" width="180" height="90" rx="16" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.55)" />
            <text x="150" y="140" textAnchor="middle" fill="currentColor" fontSize="16">Data Sources</text>
            <rect x="350" y="60" width="200" height="80" rx="16" fill="rgba(79,70,229,0.15)" stroke="rgba(79,70,229,0.55)" />
            <text x="450" y="108" textAnchor="middle" fill="currentColor" fontSize="16">RAG Index</text>
            <rect x="350" y="160" width="200" height="80" rx="16" fill="rgba(20,184,166,0.15)" stroke="rgba(20,184,166,0.55)" />
            <text x="450" y="208" textAnchor="middle" fill="currentColor" fontSize="16">GraphRAG Engine</text>
            <rect x="660" y="90" width="180" height="90" rx="16" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.55)" />
            <text x="750" y="140" textAnchor="middle" fill="currentColor" fontSize="16">AI Agents + Apps</text>
            <path d="M240 135H350" stroke="url(#lineGradient)" strokeWidth="4" />
            <path d="M550 100H660" stroke="url(#lineGradient)" strokeWidth="4" />
            <path d="M550 200H660" stroke="url(#lineGradient)" strokeWidth="4" />
          </svg>
        </Card>
        </div>
      </section>

      <section className="container py-12">
        <div className="section-shell">
        <SectionTitle eyebrow={t('stack.eyebrow')} title={t('stack.title')} description={t('stack.description')} />
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="section-shell">
        <SectionTitle eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')} />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name.en}>
              <p className="text-lg">“{testimonial.quote[locale]}”</p>
              <p className="mt-4 font-semibold">{testimonial.name[locale]}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role[locale]}</p>
            </Card>
          ))}
        </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="section-shell">
        <SectionTitle eyebrow={t('blog.eyebrow')} title={t('blog.title')} description={t('blog.description')} />
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.slice(0, 4).map((post) => (
            <Card key={post.slug}>
              <Badge>{post.category[locale]}</Badge>
              <CardTitle className="mt-4 text-lg">{post.title[locale]}</CardTitle>
              <CardDescription>{post.excerpt[locale]}</CardDescription>
              <Button asChild variant="link" className="mt-3 px-0">
                <Link href={localePath(locale, `/blog/${post.slug}`)}>{t('blog.readArticle')}</Link>
              </Button>
            </Card>
          ))}
        </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="section-shell">
          <div>
            <SectionTitle eyebrow={t('faq.eyebrow')} title={t('faq.title')} description={t('faq.description')} />
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={faq.question.en}>
                  <AccordionTrigger>{faq.question[locale]}</AccordionTrigger>
                  <AccordionContent>{faq.answer[locale]}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <Card className="noise-overlay bg-gradient-to-br from-cyan-500/20 via-card to-indigo-500/25">
          <h2 className="text-3xl font-bold">{t('finalCta.title')}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t('finalCta.description')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={siteConfig.calendly} target="_blank" rel="noreferrer">
                {cta('bookCall')}
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={siteConfig.telegram} target="_blank" rel="noreferrer">
                Telegram
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-2 text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> {t('finalCta.bulletOne')}
            </p>
            <p className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> {t('finalCta.bulletTwo')}
            </p>
          </div>
        </Card>
      </section>
    </PageShell>
  );
}
