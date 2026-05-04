import { Level } from "../curriculum";

export const dataEntryIntermediate: Level[] = [
  {
    id: 8,
    lessons: [
      {
        id: "8-1",
        title: "السرعة الاحترافية في الكتابة - تقنيات متقدمة",
        summary: "• استخدام برامج قياس سرعة الكتابة (Typing Tests).\n• تحسين دقة الكتابة بنسبة خطأ أقل من 1%.\n• اختصارات لوحة المفاتيح المتقدمة لنظام Windows.\n• إدخال البيانات باستخدام اللوحة الرقمية الجانبية (Numpad).",
        illustrationDesc: "رسم بياني يظهر تطور سرعة الكلمات في الدقيقة (WPM) مع التدريب",
        quiz: [
          {
            question: "ما هو الهدف المثالي لسرعة عون إدراج المعلومات المحترف؟",
            options: [
              { text: "10 كلمات في الدقيقة", isCorrect: false },
              { text: "40-60 كلمة في الدقيقة بدقة عالية", isCorrect: true },
              { text: "1000 كلمة في الدقيقة", isCorrect: false },
              { text: "لا تهم السرعة إطلاقاً", isCorrect: false }
            ],
            feedback: "السرعة بين 40 و 60 كلمة تعتبر معياراً احترافياً في المكاتب."
          },
          {
            question: "أي مفتاح يساعدك على الانتقال بسرعة بين الخلايا في Excel؟",
            options: [
              { text: "Tab", isCorrect: true },
              { text: "Shift", isCorrect: false },
              { text: "Space", isCorrect: false },
              { text: "Esc", isCorrect: false }
            ],
            feedback: "مفتاح Tab هو الصديق الأوفى لمُدخل البيانات للتنقل السلس."
          },
          {
            question: "متى نستخدم اللوحة الرقمية الجانبية (Numpad)؟",
            options: [
              { text: "عند كتابة المقالات الطويلة", isCorrect: false },
              { text: "عند إدخال العمليات الحسابية والأرقام بكثرة", isCorrect: true },
              { text: "عند تصفح الإنترنت", isCorrect: false },
              { text: "لا نستخدمها أبداً", isCorrect: false }
            ],
            feedback: "اللوحة الرقمية مصممة للسرعة الفائقة في إدخال الأرقام."
          }
        ]
      },
      {
        id: "8-2",
        title: "معالجة النصوص المتقدمة - دمج المراسلات",
        summary: "• مفهوم دمج المراسلات (Mail Merge).\n• ربط ملف Excel بملف Word لإنشاء رسائل جماعية.\n• طباعة الأظرفة والملصقات أوتوماتيكياً.\n• تخصيص الحقول المتغيرة في الخطابات الرسمية.",
        illustrationDesc: "رسم توضيحي يظهر ملف إكسيل فيه أسماء يتحول إلى 20 رسالة وورد مختلفة",
        quiz: [
          {
            question: "ما هي الفائدة الرئيسية لدمج المراسلات (Mail Merge)؟",
            options: [
              { text: "تغيير لون الخط", isCorrect: false },
              { text: "توفير الوقت عند إرسال نفس الرسالة لمئات الأشخاص ببيانات مختلفة", isCorrect: true },
              { text: "ترجمة النص", isCorrect: false },
              { text: "حماية الملف بكلمة سر", isCorrect: false }
            ],
            feedback: "دمج المراسلات يحول عملاً يدوياً شاقاً إلى عملية ضغطة زر واحدة."
          },
          {
            question: "ما هو الملف الذي يحتوي على الأسماء والعناوين في عملية الدمج؟",
            options: [
              { text: "ملف الصور", isCorrect: false },
              { text: "مصدر البيانات (غالباً ملف Excel)", isCorrect: true },
              { text: "ملف النظام", isCorrect: false },
              { text: "سلة المحذوفات", isCorrect: false }
            ],
            feedback: "يجب تنظيم قائمة المستلمين في جدول منظم ليتمكن الوورد من قراءتها."
          },
          {
            question: "أين نجد خيار 'دمج المراسلات' في Word؟",
            options: [
              { text: "قائمة 'مراسلات' (Mailings)", isCorrect: true },
              { text: "قائمة 'إدراج'", isCorrect: false },
              { text: "قائمة 'عرض'", isCorrect: false },
              { text: "قائمة 'رسم'", isCorrect: false }
            ],
            feedback: "التبويب 'مراسلات' يحتوي على كافة أدوات الدمج والطباعة الجماعية."
          }
        ]
      },
      {
        id: "8-3",
        title: "تنسيق التقارير الإدارية الطويلة",
        summary: "• إنشاء الفهارس التلقائية (Table of Contents).\n• ترقيم الصفحات بشكل مختلف في نفس المستند.\n• استخدام المقاطع (Sections) لتغيير اتجاه الورقة.\n• إضافة المراجع والحواشي السفلية.",
        illustrationDesc: "توضيح لكيفية تقسيم المستند إلى مقاطع (Landscape و Portrait)",
        quiz: [
          {
            question: "كيف نقوم بتحديث الفهرس بعد إضافة عناوين جديدة؟",
            options: [
              { text: "إعادة كتابته يدوياً", isCorrect: false },
              { text: "النقر بالأيمن واختيار 'تحديث الحقل' (Update Field)", isCorrect: true },
              { text: "مسح الملف وإعادة فتحه", isCorrect: false },
              { text: "تغيير لون العنوان", isCorrect: false }
            ],
            feedback: "الفهارس التلقائية توفر دقة عالية في تتبع أرقام الصفحات."
          },
          {
            question: "لماذا نستخدم 'فاصل المقاطع' (Section Break)؟",
            options: [
              { text: "لجعل الملف أصغر", isCorrect: false },
              { text: "لتطبيق تنسيقات مختلفة (كالترقيم أو اتجاه الورقة) على أجزاء معينة", isCorrect: true },
              { text: "لحذف الصفحة الأخيرة", isCorrect: false },
              { text: "لتغيير لغة البرنامج", isCorrect: false }
            ],
            feedback: "المقاطع تسمح لك بوضع جدول عريض بالعرض (Landscape) وسط تقرير طولي."
          },
          {
            question: "وفقاً لأي معيار يتم بناء الفهرس التلقائي؟",
            options: [
              { text: "حجم الخط", isCorrect: false },
              { text: "استخدام 'الأنماط' (Styles) للعناوين", isCorrect: true },
              { text: "ترتيب الكلمات أبجدياً", isCorrect: false },
              { text: "عدد الصور في الصفحة", isCorrect: false }
            ],
            feedback: "يجب تعليم العناوين كـ Heading 1 أو Heading 2 ليراها البرنامج في الفهرس."
          }
        ]
      }
    ]
  },
  {
    id: 9,
    lessons: [
      {
        id: "9-1",
        title: "إكسيل متقدم - الدوال المنطقية (IF)",
        summary: "• تعلم دالة الشرط (IF) لاتخاذ القرارات التلقائية.\n• ربط الشروط بكلمات (ناجح/راسب، مقبول/مرفوض).\n• الشروط المتعددة (Nested IF).\n• التنسيق الشرطي (Conditional Formatting) لتلوين النتائج.",
        illustrationDesc: "خلية في إكسيل تتغير من اللون الأحمر إلى الأخضر حسب القيمة المكتوبة",
        quiz: [
          {
            question: "ماذا تفعل دالة IF في إكسيل؟",
            options: [
              { text: "تجمع الأرقام فقط", isCorrect: false },
              { text: "تتحقق من شرط وتعطي نتيجة بناءً عليه", isCorrect: true },
              { text: "ترسم رسوماً بيانية", isCorrect: false },
              { text: "تفتح ملفاً جديداً", isCorrect: false }
            ],
            feedback: "دالة IF هي جوهر الذكاء في جداول البيانات."
          },
          {
            question: "ما هو 'التنسيق الشرطي'؟",
            options: [
              { text: "تغيير شكل الخلية بناءً على قيمتها تلقائياً", isCorrect: true },
              { text: "إجبار المستخدم على الكتابة بخط معين", isCorrect: false },
              { text: "ترتيب البيانات أبجدياً", isCorrect: false },
              { text: "حماية الخلايا بكلمة سر", isCorrect: false }
            ],
            feedback: "يساعد التنسيق الشرطي في رؤية القيم الشاذة أو الهامة بسرعة البرق."
          },
          {
            question: "إذا كتبنا =IF(A1>10; \"ممتاز\"; \"عادي\") وكان A1 يساوي 5، ما هي النتيجة؟",
            options: [
              { text: "ممتاز", isCorrect: false },
              { text: "عادي", isCorrect: true },
              { text: "خطأ", isCorrect: false },
              { text: "صفر", isCorrect: false }
            ],
            feedback: "بما أن 5 ليست أكبر من 10، فستظهر النتيجة الثانية (القيمة في حال خطأ الشرط)."
          }
        ]
      },
      {
        id: "9-2",
        title: "الرسوم البيانية وتحليل البيانات",
        summary: "• إنشاء الرسوم البيانية (Column, Pie, Line).\n• اختيار الرسم البياني الأنسب لنوع البيانات.\n• تنسيق محاور الرسم والعناوين.\n• مفهوم خط الاتجاه (Trendline).",
        illustrationDesc: "مخطط دائري (Pie Chart) يوضح نسب توزيع النفقات في شركة",
        quiz: [
          {
            question: "أي نوع من الرسوم البيانية هو الأنسب لتوضيح حصص السوق؟",
            options: [
              { text: "المخطط السهمي", isCorrect: false },
              { text: "المخطط الدائري (Pie Chart)", isCorrect: true },
              { text: "المخطط المبعثر", isCorrect: false },
              { text: "لا يهم النوع", isCorrect: false }
            ],
            feedback: "المخطط الدائري يوضح الأجزاء من الكل بوضوح تام."
          },
          {
            question: "ما فائدة المخطط الخطي (Line Chart)؟",
            options: [
              { text: "توضيح تطور البيانات عبر الزمن (مثلاً المبيعات شهرياً)", isCorrect: true },
              { text: "مقارنة أسماء الموظفين", isCorrect: false },
              { text: "رسم خرائط جغرافية", isCorrect: false },
              { text: "تخزين البيانات", isCorrect: false }
            ],
            feedback: "المخططات الخطية تظهر الاتجاهات الصاعدة والهابطة بوضوح."
          },
          {
            question: "كيف نغير ألوان الرسم البياني في إكسيل؟",
            options: [
              { text: "عبر قائمة 'تصميم المخطط' (Chart Design)", isCorrect: true },
              { text: "بإعادة كتابة البيانات", isCorrect: false },
              { text: "بتغيير لغة الويندوز", isCorrect: false },
              { text: "لا يمكن تغيير الألوان", isCorrect: false }
            ],
            feedback: "التصميم الجيد للرسوم البيانية يجعل التقارير أكثر إقناعاً."
          }
        ]
      },
      {
        id: "9-3",
        title: "البحث المتقدم (VLOOKUP / HLOOKUP)",
        summary: "• استخدام دالة البحث الرأسي (VLOOKUP).\n• جلب معلومات من جداول أخرى تلقائياً.\n• مفهوم المطابقة التقريبية والمطابقة التامة.\n• ربط البيانات بين أوراق عمل متعددة.",
        illustrationDesc: "رسم يوضح كيف يجلب إكسيل اسم الزبون بمجرد كتابة رقمه المسلسل",
        quiz: [
          {
            question: "ما هي الوظيفة الأساسية لدالة VLOOKUP؟",
            options: [
              { text: "جمع الأرقام الزوجية", isCorrect: false },
              { text: "البحث عن قيمة في عمود وجلب بيانات مرتبطة بها من نفس الصف", isCorrect: true },
              { text: "تلوين الخلايا الفارغة", isCorrect: false },
              { text: "حذف الصفوف المكررة", isCorrect: false }
            ],
            feedback: "VLOOKUP هي الدالة الأكثر طلباً في الوظائف الإدارية المتقدمة."
          },
          {
            question: "ماذا نعني بالمطابقة التامة (Exact Match) في البحث؟",
            options: [
              { text: "أن يجد أقرب كلمة مشابهة", isCorrect: false },
              { text: "أن يجد القيمة المحددة بدقة (0 أو FALSE)", isCorrect: true },
              { text: "أن يجمع كل القيم المتشابهة", isCorrect: false },
              { text: "أن يحول النص إلى أرقام", isCorrect: false }
            ],
            feedback: "في البحث عن أرقام الهوية أو الأسماء، نستخدم دائماً المطابقة التامة."
          },
          {
            question: "إذا كانت البيانات منظمة في صفوف أفقية، أي دالة نستخدم؟",
            options: [
              { text: "VLOOKUP", isCorrect: false },
              { text: "HLOOKUP", isCorrect: true },
              { text: "IF", isCorrect: false },
              { text: "SUM", isCorrect: false }
            ],
            feedback: "H ترمز لـ Horizontal (أفقي) و V ترمز لـ Vertical (رأسي)."
          }
        ]
      }
    ]
  },
  {
    id: 10,
    lessons: [
      {
        id: "10-1",
        title: "مقدمة لقواعد البيانات - ملفات Access",
        summary: "• مفهوم الجداول (Tables) مقابل السجلات (Records).\n• تصميم قاعدة بيانات بسيطة لمحل تجاري أو مكتب.\n• أنواع البيانات في أكساس (نص، رقم، ترقيم تلقائي).\n• المفتاح الأساسي (Primary Key) وأهميته.",
        illustrationDesc: "رسم يوضح الفرق بين ورقة إكسيل وقاعدة بيانات منظمة بجداول وعلاقات",
        quiz: [
          {
            question: "ما هو 'المفتاح الأساسي' (Primary Key)؟",
            options: [
              { text: "كلمة سر لفتح البرنامج", isCorrect: false },
              { text: "حقل فريد يميز كل سجل ولا يتكرر (مثل رقم التعريف)", isCorrect: true },
              { text: "أكبر رقم في الجدول", isCorrect: false },
              { text: "تاريخ إنشاء الملف", isCorrect: false }
            ],
            feedback: "المفتاح الأساسي يمنع حدوث تضارب في البيانات ويضمن دقة الربط بين الجداول."
          },
          {
            question: "أي نوع بيانات نختار لـ 'اسم المتدرب'؟",
            options: [
              { text: "رقم", isCorrect: false },
              { text: "نص قصير (Short Text)", isCorrect: true },
              { text: "ترقيم تلقائي", isCorrect: false },
              { text: "نعم/لا", isCorrect: false }
            ],
            feedback: "النص القصير هو المناسب للأسماء والعناوين."
          },
          {
            question: "لماذا نستخدم أكساس بدل إكسيل في القواعد الكبيرة؟",
            options: [
              { text: "لأنه أرخص", isCorrect: false },
              { text: "لقدرته العالية على إدارة العلاقات بين آلاف البيانات المعقدة", isCorrect: true },
              { text: "لأنه يحتوي على ألوان أكثر", isCorrect: false },
              { text: "لأن الخط فيه أوضح", isCorrect: false }
            ],
            feedback: "أكساس هو نظام إدارة قواعد بيانات حقيقي (DBMS) مصمم للترابط."
          }
        ]
      },
      {
        id: "10-2",
        title: "بناء العلاقات بين الجداول",
        summary: "• مفهوم علاقة (واحد لواحد) و (واحد لمتعدد).\n• ربط جدول الموظفين بجدول المهام.\n• فرض التكامل المرجعي (Referential Integrity).\n• عرض البيانات المرتبطة في النوافذ الفرعية.",
        illustrationDesc: "رسم يوضح خطاً واصلاً بين حقل 'رقم القسم' في جدولين مختلفين",
        quiz: [
          {
            question: "ماذا تعني علاقة 'واحد لمتعدد' (One-to-Many)؟",
            options: [
              { text: "أن شخصاً واحداً يمكنه شراء منتج واحد فقط", isCorrect: false },
              { text: "أن قسماً واحداً يمكن أن ينتمي إليه موظفون كثيرون", isCorrect: true },
              { text: "أن الملف لا يمكن فتحه إلا مرة واحدة", isCorrect: false },
              { text: "أن الجدول يحتوي على عمود واحد فقط", isCorrect: false }
            ],
            feedback: "هذه العلاقة هي الأكثر شيوعاً في تنظيم البيانات (مثل الأب وأبنائه)."
          },
          {
            question: "ما فائدة 'التكامل المرجعي'؟",
            options: [
              { text: "منع حذف سجل مرتبط بسجل آخر (مثل حذف موظف لديه مهام معلقة)", isCorrect: true },
              { text: "تغيير لغة البرنامج", isCorrect: false },
              { text: "زيادة سرعة الطباعة", isCorrect: false },
              { text: "تصغير حجم قاعدة البيانات", isCorrect: false }
            ],
            feedback: "التكامل المرجعي يضمن تماسك البيانات ومنع 'اليتامى' في القواعد."
          },
          {
            question: "كيف نربط جدولين في أكساس؟",
            options: [
              { text: "بلصقهما فوق بعض", isCorrect: false },
              { text: "عن طريق نافذة 'علاقات' (Relationships) وسحب الحقول", isCorrect: true },
              { text: "بإرسالهما في إيميل واحد", isCorrect: false },
              { text: "بتسميتهما بنفس الاسم", isCorrect: false }
            ],
            feedback: "نافذة العلاقات هي خريطة الطريق لأي قاعدة بيانات قوية."
          }
        ]
      },
      {
        id: "10-3",
        title: "الاستعلامات (Queries) - استخراج المعلومة",
        summary: "• كيفية فلترة البيانات باستخدام معايير محددة.\n• كتابة شروط بسيطة مثل (>500) أو (بين تاريخين).\n• عرض حقول مختارة فقط من القاعدة.\n• استخدام معالج الاستعلامات (Query Wizard).",
        illustrationDesc: "واجهة الاستعلام تظهر سحب حقل 'الاسم' وحقل 'الراتب' فقط لعرضهما",
        quiz: [
          {
            question: "ما هو هدف 'الاستعلام' (Query)؟",
            options: [
              { text: "حذف كل البيانات", isCorrect: false },
              { text: "طرح سؤال على القاعدة لاسترجاع بيانات محددة", isCorrect: true },
              { text: "تغيير خلفية البرنامج", isCorrect: false },
              { text: "إصلاح الحاسوب", isCorrect: false }
            ],
            feedback: "الاستعلام هو الطريقة التي نستخلص بها الفائدة من مخزون البيانات."
          },
          {
            question: "كيف تبحث عن الموظفين الذين تزيد رواتبهم عن 50000؟",
            options: [
              { text: "كتابة >50000 في حقل 'المعايير' (Criteria)", isCorrect: true },
              { text: "البحث عنهم بالنظر", isCorrect: false },
              { text: "حذف من يتقاضى أقل من ذلك", isCorrect: false },
              { text: "تغيير عملة الجدول", isCorrect: false }
            ],
            feedback: "الاستعلامات المنطقية توفر ساعات من العمل اليدوي."
          },
          {
            question: "هل يمكن للاستعلام أن يجمع بيانات من عدة جداول؟",
            options: [
              { text: "نعم، إذا كانت مرتبطة ببعضها", isCorrect: true },
              { text: "لا، كل جدول له استعلام خاص", isCorrect: false },
              { text: "نعم، ولكن للصور فقط", isCorrect: false },
              { text: "لا، أكساس لا يدعم ذلك", isCorrect: false }
            ],
            feedback: "هذه هي قوة أكساس الحقيقية: القدرة على ربط وتحليل بيانات متباعدة."
          }
        ]
      }
    ]
  },
  {
    id: 11,
    lessons: [
      {
        id: "11-1",
        title: "تصميم النماذج (Forms) للمستخدم النهائي",
        summary: "• تحويل الجداول الجافة إلى واجهات إدخال سهلة.\n• إضافة الأزرار (حفظ، حذف، التالي).\n• التحكم في ألوان وتنسيقات الواجهة.\n• منع المستخدم من رؤية الجداول الأصلية.",
        illustrationDesc: "واجهة إدخال أنيقة بها مربعات نص وزر كبير مكتوب عليه 'حفظ السجل'",
        quiz: [
          {
            question: "ما هي الميزة الأساسية لاستخدام 'النموذج' (Form)؟",
            options: [
              { text: "جعل إدخال البيانات أكثر سهولة وتنظيماً وأماناً", isCorrect: true },
              { text: "تسريع تشغيل الويندوز", isCorrect: false },
              { text: "طباعة الأوراق بدون حبر", isCorrect: false },
              { text: "حذف الفيروسات", isCorrect: false }
            ],
            feedback: "النماذج هي الواجهة التي يتعامل معها المستخدم العادي دون خوف من تخريب القاعدة."
          },
          {
            question: "أي قائمة نستخدمها لإضافة زر أمر (Command Button)؟",
            options: [
              { text: "تصميم النموذج (Design)", isCorrect: true },
              { text: "ملف", isCorrect: false },
              { text: "مساعدة", isCorrect: false },
              { text: "مراجعة", isCorrect: false }
            ],
            feedback: "تبويب التصميم يحتوي على كافة أدوات التحكم (Controls)."
          },
          {
            question: "هل يمكن للنموذج أن يعرض صورة الموظف؟",
            options: [
              { text: "نعم، عبر حقل 'إرفاق' وصورة في النموذج", isCorrect: true },
              { text: "لا، أكساس للنصوص فقط", isCorrect: false },
              { text: "نعم، ولكن باللون الأسود فقط", isCorrect: false },
              { text: "لا، الصور تزيد حجم الملف كثيراً", isCorrect: false }
            ],
            feedback: "النماذج تسمح ببناء تطبيقات احترافية متكاملة تشمل الوسائط."
          }
        ]
      },
      {
        id: "11-2",
        title: "إنشاء التقارير (Reports) المطبوعة",
        summary: "• تحويل البيانات إلى وثائق رسمية جاهزة للطباعة.\n• فرز وتجميع البيانات في التقرير (مثلاً حسب المدينة).\n• إضافة الإجماليات والمتوسطات في تذييل التقرير.\n• تصدير التقرير إلى PDF.",
        illustrationDesc: "تقرير مطبوع يظهر قائمة المبيعات مع مجموع نهائي في الأسفل",
        quiz: [
          {
            question: "ما هو الفرق بين الاستعلام والتقرير؟",
            options: [
              { text: "لا فرق", isCorrect: false },
              { text: "الاستعلام للبحث والتقرير للعرض المنسق والطباعة", isCorrect: true },
              { text: "التقرير هو جدول بيانات خام", isCorrect: false },
              { text: "الاستعلام أصعب في التصميم", isCorrect: false }
            ],
            feedback: "التقارير هي المخرجات النهائية التي يراها المدير أو الزبون."
          },
          {
            question: "كيف نجمع المبيعات حسب 'اسم البائع' في تقرير واحد؟",
            options: [
              { text: "برسم خطوط بينها", isCorrect: false },
              { text: "باستخدام خاصية 'تجميع' (Group By)", isCorrect: true },
              { text: "بكتابة أسمائهم يدوياً", isCorrect: false },
              { text: "لا يمكن ذلك", isCorrect: false }
            ],
            feedback: "التجميع يجعل التقارير الطويلة منظمة وسهلة القراءة."
          },
          {
            question: "أين نضع 'التاريخ الحالي' ليظهر في كل الصفحات؟",
            options: [
              { text: "في رأس الصفحة (Page Header)", isCorrect: true },
              { text: "وسط الجدول", isCorrect: false },
              { text: "في سلة المهملات", isCorrect: false },
              { text: "على سطح المكتب", isCorrect: false }
            ],
            feedback: "رأس وتذييل الصفحة هما الأماكن المثالية للمعلومات المتكررة."
          }
        ]
      },
      {
        id: "11-3",
        title: "صيانة وتأمين قواعد البيانات",
        summary: "• أداة 'ضغط وإصلاح قاعدة البيانات' (Compact and Repair).\n• تشفير القاعدة بكلمة مرور متقدمة.\n• إنشاء نسخ احتياطية داخلية.\n• تقسيم قاعدة البيانات (Front-end / Back-end).",
        illustrationDesc: "رسم يوضح تقسيم القاعدة إلى ملف للبيانات وملف للواجهات لحمايتها",
        quiz: [
          {
            question: "ما فائدة 'ضغط وإصلاح قاعدة البيانات'؟",
            options: [
              { text: "تصغير الحجم ومعالجة الأخطاء التي قد تحدث مع كثرة الاستخدام", isCorrect: true },
              { text: "حذف البيانات القديمة", isCorrect: false },
              { text: "تغيير اسم الملف", isCorrect: false },
              { text: "إرسال القاعدة عبر الإيميل", isCorrect: false }
            ],
            feedback: "الصيانة الدورية تضمن عمل القاعدة بسلاسة لسنوات طويلة."
          },
          {
            question: "كيف تحمي بيانات الزبائن من المتطفلين في أكساس؟",
            options: [
              { text: "تغيير لون الأيقونة", isCorrect: false },
              { text: "تشفير الملف بكلمة مرور (File -> Encrypt with Password)", isCorrect: true },
              { text: "إخفاء الحاسوب", isCorrect: false },
              { text: "تسمية الملف بـ 'لا تفتح'", isCorrect: false }
            ],
            feedback: "التشفير يمنع فتح الملف حتى لو تمت سرقته مادياً."
          },
          {
            question: "لماذا نقسم قاعدة البيانات؟",
            options: [
              { text: "لأنها كبيرة جداً", isCorrect: false },
              { text: "للسماح لعدة مستخدمين بالولوج للبيانات في نفس الوقت عبر الشبكة", isCorrect: true },
              { text: "لزيادة عدد الجداول", isCorrect: false },
              { text: "لا سبب تقني لذلك", isCorrect: false }
            ],
            feedback: "التقسيم ضروري في بيئات العمل الجماعية (Multi-user environments)."
          }
        ]
      }
    ]
  },
  {
    id: 12,
    lessons: [
      {
        id: "12-1",
        title: "تحويل البيانات بين الأنظمة المختلفة",
        summary: "• استيراد بيانات من ملف نصي أو إكسيل إلى أكساس.\n• تصدير السجلات من أكساس إلى مستند وورد.\n• التعامل مع ملفات CSV.\n• مشاكل ترميز اللغة العربية عند التحويل وكيفية حلها.",
        illustrationDesc: "رسم يوضح تدفق البيانات بين برامج (Access -> Excel -> Word)",
        quiz: [
          {
            question: "ماذا تعني كلمة 'استيراد' (Import) في القواعد؟",
            options: [
              { text: "إرسال بيانات للخارج", isCorrect: false },
              { text: "جلب بيانات من ملف خارجي وإضافتها للقاعدة", isCorrect: true },
              { text: "حذف البيانات", isCorrect: false },
              { text: "تغيير لغة الويندوز", isCorrect: false }
            ],
            feedback: "الاستيراد يوفر عناء إعادة كتابة آلاف الأسطر يدوياً."
          },
          {
            question: "ما هو ملف CSV؟",
            options: [
              { text: "ملف فيديو", isCorrect: false },
              { text: "ملف نصي بسيط يحتوي على قيم مفصولة بفواصل (Comma Separated Values)", isCorrect: true },
              { text: "برنامج حماية", isCorrect: false },
              { text: "نوع من أنواع الشاشات", isCorrect: false }
            ],
            feedback: "CSV هو 'لغة التواصل' المشتركة بين أغلب برامج البيانات حول العالم."
          },
          {
            question: "ماذا نفعل إذا ظهرت اللغة العربية كرموز غريبة عند الاستيراد؟",
            options: [
              { text: "إعادة كتابتها", isCorrect: false },
              { text: "تغيير 'ترميز الملف' إلى UTF-8 أو Windows-1256", isCorrect: true },
              { text: "تبديل الشاشة", isCorrect: false },
              { text: "مسح الحاسوب", isCorrect: false }
            ],
            feedback: "ضبط الترميز الصحيح يضمن ظهور الحروف العربية بوضوح."
          }
        ]
      },
      {
        id: "12-2",
        title: "الأتمتة البسيطة - الماكرو (Macros)",
        summary: "• مفهوم الماكرو لتنفيذ مجموعة أوامر بضغطة واحدة.\n• إنشاء ماكرو لفتح نموذج معين أو طباعة تقرير.\n• ربط الماكرو بالأزرار في الواجهة.\n• الماكرو الذي يعمل عند فتح قاعدة البيانات (AutoExec).",
        illustrationDesc: "زر في أكساس عند الضغط عليه يقوم بحفظ السجل + طباعة + إغلاق النافذة",
        quiz: [
          {
            question: "ما هو 'الماكرو'؟",
            options: [
              { text: "فيروس حاسوبي", isCorrect: false },
              { text: "سلسلة من الأوامر المسجلة التي تنفذ تلقائياً", isCorrect: true },
              { text: "أكبر حجم للخط", isCorrect: false },
              { text: "نوع من أنواع الذاكرة", isCorrect: false }
            ],
            feedback: "الماكرو هو الخطوة الأولى نحو برمجة قواعد البيانات وجعلها ذكية."
          },
          {
            question: "كيف تجعل قاعدة البيانات تفتح واجهة الترحيب تلقائياً؟",
            options: [
              { text: "الاتصال بالدعم الفني", isCorrect: false },
              { text: "إنشاء ماكرو وتسميته AutoExec", isCorrect: true },
              { text: "ترك الحاسوب مشتعلاً", isCorrect: false },
              { text: "لا يمكن ذلك", isCorrect: false }
            ],
            feedback: "AutoExec هو اسم محجوز في أكساس للأوامر التي تعمل عند البدء."
          },
          {
            question: "أين نكتب أوامر الماكرو؟",
            options: [
              { text: "في قائمة 'وحدات الماكرو' (Macros)", isCorrect: true },
              { text: "في ملف Word خارجي", isCorrect: false },
              { text: "على سطح المكتب", isCorrect: false },
              { text: "لا نحتاج للكتابة، نستخدم الفأرة فقط", isCorrect: false }
            ],
            feedback: "منشئ الماكرو في أكساس يوفر قوائم جاهزة للأوامر الشائعة."
          }
        ]
      },
      {
        id: "12-3",
        title: "تنظيم سير العمل الإداري الرقمي",
        summary: "• ربط المهام الإدارية بأدوات الحاسوب الأنسب.\n• دورة حياة المعلومة من الاستلام إلى الأرشفة النهائية.\n• مهارات التوثيق الفني لقاعدة البيانات.\n• إعداد دليل استخدام بسيط للموظفين الآخرين.",
        illustrationDesc: "مخطط سهمي يوضح مسار الطلب الإداري من الزبون إلى قاعدة البيانات",
        quiz: [
          {
            question: "لماذا يجب كتابة 'دليل استخدام' للقاعدة التي صممتها؟",
            options: [
              { text: "لزيادة عدد الأوراق", isCorrect: false },
              { text: "ليتمكن أي موظف آخر من استخدامها دون مساعدتك المستمرة", isCorrect: true },
              { text: "لإثبات أنك تعمل", isCorrect: false },
              { text: "لأنها قوانين البرمجة", isCorrect: false }
            ],
            feedback: "التوثيق الجيد هو علامة الاحترافية والاستدامة في العمل."
          },
          {
            question: "ما هو 'سير العمل' (Workflow)؟",
            options: [
              { text: "السرعة في المشي بالمكتب", isCorrect: false },
              { text: "تسلسل الخطوات المنظمة لإنجاز مهمة إدارية", isCorrect: true },
              { text: "تغيير مكان الحاسوب", isCorrect: false },
              { text: "نوع من أنواع البرامج", isCorrect: false }
            ],
            feedback: "تنظيم الخطوات يمنع التكرار والضياع في البيانات."
          },
          {
            question: "أفضل وسيلة لحفظ 'أسرار العمل' الرقمية هي:",
            options: [
              { text: "كتمها في النفس فقط", isCorrect: false },
              { text: "استخدام نظام تراخيص ولوج (Permissions) وتشفير", isCorrect: true },
              { text: "عدم كتابتها في الحاسوب", isCorrect: false },
              { text: "كتابتها بخط مشفر يدوياً", isCorrect: false }
            ],
            feedback: "الأمان التقني المدروس أقوى بكثير من الاعتماد على الذاكرة."
          }
        ]
      }
    ]
  },
  {
    id: 13,
    lessons: [
      {
        id: "13-1",
        title: "العمل مع مستندات Google و Sheets",
        summary: "• مقدمة للعمل السحابي (Cloud Computing).\n• ميزات Google Sheets مقارنة بـ Excel.\n• التشاركية اللحظية (القدرة على العمل مع 10 أشخاص في نفس الوقت).\n• حفظ الملفات بصيغ متعددة للعمل دون إنترنت.",
        illustrationDesc: "توضيح لخلية يتغير لونها مع ظهور اسم شخص آخر يعمل عليها الآن",
        quiz: [
          {
            question: "ما هي الميزة الأقوى في Google Sheets؟",
            options: [
              { text: "لا تحتاج لإنترنت", isCorrect: false },
              { text: "التعاون اللحظي والحفظ التلقائي على السحابة", isCorrect: true },
              { text: "أنها تحتوي على ألعاب", isCorrect: false },
              { text: "أنها بفلوس كثيرة", isCorrect: false }
            ],
            feedback: "السحابة تعني أن بياناتك معك في أي مكان في العالم."
          },
          {
            question: "كيف تشارك ملف Sheets مع زميلك؟",
            options: [
              { text: "بإعطائه فلاش ديسك", isCorrect: false },
              { text: "عبر زر 'مشاركة' (Share) وإدخال بريده الإلكتروني", isCorrect: true },
              { text: "بإرسال صورة للشاشة", isCorrect: false },
              { text: "لا يمكن المشاركة", isCorrect: false }
            ],
            feedback: "المشاركة تمنحك تحكماً كاملاً في من يمكنه العرض أو التعديل."
          },
          {
            question: "هل يحتاج Google Docs للضغط على زر 'حفظ'؟",
            options: [
              { text: "نعم، كل دقيقة", isCorrect: false },
              { text: "لا، يحفظ التغييرات تلقائياً فور كتابتها", isCorrect: true },
              { text: "نعم، عند إغلاق الجهاز فقط", isCorrect: false },
              { text: "فقط إذا كنت تستخدم اللابتوب", isCorrect: false }
            ],
            feedback: "الحفظ التلقائي يحميك من ضياع العمل في حال انقطاع الكهرباء."
          }
        ]
      },
      {
        id: "13-2",
        title: "تنظيم المواعيد الرقمية والمهام (Tasks)",
        summary: "• مهارات استخدام Google Calendar للمكاتب.\n• إنشاء تذكيرات (Reminders) للمهام اليومية.\n• تنظيم الاجتماعات الافتراضية ودعوة الحضور.\n• مزامنة المواعيد مع الهاتف المحمول.",
        illustrationDesc: "واجهة تقويم تظهر فيها مهام ملونة موزعة على ساعات اليوم",
        quiz: [
          {
            question: "ما فائدة 'تكرار الحدث' في التقويم؟",
            options: [
              { text: "جعل الملف أكبر", isCorrect: false },
              { text: "جدولة المهام الروتينية (مثل تقرير شهري) تلقائياً", isCorrect: true },
              { text: "حذف المهمة بعد أدائها", isCorrect: false },
              { text: "تغيير لون اليوم", isCorrect: false }
            ],
            feedback: "التكرار الذكي يوفر وقت الجدولة اليدوية كل مرة."
          },
          {
            question: "ماذا يحدث عند إضافة 'موقع' (Location) للاجتماع؟",
            options: [
              { text: "يظهر رابط خرائط جوجل للمدعوين", isCorrect: true },
              { text: "يتغير وقت الاجتماع", isCorrect: false },
              { text: "يتم إلغاء الاجتماع", isCorrect: false },
              { text: "لا شيء", isCorrect: false }
            ],
            feedback: "إضافة الموقع تسهل على الحاضرين الوصول للورشة أو المكتب."
          },
          {
            question: "كيف تتأكد أن زميلك رأى موعد الاجتماع؟",
            options: [
              { text: "برؤية حالة 'القبول' (Going: Yes) بجانب اسمه", isCorrect: true },
              { text: "بانتظاره في المكتب", isCorrect: false },
              { text: "بإعادة إرسال الرسالة 10 مرات", isCorrect: false },
              { text: "لا يمكن التأكد", isCorrect: false }
            ],
            feedback: "التقويم التفاعلي يعطيك تقريراً لحظياً عن حضور فريق العمل."
          }
        ]
      },
      {
        id: "13-3",
        title: "إدارة التخزين السحابي (Google Drive / OneDrive)",
        summary: "• مفهوم المجلدات المشتركة في العمل.\n• إدارة صلاحيات الوصول (مشاهد، معلق، محرر).\n• البحث المتقدم داخل الصور والملفات الممسوحة ضوئياً.\n• استعادة النسخ السابقة من الملفات (Version History).",
        illustrationDesc: "رسم يوضح أيقونة 'سحابة' تحتوي على جميع ملفات المكتب آمنة",
        quiz: [
          {
            question: "ماذا تعني صلاحية 'مشاهد' (Viewer)؟",
            options: [
              { text: "يمكنه تعديل الملف وحذفه", isCorrect: false },
              { text: "يمكنه رؤية الملف فقط دون إجراء أي تغيير", isCorrect: true },
              { text: "يمكنه تغيير اسم الملف", isCorrect: false },
              { text: "لا يمكنه فتح الملف", isCorrect: false }
            ],
            feedback: "استخدام الصلاحيات الصحيحة يمنع التلاعب بالبيانات الحساسة."
          },
          {
            question: "فقدت بيانات من ملفك، كيف تعود لما كتبته قبل ساعة؟",
            options: [
              { text: "لا يمكن ذلك", isCorrect: false },
              { text: "استخدام 'سجل النسخ' (Version History)", isCorrect: true },
              { text: "إعادة كتابته من الذاكرة", isCorrect: false },
              { text: "شراء حاسوب جديد", isCorrect: false }
            ],
            feedback: "سجل النسخ هو 'آلة زمن' رقمية تحميك من الأخطاء الكارثية."
          },
          {
            question: "ما هو الحجم المجاني التقريبي لـ Google Drive؟",
            options: [
              { text: "1 جيجابايت", isCorrect: false },
              { text: "15 جيجابايت", isCorrect: true },
              { text: "لا يوجد حجم مجاني", isCorrect: false },
              { text: "غير محدود", isCorrect: false }
            ],
            feedback: "15 جيجابايت تكفي لآلاف الوثائق الإدارية النصية."
          }
        ]
      }
    ]
  },
  {
    id: 14,
    lessons: [
      {
        id: "14-1",
        title: "مشروع منتصف المسار - إدارة مؤسسة مصغرة",
        summary: "• دمج مهارات Word, Excel, Access و Cloud في مشروع واحد.\n• تصميم نظام إدارة زبائن كامل.\n• استخراج تقارير أداء شهرية مرئية.\n• عرض النتائج في عرض تقديمي بسيط.",
        illustrationDesc: "لوحة تحكم (Dashboard) تجمع بين الجداول والرسوم البيانية لإدارة شركة",
        quiz: [
          {
            question: "أي مهارة هي الأكثر تكاملاً لمشروع ضخم؟",
            options: [
              { text: "إدخال البيانات فقط", isCorrect: false },
              { text: "الربط بين مختلف البرامج لتسيير تدفق المعلومة", isCorrect: true },
              { text: "تلوين الشاشة", isCorrect: false },
              { text: "شراء أجهزة جديدة", isCorrect: false }
            ],
            feedback: "الموظف الشامل هو من يستطيع جعل البرامج تتحدث مع بعضها."
          },
          {
            question: "ما هي الخطوة الأولى لبدء نظام إدارة بيانات؟",
            options: [
              { text: "شراء البرنامج الأغلى", isCorrect: false },
              { text: "فهم احتياجات العمل وتصميم هيكلية الجداول ورقياً أولاً", isCorrect: true },
              { text: "البدء في الكتابة عشوائياً", isCorrect: false },
              { text: "توظيف 10 موظفين", isCorrect: false }
            ],
            feedback: "التخطيط المسبق يوفر 90% من وقت البرمجة والإدخال."
          },
          {
            question: "كيف تضمن نجاح مشروعك الرقمي؟",
            options: [
              { text: "بإخفائه عن الجميع", isCorrect: false },
              { text: "بالتأكد من دقة البيانات وسهولة استخراج التقارير منه", isCorrect: true },
              { text: "بوضع الكثير من الصور الجميلة", isCorrect: false },
              { text: "بجعله معقداً جداً", isCorrect: false }
            ],
            feedback: "البساطة والدقة هما سر نجاح أي نظام معلوماتي."
          }
        ]
      },
      {
        id: "14-2",
        title: "مهارات حل المشكلات التقنية الإدارية",
        summary: "• تشخيص أخطاء الدوال في إكسيل (#VALUE, #N/A).\n• استعادة الملفات غير المحفوظة بعد انقطاع التيار.\n• التعامل مع ملفات الوورد التالفة.\n• مهارات البحث عن الحلول في منتديات الدعم التقني.",
        illustrationDesc: "شاشة تظهر رسالة خطأ في إكسيل مع علامة استفهام توضيحية",
        quiz: [
          {
            question: "ماذا يعني الخطأ #REF! في إكسيل؟",
            options: [
              { text: "الجمالية عالية جداً", isCorrect: false },
              { text: "تم حذف خلية كانت المعادلة تعتمد عليها", isCorrect: true },
              { text: "الرقم كبير جداً", isCorrect: false },
              { text: "لا يوجد خطأ", isCorrect: false }
            ],
            feedback: "هذا الخطأ شائع عند حذف صفوف أو أعمدة مرتبطة بمعادلات."
          },
          {
            question: "أين يبحث المحترف عن حل لمشكلة برمجية نادرة؟",
            options: [
              { text: "في سلة المهملات", isCorrect: false },
              { text: "في محركات البحث ومجتمعات دعم مايكروسوفت", isCorrect: true },
              { text: "يسأل الجيران", isCorrect: false },
              { text: "ينتظر حتى تختفي المشكلة", isCorrect: false }
            ],
            feedback: "البحث الذكي عن الحلول هو مهارة تقنية بحد ذاتها."
          },
          {
            question: "ما فائدة خاصية 'الاسترداد التلقائي' (Auto-Recover)؟",
            options: [
              { text: "فتح الملفات بسرعة", isCorrect: false },
              { text: "استعادة آخر نسخة محفوظة من الملف قبل انطفاء الجهاز فجأة", isCorrect: true },
              { text: "إرسال الملف للإيميل تلقائياً", isCorrect: false },
              { text: "تغيير تنسيق الملف", isCorrect: false }
            ],
            feedback: "هذه الخاصية أنقذت ملايين الساعات من العمل الضائع."
          }
        ]
      },
      {
        id: "14-3",
        title: "التواصل المهني الرقمي المتقدم",
        summary: "• كتابة التقارير الإدارية بأسلوب 'أسفل-أعلى' (Bottom-up).\n• فن صياغة التنبيهات والطلبات الرسمية.\n• استخدام أدوات الاجتماعات (Zoom / Meet) بفعالية.\n• بناء هوية رقمية مهنية على منصات مثل LinkedIn.",
        illustrationDesc: "رسم يوضح شخصاً يرتدي ملابس رسمية ويشارك شاشته في اجتماع فيديو",
        quiz: [
          {
            question: "ما هو 'الإتيكيت' الرقمي في اجتماعات الفيديو؟",
            options: [
              { text: "الأكل أثناء الاجتماع", isCorrect: false },
              { text: "كتم الميكروفون عند عدم التحدث والالتزام بالوقت", isCorrect: true },
              { text: "الصراخ لجذب الانتباه", isCorrect: false },
              { text: "إغلاق الكاميرا والنوم", isCorrect: false }
            ],
            feedback: "الاحترام الرقمي يعكس مهنية عالية في بيئة العمل الحديثة."
          },
          {
            question: "لماذا يحتاج عون المعلومات لحساب LinkedIn؟",
            options: [
              { text: "لمشاركة الصور العائلية", isCorrect: false },
              { text: "لبناء شبكة علاقات مهنية والبحث عن فرص عمل أفضل", isCorrect: true },
              { text: "للترفيه والألعاب", isCorrect: false },
              { text: "لأنه ضروري لتشغيل الحاسوب", isCorrect: false }
            ],
            feedback: "لينكدإن هو المجلس العالمي للمهنيين وأرباب العمل."
          },
          {
            question: "ما هي القاعدة الذهبية في المراسلات الرسمية؟",
            options: [
              { text: "الوضوح، الاختصار، واللباقة", isCorrect: true },
              { text: "استخدام الكثير من الألوان", isCorrect: false },
              { text: "كتابة 10 صفحات لكل طلب", isCorrect: false },
              { text: "تجاهل التحية", isCorrect: false }
            ],
            feedback: "المسؤولون يفضلون الرسائل المباشرة والواضحة التي توفر وقتهم."
          }
        ]
      }
    ]
  }
];
