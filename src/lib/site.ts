export const locales = ['en', 'fa', 'ar'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const rtlLocales: Locale[] = ['fa', 'ar'];

export const siteConfig = {
  name: 'HiAgent',
  description:
    'HiAgent is an AI automation agency building RAG systems, GraphRAG knowledge engines, agentic workflows, and custom AI media pipelines for growth-focused businesses.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://hiagent.ai',
  email: 'hello@hiagent.ai',
  telegram: 'https://t.me/hiagent',
  whatsapp: 'https://wa.me/15551234567',
  calendly: 'https://calendly.com/mh-sh7676/experiment1et'
};

export const navItems = [
  {key: 'home', href: ''},
  {key: 'services', href: '/services'},
  {key: 'caseStudies', href: '/case-studies'},
  {key: 'blog', href: '/blog'},
  {key: 'about', href: '/about'},
  {key: 'contact', href: '/contact'}
] as const;

export const socialLinks = [
  {label: 'Telegram', href: siteConfig.telegram},
  {label: 'WhatsApp', href: siteConfig.whatsapp},
  {label: 'Email', href: `mailto:${siteConfig.email}`}
] as const;
