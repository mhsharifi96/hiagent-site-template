import type {Locale} from '@/lib/site';
import type {ServiceIconName} from '@/components/ui/service-icon';

export type Localized = Record<Locale, string>;

export type Service = {
  slug: string;
  icon: ServiceIconName;
  title: Localized;
  summary: Localized;
  problem: Localized;
  solution: Localized;
  deliverables: Record<Locale, string[]>;
  timeline: Localized;
  pricing: Localized;
  relatedPosts: string[];
};

export const services: Service[] = [
  {
    slug: 'rag-systems',
    icon: 'DatabaseZap',
    title: {
      en: 'RAG Systems',
      fa: 'سیستم های RAG',
      ar: 'أنظمة RAG'
    },
    summary: {
      en: 'Production-grade retrieval augmented generation for your internal knowledge.',
      fa: 'پیاده سازی RAG در سطح پروداکشن برای دانش سازمانی شما.',
      ar: 'حلول RAG على مستوى الإنتاج لقاعدة المعرفة الداخلية.'
    },
    problem: {
      en: 'Teams waste hours searching scattered docs and still answer customers inconsistently.',
      fa: 'تیم ها ساعت ها در اسناد پراکنده جستجو می کنند و هنوز پاسخ ها یکپارچه نیست.',
      ar: 'الفرق تضيع ساعات في البحث داخل مستندات متفرقة مع ردود غير متسقة.'
    },
    solution: {
      en: 'We build secure RAG pipelines that index your data and deliver grounded responses with citations.',
      fa: 'ما پایپلاین RAG امن می سازیم تا داده ها ایندکس شوند و پاسخ های مستند ارائه گردد.',
      ar: 'نبني خطوط RAG آمنة لفهرسة البيانات وتقديم إجابات موثقة بالمراجع.'
    },
    deliverables: {
      en: ['Data ingestion pipeline', 'Vector indexing strategy', 'Citation-enabled chat interface', 'Monitoring dashboard'],
      fa: ['پایپلاین ورود داده', 'استراتژی ایندکس برداری', 'رابط چت با ارجاع', 'داشبورد مانیتورینگ'],
      ar: ['خط إدخال البيانات', 'استراتيجية الفهرسة المتجهية', 'واجهة محادثة بالمراجع', 'لوحة مراقبة']
    },
    timeline: {
      en: '4-8 weeks depending on data quality and connectors.',
      fa: '۴ تا ۸ هفته بر اساس کیفیت داده و کانکتورها.',
      ar: 'من 4 إلى 8 أسابيع حسب جودة البيانات والموصلات.'
    },
    pricing: {
      en: 'Starting at $8,000 or monthly retainer.',
      fa: 'شروع از ۸۰۰۰ دلار یا قرارداد ماهانه.',
      ar: 'تبدأ من 8000 دولار أو بعقد شهري.'
    },
    relatedPosts: ['rag-vs-fine-tuning', 'production-rag-checklist']
  },
  {
    slug: 'graphrag-knowledge-engines',
    icon: 'Network',
    title: {
      en: 'GraphRAG Knowledge Engines',
      fa: 'موتورهای دانشی GraphRAG',
      ar: 'محركات معرفة GraphRAG'
    },
    summary: {
      en: 'Context-rich reasoning using graph relationships and entity memory.',
      fa: 'استدلال مبتنی بر رابطه های گرافی و حافظه موجودیت ها.',
      ar: 'استدلال سياقي أعمق عبر علاقات الرسم البياني وذاكرة الكيانات.'
    },
    problem: {
      en: 'Flat vector search misses multi-hop relationships in complex domains.',
      fa: 'جستجوی برداری ساده رابطه های چندمرحله ای حوزه های پیچیده را از دست می دهد.',
      ar: 'البحث المتجهي المسطح يفقد العلاقات متعددة الخطوات في المجالات المعقدة.'
    },
    solution: {
      en: 'We design GraphRAG architectures with entity extraction, graph stores, and hybrid retrieval.',
      fa: 'ما معماری GraphRAG با استخراج موجودیت، گراف استور و بازیابی هیبریدی طراحی می کنیم.',
      ar: 'نصمم بنية GraphRAG تشمل استخراج الكيانات ومخازن الرسم البياني والاسترجاع الهجين.'
    },
    deliverables: {
      en: ['Ontology and graph schema', 'Entity extraction workflow', 'Hybrid retriever', 'Evaluation suite'],
      fa: ['آنتولوژی و اسکیما گراف', 'جریان استخراج موجودیت', 'بازیاب هیبریدی', 'مجموعه ارزیابی'],
      ar: ['أنطولوجيا ومخطط الرسم البياني', 'سير عمل استخراج الكيانات', 'مسترجع هجين', 'حزمة تقييم']
    },
    timeline: {
      en: '6-12 weeks with iterative quality benchmarks.',
      fa: '۶ تا ۱۲ هفته همراه با بنچمارک کیفیت مرحله ای.',
      ar: 'من 6 إلى 12 أسبوعا مع معايير جودة تدريجية.'
    },
    pricing: {
      en: 'Starting at $12,000 depending on graph complexity.',
      fa: 'شروع از ۱۲۰۰۰ دلار بسته به پیچیدگی گراف.',
      ar: 'تبدأ من 12000 دولار حسب تعقيد الرسم البياني.'
    },
    relatedPosts: ['graphrag-architecture', 'knowledge-graph-playbook']
  },
  {
    slug: 'ai-workflow-automation',
    icon: 'Workflow',
    title: {
      en: 'AI Workflow Automation',
      fa: 'اتوماسیون ورک فلو هوش مصنوعی',
      ar: 'أتمتة سير العمل بالذكاء الاصطناعي'
    },
    summary: {
      en: 'Automate repetitive operations from lead intake to reporting.',
      fa: 'خودکارسازی عملیات تکراری از دریافت لید تا گزارش گیری.',
      ar: 'أتمتة العمليات المتكررة من استقبال العملاء المحتملين حتى التقارير.'
    },
    problem: {
      en: 'Manual workflows create bottlenecks, delays, and expensive errors.',
      fa: 'فرآیندهای دستی باعث گلوگاه، تاخیر و خطای پرهزینه می شوند.',
      ar: 'العمليات اليدوية تخلق اختناقات وتأخيرا وأخطاء مكلفة.'
    },
    solution: {
      en: 'We orchestrate AI + API automation flows that connect your CRM, helpdesk, and operations tools.',
      fa: 'ما فلوهای اتوماسیون AI+API را بین CRM، هلپ دسک و ابزارهای عملیاتی شما هماهنگ می کنیم.',
      ar: 'نقوم بتنسيق تدفقات AI + API التي تربط CRM ومركز الدعم وأدوات التشغيل.'
    },
    deliverables: {
      en: ['Workflow maps', 'Automation scripts', 'SLA alerts', 'Governance controls'],
      fa: ['نقشه ورک فلو', 'اسکریپت های اتوماسیون', 'هشدار SLA', 'کنترل های حاکمیتی'],
      ar: ['خرائط سير العمل', 'سكريبتات الأتمتة', 'تنبيهات SLA', 'ضوابط الحوكمة']
    },
    timeline: {
      en: '3-6 weeks for first automation lane.',
      fa: '۳ تا ۶ هفته برای اولین لاین اتوماسیون.',
      ar: 'من 3 إلى 6 أسابيع لأول مسار أتمتة.'
    },
    pricing: {
      en: 'Project-based or monthly optimization package.',
      fa: 'پروژه ای یا پکیج بهینه سازی ماهانه.',
      ar: 'بنظام المشروع أو باقة تحسين شهرية.'
    },
    relatedPosts: ['agentic-workflows-b2b', 'automation-roi-framework']
  },
  {
    slug: 'custom-ai-agents',
    icon: 'Bot',
    title: {
      en: 'Custom AI Agents',
      fa: 'ایجنت های سفارشی AI',
      ar: 'وكلاء ذكاء اصطناعي مخصصون'
    },
    summary: {
      en: 'Task-specific autonomous agents with human-in-the-loop controls.',
      fa: 'ایجنت های خودکار مخصوص وظیفه همراه کنترل انسان در حلقه.',
      ar: 'وكلاء ذاتيون لمهام محددة مع آليات تحكم بشرية.'
    },
    problem: {
      en: 'Generic chatbots fail when workflows need memory, tools, and approvals.',
      fa: 'چت بات های عمومی وقتی حافظه، ابزار و تایید لازم است شکست می خورند.',
      ar: 'روبوتات المحادثة العامة تفشل عندما يتطلب سير العمل ذاكرة وأدوات وموافقات.'
    },
    solution: {
      en: 'We engineer robust agent loops with tool calling, guardrails, and audit logs.',
      fa: 'ما لوپ های ایجنتی پایدار با فراخوانی ابزار، گاردریل و لاگ ممیزی می سازیم.',
      ar: 'نطور حلقات وكلاء موثوقة مع استدعاء الأدوات والضوابط وسجلات التدقيق.'
    },
    deliverables: {
      en: ['Agent design spec', 'Prompt and memory strategy', 'Tool integrations', 'QA and red-team report'],
      fa: ['اسپک طراحی ایجنت', 'استراتژی پرامپت و حافظه', 'یکپارچه سازی ابزارها', 'گزارش QA و ردتیم'],
      ar: ['مواصفات تصميم الوكيل', 'استراتيجية التلقين والذاكرة', 'تكامل الأدوات', 'تقرير الجودة واختبار الاختراق']
    },
    timeline: {
      en: '4-10 weeks based on integration depth.',
      fa: '۴ تا ۱۰ هفته بر اساس عمق یکپارچه سازی.',
      ar: 'من 4 إلى 10 أسابيع حسب عمق التكامل.'
    },
    pricing: {
      en: 'Starting at $9,500 with phased delivery.',
      fa: 'شروع از ۹۵۰۰ دلار با تحویل مرحله ای.',
      ar: 'تبدأ من 9500 دولار مع تسليم مرحلي.'
    },
    relatedPosts: ['multi-agent-patterns', 'agent-evals-that-matter']
  },
  {
    slug: 'ai-video-photo-generation',
    icon: 'Sparkles',
    title: {
      en: 'AI Video & Photo Generation',
      fa: 'تولید ویدیو و تصویر با AI',
      ar: 'إنتاج الفيديو والصور بالذكاء الاصطناعي'
    },
    summary: {
      en: 'Custom branded creative pipelines for scalable media output.',
      fa: 'پایپلاین خلاقه برندمحور برای تولید رسانه در مقیاس.',
      ar: 'خطوط إبداعية مخصصة للعلامة التجارية لإنتاج وسائط قابلة للتوسع.'
    },
    problem: {
      en: 'Creative teams need speed but cannot sacrifice visual consistency.',
      fa: 'تیم خلاق به سرعت نیاز دارد اما نمی تواند یکپارچگی بصری را قربانی کند.',
      ar: 'الفرق الإبداعية تحتاج السرعة دون التضحية بالاتساق البصري.'
    },
    solution: {
      en: 'We build prompt libraries, style guards, and generation pipelines tailored to your brand.',
      fa: 'ما کتابخانه پرامپت، گارد استایل و پایپلاین تولید متناسب با برند شما طراحی می کنیم.',
      ar: 'نبني مكتبات تلقين وضوابط أسلوب وخطوط توليد متوافقة مع هويتك.'
    },
    deliverables: {
      en: ['Brand style prompt pack', 'Image/video workflow', 'Asset QA checklist', 'Creative handover docs'],
      fa: ['پک پرامپت هویت بصری', 'ورک فلو تصویر و ویدیو', 'چک لیست QA دارایی', 'مستند تحویل تیم خلاق'],
      ar: ['حزمة تلقين لهوية العلامة', 'سير عمل الصور والفيديو', 'قائمة فحص جودة الأصول', 'وثائق التسليم للفريق الإبداعي']
    },
    timeline: {
      en: '2-5 weeks for baseline production system.',
      fa: '۲ تا ۵ هفته برای سیستم تولید پایه.',
      ar: 'من 2 إلى 5 أسابيع لنظام إنتاج أساسي.'
    },
    pricing: {
      en: 'Starting at $4,000 + usage costs.',
      fa: 'شروع از ۴۰۰۰ دلار به علاوه هزینه مصرف.',
      ar: 'تبدأ من 4000 دولار بالإضافة إلى تكلفة الاستخدام.'
    },
    relatedPosts: ['ai-creative-pipeline', 'prompt-systems-for-brand']
  },
  {
    slug: 'consulting-integration',
    icon: 'Handshake',
    title: {
      en: 'Consulting & Integration',
      fa: 'مشاوره و یکپارچه سازی',
      ar: 'الاستشارات والتكامل'
    },
    summary: {
      en: 'Strategic AI roadmaps and implementation support for executive teams.',
      fa: 'نقشه راه استراتژیک AI و پشتیبانی اجرا برای تیم های مدیریتی.',
      ar: 'خارطة طريق استراتيجية للذكاء الاصطناعي ودعم التنفيذ للفرق القيادية.'
    },
    problem: {
      en: 'Companies struggle to prioritize AI initiatives with measurable ROI.',
      fa: 'شرکت ها در اولویت بندی پروژه های AI با ROI قابل اندازه گیری مشکل دارند.',
      ar: 'الشركات تواجه صعوبة في ترتيب مبادرات الذكاء الاصطناعي بعائد واضح.'
    },
    solution: {
      en: 'We run discovery workshops, architecture reviews, and integration sprints with your team.',
      fa: 'ما ورکشاپ کشف نیاز، بازبینی معماری و اسپرینت یکپارچه سازی را کنار تیم شما اجرا می کنیم.',
      ar: 'ننفذ ورش اكتشاف ومراجعات معمارية وسباقات تكامل مع فريقك.'
    },
    deliverables: {
      en: ['AI readiness audit', '90-day roadmap', 'Integration blueprint', 'Stakeholder training'],
      fa: ['ممیزی آمادگی AI', 'نقشه راه ۹۰ روزه', 'بلوبرینت یکپارچه سازی', 'آموزش ذی نفعان'],
      ar: ['تدقيق جاهزية الذكاء الاصطناعي', 'خارطة طريق 90 يوما', 'مخطط التكامل', 'تدريب أصحاب المصلحة']
    },
    timeline: {
      en: '2-4 weeks for strategic planning engagements.',
      fa: '۲ تا ۴ هفته برای پروژه های برنامه ریزی استراتژیک.',
      ar: 'من 2 إلى 4 أسابيع لمشاريع التخطيط الاستراتيجي.'
    },
    pricing: {
      en: 'Advisory retainer or fixed discovery package.',
      fa: 'رتینر مشاوره ای یا پکیج ثابت کشف نیاز.',
      ar: 'بنظام استشاري شهري أو باقة اكتشاف ثابتة.'
    },
    relatedPosts: ['ai-roadmap-executives', 'integration-anti-patterns']
  }
];
