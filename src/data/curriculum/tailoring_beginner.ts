import { Level } from "../curriculum";

export const tailoringBeginner: Level[] = [
  {
    id: 1,
    lessons: [
      {
        id: "1-1",
        title: "مدخل إلى عالم الخياطة",
        summary: "• الخياطة كحرفية وفن وصناعة.\n• أهمية الخياطة في الاقتصاد الجزائري.\n• مسارات العمل (ورشات، عمل حر، مصانع ألبسة).\n• لمحة عن تاريخ اللباس التقليدي والحديث.",
        illustrationDesc: "رسم يجمع بين ماكينة خياطة حديثة وقماش من التراث الجزائري",
        quiz: [
          {
            question: "ما هي القيمة المضافة لتعلم الخياطة اليوم؟",
            options: [
              { text: "فقط لإصلاح الملابس الممزقة", isCorrect: false },
              { text: "فتح مشروع خاص وتحقيق استقلال مالي", isCorrect: true },
              { text: "مجرد هواية لشغل الوقت", isCorrect: false },
              { text: "لا قيمة لها في عصر الجاهز", isCorrect: false }
            ],
            feedback: "الخياطة مهارة إنتاجية تسمح لك بإنشاء ماركة خاصة أو توفير خدمات مطلوبة بكثرة."
          },
          {
            question: "أين يمكن للخياط المبتدئ أن يبدأ عمله؟",
            options: [
              { text: "في ورشة منزلية بسيطة", isCorrect: true },
              { text: "فقط في المصانع الكبيرة", isCorrect: false },
              { text: "في المكاتب الإدارية", isCorrect: false },
              { text: "لا يمكنه العمل حتى يصبح خبيراً", isCorrect: false }
            ],
            feedback: "بداية الخياطة غالباً ما تكون بطلبات بسيطة من المحيط القريب في المنزل."
          },
          {
            question: "الخياطة تعتمد بشكل أساسي على:",
            options: [
              { text: "السرعة العشوائية", isCorrect: false },
              { text: "الصبر والدقة في التفاصيل", isCorrect: true },
              { text: "استخدام الحاسوب فقط", isCorrect: false },
              { text: "القوة البدنية", isCorrect: false }
            ],
            feedback: "الملليمترا ت تصنع الفرق في جودة اللباس النهائي."
          }
        ]
      },
      {
        id: "1-2",
        title: "أدوات الخياطة الأساسية (The Toolkit)",
        summary: "• أنواع المقصات (للقماش، للورق، للتشطيب).\n• أدوات القياس (شريط القياس، المساطر).\n• الدبابيس وأنواع الإبر اليدوية.\n• خيوط الخياطة واختيار الألوان.",
        illustrationDesc: "توزيع مرتب لأدوات الخياطة: مقص، شريط قياس، دبابيس، وبكرات خيوط",
        quiz: [
          {
            question: "لماذا يمنع استخدام مقص القماش لقص الورق؟",
            options: [
              { text: "لأنه سيصبح غير حاد (يبرد) بسرعة", isCorrect: true },
              { text: "لأن الورق سام", isCorrect: false },
              { text: "لأن المقص سيتغير لونه", isCorrect: false },
              { text: "لا يوجد سبب، يمكن استخدامه", isCorrect: false }
            ],
            feedback: "ورق الباترون يحتوي على ألياف خشبية تبرد حدة مقص القماش الحساس."
          },
          {
            question: "ما هي الأداة المساعدة لتثبيت القماش قبل الخياطة؟",
            options: [
              { text: "الغراء", isCorrect: false },
              { text: "الدبابيس (Pins)", isCorrect: true },
              { text: "المسمار", isCorrect: false },
              { text: "الخيط السميك", isCorrect: false }
            ],
            feedback: "الدبابيس تضمن عدم انزلاق طبقتي القماش أثناء العمل."
          },
          {
            question: "أي إبرة تستخدم للأقمشة الرقيقة جداً؟",
            options: [
              { text: "إبرة غليظة", isCorrect: false },
              { text: "إبرة رفيعة بفتحة صغيرة", isCorrect: true },
              { text: "مخرز", isCorrect: false },
              { text: "إبرة حديدية كبيرة", isCorrect: false }
            ],
            feedback: "الإبر الرفيعة تمنع تمزق خيوط الأقمشة الحساسة مثل الحرير."
          }
        ]
      },
      {
        id: "1-3",
        title: "التعرف على أنواع الأقمشة",
        summary: "• الألياف الطبيعية (قطن، كتان، صوف، حرير).\n• الألياف الاصطناعية (بوليسر، نايلون).\n• فهم 'اتجاه النسيج' (Grainline).\n• الأقمشة المطاطية (Lycra) وكيفية التعامل معها.",
        illustrationDesc: "مجموعة من لفافات القماش بألوان وقوام مختلف (ناعم، خشن، شفاف)",
        quiz: [
          {
            question: "أي قماش هو الأفضل لملابس الصيف؟",
            options: [
              { text: "البوليستر", isCorrect: false },
              { text: "القطن والكتان لقدرتهما على امتصاص العرق", isCorrect: true },
              { text: "الصوف الثقيل", isCorrect: false },
              { text: "الجلد الاصطناعي", isCorrect: false }
            ],
            feedback: "الألياف الطبيعية تسمح للبشرة بالتنفس في الجو الحار."
          },
          {
            question: "ماذا يعني 'اتجاه النسيج' (Grainline)؟",
            options: [
              { text: "لون القماش", isCorrect: false },
              { text: "اتجاه خيوط الطول والعرض في القماش", isCorrect: true },
              { text: "سعر القماش", isCorrect: false },
              { text: "مكان تصنيع القماش", isCorrect: false }
            ],
            feedback: "اتباع اتجاه النسيج يضمن عدم التواء الملابس بعد الغسل."
          },
          {
            question: "لماذا نغسل القماش القطني قبل خياطته أحياناً؟",
            options: [
              { text: "لتغيير لونه", isCorrect: false },
              { text: "لأنه قد يتقلص (ينكمش) بعد الغسل", isCorrect: true },
              { text: "ليصبح أصلب", isCorrect: false },
              { text: "لا داعي لغسله", isCorrect: false }
            ],
            feedback: "الانكماش بعد التفصيل قد يفسد مقاسات اللباس تماماً."
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
        title: "الغرز اليدوية الأساسية",
        summary: "• غرزة السراجة (Basting) للتثبيت المؤقت.\n• غرزة النباتة (Backstitch) للقوة والمتانة.\n• غرزة اللفق (Hemming) لإخفاء الحواف.\n• غرزة العروة اليدوية.",
        illustrationDesc: "رسم مكبر يوضح دخول وخروج الإبرة لتكوين غرزة النباتة المتينة",
        quiz: [
          {
            question: "متى نستخدم غرزة السراجة؟",
            options: [
              { text: "للخياطة النهائية", isCorrect: false },
              { text: "لتثبيت القماش مؤقتاً قبل الخياطة بالماكينة", isCorrect: true },
              { text: "للتطريز فقط", isCorrect: false },
              { text: "لقص القماش", isCorrect: false }
            ],
            feedback: "السراجة هي 'مسودة' الخياطة التي تسهل العمل الدقيق."
          },
          {
            question: "أي غرزة يدوية هي الأكثر قوة وتشبه خياطة الماكينة؟",
            options: [
              { text: "غرزة السراجة", isCorrect: false },
              { text: "غرزة النباتة (Backstitch)", isCorrect: true },
              { text: "غرزة البطانية", isCorrect: false },
              { text: "لا توجد غرزة قوية", isCorrect: false }
            ],
            feedback: "النباتة تعود للخلف لربط الغرز ببعضها مما يعطيها متانة عالية."
          },
          {
            question: "أين تستخدم غرزة اللفق؟",
            options: [
              { text: "في كفّة (حافة) الفساتين والسراويل لإخفاء الخيط", isCorrect: true },
              { text: "في تركيب الأكمام", isCorrect: false },
              { text: "في قص الورق", isCorrect: false },
              { text: "لإغلاق الفتحات الكبيرة", isCorrect: false }
            ],
            feedback: "اللفق الاحترافي لا يظهر على وجه القماش الخارجي."
          }
        ]
      },
      {
        id: "2-2",
        title: "مكونات ماكينة الخياطة",
        summary: "• التعرف على أجزاء الماكينة (الطارة، الدواسة، المكوك).\n• كيفية لظم الخيط العلوي والسفلي.\n• تنظيم قوة الشد (Tension) لتجنب كرمشة القماش.\n• اختيار الإبر المناسبة للماكينة.",
        illustrationDesc: "رسم بياني لماكينة خياطة منزلية مع تسمية الأجزاء بالعربية",
        quiz: [
          {
            question: "ما هو دور 'المكوك' (Bobbin)؟",
            options: [
              { text: "قص الخيط", isCorrect: false },
              { text: "توفير الخيط السفلي للخياطة", isCorrect: true },
              { text: "تغيير سرعة الماكينة", isCorrect: false },
              { text: "تحريك الإبرة", isCorrect: false }
            ],
            feedback: "الخياطة بالماكينة هي تداخل بين خيط علوي وخيط سفلي (المكوك)."
          },
          {
            question: "ماذا تفعل إذا كان الخيط ينقطع باستمرار؟",
            options: [
              { text: "زيادة السرعة", isCorrect: false },
              { text: "التأكد من صحة اللظم وضبط قوة الشد", isCorrect: true },
              { text: "تغيير لون الخيط", isCorrect: false },
              { text: "ضرب الماكينة", isCorrect: false }
            ],
            feedback: "سوء اللظم أو الشد الزائد هما السببان الرئيسيان لانقطاع الخيط."
          },
          {
            question: "أي جزء يحرك القماش للأمام أثناء الخياطة؟",
            options: [
              { text: "الإبرة", isCorrect: false },
              { text: "أسنان المشط (Feed Dogs)", isCorrect: true },
              { text: "الدواسة", isCorrect: false },
              { text: "المكوك", isCorrect: false }
            ],
            feedback: "الأسنان المعدنية تحت الدواسة هي المسؤولة عن سحب القماش بانتظام."
          }
        ]
      },
      {
        id: "2-3",
        title: "تمارين القيادة (التحكم في الماكينة)",
        summary: "• الخياطة في خط مستقيم.\n• التحكم في السرعة باستخدام الدواسة.\n• الخياطة في الزوايا والمنحنيات.\n• ممارسة الخياطة على الورق بدون خيط للتمكن.",
        illustrationDesc: "ورقة تدريب تحتوي على خطوط مستقيمة ومنكسرة تظهر ثقوب الإبرة عليها",
        quiz: [
          {
            question: "ما هي أفضل طريقة للمبتدئ للتحكم في السرعة؟",
            options: [
              { text: "الضغط بقوة على الدواسة", isCorrect: false },
              { text: "الضغط الخفيف والمتدرج بالقدم", isCorrect: true },
              { text: "إطفاء الماكينة كل ثانية", isCorrect: false },
              { text: "تحريك الطارة باليد فقط", isCorrect: false }
            ],
            feedback: "حساسية القدم على الدواسة مهارة تكتسب مع الوقت."
          },
          {
            question: "عند الوصول لزاوية (ركن)، ماذا تفعل؟",
            options: [
              { text: "التوقف تماماً ورفع الإبرة", isCorrect: false },
              { text: "ترك الإبرة داخل القماش، رفع الدواسة، تدوير القماش، ثم المواصلة", isCorrect: true },
              { text: "قص الخيط والبدء من جديد", isCorrect: false },
              { text: "الخياطة فوق الزاوية بسرعة", isCorrect: false }
            ],
            feedback: "ترك الإبرة في القماش يحافظ على نقطة التحول ويمنع انزياح الغرز."
          },
          {
            question: "ما فائدة التدريب على الورق بدون خيط؟",
            options: [
              { text: "توفير الخيط وتطوير مهارة التوجيه", isCorrect: true },
              { text: "تنظيف الماكينة", isCorrect: false },
              { text: "صناعة نماذج ورقية", isCorrect: false },
              { text: "لا فائدة منها", isCorrect: false }
            ],
            feedback: "الورق يظهر ثقوب الإبرة بوضوح مما يكشف دقة مسارك."
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
        title: "كيفية أخذ المقاسات الصحيحة",
        summary: "• تحديد مناطق القياس (الصدر، الخصر، الورك، الطول).\n• وضعية الوقوف الصحيحة للشخص المراد قياسه.\n• إضافة 'مقدار الراحة' (Ease) للمقاسات.\n• تدوين المقاسات في جدول منظم.",
        illustrationDesc: "رسم توضيحي يوضح أماكن وضع شريط القياس على الجسم (العنق، الأكتاف، الخصـر)",
        quiz: [
          {
            question: "أين يوضع شريط القياس لقياس الخصر؟",
            options: [
              { text: "عند أضيق منطقة في الجذع", isCorrect: true },
              { text: "عند الصدر", isCorrect: false },
              { text: "عند الركبة", isCorrect: false },
              { text: "حول الرأس", isCorrect: false }
            ],
            feedback: "الخصر غالباً ما يكون فوق السرة بقليل في أضيق نقطة."
          },
          {
            question: "ماذا يحدث إذا شددنا شريط القياس بقوة على الجسم؟",
            options: [
              { text: "سيكون اللباس مثالياً", isCorrect: false },
              { text: "سيكون اللباس ضيقاً جداً وغير مريح", isCorrect: true },
              { text: "لن يتغير شيء", isCorrect: false },
              { text: "سيبدو الشخص أنحف", isCorrect: false }
            ],
            feedback: "يجب ترك مجال بسيط (إصبعين مثلاً) تحت الشريط للراحة."
          },
          {
            question: "لماذا نقيس 'طول الكم' والذراع منثنية قليلاً؟",
            options: [
              { text: "لأنها وضعية أجمل", isCorrect: false },
              { text: "لضمان مخرجات مريحة عند حركة الذراع الحقيقية", isCorrect: true },
              { text: "لتصغير الكم", isCorrect: false },
              { text: "لا يهم وضع الذراع", isCorrect: false }
            ],
            feedback: "حركة الجسم تتطلب وسعاً إضافياً لا يظهر في وضع السكون التام."
          }
        ]
      },
      {
        id: "3-2",
        title: "أساسيات الباترون (النماذج الورقية)",
        summary: "• ما هو الباترون؟ ولماذا نستخدمه؟\n• التعرف على الخطوط الأساسية في الباترون.\n• الأدوات المطلوبة (ورق، أقلام، غراء).\n• الفرق بين الباترون الجاهز وبناء الباترون الخاص.",
        illustrationDesc: "رسم لقطعة باترون ورقـية (كول) موضوعة فوق قماش مقصوص",
        quiz: [
          {
            question: "ما هي الوظيفة الأساسية للباترون؟",
            options: [
              { text: "تغليف القماش", isCorrect: false },
              { text: "خارطة طريق لقص القماش بدقة وتكرار الموديل", isCorrect: true },
              { text: "قراءة المقاسات فقط", isCorrect: false },
              { text: "حماية القماش من الغبار", isCorrect: false }
            ],
            feedback: "الباترون هو 'المهندس المعماري' لقطعة الملابس."
          },
          {
            question: "ماذا تعني علامة 'طي القماش' على الباترون؟",
            options: [
              { text: "قص القماش في ذلك المكان", isCorrect: false },
              { text: "وضع حافة الباترون على قماش مطوي للحصول على قطعة كاملة", isCorrect: true },
              { text: "رمي تلك القطعة", isCorrect: false },
              { text: "تغيير لون القماـش", isCorrect: false }
            ],
            feedback: "الطي يستخدم لقطع الظهر أو الصدر لتحصل على تماثل تام."
          },
          {
            question: "أين نضع 'مسافات الخياطة' (Seam Allowance)؟",
            options: [
              { text: "خارج حدود الباترون الأساسية بـ 1-2 سم", isCorrect: true },
              { text: "وسط الباترون", isCorrect: false },
              { text: "لا نحتاج لمسافات خياطة", isCorrect: false },
              { text: "في مكان الأزرار فقط", isCorrect: false }
            ],
            feedback: "مسافات الخياطة هي القماش الذي يستهلكه تداخل الخيوط في الماكينة."
          }
        ]
      },
      {
        id: "3-3",
        title: "قص القماش بطريقة احترافية",
        summary: "• فرد القماش وتثبيت الباترون بالدبابيس.\n• مراعاة اتجاه النسيج والرسومات على القماش.\n• استخدام أثقال الباترون أو الدبابيس.\n• تقنيات القص النظيف وتجنب 'التفتيت'.",
        illustrationDesc: "شخص يستخدم مقصاً كبيراً لقص القماش متبعاً حدود الباترون الورقي",
        quiz: [
          {
            question: "كيف نتصرف مع القماش الذي يحتوي على رسومات اتجاهية (مثل أزهار واقفة)؟",
            options: [
              { text: "نقص بشكل عشوائي", isCorrect: false },
              { text: "توجيه جميع قطع الباترون في نفس الاتجاه", isCorrect: true },
              { text: "قلب بعض القطع لتوفير القماش", isCorrect: false },
              { text: "لا يهم اتجاه الرسومات", isCorrect: false }
            ],
            feedback: "عدم الانتباه لاتجاه الرسم يجعل الملابس تبدو غير متقنة (مقلوبة)."
          },
          {
            question: "أي يد تمسك القماش أثناء القص؟",
            options: [
              { text: "اليد التي لا تقص لتثبيت القماش على الطاولة", isCorrect: true },
              { text: "كلتا اليدين", isCorrect: false },
              { text: "لا نلمس القماش", isCorrect: false },
              { text: "نضع القماش في الهواء", isCorrect: false }
            ],
            feedback: "تثبيت القماش على سطح مستوٍ يمنع انزياحه أثناء حركة المقص."
          },
          {
            question: "بماذا نعلم علامات الباترون على القماش؟",
            options: [
              { text: "قلم حبر جاف", isCorrect: false },
              { text: "طبشور الخياطة (Tailor's Chalk) أو صابونة جافة", isCorrect: true },
              { text: "لا نعلمها", isCorrect: false },
              { text: "بالسكين", isCorrect: false }
            ],
            feedback: "الطبشور يزول بسهولة ولا يترك أثراً دائماً على الملابس الفاخرة."
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
        title: "التعريف بفتحات الرقبة (Necklines)",
        summary: "• أنواع الفتحات (دائرية، V، مربعة).\n• كيفية قص الـ 'تمستيك' (Facing) لتقوية الرقبة.\n• خياطة شريط البييه (Bias Tape) للحواف.\n• قلب وتنظيف الفتحات.",
        illustrationDesc: "رسم يوضح كيفية خياطة قطعة قماش صغيرة لتنظيف حافة الرقبة من الداخل",
        quiz: [
          {
            question: "ما هو الـ 'تمستيك' أو 'سجاف الرقبة'؟",
            options: [
              { text: "زينة خارجية", isCorrect: false },
              { text: "قطعة قماش داخلية لتقوية وتجميل حافة الرقبة", isCorrect: true },
              { text: "نوع من الخيوط", isCorrect: false },
              { text: "أداة لفتح العراوي", isCorrect: false }
            ],
            feedback: "السجاف هو ما يعطي الرقبة شكلها الثابت والنظيف من الداخل."
          },
          {
            question: "لماذا نقوم بـ 'النشل' (Clipping) في المنحنيات بعد الخياطة؟",
            options: [
              { text: "لتخفيف القماش والسماح له بالدوران دون كرمشة عند القلب", isCorrect: true },
              { text: "لحذف الخيوط الزائدة", isCorrect: false },
              { text: "لأن المقص حاد فقط", isCorrect: false },
              { text: "لا داعي للنشل", isCorrect: false }
            ],
            feedback: "القصات الصغيرة في مسافة الخياطة تريح القماش في الدورانات."
          },
          {
            question: "أي شريط نستخدم لتنظيف الحواف المنحنية بدون سجاف؟",
            options: [
              { text: "شريط مستقيم", isCorrect: false },
              { text: "شريط البييه (الموارب)", isCorrect: true },
              { text: "خيط غليظ", isCorrect: false },
              { text: "لا شيء", isCorrect: false }
            ],
            feedback: "شريط البييه يتميز بالمرونة العالية التي تتبع المنحنيات بسهولة."
          }
        ]
      },
      {
        id: "4-2",
        title: "خياطة التنورة البسيطة (Basic Skirt)",
        summary: "• مراحل تجميع التنورة (أمام، خلف).\n• خياطة البنسات (Darts) لضبط القوام.\n• فتحة السحاب (Zipper) البسيط.\n• خياطة الكمر (Waistband).",
        illustrationDesc: "توضيح لمراحل تجميع تنورة مستقيمة تظهر فيها البنسات عند الخصر",
        quiz: [
          {
            question: "ما هي وظيفة 'البنسة' (Dart) في الخياطة؟",
            options: [
              { text: "للزينة فقط", isCorrect: false },
              { text: "تحويل القماش المسطح إلى شكل ثلاثي الأبعاد يناسب منحنيات الجسم", isCorrect: true },
              { text: "لجعل القماش أمتن", isCorrect: false },
              { text: "لحماية الخصر", isCorrect: false }
            ],
            feedback: "البنسات ضرورية لضبط القياس عند الخصر والورود."
          },
          {
            question: "أين نضع السحاب في التنورة عادة؟",
            options: [
              { text: "في الوسط الخلفي أو الجانب", isCorrect: true },
              { text: "في الأسفل تماماً", isCorrect: false },
              { text: "على الحاشية", isCorrect: false },
              { text: "لا نضع سحاباً", isCorrect: false }
            ],
            feedback: "الخلف والجانب هما الأماكن الأكثر راحة وجمالاً لوضع السحاب."
          },
          {
            question: "ما هو 'الكمر' (Waistband)؟",
            options: [
              { text: "فتحة الساق", isCorrect: false },
              { text: "الحزام القماشي المثبت عند خصر التنورة", isCorrect: true },
              { text: "اسم ماركة قماش", isCorrect: false },
              { text: "جيب داخلي", isCorrect: false }
            ],
            feedback: "الكمر هو اللمسة النهائية التي تمسك التنورة عند الخصر."
          }
        ]
      },
      {
        id: "4-3",
        title: "استخدام المكواة في الخياطة",
        summary: "• المكواة هي 'نصف الخياطة'.\n• كيفية فتح الخياطات (Pressing Seams) بالمكواة.\n• درجات الحرارة المناسبة لكل نوع قماش.\n• استخدام 'الفازلين' (Interfacing) اللاصق للتقوية.",
        illustrationDesc: "مكواة تفتح ثنية خياطة داخلية ليصبح وجه القماش مسطحاً تماماً",
        quiz: [
          {
            question: "لماذا نكوي كل خياطة نقوم بها فوراً؟",
            options: [
              { text: "لجعلها نظيفة ومسطحة واحترافية", isCorrect: true },
              { text: "لتجفيف الخيط", isCorrect: false },
              { text: "لقتل الفيروسات", isCorrect: false },
              { text: "لأن المكواة ساخنة فقط", isCorrect: false }
            ],
            feedback: "الكي أثناء العمل هو ما يميز خياطة المنازل عن خياطة المصانع الفاخرة."
          },
          {
            question: "ما هو 'الفازلين' أو 'الحشو' (Interfacing)؟",
            options: [
              { text: "كريم لليدين", isCorrect: false },
              { text: "قماش لاصق بالحرارة لتقوية الياقات والأساور", isCorrect: true },
              { text: "نوع من الخيوط", isCorrect: false },
              { text: "اسم ماكينة خياطة", isCorrect: false }
            ],
            feedback: "يمنح الحشو قواماً ثابتاً للأجزاء التي تحتاج لصلابة في الملابس."
          },
          {
            question: "أي درجة حرارة نستخدم للحرير؟",
            options: [
              { text: "عالية جداً (قطن)", isCorrect: false },
              { text: "منخفضة إلى متوسطة مع قطعة قماش واقية", isCorrect: true },
              { text: "لا نكوي الحرير", isCorrect: false },
              { text: "بخار كثيف مباشرة", isCorrect: false }
            ],
            feedback: "الحرارة العالية قد تحرق ألياف الحرير وتتلف اللباس تماماً."
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
        title: "أساسيات الأكمام (Sleeves)",
        summary: "• أنواع الأكمام (بسيط، منفوخ، كيمونو).\n• كيفية قص دائرة الإبط (Armhole).\n• خياطة الكم وتركيبه في الكتف.\n• عمل الكشكشة (Gathering) البسيطة في الكم.",
        illustrationDesc: "رسم يوضح كيفية مطابقة وسط الكم مع خط الكتف قبل الخياطة",
        quiz: [
          {
            question: "ما هي أصعب منطقة في خياطة الكم؟",
            options: [
              { text: "أسفل الكم", isCorrect: false },
              { text: "رأس الكم (التقاء الكتف والإبط)", isCorrect: true },
              { text: "الجانب", isCorrect: false },
              { text: "لا توجد صعوبة", isCorrect: false }
            ],
            feedback: "توزيع القماش عند منحنى الإبط يتطلب دقة لمنع ظهور ثنيات مشوهة."
          },
          {
            question: "كيف تصنع كشكشة في أعلى الكم المنفوخ؟",
            options: [
              { text: "بالضغط القوي", isCorrect: false },
              { text: "بعمل غرزتين واسعتين وشدهما بلطف لتجميع القماش", isCorrect: true },
              { text: "بقص القماش", isCorrect: false },
              { text: "بالصمغ", isCorrect: false }
            ],
            feedback: "الغرز الواسعة (السراجة) هي أسهل طريقة لعمل كشكشة منتظمة."
          },
          {
            question: "ما هو كم 'الكيمونو'؟",
            options: [
              { text: "كم منفصل يتم تركيبه", isCorrect: false },
              { text: "كم مقصوص مع قطعة الصدر والظهر (قطعة واحدة)", isCorrect: true },
              { text: "كم قصير جداً", isCorrect: false },
              { text: "كم من الدانتيل فقط", isCorrect: false }
            ],
            feedback: "الكيمونو أسهل في الخياطة لأنه لا يحتاج لتركيب معقد في الإبط."
          }
        ]
      },
      {
        id: "5-2",
        title: "الجيوب البسيطة (Patch Pockets)",
        summary: "• الجيب الخارجي (المركوب).\n• قص وتجهيز حواف الجيب.\n• وضع الجيب بشكل متماثل على القطعة.\n• خياطة الزوايا وتمتين البدايات والنهايات.",
        illustrationDesc: "جيب مربع موضوع فوق فستان مع إظهار خياطة مزدوجة للزينة",
        quiz: [
          {
            question: "أين نجد الجيوب الخارجية (Patch Pockets) عادة؟",
            options: [
              { text: "في القمصان والملابس الكاجوال وفساتين البنوتات", isCorrect: true },
              { text: "في فساتين السهرة الفاخرة", isCorrect: false },
              { text: "داخل الملابس الداخلية", isCorrect: false },
              { text: "لا توجد في الملابس", isCorrect: false }
            ],
            feedback: "الجيوب الخارجية عملية وتعتبر عنصراً جمالياً بسيطاً."
          },
          {
            question: "لماذا نكوي حواف الجيب للداخل قبل خياطته؟",
            options: [
              { text: "ليصبح أصغر", isCorrect: false },
              { text: "لضمان خياطة نظيفة ومتساوية على الحواف", isCorrect: true },
              { text: "لتغيير لون الحافة", isCorrect: false },
              { text: "لا يجب كويه", isCorrect: false }
            ],
            feedback: "الكي المسبق يحدد شكل الجيب ويمنع ظهور خيوط القماش المنسلة."
          },
          {
            question: "ما هي 'خياطة التثبيت' (Backtack) في زوايا الجيب؟",
            options: [
              { text: "خياطة عشوائية", isCorrect: false },
              { text: "إعادة الخياطة لعدة غرز لمنع تمزق الجيب مع الاستخدام", isCorrect: true },
              { text: "حذف الخيط", isCorrect: false },
              { text: "تغيير الإبرة", isCorrect: false }
            ],
            feedback: "زوايا الجيب تتعرض لضغط كبير عند وضع اليد، لذا يجب تقويتها."
          }
        ]
      },
      {
        id: "5-3",
        title: "خياطة السراويل البسيطة (Elastic Waist)",
        summary: "• باترون السروال الواسع (البيجامة).\n• خياطة خطي 'الحجر' (Crotch Seam).\n• تركيب المغاط (Elastic) في الخصر.\n• كفّة السروال من الأسفل.",
        illustrationDesc: "مخطط يوضح كيفية تجميع أرجل السروال ثم ربطهما عند منطقة الحجر",
        quiz: [
          {
            question: "ما هي أهم خياطة في السروال لراحة الحركة؟",
            options: [
              { text: "خياطة الجانب", isCorrect: false },
              { text: "خياطة الحجر (السرج)", isCorrect: true },
              { text: "خياطة الحافة", isCorrect: false },
              { text: "خياطة الجيوب", isCorrect: false }
            ],
            feedback: "خط الحجر هو الذي يحدد مدى راحة السروال عند الجلوس والمشي."
          },
          {
            question: "كيف نمرر المغاط (المطاط) داخل ثنية الخصر؟",
            options: [
              { text: "باستخدام اليد فقط", isCorrect: false },
              { text: "باستخدام 'دبوس الأمان' (Safety Pin) لسحبه داخل المجرى", isCorrect: true },
              { text: "بالصمغ", isCorrect: false },
              { text: "بخياطته فوق القماش مباشرة", isCorrect: false }
            ],
            feedback: "دبوس الأمان هو الوسيلة الأسهل لتمرير المطاط في المجاري القماشية."
          },
          {
            question: "لماذا نستخدم السراويل ذات الخصر المطاطي للمبتدئين؟",
            options: [
              { text: "لأنها جميلة فقط", isCorrect: false },
              { text: "لأنها لا تحتاج لسحاب أو أزرار معقدة", isCorrect: true },
              { text: "لأن قماشها رخيص", isCorrect: false },
              { text: "لأنها للكبار فقط", isCorrect: false }
            ],
            feedback: "البساطة في الخصر تسمح للمبتدئ بالتركيز على تقنيات القص والتجميع."
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
        title: "مشروع: خياطة مئزر مطبخ",
        summary: "• قص قماش المئزر وأشرطة الربط.\n• تطبيق تزيين الحواف بالدانتيل أو البييه.\n• خياطة الجيب الأمامي وزخرفته.\n• تمتين أماكن ربط الأحزمة.",
        illustrationDesc: "مئزر مطبخ ملون مع جيب في الوسط وأشرطة ربط من الخلف",
        quiz: [
          {
            question: "ما هو القماش الأنسب لمئزر المطبخ؟",
            options: [
              { text: "الحرير", isCorrect: false },
              { text: "القطن السميك أو القماش المعالج (Canvas)", isCorrect: true },
              { text: "الشيفون", isCorrect: false },
              { text: "الدانتيل", isCorrect: false }
            ],
            feedback: "يجب أن يكون القماش قادراً على تحمل الغسيل المتكرر والحرارة."
          },
          {
            question: "كيف نثبت أشرطة الربط لتبدو نظيفة؟",
            options: [
              { text: "خياطة طرفها داخل ثنية المئزر", isCorrect: true },
              { text: "لصقها بالغراء", isCorrect: false },
              { text: "ربطها بعقدة فقط", isCorrect: false },
              { text: "دبسها بالدبابيس", isCorrect: false }
            ],
            feedback: "الخياطة المخفية للأشرطة تجعل المئزر يبدو منتجاً جاهزاً للبيع."
          },
          {
            question: "فائدة الجيب في المئزر هي:",
            options: [
              { text: "شكلية فقط", isCorrect: false },
              { text: "عملية لوضع الهواتف أو أدوات المطبخ الصغيرة", isCorrect: true },
              { text: "لثقل المئزر", isCorrect: false },
              { text: "لحماية البطن من البرد", isCorrect: false }
            ],
            feedback: "الجيوب تضيف قيمة نفعية للملابس العملية."
          }
        ]
      },
      {
        id: "6-2",
        title: "إصلاح الملابس البسيطة (Mending)",
        summary: "• ترقيع الثقوب الصغيرة بطريقة فنية.\n• تقصير السراويل (Hemming).\n• تضييق الخصر الواسع.\n• استبدال السحابات المكسورة.",
        illustrationDesc: "شخص يبدل سحاباً مكسوراً في سترة بآخر جديد",
        quiz: [
          {
            question: "ما هي مهارة 'الرفو'؟",
            options: [
              { text: "قص الملابس القديمة", isCorrect: false },
              { text: "إصلاح الثقوب في القماش بنسج خيوط مشابهة له", isCorrect: true },
              { text: "تغيير لون القماش", isCorrect: false },
              { text: "صناعة أزرار", isCorrect: false }
            ],
            feedback: "الرفو الاحترافي يجعل الثقب يختفي تماماً عن الأنظار."
          },
          {
            question: "كيف تقصر سروال جينز مع الحفاظ على الحافة الأصلية؟",
            options: [
              { text: "بقص الحافة ورميها", isCorrect: false },
              { text: "بخياطة الثنية فوق الحافة الأصلية ثم قلبها", isCorrect: true },
              { text: "بلصقه فقط", isCorrect: false },
              { text: "بصبغه", isCorrect: false }
            ],
            feedback: "الحفاظ على الحافة الأصلية يسمى 'Original Hem' ويحافظ على قيمة الجينز."
          },
          {
            question: "ماذا تفعل إذا أصبح الخصر واسعاً قليلاً؟",
            options: [
              { text: "ارتداء حزام دائماً", isCorrect: false },
              { text: "إضافة بنسات صغيرة في الخلف (Darts)", isCorrect: true },
              { text: "قص السروال من الوسط", isCorrect: false },
              { text: "تبديله بواحد جديد", isCorrect: false }
            ],
            feedback: "تعديلات الخصر هي أكثر أنواع الإصلاحات طلباً."
          }
        ]
      },
      {
        id: "6-3",
        title: "تنظيم ورشة الخياطة المنزلية",
        summary: "• اختيار المكان المناسب والإضاءة الجيدة.\n• تنظيم الخيوط والإبر في صناديق مرتبة.\n• صيانة الماكينة الدورية (التزييت والتنظيف).\n• التخلص الآمن من بقايا القماش والدبابيس.",
        illustrationDesc: "ركن خياطة منظم مع رفوف خشبية وصندوق شفاف للخيوط الملونة",
        quiz: [
          {
            question: "لماذا تهم الإضاءة في الخياطة؟",
            options: [
              { text: "لجعل المكان جميلاً", isCorrect: false },
              { text: "لمؤية الغرز الدقيقة وتجنب إجهاد العين", isCorrect: true },
              { text: "لتسخين القماش", isCorrect: false },
              { text: "لا تهم الإضاءة", isCorrect: false }
            ],
            feedback: "الإضاءة البيضاء القوية فوق الماكينة أساسية للعمل المتقن."
          },
          {
            question: "كم مرة يجب تنظيف الماكينة من الوبر وتزييتها؟",
            options: [
              { text: "مرة كل سنة", isCorrect: false },
              { text: "بشكل دوري حسب الاستخدام (مثلاً كل أسبوع عمل مكثف)", isCorrect: true },
              { text: "عندما تتعطل فقط", isCorrect: false },
              { text: "لا تزيت أبداً", isCorrect: false }
            ],
            feedback: "الزيت يقلل الاحتكاك والضجيج ويطيل عمر الماكينة الافتراضي."
          },
          {
            question: "ماذا نفعل بـ 'قصاقيص' القماش الزائدة؟",
            options: [
              { text: "رميها فوراً في القمامة", isCorrect: false },
              { text: "جمعها لاستخدامها في حشو الوسائد أو الترقيع الفني (Patchwork)", isCorrect: true },
              { text: "أكلها", isCorrect: false },
              { text: "حرقها", isCorrect: false }
            ],
            feedback: "إعادة تدوير القماش هو مبدأ اقتصادي وبيئي ذكي."
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
        title: "مشروع تخرج المبتدئ: الفستان البسيط (A-Line)",
        summary: "• دمج مهارات القص، البنسات، الرقبة والأكمام.\n• تصميم فستان بسيط للأطفال أو الكبار.\n• اختيار القماش والتنسيق الجمالي.\n• التشطيب النهائي النظيف للهيم (الحاشية).",
        illustrationDesc: "فستان بسيط على شكل حرف A مع لمسات جمالية عند الرقبة",
        quiz: [
          {
            question: "لماذا يسمى فستان A-Line؟",
            options: [
              { text: "لأنه يبدأ بحرف A", isCorrect: false },
              { text: "لأن قصة الفستان تتسع من الأسفل لتبدو مثل حرف A", isCorrect: true },
              { text: "لأنه للمبتدئين فقط", isCorrect: false },
              { text: "بسبب لون الخيط", isCorrect: false }
            ],
            feedback: "هذه القصة مريحة جداً وتناسب أغلب الأجسام."
          },
          {
            question: "ما هو الترتيب الصحيح لتجميع الفستان؟",
            options: [
              { text: "الأكتاف -> الجوانب -> الأكمام -> الرقبة -> الحاشية", isCorrect: true },
              { text: "الحاشية أولاً", isCorrect: false },
              { text: "الأكمام أولاً قبل الأكتاف", isCorrect: false },
              { text: "بشكل عشوائي", isCorrect: false }
            ],
            feedback: "تجميع الأكتاف هو حجر الأساس لبناء أي قطعة ملابس علوية."
          },
          {
            question: "ماذا تفعل إذا كان الفستان طويلاً جداً في النهاية؟",
            options: [
              { text: "قص الزيادة وعمل كفّة نظيفة (Hem)", isCorrect: true },
              { text: "تركه كما هو", isCorrect: false },
              { text: "ثنيه بالصمغ", isCorrect: false },
              { text: "لفه حول الخصر", isCorrect: false }
            ],
            feedback: "تعديل الطول النهائي هو الخطوة الأخيرة للوصول للمظهر المثالي."
          }
        ]
      },
      {
        id: "7-2",
        title: "التسويق لمشاريع الخياطة المبتدئة",
        summary: "• تصوير أعمالك بشكل جذاب ومهني.\n• استخدام منصات التواصل (فيسبوك، انستغرام) للعرض.\n• كيفية حساب التكاليف (قماش، خيوط، كهرباء، جهد).\n• بناء قاعدة زبائن من الجيران والأقارب.",
        illustrationDesc: "شخص يلتقط صورة فستان أنيق في ضوء الشمس لعرضه على انستغرام",
        quiz: [
          {
            question: "ما هو أهم شرط في صورة العمل المعروض للبيع؟",
            options: [
              { text: "الإضاءة القوية وإظهار التفاصيل (الخياطة النظيفة)", isCorrect: true },
              { text: "كثرة الفلاتر المشوشة", isCorrect: false },
              { text: "تصويرها في مكان مظلم", isCorrect: false },
              { text: "عدم إظهار لون القماش الحقيقي", isCorrect: false }
            ],
            feedback: "الزبائن يشترون بعيونهم أولاً؛ جودة الصورة من جودة العمل."
          },
          {
            question: "كيف تحسب سعر قطعة خياطة؟",
            options: [
              { text: "سعر القماش فقط", isCorrect: false },
              { text: "تكلفة المواد + أجر يدك (ساعات العمل) + هامش ربح", isCorrect: true },
              { text: "بتقدير عشوائي", isCorrect: false },
              { text: "بسعر السوق حتى لو خسرت", isCorrect: false }
            ],
            feedback: "تقدير وقتك وجهدك أساسي لاستمرار مشروعك بنجاح."
          },
          {
            question: "ما هي أفضل دعاية للخياط المبتدئ؟",
            options: [
              { text: "السمعة الجيدة (كلام الناس عن جودتك)", isCorrect: true },
              { text: "توزيع منشورات ورقية", isCorrect: false },
              { text: "صناعة إعلانات تلفزيونية", isCorrect: false },
              { text: "الصراخ في الشارع", isCorrect: false }
            ],
            feedback: "الخياطة تعتمد على الثقة؛ زبون راضٍ يجلب لك عشرة آخرين."
          }
        ]
      },
      {
        id: "7-3",
        title: "أخلاقيات مهنة الخياطة",
        summary: "• الالتزام بالمواعيد مع الزبائن.\n• الأمانة في استخدام القماش (عدم الإسراف).\n• الحفاظ على خصوصية قياسات وأسرار الزبائن.\n• التطور المستمر وعدم تقليد التصاميم دون إذن.",
        illustrationDesc: "ميزان يرمز للأمانة بين الخياط والزبون في تسليم 'فضلات' القماش الغالي",
        quiz: [
          {
            question: "ماذا تفعل إذا تأخرت في تسليم فستان مناسبة؟",
            options: [
              { text: "إغلاق الهاتف", isCorrect: false },
              { text: "الاعتذار المسبق للزبون وتحديد موعد جديد مؤكد", isCorrect: true },
              { text: "الكذب وقول إنك انتهيت", isCorrect: false },
              { text: "تسليمه غير مكتمل", isCorrect: false }
            ],
            feedback: "الصدق في المواعيد يبني احتراماً يدوم طويلاً."
          },
          {
            question: "هل يحق للخياط أخذ بقايا القماش الكبيرة للزبون؟",
            options: [
              { text: "نعم، هي حقه", isCorrect: false },
              { text: "لا، يجب استئذان الزبون أو إعادتها مع اللباس", isCorrect: true },
              { text: "رميها دون علمه", isCorrect: false },
              { text: "بيعها", isCorrect: false }
            ],
            feedback: "الأمانة في القماش جزء من صورة المهني المحترم."
          },
          {
            question: "كيف تتعامل مع زبون يطلب موديل لا يناسبه؟",
            options: [
              { text: "تنفيذه فوراً والسكوت", isCorrect: false },
              { text: "تقديم نصيحة مهنية بلباقة واقتراح تعديلات تناسب قوامه", isCorrect: true },
              { text: "السخرية منه", isCorrect: false },
              { text: "رفض العمل", isCorrect: false }
            ],
            feedback: "الخياط المحترف هو مستشار أناقة أيضاً."
          }
        ]
      }
    ]
  }
];
