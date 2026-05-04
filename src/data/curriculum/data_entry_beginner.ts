import { Level } from "../curriculum";

export const dataEntryBeginner: Level[] = [
  {
    id: 1,
    lessons: [
      {
        id: "1-1",
        title: "مبادئ الحاسوب للأعمال الإدارية",
        summary: "• التعرف على المكونات الأساسية للحاسوب (لوحة المفاتيح، الفأرة، الشاشة).\n• فهم دور عون إدراج المعلومات في المؤسسة الرقمية.\n• أساسيات التشغيل والإيقاف الآمن للجهاز.\n• التعامل مع سطح المكتب والرموز الأساسية.",
        illustrationDesc: "رسم تخطيطي يوضح رحلة البيانات من الورق إلى الحاسوب عبر عون الإدخال",
        quiz: [
          {
            question: "ما هي المهمة الأساسية لعون إدراج المعلومات؟",
            options: [
              { text: "إصلاح أجهزة الحاسوب", isCorrect: false },
              { text: "تحويل البيانات الورقية إلى رقمية", isCorrect: true },
              { text: "تصميم برامج معقدة", isCorrect: false },
              { text: "تطوير مواقع الإنترنت", isCorrect: false }
            ],
            feedback: "المهمة الأساسية هي الرقمنة وإدخال البيانات بدقة."
          },
          {
            question: "أي من المكونات التالية يعتبر وحدة 'إدخال'؟",
            options: [
              { text: "الشاشة", isCorrect: false },
              { text: "الطابعة", isCorrect: false },
              { text: "لوحة المفاتيح", isCorrect: true },
              { text: "السماعات", isCorrect: false }
            ],
            feedback: "لوحة المفاتيح هي الوسيلة الرئيسية لإدخال النصوص والبيانات."
          },
          {
            question: "ماذا يعني الرمز (Icon) على سطح المكتب؟",
            options: [
              { text: "خلفية للشاشة فقط", isCorrect: false },
              { text: "زر إيقاف التشغيل", isCorrect: false },
              { text: "اختصار لبرنامج أو ملف", isCorrect: true },
              { text: "جهاز تخزين خارجي", isCorrect: false }
            ],
            feedback: "الرموز هي اختصارات تسهل الوصول السريع للبرامج."
          }
        ]
      },
      {
        id: "1-2",
        title: "مهارات استخدام لوحة المفاتيح",
        summary: "• وضعية اليدين الصحيحة على لوحة المفاتيح (صف الارتكاز).\n• التعرف على مفاتيح الوظائف والمفاتيح الحرفية.\n• أهمية الجلسة الصحية لتفادي التعب.\n• تطبيقات عملية على طباعة الكلمات البسيطة.",
        illustrationDesc: "رسم يوضح توزيع الأصابع على صف الارتكاز في لوحة المفاتيح العربية",
        quiz: [
          {
            question: "أين يجب أن تضع أصابعك عند البدء في الكتابة؟",
            options: [
              { text: "على المفاتيح العلوية F1-F12", isCorrect: false },
              { text: "على صف الارتكاز في المنتصف", isCorrect: true },
              { text: "على لوحة الأرقام الجانبية", isCorrect: false },
              { text: "في أي مكان مريح", isCorrect: false }
            ],
            feedback: "صف الارتكاز هو المرجع الأساسي للكتابة السريعة بلمس المفاتيح."
          },
          {
            question: "ما هو المفتاح المستخدم لترك مسافة بين الكلمات؟",
            options: [
              { text: "Enter", isCorrect: false },
              { text: "Shift", isCorrect: false },
              { text: "مسطرة المسافات (Spacebar)", isCorrect: true },
              { text: "Alt", isCorrect: false }
            ],
            feedback: "تستخدم المسطرة لتمثيل الفراغات بين الكلمات."
          },
          {
            question: "لماذا نهتم بوضعية الجلوس؟",
            options: [
              { text: "لزيادة سرعة الحاسوب", isCorrect: false },
              { text: "لتحسين جودة الطباعة", isCorrect: false },
              { text: "للحفاظ على سلامة الظهر والمعصم", isCorrect: true },
              { text: "لأنها قوانين الشركة فقط", isCorrect: false }
            ],
            feedback: "بيئة العمل الصحية تحمي الحرفي من الإجهاد المهني."
          }
        ]
      },
      {
        id: "1-3",
        title: "أساسيات نظام التشغيل والملفات",
        summary: "• مفهوم الملفات والمجلدات وكيفية تنظيمها.\n• تسمية الملفات بطريقة مهنية صحيحة.\n• عمليات النسخ واللصق والنقل.\n• إدارة سلة المحذوفات.",
        illustrationDesc: "هيكل شجري يوضح تنظيم المجلدات داخل الحاسوب الإداري",
        quiz: [
          {
            question: "ما هو المجلد (Folder)؟",
            options: [
              { text: "برنامج لمعالجة النصوص", isCorrect: false },
              { text: "حاوية لتنظيم واحتواء الملفات", isCorrect: true },
              { text: "جهاز خارجي للتخزين", isCorrect: false },
              { text: "نوع من أنواع الشاشات", isCorrect: false }
            ],
            feedback: "المجلدات تستخدم لتنظيم الملفات وتقسيم المهام إدارياً."
          },
          {
            question: "ما هو اختصار لوحة المفاتيح لعملية 'النسخ'؟",
            options: [
              { text: "Ctrl + V", isCorrect: false },
              { text: "Ctrl + X", isCorrect: false },
              { text: "Ctrl + C", isCorrect: true },
              { text: "Ctrl + P", isCorrect: false }
            ],
            feedback: "Ctrl + C (Copy) تستخدم لأخذ نسخة من الملف."
          },
          {
            question: "عند حذف ملف بالخطأ، أين يمكننا العثور عليه؟",
            options: [
              { text: "على سطح المكتب", isCorrect: false },
              { text: "في سلة المحذوفات", isCorrect: true },
              { text: "في القرص الصلب مباشرة", isCorrect: false },
              { text: "لا يمكن استعادته أبداً", isCorrect: false }
            ],
            feedback: "سلة المحذوفات توفر فرصة لاستعادة الملفات المحذوفة مؤقتاً."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    lessons: [
      {
        id: "2-1",
        title: "أساسيات معالجة النصوص (Word)",
        summary: "• واجهة برنامج Microsoft Word والتعرف على القوائم الرئيسية.\n• إنشاء وحفظ المستندات النصية.\n• تقنيات الكتابة السريعة لمستندات العمل.\n• استخدام أدوات المساعدة (Help).",
        illustrationDesc: "لقطة شاشة مبسطة لواجهة برنامج معالجة النصوص مع تسميات توضيحية",
        quiz: [
          {
            question: "ما هو الامتداد القياسي لملفات Word الحديثة؟",
            options: [
              { text: ".txt", isCorrect: false },
              { text: ".xlsx", isCorrect: false },
              { text: ".docx", isCorrect: true },
              { text: ".jpg", isCorrect: false }
            ],
            feedback: ".docx هو التنسيق المعتمد لملفات النصوص في الأوفيس."
          },
          {
            question: "أي قائمة تحتوي على خيار 'فتح' و 'حفظ'؟",
            options: [
              { text: "ملف (File)", isCorrect: true },
              { text: "إدراج (Insert)", isCorrect: false },
              { text: "عرض (View)", isCorrect: false },
              { text: "مراجعة (Review)", isCorrect: false }
            ],
            feedback: "قائمة ملف هي المسؤولة عن إدارة المستندات وتخزينها."
          },
          {
            question: "كيف نقوم بإنشاء مستند جديد؟",
            options: [
              { text: "Ctrl + O", isCorrect: false },
              { text: "Ctrl + S", isCorrect: false },
              { text: "Ctrl + N", isCorrect: true },
              { text: "Ctrl + P", isCorrect: false }
            ],
            feedback: "Ctrl + N تفتح مستنداً جديداً (New Document)."
          }
        ]
      },
      {
        id: "2-2",
        title: "تنسيق النصوص والفقرات",
        summary: "• تغيير نوع الخط وحجمه ولونه.\n• محاذاة النصوص (يمين، يسار، وسط).\n• استخدام المسافات البادئة وتباعد الأسطر.\n• تطبيق الأنماط الجاهزة للفقرات.",
        illustrationDesc: "مقارنة بصرية بين نص منسق باحترافية ونص غير منسق",
        quiz: [
          {
            question: "لجعل النص 'سميكاً' (Bold)، نستخدم الاختصار:",
            options: [
              { text: "Ctrl + U", isCorrect: false },
              { text: "Ctrl + B", isCorrect: true },
              { text: "Ctrl + I", isCorrect: false },
              { text: "Ctrl + Z", isCorrect: false }
            ],
            feedback: "Ctrl + B تجعل الخط غليظاً لتمييز العناوين."
          },
          {
            question: "ما هي المحاذاة المناسبة للفقرات باللغة العربية؟",
            options: [
              { text: "محاذاة لليسار", isCorrect: false },
              { text: "محاذاة لليمين", isCorrect: true },
              { text: "توسيط فقط", isCorrect: false },
              { text: "بدون محاذاة", isCorrect: false }
            ],
            feedback: "اللغة العربية تبدأ من اليمين، لذا نستخدم المحاذاة لليمين."
          },
          {
            question: "ما هي وظيفة أداة 'نسخ التنسيق'؟",
            options: [
              { text: "نسخ النص كلياً", isCorrect: false },
              { text: "تغيير لغة البرنامج", isCorrect: false },
              { text: "تطبيق نفس شكل الخط واللون على نص آخر", isCorrect: true },
              { text: "حذف التنسيق الخاطئ", isCorrect: false }
            ],
            feedback: "نسخ التنسيق يوفر الوقت عند توحيد مظهر المستند."
          }
        ]
      },
      {
        id: "2-3",
        title: "إدراج الجداول والصور",
        summary: "• كيفية إنشاء جداول البيانات داخل Word.\n• تعديل حجم الخلايا والصفوف والأعمدة.\n• إضافة الصور والرسومات التوضيحية.\n• ترتيب العناصر داخل المستند.",
        illustrationDesc: "جدول إداري يوضح سجل الحضور اليومي للموظفين",
        quiz: [
          {
            question: "كيف تدمج خليتين في جدول؟",
            options: [
              { text: "استخدام مفتاح Delete", isCorrect: false },
              { text: "من قائمة 'تصميم الجدول' نختار 'دمج الخلايا'", isCorrect: true },
              { text: "مسح السطر الفاصل بينهما بالممحاة", isCorrect: false },
              { text: "لا يمكن دمج الخلايا", isCorrect: false }
            ],
            feedback: "دمج الخلايا مفيد لإنشاء عناوين الجداول الموحدة."
          },
          {
            question: "لماذا نستخدم الجداول في إدراج المعلومات؟",
            options: [
              { text: "لأغراض تجميلية فقط", isCorrect: false },
              { text: "لتنظيم البيانات في صفوف وأعمدة متساوية", isCorrect: true },
              { text: "لزيادة حجم الملف", isCorrect: false },
              { text: "لتسجيل مقاطع الفيديو", isCorrect: false }
            ],
            feedback: "الجداول هي العمود الفقري لتنظيم البيانات الإدارية."
          },
          {
            question: "عند إدراج صورة، كيف نتحكم في مكانها حول النص؟",
            options: [
              { text: "عن طريق خيارات 'التفاف النص' (Wrap Text)", isCorrect: true },
              { text: "بتحريك الشاشة", isCorrect: false },
              { text: "بإعادة تشغيل البرنامج", isCorrect: false },
              { text: "بزوم الكاميرا", isCorrect: false }
            ],
            feedback: "التفاف النص يحدد كيف ينساب الكلام حول الصورة."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    lessons: [
      {
        id: "3-1",
        title: "أساسيات جداول البيانات (Excel)",
        summary: "• واجهة برنامج Excel ومفهوم ورقة العمل (Sheet).\n• التمييز بين الصفوف، الأعمدة، والخلايا.\n• إدخال الأنواع المختلفة من البيانات (نصية، رقمية، تواريخ).\n• استخدام ميزة الإكمال التلقائي.",
        illustrationDesc: "صورة توضيحية لخلية نشطة في إكسيل مع توضيح الإحداثيات (مثلاً A1)",
        quiz: [
          {
            question: "مم تتكون ورقة العمل الحسابية؟",
            options: [
              { text: "فقرات متتابعة", isCorrect: false },
              { text: "شبكة من الخلايا (صفوف وأعمدة)", isCorrect: true },
              { text: "صفحات بيضاء خالية", isCorrect: false },
              { text: "ملفات فيديو", isCorrect: false }
            ],
            feedback: "إكسيل يعتمد على هيكلية الشبكة لتنظيم القيم والبيانات."
          },
          {
            question: "كيف نرمز للخلية الواقعة في العمود B والصف 5؟",
            options: [
              { text: "5B", isCorrect: false },
              { text: "Column B", isCorrect: false },
              { text: "B5", isCorrect: true },
              { text: "B-Row-5", isCorrect: false }
            ],
            feedback: "تسمى الخلية بحرف العمود متبوعاً برقم الصف."
          },
          {
            question: "ما هي ميزة الإكمال التلقائي (AutoFill)؟",
            options: [
              { text: "إصلاح الأخطاء اللغوية", isCorrect: false },
              { text: "توقيع المستند رقمياً", isCorrect: false },
              { text: "تكرار البيانات أو السلاسل تلقائياً", isCorrect: true },
              { text: "حذف البيانات القديمة", isCorrect: false }
            ],
            feedback: "تساعد هذه الميزة في تسريع إدخال التواريخ والأرقام المتسلسلة."
          }
        ]
      },
      {
        id: "3-2",
        title: "العمليات الحسابية البسيطة",
        summary: "• كتابة الصيغ الحسابية (الجمع، الطريح، الضرب، القسمة).\n• مفهوم تثبيت المراجع ومبدأ 'تساوي' (=).\n• استخدام الدوال التلقائية (الأكبر، الأصغر، المتوسط).\n• تنسيق الأرقام والعملات.",
        illustrationDesc: "رسم يوضح كيفية كتابة صيغة جمع في شريط الصيغة بصيغة =SUM(A1:A10)",
        quiz: [
          {
            question: "ما هو الرمز الذي يجب أن تبدأ به أي معادلة في إكسيل؟",
            options: [
              { text: "+", isCorrect: false },
              { text: "*", isCorrect: false },
              { text: "علامة يساوي (=)", isCorrect: true },
              { text: "@", isCorrect: false }
            ],
            feedback: "بدون علامة (=)، سيعامل إكسيل النص كبيانات عادية وليس عملية حسابية."
          },
          {
            question: "أي دالة تستخدم لحساب المجموع التلقائي؟",
            options: [
              { text: "AVERAGE", isCorrect: false },
              { text: "SUM", isCorrect: true },
              { text: "MAX", isCorrect: false },
              { text: "COUNT", isCorrect: false }
            ],
            feedback: "دالة SUM هي الدالة الأساسية لجمع نطاق من الأرقام."
          },
          {
            question: "كيف تظهر علامة العملة (مثلاً دج أو $) بجانب الرقم؟",
            options: [
              { text: "كتابتها يدوياً", isCorrect: false },
              { text: "عن طريق 'تنسيق الخلايا' ثم اختيار 'عملة'", isCorrect: true },
              { text: "بتغيير خلفية الخلية", isCorrect: false },
              { text: "لا يمكن ذلك", isCorrect: false }
            ],
            feedback: "التنسيق يحافظ على القيمة الرقمية لإجراء الحسابات مع إظهار الرمز الجمالي."
          }
        ]
      },
      {
        id: "3-3",
        title: "أرشفة وتنظيم قواعد البيانات البسيطة",
        summary: "• فرز البيانات (Sort) وتصفيتها (Filter).\n• تجميد الصفوف والأعمدة لتسهيل القراءة.\n• إعداد أوراق العمل للطباعة.\n• حماية الملفات بكلمات مرور.",
        illustrationDesc: "واجهة تظهر أيقونة الفلتر (القمع) مسلطة على جدول مبيعات",
        quiz: [
          {
            question: "ما فائدة 'تجميد الألواح' (Freeze Panes)؟",
            options: [
              { text: "منع تعديل الملف", isCorrect: false },
              { text: "حفظ الملف على السحابة", isCorrect: false },
              { text: "تثبيت العناوين عند التمرير لأسفل", isCorrect: true },
              { text: "تصغير حجم الملف", isCorrect: false }
            ],
            feedback: "التجميد يساعد في بقاء العناوين واضحة أثناء التعامل مع آلاف السجلات."
          },
          {
            question: "كيف تجد معلومة محددة بسرعة في جدول ضخم؟",
            options: [
              { text: "القراءة اليدوية لكل سطر", isCorrect: false },
              { text: "استخدام أداة البحث (Ctrl + F)", isCorrect: true },
              { text: "إعادة كتابة الجدول", isCorrect: false },
              { text: "حذف باقي البيانات", isCorrect: false }
            ],
            feedback: "Ctrl + F هي الوسيلة الأسرع لتحديد موقع أي نص أو رقم."
          },
          {
            question: "ماذا تفعل ميزة 'التصفية' (Filter)؟",
            options: [
              { text: "حذف البيانات غير المرغوبة نهائياً", isCorrect: false },
              { text: "إخفاء الصفوف التي لا تطابق معاييرنا مؤقتاً", isCorrect: true },
              { text: "تلوين الخلايا الفارغة", isCorrect: false },
              { text: "تحديث التاريخ تلقائياً", isCorrect: false }
            ],
            feedback: "الفلترة تسمح بتركيز الانتباه على بيانات محددة دون التأثير على المحتوى الأصلي."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    lessons: [
      {
        id: "4-1",
        title: "التعامل مع البريد الإلكتروني المهني",
        summary: "• إنشاء حساب بريد إلكتروني رسمي للعمل.\n• مكونات الرسالة (الموضوع، المحتوى، التوقيع).\n• إرفاق الملفات والوثائق بطريقة صحيحة.\n• تنظيم الرسائل في مجلدات (Inbox, Sent, Drafts).",
        illustrationDesc: "توضيح لمكونات واجهة البريد الإلكتروني مع سهم يشير لزر 'إرفاق' (Attachment)",
        quiz: [
          {
            question: "ما هو العنصر الأكثر أهمية لضمان قراءة رسالتك؟",
            options: [
              { text: "خلفية الرسالة الملونة", isCorrect: false },
              { text: "عنوان الموضوع (Subject) الواضح", isCorrect: true },
              { text: "استخدام الكثير من الرموز التعبيرية", isCorrect: false },
              { text: "إرسالها في وقت متأخر", isCorrect: false }
            ],
            feedback: "عنوان الموضوع هو أول ما يراه المستلم ويحدد أهمية الرسالة."
          },
          {
            question: "أين تجد الرسائل التي قمت بكتابتها ولم ترسلها بعد؟",
            options: [
              { text: "في سلة المهملات", isCorrect: false },
              { text: "في المسودات (Drafts)", isCorrect: true },
              { text: "في البريد الوارد", isCorrect: false },
              { text: "في البريد المزعج (Spam)", isCorrect: false }
            ],
            feedback: "المسودات تحفظ عملك حتى تقرر إرساله لاحقاً."
          },
          {
            question: "ما هي الطريقة الصحيحة لإرسال تقرير حجمه كبير؟",
            options: [
              { text: "تقسيمه إلى 100 رسالة", isCorrect: false },
              { text: "ضغطه (ZIP) أو رفعه على رابط سحابي", isCorrect: true },
              { text: "تصوير الشاشة وإرسالها", isCorrect: false },
              { text: "لا يمكن إرساله إطلاقاً", isCorrect: false }
            ],
            feedback: "ضغط الملفات يسهل عملية النقل عبر البريد الإلكتروني."
          }
        ]
      },
      {
        id: "4-2",
        title: "أساسيات البحث في الإنترنت",
        summary: "• استخدام محركات البحث للوصول للمعلومات الإدارية.\n• تقييم مصداقية المواقع والمصادر.\n• البحث المتقدم باستخدام علامات الاقتباس والناقص.\n• حفظ الروابط الهامة (Bookmarks).",
        illustrationDesc: "شريط بحث يظهر استخدام علامات الاقتباس للبحث عن جملة محددة",
        quiz: [
          {
            question: "ماذا تفعل علامتا الاقتباس \" \" في البحث؟",
            options: [
              { text: "تحذف الكلمات من البحث", isCorrect: false },
              { text: "تبحث عن الجملة كما هي بالضبط", isCorrect: true },
              { text: "تترجم الجملة فوراً", isCorrect: false },
              { text: "تصفي الصور فقط", isCorrect: false }
            ],
            feedback: "الاقتباس يحصر نتائج البحث في تطابق لفظي دقيق."
          },
          {
            question: "كيف تحفظ عنوان موقع مفيد للرجوع إليه لاحقاً؟",
            options: [
              { text: "كتابته في ورقة خارجية", isCorrect: false },
              { text: "إضافته للمفضلة (Bookmarks)", isCorrect: true },
              { text: "حفظ الموقع بالكامل كصورة", isCorrect: false },
              { text: "تركه مفتوحاً للأبد", isCorrect: false }
            ],
            feedback: "المفضلة تنظم روابطك المهنية للوصول السريع."
          },
          {
            question: "أي المواقع تعتبر أكثر موثوقية للمعلومات الرسمية؟",
            options: [
              { text: "مواقع التواصل الاجتماعي", isCorrect: false },
              { text: "المدونات الشخصية", isCorrect: false },
              { text: "المواقع الحكومية والمنظمات (.gov, .org)", isCorrect: true },
              { text: "مواقع الإعلانات", isCorrect: false }
            ],
            feedback: "المواقع الرسمية توفر بيانات دقيقة ومحدثة."
          }
        ]
      },
      {
        id: "4-3",
        title: "الأمان الرقمي وحماية البيانات",
        summary: "• أهمية كلمات المرور القوية وتغييرها دورياً.\n• التعرف على رسائل الاحتيال (Phishing).\n• الحفاظ على سرية بيانات المؤسسة.\n• استخدام برامج مكافحة الفيروسات.",
        illustrationDesc: "رسم يقارن بين كلمة مرور ضعيفة (1234) وكلمة مرور قوية (P@ssw0rd_2024)",
        quiz: [
          {
            question: "ما هي مواصفات كلمة المرور القوية؟",
            options: [
              { text: "تتكون من أرقام متسلسلة", isCorrect: false },
              { text: "اسم المستخدم مع تاريخ ميلاده", isCorrect: false },
              { text: "مزيج من حروف كبيرة وصغيرة وأرقام ورموز", isCorrect: true },
              { text: "كلمة 'password'", isCorrect: false }
            ],
            feedback: "التعقيد يزيد من صعوبة اختراق حسابك المهني."
          },
          {
            question: "ما هو الاحتيال الإلكتروني (Phishing)؟",
            options: [
              { text: "تطوير برامج جديدة", isCorrect: false },
              { text: "رسائل وهمية تطلب بياناتك الشخصية", isCorrect: true },
              { text: "سرعة الإنترنت البطيئة", isCorrect: false },
              { text: "نوع من أنواع الألعاب", isCorrect: false }
            ],
            feedback: "يجب الحذر من الروابط المشبوهة التي تطلب كلمات السر."
          },
          {
            question: "هل يسمح بمشاركة كلمة سر حاسوب العمل مع الآخرين؟",
            options: [
              { text: "نعم، للزملاء المقربين", isCorrect: false },
              { text: "نعم، إذا غبت عن العمل", isCorrect: false },
              { text: "لا، يجب أن تظل سرية تماماً", isCorrect: true },
              { text: "نعم، للمدير فقط", isCorrect: false }
            ],
            feedback: "المسؤولية عن الجهاز تقع على عاتق صاحب الحساب."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    lessons: [
      {
        id: "5-1",
        title: "التعامل مع الطابعات والماسحات الضوئية",
        summary: "• توصيل الطابعة وتثبيت التعريفات الأساسية.\n• إعدادات الطباعة (عدد النسخ، الورق، الألوان).\n• استخدام الماسح الضوئي (Scanner) لرقمنة الوثائق.\n• حلول مشاكل الطباعة الشائعة (انحشار الورق).",
        illustrationDesc: "رسم يوضح كيفية وضع الورقة في الماسح الضوئي بشكل صحيح",
        quiz: [
          {
            question: "ما هي الوظيفة الأساسية للماسح الضوئي (Scanner)؟",
            options: [
              { text: "إخراج الأوراق من الحاسوب", isCorrect: false },
              { text: "تحويل الأوراق الملموسة إلى صور رقمية", isCorrect: true },
              { text: "تصفح معارض الصور", isCorrect: false },
              { text: "حرق الملفات على CD", isCorrect: false }
            ],
            feedback: "الماسح الضوئي هو بوابة تحويل الأرشيف الورقي إلى رقمي."
          },
          {
            question: "أي إعداد يوفر الحبر عند طباعة مسودات غير رسمية؟",
            options: [
              { text: "طباعة بجودة عالية (High Quality)", isCorrect: false },
              { text: "طباعة سريعة / مسودة (Draft/Gray-scale)", isCorrect: true },
              { text: "الطباعة بالألوان الكاملة", isCorrect: false },
              { text: "زيادة سطوع الشاشة", isCorrect: false }
            ],
            feedback: "استخدام وضع المسودة يقلل من استهلاك الحبر والتكاليف."
          },
          {
            question: "ماذا تفعل إذا توقفت الطابعة بسبب 'انحشار الورق'؟",
            options: [
              { text: "ضرب الطابعة بقوة", isCorrect: false },
              { text: "فتح الغطاء وسحب الورق برفق في اتجاه المسار", isCorrect: true },
              { text: "صب الماء على الورق ليلين", isCorrect: false },
              { text: "تجاهلها والاستمرار في العمل", isCorrect: false }
            ],
            feedback: "التعامل اللطيف مع الأجزاء الميكانيكية يطيل عمر الطابعة."
          }
        ]
      },
      {
        id: "5-2",
        title: "تنظيم الأرشيف الرقمي المتقدم",
        summary: "• إنشاء نظام ترقيم للملفات والوثائق.\n• استخدام الكلمات الدلالية (Tags) للبحث السريع.\n• مبدأ النسخ الاحتياطي (Backup) الدوري.\n• التخلص الآمن من الملفات القديمة.",
        illustrationDesc: "توضيح لمجلدات منظمة حسب السنة (2024 -> يناير -> فواتير)",
        quiz: [
          {
            question: "لماذا نستخدم النسخ الاحتياطي (Backup)؟",
            options: [
              { text: "لزيادة حجم البيانات", isCorrect: false },
              { text: "لحماية البيانات من الضياع في حال تعطل الجهاز", isCorrect: true },
              { text: "لتسريع عمل الحاسوب", isCorrect: false },
              { text: "لمشاركة الصور مع الأصدقاء", isCorrect: false }
            ],
            feedback: "النسخ الاحتياطي هو ضمانك الوحيد ضد الحوادث الفنية."
          },
          {
            question: "أي من الأسماء التالية يعتبر اسماً مهنياً لملف؟",
            options: [
              { text: "aaaaa.pdf", isCorrect: false },
              { text: "تقرير_مبيعات_يناير_2024.docx", isCorrect: true },
              { text: "ملف_جديد_1.xlsx", isCorrect: false },
              { text: "؟؟؟.docx", isCorrect: false }
            ],
            feedback: "الأسماء الواضحة تسهل البحث والتنظيم لجميع الزملاء."
          },
          {
            question: "كم مرة يجب إجراء النسخ الاحتياطي؟",
            options: [
              { text: "مرة كل 5 سنوات", isCorrect: false },
              { text: "فقط عندما يتعطل الجهاز", isCorrect: false },
              { text: "بشكل دوري (يومي أو أسبوعي حسب أهمية البيانات)", isCorrect: true },
              { text: "لا حاجة للنسخ الاحتياطي", isCorrect: false }
            ],
            feedback: "الدورية تضمن عدم فقدان الكثير من العمل في حال الوقوع في خطأ."
          }
        ]
      },
      {
        id: "5-3",
        title: "أخلاقيات المهنة لعون المعلومات",
        summary: "• الأمانة في التعامل مع البيانات الحساسة.\n• احترام الخصوصية وعدم التجسس على ملفات الغير.\n• الدقة التامة في الإدخال وتجنب التزوير.\n• مهارات التواصل المهني مع الزملاء والرؤساء.",
        illustrationDesc: "رمز 'القفل' فوق مجلد 'بيانات الموظفين' للإشارة للسرية",
        quiz: [
          {
            question: "ماذا تفعل إذا شاهدت بيانات سرية بالخطأ؟",
            options: [
              { text: "نشرها على الإنترنت", isCorrect: false },
              { text: "إخبار جميع الزملاء بها", isCorrect: false },
              { text: "الالتزام بالسرية التامة وعدم إفشائها", isCorrect: true },
              { text: "استخدامها للضغط على المدير", isCorrect: false }
            ],
            feedback: "حماية أسرار العمل جزء لا يتجزأ من الميثاق المهني."
          },
          {
            question: "لماذا تعتبر 'الدقة' أهم من 'السرعة' أحياناً؟",
            options: [
              { text: "لأن المدير يحب البطء", isCorrect: false },
              { text: "لأن الخطأ في إدخال بيانات مالية قد يسبب خسائر كبيرة", isCorrect: true },
              { text: "لأن الدقة تجعل الحاسوب أسرع", isCorrect: false },
              { text: "لا فرق بينهما", isCorrect: false }
            ],
            feedback: "البيانات الخاطئة قد تؤدي لقرارات إدارية كارثية."
          },
          {
            question: "ما هو السلوك المهني عند مواجهة مشكلة تقنية؟",
            options: [
              { text: "محاولة إصلاحها دون خبرة", isCorrect: false },
              { text: "التبليغ عنها فوراً للمسؤول التقني", isCorrect: true },
              { text: "تجاهل المشكلة وترك العمل", isCorrect: false },
              { text: "البكاء بجانب الجهاز", isCorrect: false }
            ],
            feedback: "التواصل السريع مع المختصين يقلل من وقت تعطل العمل."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    lessons: [
      {
        id: "6-1",
        title: "إدارة الوقت في مهام الإدخال",
        summary: "• تحديد الأولويات (عاجل، هام، روتيني).\n• استخدام التقويم الرقمي لتنظيم المواعيد.\n• تقنيات التركيز لتجنب أخطاء الإدخال.\n• موازنة السرعة مع الجودة.",
        illustrationDesc: "رسم لمقياش يوازن بين 'السرعة' و 'الجودة' في إدخال البيانات",
        quiz: [
          {
            question: "ما هي المهمة التي يجب البدء بها؟",
            options: [
              { text: "أسهل مهمة", isCorrect: false },
              { text: "أكثر مهمة ممتعة", isCorrect: false },
              { text: "المهمة العاجلة والهامة", isCorrect: true },
              { text: "المهمة التي طلبها الزميل أمس", isCorrect: false }
            ],
            feedback: "ترتيب الأولويات يضمن إنجاز الأهداف في وقتها."
          },
          {
            question: "كيف يساعد التقويم الرقمي (Calendar) عون المعلومات؟",
            options: [
              { text: "لمعرفة التاريخ فقط", isCorrect: false },
              { text: "لتذكيره بمواعيد تسليم التقارير والاجتماعات", isCorrect: true },
              { text: "لحساب الراتب تلقائياً", isCorrect: false },
              { text: "لتغيير خلفية سطح المكتب", isCorrect: false }
            ],
            feedback: "الالتزام بالمواعيد هو سمة الموظف المحترف."
          },
          {
            question: "ماذا تفعل إذا شعرت بالإجهاد البصري؟",
            options: [
              { text: "الاستمرار في العمل بقوة", isCorrect: false },
              { text: "أخذ استراحة قصيرة والنظر لمكان بعيد", isCorrect: true },
              { text: "زيادة سطوع الشاشة", isCorrect: false },
              { text: "إغلاق عين واحدة والكتابة بالأخرى", isCorrect: false }
            ],
            feedback: "قاعدة 20-20-20 (النظر لشيء بعيد كل 20 دقيقة) تحمي بصرك."
          }
        ]
      },
      {
        id: "6-2",
        title: "التعاون الرقمي (Shared Files)",
        summary: "• مفهوم الملفات المشتركة على الشبكة الداخلية.\n• كيفية العمل الجماعي على مستند واحد.\n• تتبع التغييرات (Track Changes) في الـ Word.\n• التعليقات والمراجعات الرقمية.",
        illustrationDesc: "رسم يوضح عدة مستخدمين يتصلون بملف واحد في نفس الوقت عبر السحابة",
        quiz: [
          {
            question: "ما فائدة ميزة 'تتبع التغييرات'؟",
            options: [
              { text: "رؤية من قام بتعديل النص وماذا غير", isCorrect: true },
              { text: "جعل النص ملوناً بشكل عشوائي", isCorrect: false },
              { text: "حذف الملف تلقائياً", isCorrect: false },
              { text: "تغيير لغة الكتابة", isCorrect: false }
            ],
            feedback: "تتبع التغييرات أساسي في مراجعة العقود والتقارير الجماعية."
          },
          {
            question: "ماذا نعني بـ 'الملف محمي من التعديل'؟",
            options: [
              { text: "لا يمكن فتحه إطلاقاً", isCorrect: false },
              { text: "يمكن قراءته فقط دون القدرة على التغيير (Read-only)", isCorrect: true },
              { text: "يحتوي على فيروسات", isCorrect: false },
              { text: "ملف محذوف", isCorrect: false }
            ],
            feedback: "وضع 'للقراءة فقط' يحمي البيانات النهائية من التغيير العرضي."
          },
          {
            question: "كيف تترك ملاحظة لزميلك داخل مستند؟",
            options: [
              { text: "كتابتها في وسط النص بخط كبير", isCorrect: false },
              { text: "استخدام ميزة 'إدراج تعليق' (Comment)", isCorrect: true },
              { text: "الاتصال به هاتفياً فقط", isCorrect: false },
              { text: "مسح النص وكتابة الملاحظة بدله", isCorrect: false }
            ],
            feedback: "التعليقات الرقمية تبقي المراجعات منظمة ومرتبطة بسياق الكلام."
          }
        ]
      },
      {
        id: "6-3",
        title: "التحويل بين تنسيقات الملفات",
        summary: "• تحويل ملفات Word و Excel إلى PDF.\n• تصدير الجداول من Excel إلى Word.\n• فك وضغط الملفات (WinRAR/WinZip).\n• تصوير الشاشة (Screenshot) للأغراض التوضيحية.",
        illustrationDesc: "رسم يوضح أيقونة Word تتحول إلى أيقونة PDF عبر سهم 'تصدير'",
        quiz: [
          {
            question: "لماذا نفضل إرسال التقارير النهائية بصيغة PDF؟",
            options: [
              { text: "لأن حجمها أكبر", isCorrect: false },
              { text: "للحفاظ على التنسيق ومنع التعديل السهل", isCorrect: true },
              { text: "لأنها تحتوي على رسوم متحركة", isCorrect: false },
              { text: "لأنها أرخص ثمناً", isCorrect: false }
            ],
            feedback: "PDF هو المعيار العالمي لمشاركة الوثائق الرسمية الثابتة."
          },
          {
            question: "ماذا يحدث عند 'ضغط' ملف (Compress)؟",
            options: [
              { text: "يختفي الملف", isCorrect: false },
              { text: "يصغر حجمه ليسهل إرساله", isCorrect: true },
              { text: "تتحسن جودة الصور فيه", isCorrect: false },
              { text: "يتغير محتواه تلقائياً", isCorrect: false }
            ],
            feedback: "الضغط يجمع ملفات كثيرة في ملف واحد صغير الحجم."
          },
          {
            question: "كيف نأخذ صورة سريعة لما يظهر على الشاشة؟",
            options: [
              { text: "عن طريق Print Screen أو أداة Snipping Tool", isCorrect: true },
              { text: "برسمها يدوياً", isCorrect: false },
              { text: "بإطفاء الشاشة وإشعالها", isCorrect: false },
              { text: "بوضع الهاتف أمام الشاشة وتصويرها", isCorrect: false }
            ],
            feedback: "أدوات تصوير الشاشة ضرورية لتوثيق الأخطاء أو توضيح خطوات العمل."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    lessons: [
      {
        id: "7-1",
        title: "مشروع ختام المستوى المبتدئ",
        summary: "• مراجعة شاملة لمهارات الوورد والإكسيل والملفات.\n• محاكاة يوم عمل كامل لعون إدراج معلومات.\n• إنشاء تقرير متكامل يحتوي على نصوص وجداول وصور.\n• أرشفة المشروع ورفعه في ملف مضغوط.",
        illustrationDesc: "تجميعة لأيقونات البرامج (Word, Excel, PDF, ZIP) في ملف واحد كبير",
        quiz: [
          {
            question: "أي مهارة هي الأكثر طلباً في سوق العمل كبداية؟",
            options: [
              { text: "برمجة الذكاء الاصطناعي", isCorrect: false },
              { text: "إتقان حزمة الأوفيس والسرعة في الإدخال", isCorrect: true },
              { text: "إصلاح الشاشات المكسورة", isCorrect: false },
              { text: "صناعة ألعاب الفيديو", isCorrect: false }
            ],
            feedback: "الأساسيات هي المفتاح للحصول على أول وظيفة إدارية."
          },
          {
            question: "ما هو الترتيب الصحيح لإنجاز مهمة إدخال؟",
            options: [
              { text: "إدخال -> مراجعة -> حفظ -> إرسال", isCorrect: true },
              { text: "إرسال -> إدخال -> مراجعة", isCorrect: false },
              { text: "حفظ -> مسح -> إدخال", isCorrect: false },
              { text: "إدخال فقط بدون مراجعة", isCorrect: false }
            ],
            feedback: "المراجعة قبل الإرسال تضمن احترافية العمل."
          },
          {
            question: "ماذا يعني حصولك على لقب 'مبتدئ متمكن'؟",
            options: [
              { text: "أنك أصبحت خبير برمجيات", isCorrect: false },
              { text: "أنك تتقن أساسيات العمل الإداري الرقمي بكفاءة", isCorrect: true },
              { text: "أنك لم تعد بحاجة للتعلم", isCorrect: false },
              { text: "أنك تستطيع العمل بدون حاسوب", isCorrect: false }
            ],
            feedback: "إكمال المستوى المبتدئ هو الخطوة الأولى في مسيرتك المهنية."
          }
        ]
      },
      {
        id: "7-2",
        title: "تحضير ملف السيرة الذاتية (CV)",
        summary: "• استخدام Word لتصميم سيرة ذاتية جذابة.\n• توزيع المعلومات (البيانات الشخصية، التكوين، المهارات).\n• أهمية التنسيق البسيط والمقروء.\n• حفظ السيرة الذاتية بصيغة PDF للإرسال.",
        illustrationDesc: "هيكل بسيط لسيرة ذاتية إدارية تظهر فيها المهارات التقنية بوضوح",
        quiz: [
          {
            question: "ما هو أهم شيء يجب إبرازه في CV عون المعلومات؟",
            options: [
              { text: "المهارات الرياضية", isCorrect: false },
              { text: "السرعة في الإدخال وإتقان برامج الأوفيس", isCorrect: true },
              { text: "أنواع الألعاب المفضلة", isCorrect: false },
              { text: "السفر للخارج", isCorrect: false }
            ],
            feedback: "أصحاب العمل يبحثون عن الكفاءة التقنية في هذا المجال."
          },
          {
            question: "كيف يجب أن يكون طول السيرة الذاتية للمبتدئ؟",
            options: [
              { text: "10 صفحات", isCorrect: false },
              { text: "صفحة واحدة مركزة واحترافية", isCorrect: true },
              { text: "كتاب كامل", isCorrect: false },
              { text: "لا يهم الطول", isCorrect: false }
            ],
            feedback: "الاختصار والتركيز على المهم يجذب اهتمام مسؤولي التوظيف."
          },
          {
            question: "هل نضع صورة شخصية في السيرة الذاتية؟",
            options: [
              { text: "نعم، دائماً وبألوان زاهية", isCorrect: false },
              { text: "اختياري، شرط أن تكون مهنية ورسمية", isCorrect: true },
              { text: "لا، يمنع ذلك تماماً", isCorrect: false },
              { text: "نعم، صورة من عطلة صيفية", isCorrect: false }
            ],
            feedback: "المظهر المهني يبدأ من الصورة المختارة بعناية."
          }
        ]
      },
      {
        id: "7-3",
        title: "أساسيات التعامل مع زبائن المكتب",
        summary: "• الاستقبال الجيد لطلبات رقمنة البيانات.\n• تدوين الاحتياجات بدقة (عدد النسخ، نوع التنسيق).\n• تسليم العمل في الوقت المحدد.\n• شرح بسيط للتنسيقات للزبون غير المختص.",
        illustrationDesc: "رسم يوضح عون استقبال يسلم ملفاً مطبوعاً لزبون بابتسامة",
        quiz: [
          {
            question: "ماذا تفعل إذا طلب الزبون شيئاً غير ممكن تقنياً؟",
            options: [
              { text: "قول 'لا' فقط", isCorrect: false },
              { text: "شرح السبب بلباقة واقتراح بديل ممكن", isCorrect: true },
              { text: "تنفيذه بشكل خاطئ", isCorrect: false },
              { text: "تجاهل الزبون", isCorrect: false }
            ],
            feedback: "الاحترافية تكمن في تقديم الحلول وليس فقد خلق المشاكل."
          },
          {
            question: "لماذا تطلب رقم هاتف الزبون عند استلام عمل منه؟",
            options: [
              { text: "للاتصال به للدردشة", isCorrect: false },
              { text: "للتواصل في حال وجود غموض في البيانات أو جاهزية العمل", isCorrect: true },
              { text: "لبيعه لشركات الإعلانات", isCorrect: false },
              { text: "لإزعاجه", isCorrect: false }
            ],
            feedback: "قنوات التواصل المفتوحة تمنح الزبون ثقة في جودة خدمتك."
          },
          {
            question: "ما هو سر نجاح عون إدراج المعلومات الحر (Freelancer)؟",
            options: [
              { text: "العمل ببطء شديد", isCorrect: false },
              { text: "الدقة العالية والالتزام بمواعيد التسليم", isCorrect: true },
              { text: "تقديم أرخص سعر مع جودة سيئة", isCorrect: false },
              { text: "تغيير رقم الهاتف دائماً", isCorrect: false }
            ],
            feedback: "السمعة المهنية تبنى على الجودة والموثوقية."
          }
        ]
      }
    ]
  }
];
