import type {Locale} from '@/lib/site';

type Localized = Record<Locale, string>;

export type CaseStudy = {
  slug: string;
  industry: Localized;
  title: Localized;
  summary: Localized;
  challenge: Localized;
  approach: Record<Locale, string[]>;
  results: Record<Locale, string[]>;
  stack: string[];
  updatedAt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-support-copilot',
    industry: {en: 'eCommerce', fa: 'تجارت الکترونیک', ar: 'التجارة الإلكترونية'},
    title: {
      en: 'Reduced support response time by 62% with a multilingual RAG copilot',
      fa: 'کاهش ۶۲ درصدی زمان پاسخ پشتیبانی با کوپایلوت چندزبانه RAG',
      ar: 'خفض زمن استجابة الدعم 62٪ عبر مساعد RAG متعدد اللغات'
    },
    summary: {
      en: 'Built a unified support assistant connected to product docs, return policies, and CRM history.',
      fa: 'یک دستیار پشتیبانی یکپارچه متصل به مستندات محصول، سیاست مرجوعی و تاریخچه CRM ساختیم.',
      ar: 'أنشأنا مساعد دعم موحدا متصلا بوثائق المنتجات وسياسات الإرجاع وسجل CRM.'
    },
    challenge: {
      en: 'Agents relied on multiple systems and inconsistent macros, causing long wait times and low CSAT.',
      fa: 'اپراتورها وابسته به چند سیستم و ماکروهای ناسازگار بودند و این موضوع زمان انتظار و نارضایتی را بالا برده بود.',
      ar: 'اعتمد الوكلاء على أنظمة متعددة وردود غير متسقة مما أدى إلى انتظار طويل وانخفاض رضا العملاء.'
    },
    approach: {
      en: [
        'Consolidated product and policy documents into a retrieval index.',
        'Added live CRM context for personalized responses.',
        'Implemented confidence thresholds with human escalation.'
      ],
      fa: [
        'اسناد محصول و سیاست ها را در یک ایندکس بازیابی یکپارچه کردیم.',
        'کانتکست زنده CRM برای پاسخ شخصی سازی شده اضافه شد.',
        'آستانه اطمینان و ارجاع به اپراتور انسانی پیاده سازی شد.'
      ],
      ar: [
        'وحدنا وثائق المنتجات والسياسات في فهرس استرجاع واحد.',
        'أضفنا سياق CRM المباشر لتخصيص الإجابات.',
        'طبقنا حدود ثقة مع التصعيد إلى العنصر البشري.'
      ]
    },
    results: {
      en: ['62% faster first response time', '31% increase in agent productivity', '18% improvement in CSAT'],
      fa: ['۶۲٪ کاهش زمان اولین پاسخ', '۳۱٪ افزایش بهره وری اپراتور', '۱۸٪ بهبود رضایت مشتری'],
      ar: ['تسريع زمن الرد الأول بنسبة 62٪', 'زيادة إنتاجية الوكلاء 31٪', 'تحسن رضا العملاء 18٪']
    },
    stack: ['Next.js', 'Python', 'LangChain', 'Postgres', 'OpenAI'],
    updatedAt: '2026-01-18'
  },
  {
    slug: 'real-estate-lead-automation',
    industry: {en: 'Real Estate', fa: 'املاک', ar: 'العقارات'},
    title: {
      en: 'Automated lead qualification pipeline for a regional real estate firm',
      fa: 'اتوماسیون پایپلاین ارزیابی لید برای شرکت املاک منطقه ای',
      ar: 'أتمتة خط تأهيل العملاء المحتملين لشركة عقارية إقليمية'
    },
    summary: {
      en: 'Agentic workflows now score, enrich, and route inbound leads in minutes.',
      fa: 'ورک فلوهای ایجنتی اکنون لیدهای ورودی را در چند دقیقه امتیازدهی، غنی سازی و مسیردهی می کنند.',
      ar: 'تدفقات الوكلاء باتت تقيّم وتثري وتوجّه العملاء المحتملين خلال دقائق.'
    },
    challenge: {
      en: 'Sales teams manually reviewed every inquiry, delaying follow-up and losing high-intent buyers.',
      fa: 'تیم فروش همه درخواست ها را دستی بررسی می کرد و همین باعث تاخیر و از دست رفتن خریداران جدی می شد.',
      ar: 'كان فريق المبيعات يراجع كل استفسار يدويا مما أخر المتابعة وأضاع العملاء الجادين.'
    },
    approach: {
      en: ['Created lead scoring logic from historical deals.', 'Connected WhatsApp and website forms into one queue.', 'Triggered agent summaries and next-action recommendations.'],
      fa: ['منطق امتیازدهی لید را از معاملات گذشته استخراج کردیم.', 'واتساپ و فرم وب سایت را در یک صف واحد متصل کردیم.', 'خلاصه ایجنتی و پیشنهاد اقدام بعدی را فعال کردیم.'],
      ar: ['أنشأنا منطق تقييم للعملاء من بيانات الصفقات السابقة.', 'ربطنا واتساب ونماذج الموقع في قائمة موحدة.', 'فعّلنا ملخصات الوكيل واقتراحات الخطوة التالية.']
    },
    results: {
      en: ['2.4x faster lead response', '27% higher qualified meeting rate', '46% less manual triage work'],
      fa: ['۲.۴ برابر سرعت بیشتر پاسخ به لید', '۲۷٪ رشد نرخ جلسات واجد شرایط', '۴۶٪ کاهش کار دستی تریاژ'],
      ar: ['تسريع الرد على العملاء 2.4x', 'زيادة الاجتماعات المؤهلة 27٪', 'خفض أعمال الفرز اليدوي 46٪']
    },
    stack: ['Next.js', 'n8n', 'Redis', 'OpenAI', 'HubSpot API'],
    updatedAt: '2025-12-02'
  },
  {
    slug: 'saas-graphrag-analytics',
    industry: {en: 'SaaS', fa: 'سرویس نرم افزاری', ar: 'البرمجيات كخدمة'},
    title: {
      en: 'GraphRAG analytics assistant for product and support intelligence',
      fa: 'دستیار تحلیلی GraphRAG برای هوش محصول و پشتیبانی',
      ar: 'مساعد تحليلي GraphRAG لذكاء المنتج والدعم'
    },
    summary: {
      en: 'Enabled teams to ask multi-hop questions across tickets, product docs, and release logs.',
      fa: 'تیم ها اکنون می توانند سوال های چندمرحله ای روی تیکت ها، مستندات محصول و لاگ انتشار بپرسند.',
      ar: 'مكّن الفرق من طرح أسئلة متعددة القفزات عبر التذاكر ووثائق المنتج وسجلات الإصدارات.'
    },
    challenge: {
      en: 'Knowledge was distributed across docs, issue trackers, and BI dashboards with no connected context.',
      fa: 'دانش در مستندات، سیستم ایشو و داشبورد BI پراکنده بود و کانتکست یکپارچه نداشت.',
      ar: 'المعرفة كانت موزعة بين الوثائق ومتتبعات القضايا ولوحات التحليل دون سياق موحد.'
    },
    approach: {
      en: ['Built an entity graph spanning product features, bugs, and customer segments.', 'Added GraphRAG retriever for multi-step reasoning.', 'Implemented quality evals with factuality benchmarks.'],
      fa: ['گراف موجودیت بین فیچرها، باگ ها و سگمنت مشتری ساختیم.', 'بازیاب GraphRAG برای استدلال چندمرحله ای اضافه شد.', 'ارزیابی کیفیت با بنچمارک واقعیت سنجی پیاده سازی شد.'],
      ar: ['بنينا رسم كيانات يربط الميزات والأخطاء وشرائح العملاء.', 'أضفنا مسترجع GraphRAG للاستدلال متعدد الخطوات.', 'طبقنا تقييمات جودة مع معايير دقة الحقائق.']
    },
    results: {
      en: ['39% faster root-cause discovery', '22% drop in duplicate issue reports', 'Executive reporting cycle cut from weekly to daily'],
      fa: ['۳۹٪ سرعت بیشتر در کشف ریشه مشکل', '۲۲٪ کاهش گزارش های تکراری', 'چرخه گزارش مدیریت از هفتگی به روزانه رسید'],
      ar: ['تسريع اكتشاف السبب الجذري 39٪', 'انخفاض التقارير المكررة 22٪', 'تحويل تقارير الإدارة من أسبوعية إلى يومية']
    },
    stack: ['LlamaIndex', 'Neo4j', 'Postgres', 'FastAPI', 'Vercel'],
    updatedAt: '2025-11-14'
  }
];
