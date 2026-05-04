import { Level } from "../curriculum";

export const dataEntryAdvanced: Level[] = [
  {
    id: 15,
    lessons: [
      {
        id: "15-1",
        title: "تحليل البيانات المتقدم - الجداول المحورية (Pivot Tables)",
        summary: "• مفهوم 'المحور' في تلخيص آلاف البيانات في ثوانٍ.\n• تحويل جداول المبيعات الضخمة إلى تقارير سنوية.\n• استخدام عوامل التصفية (Slicers) التفاعلية.\n• الفرق بين البيانات الخام والبيانات المعلوماتية.",
        illustrationDesc: "توضيح لجدول عملاق يتحول إلى جدول صغير ملخص مع رسوم بيانية تفاعلية",
        quiz: [
          {
            question: "ما هي أهم ميزة للجداول المحورية (Pivot Tables)؟",
            options: [
              { text: "تغيير لون الخط", isCorrect: false },
              { text: "تلخيص وتحليل كميات ضخمة من البيانات بمرونة فائقة", isCorrect: true },
              { text: "حذف الملفات القديمة", isCorrect: false },
              { text: "رسم خرائط يدوية", isCorrect: false }
            ],
            feedback: "الجداول المحورية هي الأداة الأقوى في إكسيل لصناع القرار."
          },
          {
            question: "ما هو الـ Slicer في إكسيل؟",
            options: [
              { text: "أداة لقص الصور", isCorrect: false },
              { text: "فلتر تفاعلي سهل الاستخدام لتحليل البيانات بسرعة", isCorrect: true },
              { text: "نوع من أنواع الفيروسات", isCorrect: false },
              { text: "برنامج لتعديل الفيديو", isCorrect: false }
            ],
            feedback: "الـ Slicers تجعل الجداول المحورية تبدو كلوحات تحكم (Dashboards) احترافية."
          },
          {
            question: "أين نجد خيار إدراج Pivot Table؟",
            options: [
              { text: "قائمة 'إدراج' (Insert)", isCorrect: true },
              { text: "قائمة 'ملف'", isCorrect: false },
              { text: "قائمة 'مراجعة'", isCorrect: false },
              { text: "على سطح المكتب", isCorrect: false }
            ],
            feedback: "يجب تحديد البيانات أولاً ثم الذهاب لقائمة إدراج."
          }
        ]
      },
      {
        id: "15-2",
        title: "برمجة المهام البسيطة باستخدام VBA",
        summary: "• مقدمة لبرمجة ماكرو إكسيل (Visual Basic for Applications).\n• إنشاء أزرار تقوم بعمليات حسابية معقدة.\n• مفهوم المتغيرات (Variables) والحلقات (Loops).\n• كتابة كود بسيط لتنظيف البيانات تلقائياً.",
        illustrationDesc: "نافذة كود برمجي بسيط بجوار جدول بيانات إكسيل",
        quiz: [
          {
            question: "ما هو VBA؟",
            options: [
              { text: "لغة برمجة مدمجة في برامج الأوفيس للأتمتة", isCorrect: true },
              { text: "إصدار قديم من وورد", isCorrect: false },
              { text: "برنامج لحماية الصور", isCorrect: false },
              { text: "نوع من أنواع الطابعات", isCorrect: false }
            ],
            feedback: "VBA تمنحك القوة لتجاوز حدود إكسيل العادية وصنع برامجك الخاصة."
          },
          {
            question: "كيف نفتح محرر الكود في إكسيل؟",
            options: [
              { text: "بالضغط على Alt + F11", isCorrect: true },
              { text: "بإغلاق وفتح الملف 3 مرات", isCorrect: false },
              { text: "بالنقر المزدوج على الشاشة", isCorrect: false },
              { text: "لا يمكن فتحه", isCorrect: false }
            ],
            feedback: "Alt+F11 هو المفتاح السري لعالم البرمجة داخل الأوفيس."
          },
          {
            question: "لماذا نستخدم البرمجة بدل الماكرو المسجل؟",
            options: [
              { text: "لأنها أصعب", isCorrect: false },
              { text: "للقدرة على التعامل مع الشروط المعقدة والقرارات الذكية داخل الكود", isCorrect: true },
              { text: "لأنها تجعل الملف أصغر", isCorrect: false },
              { text: "لا فرق بينهما", isCorrect: false }
            ],
            feedback: "البرمجة تسمح بالمرونة الكاملة التي لا تتوفر في التسجيل البسيط."
          }
        ]
      },
      {
        id: "15-3",
        title: "ذكاء الأعمال (Power BI) للمبتدئين",
        summary: "• مقدمة لأداة تحليل البيانات Power BI.\n• كيفية ربط مصادر بيانات متعددة (Excel, Access, URL).\n• تصميم لوحات تحكم (Dashboards) حية.\n• مفهوم التفاعل بين المخططات والخرائط.",
        illustrationDesc: "لوحة تحكم تفاعلية تظهر مبيعات الجزائر حسب الولايات بوضوح",
        quiz: [
          {
            question: "ما هو الفرق الأساسي بين Excel و Power BI؟",
            options: [
              { text: "لا يوجد فرق", isCorrect: false },
              { text: "Power BI متخصص في العرض البصري الاحترافي والربط المعقد للبيانات الضخمة", isCorrect: true },
              { text: "إكسيل أسرع دائماً", isCorrect: false },
              { text: "Power BI لا يحتاج لبيانات", isCorrect: false }
            ],
            feedback: "Power BI يحول الأرقام الجافة إلى قصص بصرية ملهمة."
          },
          {
            question: "ماذا تعني ميزة 'تحديث البيانات الحية'؟",
            options: [
              { text: "تغيير تاريخ اليوم", isCorrect: false },
              { text: "تحديث الرسوم البيانية تلقائياً بمجرد إضافة بيانات جديدة للمصدر", isCorrect: true },
              { text: "مسح البيانات القديمة", isCorrect: false },
              { text: "تغيير لغة البرنامج", isCorrect: false }
            ],
            feedback: "العرض الحي يضمن بقاء مسؤولي المؤسسة على اطلاع لحظي بالنتائج."
          },
          {
            question: "هل يمكن مشاركة لوحات Power BI عبر الويب؟",
            options: [
              { text: "نعم، عبر خدمة Power BI Service", isCorrect: true },
              { text: "لا، تعمل فقط على حاسوب واحد", isCorrect: false },
              { text: "فقط إذا أرسلتها في فلاش ديسك", isCorrect: false },
              { text: "نعم، ولكن للصور فقط", isCorrect: false }
            ],
            feedback: "المشاركة السحابية هي أساس اتخاذ القرارات في الشركات الكبرى."
          }
        ]
      }
    ]
  },
  {
    id: 16,
    lessons: [
      {
        id: "16-1",
        title: "أتمتة العمليات الإدارية (RPA) - مقدمة",
        summary: "• مفهوم أتمتة العمليات الروبوتية (Robotic Process Automation).\n• كيف يقوم 'روبوت برمجيات' بمحاكاة نقرات الموظف.\n• تحديد المهام المتكررة التي يمكن أتمتتها (إرسال فواتير، نسخ بيانات).\n• أدوات مثل Power Automate.",
        illustrationDesc: "رسم يوضح ذراع آلي افتراضي يكتب على لوحة مفاتيح الحاسوب بسرعة مذهلة",
        quiz: [
          {
            question: "ما هو هدف الـ RPA الأساسي؟",
            options: [
              { text: "استبدال البشر بالكامل", isCorrect: false },
              { text: "تحرير الموظفين من المهام الروتينية المملة للتركيز على الإبداع", isCorrect: true },
              { text: "تصنيع روبوتات ملموسة", isCorrect: false },
              { text: "تسريع سرعة الإنترنت", isCorrect: false }
            ],
            feedback: "الـ RPA هو المنسق الرقمي الذي ينقل البيانات بين البرامج دون تعب أو خطأ."
          },
          {
            question: "أي مهمة هي الأنسب للأتمتة؟",
            options: [
              { text: "كتابة قصيدة شعرية", isCorrect: false },
              { text: "استخراج بيانات 1000 فاتورة من الإيميل وحفظها في إكسيل يومياً", isCorrect: true },
              { text: "إجراء مقابلة توظيف", isCorrect: false },
              { text: "اختيار ألوان المكتب", isCorrect: false }
            ],
            feedback: "المهام التي تتبع قواعد واضحة وتتكرر بكثرة هي المنجم الحقيقي للأتمتة."
          },
          {
            question: "ما هي ميزة 'التدفقات' (Flows) في Power Automate؟",
            options: [
              { text: "ربط تطبيقات مختلفة (مثل Outlook و OneDrive) للعمل معاً تلقائياً", isCorrect: true },
              { text: "زيادة حجم الرام", isCorrect: false },
              { text: "تحسين جودة الصوت", isCorrect: false },
              { text: "لا ميزة لها", isCorrect: false }
            ],
            feedback: "التدفقات تجعل الحاسوب يعمل نيابة عنك حتى أثناء نومك."
          }
        ]
      },
      {
        id: "16-2",
        title: "نظم تخطيط موارد المؤسسات (ERP) - نظرة شاملة",
        summary: "• مفهوم نظام الـ ERP (مثل SAP, Odoo, Oracle).\n• كيف ترتبط المبيعات بالمخزن والمحاسبة في قاعدة بيانات واحدة.\n• دور عون المعلومات في إدخال البيانات للأنظمة المتكاملة.\n• أهمية توحيد المعايير في المؤسسات الكبرى.",
        illustrationDesc: "دائرة مركزية مكتوب عليها ERP ترتبط بأسهم بكل أقسام الشركة",
        quiz: [
          {
            question: "ماذا تعني كلمة ERP؟",
            options: [
              { text: "خطة الطوارئ السريعة", isCorrect: false },
              { text: "تخطيط موارد المؤسسة (Enterprise Resource Planning)", isCorrect: true },
              { text: "برنامج تعديل الصور", isCorrect: false },
              { text: "شبكة الإنترنت الخاصة", isCorrect: false }
            ],
            feedback: "نظام ERP هو 'الجهاز العصبي' لأي شركة محترفة."
          },
          {
            question: "لماذا تهاجر الشركات من إكسيل إلى أنظمة ERP؟",
            options: [
              { text: "لأن إكسيل سيء", isCorrect: false },
              { text: "للحصول على مصدر واحد للمعلومة وتجنب تضارب البيانات بين الأقسام", isCorrect: true },
              { text: "لأن ERP مجاني دائماً", isCorrect: false },
              { text: "لا يوجد فرق", isCorrect: false }
            ],
            feedback: "في الـ ERP، بمجرد بيع منتج، يتم تحديث المخزن والمحاسبة والتقارير فوراً."
          },
          {
            question: "ما هي أهم مهارة لعون معلومات يعمل على نظام ERP؟",
            options: [
              { text: "السرعة الجنونية", isCorrect: false },
              { text: "فهم دورة البيانات والدقة في الإدخال لمنع الأخطاء التسلسلية", isCorrect: true },
              { text: "إصلاح الأجهزة", isCorrect: false },
              { text: "القدرة على الرسم", isCorrect: false }
            ],
            feedback: "الخطأ في نظام ERP 'يعدي' كل الأقسام، لذا فالدقة والوعي هما الأهم."
          }
        ]
      },
      {
        id: "16-3",
        title: "أمن البيانات المتقدم والسياسات السيبرانية",
        summary: "• الحماية من هجمات الفدية (Ransomware).\n• مفهوم التوثيق الثنائي (2FA) لحسابات العمل.\n• قوانين حماية البيانات الشخصية (GDPR).\n• كيفية التعامل مع اختراق مفترض لبيانات الزبائن.",
        illustrationDesc: "درع رقمي يحمي مجموعة من السجلات من هجوم برمجي أحمر",
        quiz: [
          {
            question: "ما هو هجوم الفدية (Ransomware)؟",
            options: [
              { text: "سرقة الحاسوب مادياً", isCorrect: false },
              { text: "برمجية تشفر ملفاتك وتطلب مالاً لفتحها", isCorrect: true },
              { text: "سرعة إنترنت بطيئة", isCorrect: false },
              { text: "إعلان مزعج", isCorrect: false }
            ],
            feedback: "الوقاية والنسخ الاحتياطي السحابي هما خط الدفاع الأول."
          },
          {
            question: "ما فائدة 2FA (Two-Factor Authentication)؟",
            options: [
              { text: "تسريع الدخول للحساب", isCorrect: false },
              { text: "إضافة طبقة حماية ثانية (مثل كود الهاتف) بجانب كلمة السر", isCorrect: true },
              { text: "تغيير اسم المستخدم", isCorrect: false },
              { text: "لا فائدة لها", isCorrect: false }
            ],
            feedback: "حتى لو سُرقت كلمة سرك، لن يستطيع المخترق الدخول دون كود هاتفك."
          },
          {
            question: "ما هو قانون حماية الخصوصية؟",
            options: [
              { text: "قانون يمنع استخدام الحواسيب", isCorrect: false },
              { text: "قواعد قانونية تمنع الشركات من تسريب بياناتك الشخصية دون إذن", isCorrect: true },
              { text: "قانون لتنظيم أوقات العمل", isCorrect: false },
              { text: "لا يوجد قانون لذلك", isCorrect: false }
            ],
            feedback: "التعامل مع ملفات الزبائن مسؤولية قانونية وأخلاقية كبرى."
          }
        ]
      }
    ]
  },
  {
    id: 17,
    lessons: [
      {
        id: "17-1",
        title: "الذكاء الاصطناعي في خدمة عون المعلومات",
        summary: "• استخدام ChatGPT/Gemini لصياغة المراسلات والتقارير.\n• مهارات كتابة الأوامر (Prompt Engineering) للحصول على جداول إكسيل جاهزة.\n• تلخيص المستندات الطويلة وبرمجتها باستخدام الذكاء الاصطناعي.\n• مخاطر الذكاء الاصطناعي (الهلوسة البرمجية والسرية).",
        illustrationDesc: "مساعد رقمي ذكي يكتب معادلة إكسيل معقدة للمستخدم بمجرد الطلب منه باللغة العربية",
        quiz: [
          {
            question: "كيف يساعدك الذكاء الاصطناعي في إكسيل؟",
            options: [
              { text: "بشراء نسخة أوفيس جديدة", isCorrect: false },
              { text: "بكتابة معادلات معقدة وشرحها لك من خلال لغتك الطبيعية", isCorrect: true },
              { text: "بمسح الفيروسات", isCorrect: false },
              { text: "لا يمكنه المساعدة", isCorrect: false }
            ],
            feedback: "الذكاء الاصطناعي هو 'مساعد تقني' موجود 24/7 لمساعدتك."
          },
          {
            question: "ما هي 'الهلوسة' في نماذج الذكاء الاصطناعي؟",
            options: [
              { text: "سرعة الرد", isCorrect: false },
              { text: "تقديم معلومات خاطئة أو غير منطقية بثقة تامة", isCorrect: true },
              { text: "تغيير ألوان الشاشة", isCorrect: false },
              { text: "التوقف عن العمل", isCorrect: false }
            ],
            feedback: "يجب دائماً مراجعة المخرجات من الذكاء الاصطناعي وعدم الثقة بها عمياء."
          },
          {
            question: "هل يجوز وضع بيانات زبائن سرية في ChatGPT؟",
            options: [
              { text: "نعم، لتنظيمها", isCorrect: false },
              { text: "لا، لأن البيانات قد تستخدم لتدريب النموذج وتصبح غير سرية", isCorrect: true },
              { text: "نعم، إذا كان الحساب مدفوعاً", isCorrect: false },
              { text: "فقط إذا كان المدير موافقاً", isCorrect: false }
            ],
            feedback: "الأمان والخصوصية يأتيان قبل سهولة الاستخدام."
          }
        ]
      },
      {
        id: "17-2",
        title: "الرقمنة المتقدمة والتعرف الضوئي (OCR)",
        summary: "• تحويل الصور الممسوحة قديماً إلى نصوص قابلة للتعديل.\n• أدوات الـ OCR العربية المتطورة.\n• رقمنة الفواتير اليدوية وتحويلها لبيانات مهيكلة.\n• تحسين جودة الصور القديمة قبل الرقمنة.",
        illustrationDesc: "ورقة قديمة مكتوبة بخط اليد تتحول تدريجياً لملف وورد أنيق",
        quiz: [
          {
            question: "ماذا يقصد بـ OCR؟",
            options: [
              { text: "نظام تشغيل جديد", isCorrect: false },
              { text: "التعرف الضوئي على الحروف (Optical Character Recognition)", isCorrect: true },
              { text: "سرعة المعالج", isCorrect: false },
              { text: "برنامج للرسم", isCorrect: false }
            ],
            feedback: "الـ OCR هو الجسر الذي يعبر به التاريخ الورقي للعصر الرقمي."
          },
          {
            question: "لماذا تعتبر اللغة العربية صعبة في الـ OCR؟",
            options: [
              { text: "لأنها لغة جميلة", isCorrect: false },
              { text: "بسبب تشابك الحروف وتعدد أشكال الحرف الواحد", isCorrect: true },
              { text: "لأنها تكتب من اليمين", isCorrect: false },
              { text: "لا توجد صعوبة", isCorrect: false }
            ],
            feedback: "التكنولوجيا تطورت جداً وأصبحت تدعم العربية بدقة تفوق 90%."
          },
          {
            question: "أين نجد خدمة OCR مجانية قوية؟",
            options: [
              { text: "في سلة المحذوفات", isCorrect: false },
              { text: "داخل Google Drive (فتح باستخدام Google Docs)", isCorrect: true },
              { text: "في لوحة التحكم", isCorrect: false },
              { text: "لا توجد خدمات مجانية", isCorrect: false }
            ],
            feedback: "جوجل توفر أحد أقوى محركات الـ OCR للغة العربية مجاناً."
          }
        ]
      },
      {
        id: "17-3",
        title: "العمل الحر الرقمي (Freelancing) كخبير بيانات",
        summary: "• كيف تبيع مهاراتك في إدخال وتحليل البيانات عالمياً.\n• منصات العمل الحر (Upwork, Freelancer, Khamsat).\n• تحديد الأسعار بناءً على الساعة أو السجل.\n• بناء معرض أعمال (Portfolio) تقني مبهر.",
        illustrationDesc: "شخص يعمل من منزله خلف شاشتين مع أيقونات لمبالغ مالية دولية",
        quiz: [
          {
            question: "ما هو الـ Portfolio؟",
            options: [
              { text: "نوع من أنواع الحواسيب", isCorrect: false },
              { text: "ملف يضم نماذج من أفضل أعمالك السابقة لإقناع الزبائن", isCorrect: true },
              { text: "محفظة نقود ملموسة", isCorrect: false },
              { text: "اسم شركة عالمية", isCorrect: false }
            ],
            feedback: "معرض الأعمال هو دليلك القوي على أنك تمتلك المهارات التي تدعيها."
          },
          {
            question: "كيف تتميز في سوق العمل الحر كعون معلومات؟",
            options: [
              { text: "بتقديم أرخص سعر إطلاقاً", isCorrect: false },
              { text: "بالتخصص في مجال دقيق (مثل تنظيف قواعد البيانات الطبية)", isCorrect: true },
              { text: "بوضع صورة كرتونية", isCorrect: false },
              { text: "بتجاهل رسائل الزبائن", isCorrect: false }
            ],
            feedback: "التخصص يعني احترافية أعلى وأجراً أفضل بكثير."
          },
          {
            question: "ما هي أهم لغة يجب تعلم مبادئها للعمل عالمياً؟",
            options: [
              { text: "الإنجليزية (للتواصل مع الزبائن وفهم الأدوات)", isCorrect: true },
              { text: "الإسبانية", isCorrect: false },
              { text: "لغة الإشارة", isCorrect: false },
              { text: "لا حاجة للغات", isCorrect: false }
            ],
            feedback: "الإنجليزية هي لغة تكنولوجيا المعلومات والعمل العالمي."
          }
        ]
      }
    ]
  },
  {
    id: 18,
    lessons: [
      {
        id: "18-1",
        title: "إدارة المشاريع الرقمية للمكاتب الإدارية",
        summary: "• استخدام أدوات مثل Trello أو Asana لتنظيم مهام الفريق.\n• مفهوم المنهجية الرشيقة (Agile) في معالجة البيانات.\n• متابعة المواعيد النهائية (Deadlines) وحساب الإنتاجية.\n• كيف تكون 'رئيس فريق' إدخال معلومات.",
        illustrationDesc: "لوحة كانبان (Kanban) تظهر مهام تنتقل بين (To Do, Doing, Done)",
        quiz: [
          {
            question: "ما هي لوحة 'كانبان' (Kanban Board)؟",
            options: [
              { text: "لوحة للرسم الزيتي", isCorrect: false },
              { text: "طريقة بصرية لتنظيم المهام وتدفق العمل", isCorrect: true },
              { text: "نوع من أنواع الأثاث", isCorrect: false },
              { text: "برنامج لحفظ كلمات السر", isCorrect: false }
            ],
            feedback: "الوضوح البصري يقلل من التوتر المكتبي ويزيد الإنتاجية."
          },
          {
            question: "ماذا تفعل إذا تأخر زميلك في مهمة مرتبطة بعملك؟",
            options: [
              { text: "إهمال العمل", isCorrect: false },
              { text: "التواصل معه لفهم العوائق واستخدام أدوات التتبع لتعديل الخطة", isCorrect: true },
              { text: "الصراخ في المكتب", isCorrect: false },
              { text: "القيام بعمله سراً", isCorrect: false }
            ],
            feedback: "إدارة المشاريع تعني حل المشكلات بالتواصل الفعال والمنظم."
          },
          {
            question: "أهمية الـ Deadline هي:",
            options: [
              { text: "إزعاج الموظفين", isCorrect: false },
              { text: "تنسيق الجهود لضمان تسليم النتائج للزبون في الوقت الموعود", isCorrect: true },
              { text: "تغيير ألوان التقويم", isCorrect: false },
              { text: "لا أهمية لها", isCorrect: false }
            ],
            feedback: "الالتزام بالمواعيد هو ما يميز الشركات الكبرى عن الهواة."
          }
        ]
      },
      {
        id: "18-2",
        title: "مهارات العرض الإبداعي (PowerPoint Advanced)",
        summary: "• تصميم عروض تقديمية تخطف الأنفاس لصناع القرار.\n• استخدام الانتقالات السينمائية (Morph Transition).\n• دمج الفيديوهات التفاعلية والرسوم البيانية الحية.\n• فن الإلقاء والتحكم في لغة الجسد أثناء العرض الرقمي.",
        illustrationDesc: "شريحة عرض باوربوينت تتغير فيها الأشكال بسلاسة سحرية (Morph)",
        quiz: [
          {
            question: "ما هي قاعدة 10/20/30 في العروض التقديمية؟",
            options: [
              { text: "أرقام عشوائية", isCorrect: false },
              { text: "10 شرائح، 20 دقيقة، خط حجمه 30 نقطة على الأقل", isCorrect: true },
              { text: "10 ريالات، 20 صورة، 30 ثانية", isCorrect: false },
              { text: "طريقة لتشغيل الحاسوب", isCorrect: false }
            ],
            feedback: "هذه القاعدة تضمن بقاء الجمهور مستيقظاً ومركزاً على رسالتك."
          },
          {
            question: "ما ميزة انتقال 'Morph' (تحول تدريجي)؟",
            options: [
              { text: "يجعل الحاسوب أسرع", isCorrect: false },
              { text: "يحرك العناصر من شريحة لأخرى بسلاسة وجمالية مذهلة", isCorrect: true },
              { text: "يحذف الشرائح المكررة", isCorrect: false },
              { text: "يغير لغة الكتابة", isCorrect: false }
            ],
            feedback: "الـ Morph يحول عرضك العادي إلى تجربة بصرية سينمائية."
          },
          {
            question: "أكبر خطأ في سلايدات الباوربوينت هو:",
            options: [
              { text: "حشوها بالكثير من النصوص المكتوبة بخط صغير", isCorrect: true },
              { text: "وضع صور كبيرة", isCorrect: false },
              { text: "استخدام ألوان هادئة", isCorrect: false },
              { text: "أن يكون العرض قصيراً جداً", isCorrect: false }
            ],
            feedback: "الجمهور يجب أن يستمع إليك لا أن يقرأ رواية من الشاشة."
          }
        ]
      },
      {
        id: "18-3",
        title: "إدارة الاجتماعات الافتراضية والعمل عن بعد",
        summary: "• تقنيات متقدمة لإدارة الفرق الموزعة جغرافياً.\n• أدوات السبورة الرقمية (Miro, Jamboard).\n• كيفية الحفاظ على الثقافة المهنية في غياب المكتب المادي.\n• موازنة الحياة الشخصية والعمل عند العمل من المنزل.",
        illustrationDesc: "رسم يوضح عدة أشخاص حول العالم يعملون على 'سبورة بيضاء' افتراضية واحدة",
        quiz: [
          {
            question: "ما فائدة 'السبورة الرقمية' (Whiteboard)؟",
            options: [
              { text: "للرسم الحر فقط", isCorrect: false },
              { text: "العصف الذهني الجماعي وتصميم الأفكار مع الزملاء عن بعد", isCorrect: true },
              { text: "تغيير خلفية الشاشة", isCorrect: false },
              { text: "إجراء عمليات حسابية", isCorrect: false }
            ],
            feedback: "السبورات الرقمية تعيد 'روح الورشة' للعمل الافتراضي."
          },
          {
            question: "ما هو أكبر تحدي للعمل عن بعد؟",
            options: [
              { text: "ضعف الإنترنت فقط", isCorrect: false },
              { text: "التواصل الواضح وإدارة الوقت الذاتية", isCorrect: true },
              { text: "نوع الحاسوب", isCorrect: false },
              { text: "عدم وجود كرسي مريح", isCorrect: false }
            ],
            feedback: "العمل عن بعد يتطلب انضباطاً ذاتياً عالياً جداً للنجاح."
          },
          {
            question: "كيف تنهي اجتماعاً افتراضياً بنجاح؟",
            options: [
              { text: "بإغلاق الحاسوب فجأة", isCorrect: false },
              { text: "بتلخيص نقاط الاتفاق والمهام الموكلة لكل شخص وموعدها", isCorrect: true },
              { text: "بالسكوت تماماً", isCorrect: false },
              { text: "بطلب قهوة", isCorrect: false }
            ],
            feedback: "الوضوح في نهاية الاجتماع يمنع اللبس والتعطيل في المستقبل."
          }
        ]
      }
    ]
  },
  {
    id: 19,
    lessons: [
      {
        id: "19-1",
        title: "بناء ملف الإنجاز (E-Portfolio) المتقدم",
        summary: "• تصميم موقع شخصي بسيط لعرض مهاراتك (Google Sites / Canva).\n• دمج شهاداتك ومشاريعك في مكان واحد احترافي.\n• كتابة نبذة شخصية (Bio) قوية ومؤثرة.\n• تحسين محركات البحث (SEO) لملفك ليظهر للموظفين.",
        illustrationDesc: "لقطة شاشة لموقع شخصي أنيق يحتوي على روابط لتقارير إكسيل ولوحات Power BI",
        quiz: [
          {
            question: "لماذا الموقع الشخصي أفضل من CV ورقي؟",
            options: [
              { text: "لأنه أرخص", isCorrect: false },
              { text: "لأنه يسمح بعرض أعمال تفاعلية وفيديوهات وروابط حية لا يمكن للورق عرضها", isCorrect: true },
              { text: "لأنه لا يحتاج لإنترنت", isCorrect: false },
              { text: "لا يوجد فرق", isCorrect: false }
            ],
            feedback: "في العصر الرقمي، موقعك هو علامتك التجارية الشخصية."
          },
          {
            question: "أين نجد أداة سهلة ومجانية لبناء موقع شخصي؟",
            options: [
              { text: "Google Sites", isCorrect: true },
              { text: "Microsoft Word", isCorrect: false },
              { text: "سلة المحذوفات", isCorrect: false },
              { text: "لوحة التحكم", isCorrect: false }
            ],
            feedback: "جوجل سايتس يوفر قوالب جاهزة واحترافية للمبتدئين."
          },
          {
            question: "ماذا نضع في صفحة 'اتصل بي'؟",
            options: [
              { text: "عنوان المنزل بالتفصيل", isCorrect: false },
              { text: "نموذج مراسلة، بريد إلكتروني رسمي، ورابط LinkedIn", isCorrect: true },
              { text: "صورة فوتوغرافية فقط", isCorrect: false },
              { text: "لا نضع شيئاً", isCorrect: false }
            ],
            feedback: "تسهيل التواصل معك هو الخطوة الأولى للحصول على عرض عمل."
          }
        ]
      },
      {
        id: "19-2",
        title: "الاستعداد لمقابلة العمل التقنية",
        summary: "• كيفية الإجابة على الأسئلة التقنية الصعبة (إكسيل، أكساس).\n• حل 'تحدي إدراج بيانات' مباشر تحت الضغط.\n• مهارات التفاوض على الراتب والحوافز.\n• لغة الجسد والثقة بالنفس في المقابلات.",
        illustrationDesc: "رسم يوضح شخصين في مقابلة مع وجود حاسوب مفتوح لاختبار السرعة",
        quiz: [
          {
            question: "ماذا تفعل إذا سُئلت عن دالة لا تعرفها؟",
            options: [
              { text: "التظاهر بالمعرفة والكذب", isCorrect: false },
              { text: "الاعتراف الصادق مع شرح كيفية قيامك بالبحث عن حلها بسرعة", isCorrect: true },
              { text: "الصمت التام", isCorrect: false },
              { text: "تغيير الموضوع", isCorrect: false }
            ],
            feedback: "أصحاب العمل يقدرون 'الصراحة' و 'القدرة على التعلم الذاتي' أكثر من المعرفة الجامدة."
          },
          {
            question: "لماذا يطلب المختص منك كتابة نص أمام عينه؟",
            options: [
              { text: "لاختبار خط يدك", isCorrect: false },
              { text: "لقياس سرعتك الحقيقية ودقتك في التعامل مع لوحة المفاتيح", isCorrect: true },
              { text: "لإيذائك", isCorrect: false },
              { text: "لتسلية الوقت", isCorrect: false }
            ],
            feedback: "الاختبار العملي هو أقصر طريق لإثبات كفاءتك المهنية."
          },
          {
            question: "كيف تتحضر للمقابلة؟",
            options: [
              { text: "بالنوم فقط", isCorrect: false },
              { text: "بالبحث عن الشركة ومراجعة أهم الدوال والمهارات المطلوبة في إعلان الوظيفة", isCorrect: true },
              { text: "بشراء ملابس باهظة الثمن جداً", isCorrect: false },
              { text: "بانتظار الصدفة", isCorrect: false }
            ],
            feedback: "التحضير الجيد يقلل التوتر ويزيد من فرص النجاح بنسبة 80%."
          }
        ]
      },
      {
        id: "19-3",
        title: "التطوير المهني المستمر والذكاء الوجداني",
        summary: "• تعلم كيفية التعلم (Learning to Learn) في عالم متسارع.\n• مهارات الذكاء الوجداني في إدارة ضغوط المكتب.\n• كيف تكون 'مرجعاً تقنياً' لزملائك.\n• التخطيط لـ 5 سنوات القادمة في مسارك المهني.",
        illustrationDesc: "رسم يوضح كتاباً يخرج منه ضوء يتحول إلى شاشة حاسوب متطورة",
        quiz: [
          {
            question: "ما هو 'الذكاء الوجداني' في العمل؟",
            options: [
              { text: "القدرة على الحساب بسرعة", isCorrect: false },
              { text: "فهم مشاعرك ومشاعر الآخرين والتعامل معها بحكمة تحت الضغط", isCorrect: true },
              { text: "حفظ الكثير من المعلومات", isCorrect: false },
              { text: "تغيير الديكور", isCorrect: false }
            ],
            feedback: "الإنسان قبل الآلة؛ العلاقات الجيدة هي ما يبقيك في الوظيفة."
          },
          {
            question: "كيف تواكب تطور التكنولوجيا كعون معلومات؟",
            options: [
              { text: "بالتوقف عن التعلم", isCorrect: false },
              { text: "بتخصيص ساعة أسبوعياً لتعلم ميزة جديدة أو أداة ذكاء اصطناعي ناشئة", isCorrect: true },
              { text: "بانتظار أن يخبرك المدير بذلك", isCorrect: false },
              { text: "بشراء كل الحواسيب الجديدة", isCorrect: false }
            ],
            feedback: "التعلم المستمر هو التأمين الحقيقي لمهنتك ضد الزوال."
          },
          {
            question: "ماذا نعني بـ 'الموظف المرجع'؟",
            options: [
              { text: "الموظف الذي ينام كثيراً", isCorrect: false },
              { text: "الشخص الذي يلجأ إليه الجميع لحل المشاكل التقنية بسبب خبرته وكرمه في المعلومة", isCorrect: true },
              { text: "الموظف الجديد", isCorrect: false },
              { text: "الموظف الذي يغيب بكثرة", isCorrect: false }
            ],
            feedback: "أن تكون مرجعاً يعني أنك أصبحت عنصراً لا يمكن الاستغناء عنه في المؤسسة."
          }
        ]
      }
    ]
  },
  {
    id: 20,
    lessons: [
      {
        id: "20-1",
        title: "مشروع التخرج النهائي - الحل الإداري المتكامل",
        summary: "• بناء نظام رقمي شامل لمؤسسة جزائرية افتراضية.\n• الربط التام بين السحابة، قواعد البيانات، والتقارير الذكية.\n• تطبيق كافة معايير الأمان والدقة والأتمتة.\n• تسليم 'حقيبة المشروع' كاملة.",
        illustrationDesc: "صورة رمزية لشهادة تخرج رقمية بجانب شعار HIRFATI المشرق",
        quiz: [
          {
            question: "ما هو معيار النجاح في مشروع التخرج؟",
            options: [
              { text: "أن يكون الملف كبيراً جداً", isCorrect: false },
              { text: "أن يحل المشروع مشكلة حقيقية بدقة وسهولة وأمان", isCorrect: true },
              { text: "أن يحتوي على الكثير من الصور", isCorrect: false },
              { text: "أن يستغرق عاماً كاملاً", isCorrect: false }
            ],
            feedback: "النجاح هو الأثر والفائدة المحققة للمؤسسة."
          },
          {
            question: "كيف تعرض مشروعك النهائي؟",
            options: [
              { text: "بشرح الكود البرمجي فقط", isCorrect: false },
              { text: "بعرض 'قصة نجاح المعلومة' وكيف تحولت من فوضى ورقية لنظام رقمي رصين", isCorrect: true },
              { text: "بإعطاء الملف دون كلام", isCorrect: false },
              { text: "بالحديث عن مجهودك الشخصي فقط", isCorrect: false }
            ],
            feedback: "الزبون يشتري الحلول والنتائج، لا البرمجيات فقط."
          },
          {
            question: "بعد إنهاء المشروع، ماذا تشعر؟",
            options: [
              { text: "بالتعب فقط", isCorrect: false },
              { text: "بالفخر والجاهزية لدخول سوق العمل كخبير رقمي متمكن", isCorrect: true },
              { text: "بالخوف", isCorrect: false },
              { text: "بالرغبة في مسح كل شيء", isCorrect: false }
            ],
            feedback: "تهانينا! لقد أتممت 20 مستوى من التميز والاحتراف."
          }
        ]
      },
      {
        id: "20-2",
        title: "ختام المسار: التخطيط للمستقبل المهني",
        summary: "• مراجعة نقاط القوة التي اكتشفتها في نفسك خلال الـ 20 مستوى.\n• تحديد التخصص القادم (تحليل بيانات، برمجة، إدارة مكتبية عليا).\n• نصائح للحفاظ على شغف التعلم والابتكار.\n• كيف تساهم في رقمنة المجتمع والورشات المحلية.",
        illustrationDesc: "خارطة طريق مهنية تمتد من 'عون معلومات' إلى 'مدير بيانات' ثم 'خبير ذكاء اصطناعي'",
        quiz: [
          {
            question: "عون إدراج المعلومات هو بداية لـ:",
            options: [
              { text: "النهاية", isCorrect: false },
              { text: "مسار مهني واسع يشمل تكنولوجيا المعلومات والإدارة والرقمنة", isCorrect: true },
              { text: "وظيفة صيفية فقط", isCorrect: false },
              { text: "شيء غير مهم", isCorrect: false }
            ],
            feedback: "المعلومات هي بترول العصر، وأنت من يستخرجها وينظفها."
          },
          {
            question: "ماذا تفعل بشهادتك في حرفتي؟",
            options: [
              { text: "تعليقها فقط", isCorrect: false },
              { text: "تحويل مهاراتها إلى واقع ملموس في حياتك المهنية اليومية", isCorrect: true },
              { text: "نسيان كل ما تعلمته", isCorrect: false },
              { text: "بيعها", isCorrect: false }
            ],
            feedback: "المهارة في اليد خير من الشهادة على الجدار."
          },
          {
            question: "ما هي رسالتك لزملائك الجدد في المسار؟",
            options: [
              { text: "الهروب", isCorrect: false },
              { text: "الصبر والممارسة المستمرة هما سر الإتقان", isCorrect: true },
              { text: "التعلم صعب جداً", isCorrect: false },
              { text: "لا حاجة للدراسة", isCorrect: false }
            ],
            feedback: "مشاركة الشغف هي ما يبني مجتمع الحرفيين المحترفين."
          }
        ]
      },
      {
        id: "20-3",
        title: "حفلة النجاح الرقمية",
        summary: "• احتفال بإنجاز 60 درساً و 180 اختباراً.\n• كلمات ملهمة من خبراء المجال.\n• توجيهات أخيرة حول الحفاظ على أمان وسرية البيانات مدى الحياة.\n• تفعيل رمز 'خبير حرفتي' في ملفك الشخصي.",
        illustrationDesc: "ألعاب نارية رقمية فوق شاشة حاسوب تظهر فيها كلمة 'مبروك يا خبير'",
        quiz: [
          {
            question: "ما هو شعورك الآن؟",
            options: [
              { text: "ممتاز ومستعد للتحدي", isCorrect: true },
              { text: "جيد جداً", isCorrect: true },
              { text: "سعيد جداً", isCorrect: true },
              { text: "كل ما سبق", isCorrect: true }
            ],
            feedback: "كل الإجابات صحيحة! أنت بطل رحلتك الرقمية."
          },
          {
            question: "من هو 'الحرفي الرقمي'؟",
            options: [
              { text: "الذي يستخدم الحاسوب للعب فقط", isCorrect: false },
              { text: "الذي يجمع بين مهارة اليد وذكاء الآلة لخدمة مجتمعه وبلده", isCorrect: true },
              { text: "المبرمج الذي لا يخرج من غرفته", isCorrect: false },
              { text: "صانع صور فقط", isCorrect: false }
            ],
            feedback: "أنت الآن جندي في معركة الرقمنة والتقدم."
          },
          {
            question: "كلمة الختام هي:",
            options: [
              { text: "انتهيت", isCorrect: false },
              { text: "بدأت رحلتي الحقيقية الآن", isCorrect: true },
              { text: "وداعاً", isCorrect: false },
              { text: "إلى اللقاء", isCorrect: false }
            ],
            feedback: "العلم بحر لا ينفد، نراك في تخصصات أخرى قريباً!"
          }
        ]
      }
    ]
  }
];
