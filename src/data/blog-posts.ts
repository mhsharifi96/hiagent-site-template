import type {Locale} from '@/lib/site';

export type BlogPost = {
  slug: string;
  publishedAt: string;
  author: string;
  category: Record<Locale, string>;
  tags: string[];
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  content: Record<Locale, string>;
};

const markdown = {
  rag: {
    en: `## Why RAG still wins in 2026\nRAG lets teams ship domain expertise fast without retraining every model.\n\n## Production checklist\n- Build reliable ingestion and chunking\n- Track citation quality\n- Add fallback flows for low-confidence answers\n\n## What to measure\nMeasure groundedness, latency, and user task completion in one dashboard.`,
    fa: `## چرا RAG هنوز برنده است\nRAG امکان ارائه دانش تخصصی را بدون آموزش مجدد مداوم مدل فراهم می کند.\n\n## چک لیست پروداکشن\n- جریان ورود داده و چانکینگ پایدار\n- پایش کیفیت ارجاع\n- فلو بازگشت برای پاسخ کم اطمینان\n\n## چه چیز را اندازه بگیریم\nواقعیت سنجی، تاخیر و تکمیل وظیفه کاربر را همزمان بسنجید.`,
    ar: `## لماذا ما زال RAG يتفوق\nيتيح RAG تقديم معرفة المجال بسرعة دون إعادة تدريب مستمرة للنموذج.\n\n## قائمة جاهزية الإنتاج\n- إدخال بيانات وتقسيم موثوق\n- تتبع جودة الاستشهادات\n- مسارات بديلة للإجابات منخفضة الثقة\n\n## ما الذي يجب قياسه\nقِس دقة الحقائق وزمن الاستجابة وإتمام المهمة في لوحة واحدة.`
  },
  graphrag: {
    en: `## GraphRAG vs vector-only retrieval\nGraphRAG captures relationships across entities and events.\n\n## Ideal use cases\n- Compliance and legal workflows\n- Product analytics across releases\n- Multi-document investigations\n\n## Implementation tip\nStart with a narrow ontology and expand it with real user questions.`,
    fa: `## مقایسه GraphRAG با بازیابی صرفا برداری\nGraphRAG رابطه بین موجودیت ها و رویدادها را حفظ می کند.\n\n## موارد استفاده مناسب\n- ورک فلوهای انطباق و حقوقی\n- تحلیل محصول در نسخه های مختلف\n- تحقیق چندسندی\n\n## نکته پیاده سازی\nبا آنتولوژی محدود شروع کنید و با سوالات واقعی توسعه دهید.`,
    ar: `## GraphRAG مقابل الاسترجاع المتجهي فقط\nGraphRAG يحافظ على العلاقات بين الكيانات والأحداث.\n\n## أفضل حالات الاستخدام\n- الامتثال والمسارات القانونية\n- تحليلات المنتج عبر الإصدارات\n- التحقيقات متعددة المستندات\n\n## نصيحة تنفيذ\nابدأ بأنطولوجيا ضيقة ثم وسّعها حسب أسئلة المستخدمين.`
  },
  agentic: {
    en: `## Agentic workflows for operations\nAgentic systems should act only with clear guardrails.\n\n## Core blocks\n- Planner\n- Tool router\n- Policy checker\n- Human approval gate\n\n## Failure mode to avoid\nDo not let autonomous loops write to production systems without a rollback plan.`,
    fa: `## ورک فلوهای ایجنتی برای عملیات\nسیستم ایجنتی باید فقط با گاردریل شفاف اقدام کند.\n\n## بلوک های اصلی\n- برنامه ریز\n- روتر ابزار\n- بررسی سیاست\n- دروازه تایید انسانی\n\n## خطای رایج\nلوپ خودکار را بدون برنامه بازگشت به سیستم اصلی متصل نکنید.`,
    ar: `## سير عمل وكلائي للعمليات\nيجب أن يتصرف النظام الوكيل ضمن ضوابط واضحة.\n\n## المكونات الأساسية\n- المخطط\n- موجه الأدوات\n- مدقق السياسات\n- بوابة الموافقة البشرية\n\n## خطأ يجب تجنبه\nلا تسمح للحلقات الذاتية بالكتابة على أنظمة الإنتاج دون خطة تراجع.`
  }
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'production-rag-checklist',
    publishedAt: '2026-02-01',
    author: 'HiAgent Editorial Team',
    category: {en: 'RAG', fa: 'RAG', ar: 'RAG'},
    tags: ['RAG', 'MLOps', 'Knowledge Retrieval'],
    title: {
      en: 'Production RAG Checklist: From Prototype to Reliable Assistant',
      fa: 'چک لیست RAG در پروداکشن: از پروتوتایپ تا دستیار قابل اعتماد',
      ar: 'قائمة RAG للإنتاج: من النموذج الأولي إلى مساعد موثوق'
    },
    excerpt: {
      en: 'A practical framework for shipping RAG systems with quality, governance, and speed.',
      fa: 'یک چارچوب عملی برای عرضه RAG با کیفیت، حاکمیت و سرعت.',
      ar: 'إطار عملي لإطلاق أنظمة RAG بجودة وحوكمة وسرعة.'
    },
    content: markdown.rag
  },
  {
    slug: 'graphrag-architecture',
    publishedAt: '2026-01-22',
    author: 'HiAgent Research',
    category: {en: 'GraphRAG', fa: 'GraphRAG', ar: 'GraphRAG'},
    tags: ['GraphRAG', 'Knowledge Graph', 'Architecture'],
    title: {
      en: 'GraphRAG Architecture for Enterprise Knowledge Engines',
      fa: 'معماری GraphRAG برای موتورهای دانش سازمانی',
      ar: 'معمارية GraphRAG لمحركات المعرفة المؤسسية'
    },
    excerpt: {
      en: 'How to combine entity graphs with retrieval for multi-hop reasoning at scale.',
      fa: 'چگونه گراف موجودیت را با بازیابی ترکیب کنیم تا استدلال چندمرحله ای مقیاس پذیر شود.',
      ar: 'كيفية دمج رسوم الكيانات مع الاسترجاع للاستدلال متعدد الخطوات على نطاق واسع.'
    },
    content: markdown.graphrag
  },
  {
    slug: 'agentic-workflows-b2b',
    publishedAt: '2026-01-09',
    author: 'HiAgent Delivery',
    category: {en: 'AI Agents', fa: 'ایجنت AI', ar: 'وكلاء AI'},
    tags: ['AI Agents', 'Workflow Automation', 'Operations'],
    title: {
      en: 'Designing Agentic Workflows for B2B Operations',
      fa: 'طراحی ورک فلوهای ایجنتی برای عملیات B2B',
      ar: 'تصميم سير عمل وكلائي لعمليات B2B'
    },
    excerpt: {
      en: 'Build dependable AI agents with guardrails, approvals, and observability.',
      fa: 'ساخت ایجنت قابل اتکا با گاردریل، تایید و مشاهده پذیری.',
      ar: 'ابنِ وكلاء موثوقين مع الضوابط والموافقات وقابلية المراقبة.'
    },
    content: markdown.agentic
  },
  {
    slug: 'ai-roadmap-executives',
    publishedAt: '2025-12-21',
    author: 'HiAgent Strategy',
    category: {en: 'Consulting', fa: 'مشاوره', ar: 'استشارات'},
    tags: ['AI Strategy', 'Leadership', 'ROI'],
    title: {
      en: 'AI Roadmap for Executives: 90-Day Plan That Actually Ships',
      fa: 'نقشه راه AI برای مدیران: برنامه ۹۰ روزه قابل اجرا',
      ar: 'خارطة طريق AI للمديرين: خطة 90 يوما قابلة للتنفيذ'
    },
    excerpt: {
      en: 'Prioritize high-impact AI initiatives and avoid expensive dead ends.',
      fa: 'پروژه های AI اثرگذار را اولویت بندی کنید و از بن بست های پرهزینه دور بمانید.',
      ar: 'رتّب مبادرات AI عالية الأثر وتجنب المسارات المكلفة بلا نتيجة.'
    },
    content: markdown.agentic
  },
  {
    slug: 'automation-roi-framework',
    publishedAt: '2025-12-05',
    author: 'HiAgent Growth',
    category: {en: 'Automation', fa: 'اتوماسیون', ar: 'الأتمتة'},
    tags: ['Automation', 'ROI', 'KPIs'],
    title: {
      en: 'Automation ROI Framework for Service Teams',
      fa: 'چارچوب ROI اتوماسیون برای تیم های سرویس',
      ar: 'إطار عائد الأتمتة لفرق الخدمات'
    },
    excerpt: {
      en: 'A scorecard to evaluate where automation creates measurable business value.',
      fa: 'یک اسکورکارت برای تشخیص محل هایی که اتوماسیون ارزش قابل اندازه گیری ایجاد می کند.',
      ar: 'بطاقة تقييم لتحديد أين تصنع الأتمتة قيمة أعمال قابلة للقياس.'
    },
    content: markdown.agentic
  },
  {
    slug: 'prompt-systems-for-brand',
    publishedAt: '2025-11-25',
    author: 'HiAgent Creative Lab',
    category: {en: 'Creative AI', fa: 'AI خلاق', ar: 'الذكاء الإبداعي'},
    tags: ['Generative AI', 'Brand', 'Creative Ops'],
    title: {
      en: 'Prompt Systems for Brand-Consistent AI Creative',
      fa: 'سیستم پرامپت برای محتوای خلاق AI همسو با برند',
      ar: 'أنظمة تلقين لإبداع AI متسق مع العلامة'
    },
    excerpt: {
      en: 'Turn one-off prompts into repeatable creative pipelines your team can trust.',
      fa: 'پرامپت های پراکنده را به پایپلاین خلاقه قابل تکرار تبدیل کنید.',
      ar: 'حوّل التلقينات الفردية إلى خطوط إبداعية قابلة للتكرار.'
    },
    content: markdown.rag
  },
  {
    slug: 'knowledge-graph-playbook',
    publishedAt: '2025-11-08',
    author: 'HiAgent Research',
    category: {en: 'GraphRAG', fa: 'GraphRAG', ar: 'GraphRAG'},
    tags: ['Knowledge Graph', 'GraphRAG', 'Data Modeling'],
    title: {
      en: 'Knowledge Graph Playbook for AI Teams',
      fa: 'راهنمای عملی گراف دانش برای تیم های AI',
      ar: 'دليل الرسم المعرفي لفرق الذكاء الاصطناعي'
    },
    excerpt: {
      en: 'Model entities, relationships, and context to unlock better retrieval and reasoning.',
      fa: 'موجودیت ها، رابطه ها و کانتکست را مدل کنید تا بازیابی و استدلال بهتر شود.',
      ar: 'نمذج الكيانات والعلاقات والسياق لرفع جودة الاسترجاع والاستدلال.'
    },
    content: markdown.graphrag
  },
  {
    slug: 'nextjs-ai-product-seo',
    publishedAt: '2025-10-29',
    author: 'HiAgent Marketing',
    category: {en: 'SEO', fa: 'سئو', ar: 'SEO'},
    tags: ['Next.js', 'SEO', 'AI Product'],
    title: {
      en: 'SEO for Next.js AI Products: Technical Foundations That Convert',
      fa: 'سئوی محصولات AI در Next.js: زیرساخت فنی تبدیل محور',
      ar: 'SEO لمنتجات AI المبنية بـ Next.js: أسس تقنية تحقق التحويل'
    },
    excerpt: {
      en: 'Metadata, schema, multilingual routing, and internal linking strategy for serious growth.',
      fa: 'متادیتا، اسکیما، روتینگ چندزبانه و لینک سازی داخلی برای رشد واقعی.',
      ar: 'البيانات الوصفية والمخططات والتوجيه متعدد اللغات والربط الداخلي للنمو الحقيقي.'
    },
    content: markdown.rag
  }
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
