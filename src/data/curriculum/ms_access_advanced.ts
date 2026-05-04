import { Level } from "../curriculum";

export const msAccessAdvanced: Level[] = [
  {
    id: 15,
    lessons: [
      {
        id: "15-1",
        title: "مقدمة لغة SQL بداخل Access",
        summary: "• ما هي لغة SQL؟ (اللغة العالمية لقواعد البيانات).\n• كتابة جملة SELECT البسيطة لاسترجاع البيانات.\n• استخدام WHERE للفلترة البرمجية.\n• تحويل الاستعلام العادي إلى 'عرض SQL' لفهم الكود خلف الكواليس.",
        illustrationDesc: "سطر برمجي: SELECT [Name], [Age] FROM Employees WHERE [Age] > 30;",
        quiz: [
          {
            question: "ما معنى 'SELECT *' في لغة SQL؟",
            options: [
              { text: "اختيار نجمة", isCorrect: false },
              { text: "اختيار 'جميع' الحقول الموجودة في الجدول دون استثناء", isCorrect: true },
              { text: "حذف الجدول", isCorrect: false },
              { text: "تحديث البيانات", isCorrect: false }
            ],
            feedback: "النجمة (*) هي الرمز العالمي للمطالبة بكل شيء في SQL."
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
        title: "البرمجة باستخدام VBA - أساسيات",
        summary: "• التعرف على محرّر VBA (Visual Basic for Applications).\n• إنشاء أول 'إجراء' (Sub) و'دالة' (Function).\n• المتغيرات، الأنواع، والجمل الشرطية (If...Then).\n• ربط الكود بحدث 'عند النقر' (On Click) لزر في النموذج.",
        illustrationDesc: "نافذة كود برمجي بيضاء تظهر فيها كلمات ملونة (Private Sub Command1_Click)",
        quiz: [
          {
            question: "متى نلجأ لاستخدام VBA بدلاً من الماكرو العادي؟",
            options: [
              { text: "دائماً", isCorrect: false },
              { text: "عندما نحتاج لبرمجة منطق معقد جداً، التعامل مع الملفات الخارجية، أو القيام بعمليات لا يوفرها الماكرو البسيط", isCorrect: true },
              { text: "لأن الـ VBA أسرع", isCorrect: false },
              { text: "لأن لونه أجمل", isCorrect: false }
            ],
            feedback: "VBA هو السحر الذي يحول Access من مجرد قاعدة بيانات إلى تطبيق نظام متكامل."
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
        title: "معالجة الأخطاء (Error Handling) في البرمجة",
        summary: "• استخدام 'On Error GoTo' لمنع انهيار البرنامج عند حدوث خطأ.\n• عرض رسائل خطأ مفهومة للمستخدم بدلاً من نافذة الكود.\n• تتبع الكود (Debugging) بوضع نقاط التوقف (Breakpoints).\n• تحسين أداء الكود وجعله أخف على الذاكرة.",
        illustrationDesc: "صورة لمبرمج يفحص كوداً برمجياً يبحث عن خطأ منطقي (Bug) ويصلحه",
        quiz: [
          {
            question: "ما فائدة معالجة الأخطاء (Error Handling)؟",
            options: [
              { text: "لمنع ظهور الأخطاء نهائياً", isCorrect: false },
              { text: "لجعل البرنامج يتعامل مع الخطأ بذكاء (مثلاً يخبر المستخدم أن الطابعة غير متصلة) بدلاً من أن يتوقف تماماً عن العمل", isCorrect: true },
              { text: "لحذف الكود الخاطئ تلقائياً", isCorrect: false },
              { text: "لزيادة سعر البرنامج", isCorrect: false }
            ],
            feedback: "البرنامج الاحترافي هو الذي يتوقع الأخطاء قبل وقوعها ويهيئ الحل لها."
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
        title: "أمن قاعدة البيانات وتقسيمها (Frontend/Backend)",
        summary: "• تقسيم قاعدة البيانات (Database Splitter): الجداول في ملف، والواجهات في ملف آخر.\n• فوائد التقسيم للعمل على الشبكة المحلية (LAN).\n• تشفير قاعدة البيانات بكلمة سر.\n• إخفاء نافذة الـ Access وإظهار واجهة البرنامج فقط للمستخدم.",
        illustrationDesc: "رسم يوضح ملف 'Backend' على سيرفر الشركة وملفات 'Frontend' على أجهزة الموظفين",
        quiz: [
          {
            question: "لماذا نقسم قاعدة البيانات إلى (Frontend) و (Backend)؟",
            options: [
              { text: "لأنه قانون دولي", isCorrect: false },
              { text: "لحماية البيانات من التلف، وتسهيل تحديث الواجهات دون لمس البيانات الحقيقية، والسماح بعدة مستخدمين بالعمل في وقت واحد", isCorrect: true },
              { text: "لجعل البرنامج أكبر حجماً", isCorrect: false },
              { text: "لا يوجد سبب", isCorrect: false }
            ],
            feedback: "التقسيم هو أول خطوة لإنشاء نظام 'متعدد المستخدمين' (Multi-user) ناجح."
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
        title: "الربط مع تطبيقات خارجية (Integration)",
        summary: "• تصدير البيانات تلقائياً لملفات Excel لعمل رسوم بيانية.\n• إرسال رسائل بريد إلكتروني (Outlook) من داخل Access بضغطة زر.\n• جلب البيانات من ملفات CSV أو XML.\n• مقدمة للربط مع SQL Server للأحجام الهائلة من البيانات.",
        illustrationDesc: "أيقونة Access يخرج منها سهم يتصل بأيقونات Excel و Outlook و PDF",
        quiz: [
          {
            question: "هل يمكن لـ Access إرسال تقرير PDF للمدير عبر الإيميل تلقائياً؟",
            options: [
              { text: "نعم، باستخدام كود VBA بسيط يربط Access ببرنامج Outlook", isCorrect: true },
              { text: "لا، يجب فعل ذلك يدوياً", isCorrect: false },
              { text: "فقط في النسخ المدفوعة جداً", isCorrect: false },
              { text: "فقط باللغة الإنجليزية", isCorrect: false }
            ],
            feedback: "القوة الحقيقية لـ Access تظهر عندما يعمل كقائد لبقية برامج الـ Office."
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
        title: "مشروع التخرج: نظام متكامل لتسيير مدرسة أو عيادة",
        summary: "• بناء قاعدة بيانات كاملة بجميع العلاقات والقيود.\n• واجهات مستخدم احترافية مع قائمة مهام (Dashboard).\n• استخدام VBA لحساب التكاليف أو المواعيد.\n• تقارير إحصائية متقدمة مع تشفير القاعدة بكلمة سر.\n• التجهيز للنشر وتوزيع البرنامج للمستخدمين النهائيين.",
        illustrationDesc: "صورة لشاشة برنامج متكامل بلمسة احترافية تحتوي على قائمة جانبية وشعارات وتقارير ملونة",
        quiz: [
          {
            question: "ما هو شعورك بعد إتمام دورة الـ 20 مستوى؟",
            options: [
              { text: "أنه مجرد برنامج جداول", isCorrect: false },
              { text: "أنني أملك القدرة الآن على تصميم أنظمة برمجية متكاملة تخدم الشركات والمشاريع الكبرى", isCorrect: true },
              { text: "أن البرمجة صعبة جداً", isCorrect: false },
              { text: "لا شعور", isCorrect: false }
            ],
            feedback: "لقد أصبحت الآن 'مطور حلول مكتبية' محترفاً. مبارك عليك هذا الإنجاز!"
          }
        ]
      }
    ]
  }
];
