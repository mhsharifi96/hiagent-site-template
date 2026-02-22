import type {Locale} from '@/lib/site';

type Localized = Record<Locale, string>;

export const processSteps: {title: Localized; description: Localized}[] = [
  {
    title: {en: 'Discovery', fa: 'کشف نیاز', ar: 'الاكتشاف'},
    description: {
      en: 'Map goals, constraints, systems, and ROI metrics.',
      fa: 'هدف ها، محدودیت ها، سیستم ها و شاخص ROI را شفاف می کنیم.',
      ar: 'نحدد الأهداف والقيود والأنظمة ومؤشرات العائد.'
    }
  },
  {
    title: {en: 'Architecture', fa: 'معماری', ar: 'المعمارية'},
    description: {
      en: 'Define data flow, model stack, and security boundaries.',
      fa: 'جریان داده، استک مدل و مرزهای امنیتی طراحی می شود.',
      ar: 'نحدد تدفق البيانات ومكدس النماذج وحدود الأمان.'
    }
  },
  {
    title: {en: 'Prototype', fa: 'نمونه اولیه', ar: 'النموذج الأولي'},
    description: {
      en: 'Deliver a fast pilot with measurable acceptance criteria.',
      fa: 'یک پایلوت سریع با معیارهای پذیرش قابل اندازه گیری تحویل می دهیم.',
      ar: 'نقدم تجربة أولية سريعة بمعايير قبول قابلة للقياس.'
    }
  },
  {
    title: {en: 'Delivery', fa: 'تحویل', ar: 'التسليم'},
    description: {
      en: 'Move to production with monitoring and runbooks.',
      fa: 'با مانیتورینگ و ران بوک وارد محیط پروداکشن می شویم.',
      ar: 'ننقل الحل للإنتاج مع المراقبة ودلائل التشغيل.'
    }
  },
  {
    title: {en: 'Support', fa: 'پشتیبانی', ar: 'الدعم'},
    description: {
      en: 'Iterate quality, prompts, and automations after launch.',
      fa: 'بعد از لانچ کیفیت، پرامپت و اتوماسیون را بهبود می دهیم.',
      ar: 'بعد الإطلاق نطور الجودة والتلقين والأتمتة.'
    }
  }
];

export const useCases: {name: Localized; detail: Localized}[] = [
  {
    name: {en: 'eCommerce', fa: 'تجارت الکترونیک', ar: 'التجارة الإلكترونية'},
    detail: {
      en: 'Support copilots, catalog intelligence, and conversion workflows.',
      fa: 'کوپایلوت پشتیبانی، هوش کاتالوگ و ورک فلو تبدیل.',
      ar: 'مساعدات دعم وذكاء الكتالوج ومسارات التحويل.'
    }
  },
  {
    name: {en: 'Real Estate', fa: 'املاک', ar: 'العقارات'},
    detail: {
      en: 'Lead qualification, listing assistants, and campaign automation.',
      fa: 'ارزیابی لید، دستیار لیستینگ و اتوماسیون کمپین.',
      ar: 'تأهيل العملاء ومساعدات العروض وأتمتة الحملات.'
    }
  },
  {
    name: {en: 'Healthcare', fa: 'سلامت', ar: 'الرعاية الصحية'},
    detail: {
      en: 'Knowledge retrieval for operations and patient support teams.',
      fa: 'بازیابی دانش برای عملیات و تیم های پشتیبانی بیماران.',
      ar: 'استرجاع معرفة لفرق التشغيل ودعم المرضى.'
    }
  },
  {
    name: {en: 'Education', fa: 'آموزش', ar: 'التعليم'},
    detail: {
      en: 'Adaptive tutoring agents and content generation pipelines.',
      fa: 'ایجنت آموزش تطبیقی و پایپلاین تولید محتوا.',
      ar: 'وكلاء تعليم تكيفي وخطوط إنتاج محتوى.'
    }
  },
  {
    name: {en: 'SaaS', fa: 'سرویس نرم افزاری', ar: 'البرمجيات كخدمة'},
    detail: {
      en: 'Product intelligence assistants, support automation, and analytics.',
      fa: 'دستیار هوش محصول، اتوماسیون پشتیبانی و تحلیل.',
      ar: 'مساعدات ذكاء المنتج وأتمتة الدعم والتحليلات.'
    }
  },
  {
    name: {en: 'Media', fa: 'رسانه', ar: 'الإعلام'},
    detail: {
      en: 'AI media generation pipelines and editorial copilots.',
      fa: 'پایپلاین تولید رسانه با AI و کوپایلوت تحریریه.',
      ar: 'خطوط إنتاج وسائط بالذكاء الاصطناعي ومساعدات تحريرية.'
    }
  }
];

export const faqs: {question: Localized; answer: Localized}[] = [
  {
    question: {
      en: 'How quickly can we launch the first AI workflow?',
      fa: 'اولین ورک فلو AI را چقدر سریع می توانیم راه اندازی کنیم؟',
      ar: 'كم نحتاج لإطلاق أول سير عمل بالذكاء الاصطناعي؟'
    },
    answer: {
      en: 'Most teams launch a scoped pilot in 2-4 weeks. Week 1 covers discovery and data mapping, week 2 builds the first workflow, and weeks 3-4 focus on evaluation, guardrails, and team handover. After validation, we expand to more use cases with the same architecture.',
      fa: 'اغلب تیم ها در ۲ تا ۴ هفته یک پایلوت محدود راه اندازی می کنند. هفته اول برای کشف نیاز و نقشه داده است، هفته دوم برای ساخت اولین ورک فلو و هفته های ۳ و ۴ برای ارزیابی، گاردریل و تحویل به تیم شما. بعد از اعتبارسنجی، همان معماری برای سناریوهای بیشتر توسعه می یابد.',
      ar: 'غالبا نطلق تجربة محددة خلال 2-4 أسابيع. الأسبوع الأول للاكتشاف ورسم خريطة البيانات، والثاني لبناء أول سير عمل، ثم الأسبوعان 3-4 للتقييم والضوابط وتسليم الفريق. بعد التحقق نوسع نفس المعمارية لحالات استخدام إضافية.'
    }
  },
  {
    question: {
      en: 'Do you work with our current stack?',
      fa: 'آیا با استک فعلی ما کار می کنید؟',
      ar: 'هل تعملون مع تقنيتنا الحالية؟'
    },
    answer: {
      en: 'Yes. We are stack-agnostic and integrate with modern cloud tools and legacy systems. We usually keep your existing CRM, database, and support tools, then add an API-first orchestration layer so you avoid expensive platform migration.',
      fa: 'بله. ما وابسته به ابزار خاص نیستیم و با استک های ابری مدرن و سیستم های قدیمی کار می کنیم. معمولاً CRM، دیتابیس و ابزار پشتیبانی فعلی شما حفظ می شود و یک لایه ارکستریشن API-first اضافه می کنیم تا نیاز به مهاجرت پرهزینه نباشد.',
      ar: 'نعم. نحن غير مقيدين بتقنية محددة ونتكامل مع الأدوات السحابية الحديثة والأنظمة القديمة. غالبا نحافظ على CRM وقاعدة البيانات وأدوات الدعم الحالية، ثم نضيف طبقة تنسيق API-first لتفادي هجرة مكلفة.'
    }
  },
  {
    question: {
      en: 'How do you handle data privacy and security?',
      fa: 'حریم خصوصی و امنیت داده را چگونه مدیریت می کنید؟',
      ar: 'كيف تديرون خصوصية البيانات والأمان؟'
    },
    answer: {
      en: 'Security is designed from day one: role-based access, encrypted transport, environment isolation, audit logs, and model boundaries. We also define data retention policy, prompt safety rules, and human approval gates for sensitive actions.',
      fa: 'امنیت از روز اول در معماری دیده می شود: دسترسی مبتنی بر نقش، ارتباط رمزنگاری شده، جداسازی محیط ها، لاگ ممیزی و مرزهای مدل. همچنین سیاست نگهداری داده، قوانین ایمنی پرامپت و دروازه تایید انسانی برای اقدامات حساس تعریف می شود.',
      ar: 'الأمان جزء أساسي منذ البداية: صلاحيات حسب الدور، نقل مشفر، عزل البيئات، سجلات تدقيق، وحدود للنموذج. كما نحدد سياسة الاحتفاظ بالبيانات وقواعد سلامة التلقين وبوابات موافقة بشرية للإجراءات الحساسة.'
    }
  },
  {
    question: {
      en: 'Can you train our team after delivery?',
      fa: 'پس از تحویل می توانید تیم ما را آموزش دهید؟',
      ar: 'هل يمكنكم تدريب فريقنا بعد التسليم؟'
    },
    answer: {
      en: 'Yes. Every delivery includes enablement sessions for technical and business users, plus operational documentation. Your team receives runbooks, escalation flow, and KPI dashboard guidance so ownership can move in-house smoothly.',
      fa: 'بله. هر پروژه شامل جلسه توانمندسازی برای کاربران فنی و کسب و کاری و همچنین مستندات عملیاتی است. تیم شما ران بوک، فلو ارجاع خطا و راهنمای داشبورد KPI دریافت می کند تا انتقال مالکیت بدون اصطکاک انجام شود.',
      ar: 'نعم. كل مشروع يتضمن جلسات تمكين للمستخدمين التقنيين والتجاريين مع وثائق تشغيلية كاملة. يحصل فريقك على أدلة تشغيل ومسار تصعيد وإرشادات لوحة KPI لضمان انتقال الملكية داخليا بسلاسة.'
    }
  },
  {
    question: {
      en: 'How do you measure ROI and success after launch?',
      fa: 'پس از راه اندازی، بازگشت سرمایه و موفقیت را چگونه اندازه می گیرید؟',
      ar: 'كيف تقيسون العائد والنجاح بعد الإطلاق؟'
    },
    answer: {
      en: 'At kickoff, we define baseline metrics such as response time, resolution rate, conversion lift, and manual effort reduction. After launch, we track weekly trends and compare them to baseline so business impact is visible and decision-ready.',
      fa: 'در شروع پروژه، شاخص پایه مانند زمان پاسخ، نرخ حل، رشد تبدیل و کاهش کار دستی مشخص می شود. پس از راه اندازی، روند هفتگی اندازه گیری و با خط پایه مقایسه می شود تا اثر کسب و کاری شفاف و قابل تصمیم گیری باشد.',
      ar: 'في بداية المشروع نحدد خطا أساسيا لمؤشرات مثل زمن الاستجابة ومعدل الحل ورفع التحويل وتقليل الجهد اليدوي. بعد الإطلاق نتابع الاتجاهات أسبوعيا ونقارنها بالخط الأساسي لإظهار الأثر التجاري بوضوح.'
    }
  },
  {
    question: {
      en: 'What support model do you provide after go-live?',
      fa: 'پس از راه اندازی نهایی چه مدل پشتیبانی ارائه می دهید؟',
      ar: 'ما نموذج الدعم الذي تقدمونه بعد الإطلاق؟'
    },
    answer: {
      en: 'We offer two options: a fixed stabilization window after delivery, or an ongoing monthly optimization retainer. Both include monitoring, prompt/model tuning, incident response, and roadmap updates based on real usage data.',
      fa: 'دو مدل داریم: یک بازه تثبیت ثابت پس از تحویل، یا رتینر ماهانه بهینه سازی مستمر. هر دو مدل شامل مانیتورینگ، تنظیم پرامپت و مدل، رسیدگی به رخداد و به روزرسانی نقشه راه بر اساس داده واقعی استفاده است.',
      ar: 'نوفر خيارين: فترة تثبيت محددة بعد التسليم، أو عقد تحسين شهري مستمر. كلا الخيارين يشملان المراقبة وضبط التلقين والنموذج والاستجابة للحوادث وتحديث خارطة الطريق بناء على بيانات الاستخدام الفعلية.'
    }
  }
];

export const testimonials: {quote: Localized; name: Localized; role: Localized}[] = [
  {
    quote: {
      en: 'HiAgent turned our scattered AI experiments into a reliable revenue pipeline.',
      fa: 'HiAgent آزمایش های پراکنده AI ما را به یک پایپلاین درآمدی قابل اعتماد تبدیل کرد.',
      ar: 'حوّلت HiAgent تجاربنا المتفرقة في AI إلى خط إيراد موثوق.'
    },
    name: {en: 'Head of Growth, Retail SaaS', fa: 'مدیر رشد، SaaS خرده فروشی', ar: 'مدير النمو، SaaS تجزئة'},
    role: {en: 'Client testimonial', fa: 'نظر مشتری', ar: 'شهادة عميل'}
  },
  {
    quote: {
      en: 'Their GraphRAG architecture gave our analysts answers we could trust instantly.',
      fa: 'معماری GraphRAG آن ها پاسخ های قابل اعتماد و فوری به تحلیلگران ما داد.',
      ar: 'معمارية GraphRAG لديهم منحت محللينا إجابات موثوقة وفورية.'
    },
    name: {en: 'Product Director, Fintech', fa: 'مدیر محصول، فین تک', ar: 'مدير المنتج، فينتك'},
    role: {en: 'Client testimonial', fa: 'نظر مشتری', ar: 'شهادة عميل'}
  }
];
