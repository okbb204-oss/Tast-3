import { Level } from "../curriculum";

export const tailoringAdvanced: Level[] = [
  {
    id: 15,
    lessons: [
      {
        id: "15-1",
        title: "تصميم الأزياء والباترون المسطح المتقدم",
        summary: "• تحويل الرسومات الفنية (Croquis) إلى باترونات حقيقية.\n• تقنيات تصريف البنسات (Dart Manipulation).\n• قصات الدرابيه (Draping) البسيطة.\n• فهم التوازن في التصاميم غير المتماثلة (Asymmetric).",
        illustrationDesc: "رسم يوضح تحريك بنسة الصدر إلى منطقة الخصر لإنشاء موديل جديد",
        quiz: [
          {
            question: "ما هو 'تصريف البنسات'؟",
            options: [
              { text: "حذف البنسات نهائياً", isCorrect: false },
              { text: "نقل البنسة من مكان لآخر في الباترون لتغيير الموديل مع الحفاظ على المقاس", isCorrect: true },
              { text: "خياطة البنسة بسرعة", isCorrect: false },
              { text: "تلوين البنسة", isCorrect: false }
            ],
            feedback: "هذا هو سر تحويل القميص البسيط إلى فستان سهرة معقد."
          },
          {
            question: "ماذا يقصد بالـ Draping؟",
            options: [
              { text: "التصميم مباشرة بتشكيل القماش على المانيكان بدلاً من الورق", isCorrect: true },
              { text: "قص الورق", isCorrect: false },
              { text: "صبغ القماش", isCorrect: false },
              { text: "غسل القماش بالماء", isCorrect: false }
            ],
            feedback: "الدرابيه هو أرقى فنون تشكيل الأزياء الراقية."
          },
          {
            question: "التصميم غير المتماثل (Asymmetric) هو:",
            options: [
              { text: "أن يكون الجانب الأيمن مختلفاً عن الجانب الأيسر فنياً", isCorrect: true },
              { text: "خطأ في القص", isCorrect: false },
              { text: "لباس مقلوب", isCorrect: false },
              { text: "تصميم للأطفال فقط", isCorrect: false }
            ],
            feedback: "يتطلب هذا النوع من التصميم جرأة ووعياً كبيراً بالتوازن البصري."
          }
        ]
      },
      {
        id: "15-2",
        title: "العمل مع الأقمشة الفاخرة (الدانتيل والمخمل)",
        summary: "• كيفية قص الدانتيل مع الحفاظ على الحواف المزخرفة (Scallops).\n• اتجاه النسالة في المخمل (Velvet Nap).\n• خياطة الترتر (Sequins) والخرز يدوياً وبالماكينة.\n• تبطين أقمشة السهرة الشفافة.",
        illustrationDesc: "قطعة قماش مخملية تظهر تغير لونها عند مسحها باليد في اتجاهين مختلفين",
        quiz: [
          {
            question: "ما هو أهم شرط عند قص المخمل (Velvet)؟",
            options: [
              { text: "قصه في أي اتجاه", isCorrect: false },
              { text: "قص جميع قطع الباترون في نفس اتجاه 'النسالة' (الوبرة)", isCorrect: true },
              { text: "قصه وهو مبلل", isCorrect: false },
              { text: "استخدام مقص قديم", isCorrect: false }
            ],
            feedback: "إذا عكست الاتجاه، سيبدو لون الصدر مختلفاً عن لون الظهر في الصورة."
          },
          {
            question: "كيف نخيط الدانتيل الفاخر بدون خياطات ظاهرة؟",
            options: [
              { text: "بقص وحدات الوردات وخياطتها فوق بعضها يدوياً (Appliqué)", isCorrect: true },
              { text: "بالصمغ السريع", isCorrect: false },
              { text: "بالسرفلة العريضة", isCorrect: false },
              { text: "بالدبابيس فقط", isCorrect: false }
            ],
            feedback: "الخياطة اليدوية للدانتيل تجعل الفستان يبدو كقطعة واحدة نبتت من القماش."
          },
          {
            question: "لماذا ننزع حبات الترتر (Sequins) من مسار الخياطة؟",
            options: [
              { text: "لأنها تؤلم اليد", isCorrect: false },
              { text: "لمنع كسر إبرة الماكينة والحصول على خياطة مسطحة ومريحة للجسم", isCorrect: true },
              { text: "لتوفير الترتر", isCorrect: false },
              { text: "لا داعي لنزعها", isCorrect: false }
            ],
            feedback: "التحضير الجيد لمسار الإبرة يضمن خياطة احترافية دون أعطال."
          }
        ]
      },
      {
        id: "15-3",
        title: "بناء 'الكورسيه' (Corsetry) الأساسي",
        summary: "• مفهوم الكورسيه وتشكيل الجسم.\n• أنواع العظام (Planing/Boning) البلاستيكية والمعدنية.\n• كيفية تبطين الكورسيه ليكون مريحاً.\n• فتحات الربط الخلفية (Eyelets).",
        illustrationDesc: "كورسيه داخلي يظهر فيه مجاري العظام التي تشد القوام",
        quiz: [
          {
            question: "ما وظيفة العظام (Bones) في الكورسيه؟",
            options: [
              { text: "لتقوية الخيوط", isCorrect: false },
              { text: "لتوفير الدعم والثبات وضمان عدم تجعد القماش عند الشد", isCorrect: true },
              { text: "لزيادة وزن اللباس", isCorrect: false },
              { text: "للزينة فقط", isCorrect: false }
            ],
            feedback: "العظام تعطي الفساتين الفاخرة شكلها الهندسي الثابت."
          },
          {
            question: "ما هو قماش 'الكوتيل' (Coutil)؟",
            options: [
              { text: "قماش قوي جداً مخصص لصناعة الكورسيهات لمنع تمددها", isCorrect: true },
              { text: "قماش شفاف رقيق", isCorrect: false },
              { text: "جلد اصطناعي", isCorrect: false },
              { text: "نوع من الصوف", isCorrect: false }
            ],
            feedback: "الكورسيه يحتاج لقماش لا يتمدد مطلقاً ليقوم بوظيفته في شد الجسم."
          },
          {
            question: "كيف نثبت الحلقات المعدنية (Eyelets) في الخلف؟",
            options: [
              { text: "بالخياطة", isCorrect: false },
              { text: "باستخدام مكبّس خاص أو كماشة مخصصة", isCorrect: true },
              { text: "بالغراء", isCorrect: false },
              { text: "بالصهر بالحرارة", isCorrect: false }
            ],
            feedback: "التثبيت القوي للحلقات يضمن تحملها لضغط الأربطة القوي."
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
        title: "القفطان الجزائري المعاصر",
        summary: "• تاريخ القفطان وتطوره.\n• قصات القفطان (ألفية، بقطعتين).\n• تركيب 'العقاد' (الأزرار التقليدية).\n• تزيين الحواف بـ 'السفيفة' و 'القيطان'.",
        illustrationDesc: "قفطان جزائري فاخر تظهر فيه السفيفة الذهبية والعقاد في الوسط",
        quiz: [
          {
            question: "ما هي 'العقاد'؟",
            options: [
              { text: "أزرار قماشية يدوية تقليدية تغلق القفطان ومثيله من الألبسة", isCorrect: true },
              { text: "نوع من الورود", isCorrect: false },
              { text: "خيوط ذهبية", isCorrect: false },
              { text: "أحجار كريمة", isCorrect: false }
            ],
            feedback: "العقاد مهارة يدوية دقيقة ترمز للأصالة الجزائرية."
          },
          {
            question: "ما الفرق بين 'القيطان' و 'السفيفة'؟",
            options: [
              { text: "القيطان خيط ملفوف، والسفيفة شريط منسوج عريض للزينة", isCorrect: true },
              { text: "القيطان للرجال والسفيفة للنساء", isCorrect: false },
              { text: "لا يوجد فرق", isCorrect: false },
              { text: "القيطان أغلـى", isCorrect: false }
            ],
            feedback: "استخدام الاثنين معاً يعطي القفطان هيبته وجماله التقليدي."
          },
          {
            question: "كيف نحافظ على شكل القفطان الثقيل؟",
            options: [
              { text: "بوضعه في الماء دائماً", isCorrect: false },
              { text: "بتبطينه بقماش 'التافتا' أو الأقمشة المساندة القوية", isCorrect: true },
              { text: "بتقليل الزينة", isCorrect: false },
              { text: "بنشره في الشمس", isCorrect: false }
            ],
            feedback: "البطانة الداخلية والقماش المساعد يمنعان القفطان من الترهل بسبب ثقل التطريز."
          }
        ]
      },
      {
        id: "16-2",
        title: "الكاراكو العاصمي - فن المجبود والفتلة",
        summary: "• التعرف على قماش 'القطيفة' (المخمل) المخصص للكاراكو.\n• تقنيات التطريز بـ 'المجبود' (خيوط الذهب القوية).\n• تركيب 'الفتلة' اليدوية.\n• تصميم 'سروال الشلقة' أو 'سروال المدور'.",
        illustrationDesc: "سترة كاراكو عاصمي مطرزة بالمجبود الذهبي مع سروال شلقة أنيق",
        quiz: [
          {
            question: "ما هو التطريز بـ 'المجبود'؟",
            options: [
              { text: "تطريز بخيوط معدنية ذهبية أو فضية صلبة تتطلب مهارة وقوة", isCorrect: true },
              { text: "تطريز بخيوط القطن", isCorrect: false },
              { text: "تطريز بالماكينة فقط", isCorrect: false },
              { text: "قص القماش", isCorrect: false }
            ],
            feedback: "المجبود فن جزائري عريق يجعل الملابس تبدو كقطع مجوهرات."
          },
          {
            question: "سروال المدور يشتهر بـ:",
            options: [
              { text: "اتساعه الكبير وشكله المستدير الذي يشبه 'البقجة'", isCorrect: true },
              { text: "ضيقـه الشديـد", isCorrect: false },
              { text: "قصر طوله", isCorrect: false },
              { text: "عدم وجود خياطة فيه", isCorrect: false }
            ],
            feedback: "هو قطعة فنية من القماش تتطلب مهارة كبيرة في الثني والتوزيع."
          },
          {
            question: "لماذا يعتبر الكاراكو قطعة استثمارية؟",
            options: [
              { text: "لأن سعره ينخفض", isCorrect: false },
              { text: "لأنه يصنع يدوياً بالكامل ويحافظ على قيمته وأناقته عبر الأجيال", isCorrect: true },
              { text: "لأنه سهل الخياطة", isCorrect: false },
              { text: "لا يعتبر استثماراً", isCorrect: false }
            ],
            feedback: "الكاراكو يورث من الأم لابنتها كجزء من جهاز العروس الثمين."
          }
        ]
      },
      {
        id: "16-3",
        title: "البلوزة الوهرانية - تفاصيل الصدر والجوهر",
        summary: "• تشريح البلوزة الوهرانية.\n• تقنيات ملء الصدر بالجوهر (Beading) والعقاش.\n• خياطة 'الصدر' المنفصل ثم تركيبه.\n• اختيار الأقمشة الفاخرة (الدونتال والحرير).",
        illustrationDesc: "صدر بلوزة وهرانية مغطى بالكامل بالخرز والجوهر اللامع بتصاميم وردية",
        quiz: [
          {
            question: "ما هو 'الجوهر' في البلوزة الوهرانية؟",
            options: [
              { text: "أحجار كريمة حقيقية دائماً", isCorrect: false },
              { text: "خرز لؤلؤي صغير يُخيط يدوياً بكثافة على الصدر", isCorrect: true },
              { text: "نوع من الأقمشة", isCorrect: false },
              { text: "اسم الخياط", isCorrect: false }
            ],
            feedback: "الجوهر يمنح البلوزة لمعاناً وثقلاً وجمالاً فريداً."
          },
          {
            question: "كيف يتم خياطة صدر البلوزة؟",
            options: [
              { text: "على قطعة قماش مقواة منفصلة ثم تثبيتها على الفستان", isCorrect: true },
              { text: "بالماكينة مباشرة", isCorrect: false },
              { text: "بالصمغ", isCorrect: false },
              { text: "لا يوجد خياطة للصدر", isCorrect: false }
            ],
            feedback: "فصل الصدر يسمح بالعمل المريح على التطريز اليدوي لأسابيع."
          },
          {
            question: "تتميز البلوزة الوهرانية بـ:",
            options: [
              { text: "بساطتها التامة", isCorrect: false },
              { text: "بصدرها الغني بالتطريز وجمال تداخل الألوان والأحجار", isCorrect: true },
              { text: "بأنها سروال وقميص", isCorrect: false },
              { text: "بأنها لون واحد فقط", isCorrect: false }
            ],
            feedback: "هي فخر الغرب الجزائري وتحفة فنية في كل مناسبة."
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
        title: "خياطة المعاطف الثقيلة (Tailored Coats)",
        summary: "• التعامل مع الصوف الثقيل والكشمير.\n• تقنيات بناء الأكتاف القوية للرجال والنساء.\n• خياطة الياقة الانجليزية المزدوجة.\n• فتحات التهوية (Vents) في أسفل المعطف.",
        illustrationDesc: "معطف صوفي ثقيل يظهر دقة خياطة الياقة والجيوب الكبيرة المبطنة",
        quiz: [
          {
            question: "ما هي أفضل إبرة لمعطف صوفي؟",
            options: [
              { text: "إبرة 100/16 أو إبرة مخصصة للصوف", isCorrect: true },
              { text: "إبرة رقيقة جداً", isCorrect: false },
              { text: "إبرة يدوية فقط", isCorrect: false },
              { text: "لا نستخدم إبراً", isCorrect: false }
            ],
            feedback: "القماش الثقيل يتطلب قوة إبرة لا تنكسر عند تداخل الطبقات."
          },
          {
            question: "ما هي ميزة الـ Vent في المعطف؟",
            options: [
              { text: "للزينة فقط", isCorrect: false },
              { text: "تسمح بحرية المشي والجلوس في المعاطف الطويلة والضيقة", isCorrect: true },
              { text: "لتوفير القماش", isCorrect: false },
              { text: "لمنع دخول الهواء", isCorrect: false }
            ],
            feedback: "الفتحة الخلفية أساسية للمظهر والوظيفة العملـية."
          },
          {
            question: "لماذا نستخدم 'البخار' بكثافة في خياطة المعاطف؟",
            options: [
              { text: "لتنظيف الصوف", isCorrect: false },
              { text: "لتشكيل الصوف (Molding) حول منحنيات الجسم وتثبيت الخياطات السميكة", isCorrect: true },
              { text: "لغسل المعطف", isCorrect: false },
              { text: "لا نحتاج للبخار", isCorrect: false }
            ],
            feedback: "الصوف يستجيب للحرارة والرطوبة مما يسمح بـ 'نحت' المعطف ليكون مثالياً."
          }
        ]
      },
      {
        id: "17-2",
        title: "فساتين الزفاف (Bridal Couture) - الجزء الأول",
        summary: "• أنواع أقمشة الزفاف (تول، دانتيل، الأورجانزا).\n• بناء الجيربون (Petticoat) لإعطاء الحجم.\n• التعامل مع الذيل الطويل (Train).\n• خياطة الطبقات المتعددة.",
        illustrationDesc: "لقطة مكبرة لطبقات من التول الأبيض تحت فستان زفاف لإعطائه شكلاً ملكياً",
        quiz: [
          {
            question: "ما هو 'الجيربون' (Petticoat)؟",
            options: [
              { text: "تنورة داخلية قاسية تلبس تحت الفستان لنفخه وإعطائه شكلاً واسعاً", isCorrect: true },
              { text: "طرحة العروس", isCorrect: false },
              { text: "حذاء العروس", isCorrect: false },
              { text: "نوع من التطريز", isCorrect: false }
            ],
            feedback: "الجيربون هو الهيكل العظمي لفستان الزفاف المنفوخ."
          },
          {
            question: "كيف نتعامل مع 'الذيل الطويل' لتسهيل الحركة؟",
            options: [
              { text: "بقصـه بعد التصويـر", isCorrect: false },
              { text: "بإضافة حلقة لليد أو أزرار مخفية لرفعه (Bustle system)", isCorrect: true },
              { text: "بجعله خفيفاً جداً", isCorrect: false },
              { text: "لا يمكن تسهيل حركته", isCorrect: false }
            ],
            feedback: "نظام الرفع يسمح للعروس بالرقص والحركة براحة بعد العرض الرسمي."
          },
          {
            question: "أي نوع من الدانتيل هو الأغلى والأرق؟",
            options: [
              { text: "دانتيل الشانتيلي (Chantilly Lace)", isCorrect: true },
              { text: "الدانتيل الكروشيه", isCorrect: false },
              { text: "الدانتيل البلاستيكي", isCorrect: false },
              { text: "لا يوجد فرق", isCorrect: false }
            ],
            feedback: "يتميز الشانتيلي بنعومته الفائقة وتفاصيله الدقيقة جداً."
          }
        ]
      },
      {
        id: "17-3",
        title: "فساتين الزفاف - الجزء الثاني: التفاصيل اليدوية",
        summary: "• تثبيت الأحجار الكبيرة. \n• خياطة 'الكاب' (Capes) والطرحة (Veil).\n• لمسات الدانتيل المفرغ يدوياً.\n• التوضيب النهائي والتغليف الفاخر.",
        illustrationDesc: "عروس ترتدي طرحة طويلة مطرزة عند الحواف بالدانتيل المنسجم مع الفستان",
        quiz: [
          {
            question: "ما هي ميزة الطرحة (Veil) المصنوعة يدوياً؟",
            options: [
              { text: "ثقلها الشديد", isCorrect: false },
              { text: "توزيع التطريز ليكون متناسقاً مع حركة العروس ووجهها", isCorrect: true },
              { text: "لونها الفاقع", isCorrect: false },
              { text: "عدم وجود خياطة فيها", isCorrect: false }
            ],
            feedback: "الطرحة هي التاج القماشي الذي يكمل إطلالة العروس."
          },
          {
            question: "لماذا يفضل خياطة أحجار الكريستال بدلاً من لصقها؟",
            options: [
              { text: "لأن الصمغ يترك أثراً وقد تسقط الأحجار مع الحركة", isCorrect: true },
              { text: "لأن الخياطة أسرع", isCorrect: false },
              { text: "لأن الإبرة تحب الأحجار", isCorrect: false },
              { text: "لا فرق", isCorrect: false }
            ],
            feedback: "الخياطة تضمن بقاء الأحجار في مكانها حتى مع الاستخدام المكثف والغسيل."
          },
          {
            question: "معنى 'Couture' في خياطة الزفاف هو:",
            options: [
              { text: "الخياطة الراقية التي تعتمد على العمل اليدوي المكثف والمقاسات الشخصية", isCorrect: true },
              { text: "الخياطة السريعة", isCorrect: false },
              { text: "الملابس الجاهزة", isCorrect: false },
              { text: "الخياطة بالماكينات القديمة", isCorrect: false }
            ],
            feedback: "الكوتير هو الفن الأصيل الذي يحترم فردية الزبون وإبداع الخياط."
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
        title: "الرسم الرقمي للأزياء (Fashion Illustration)",
        summary: "• مقدمة لتصميم الأزياء عبر تابلت الرسم أو الآيباد.\n• استخدام برامج مثل Procreate أو Adobe Illustrator.\n• كيفية تلوين الأقمشة رقمياً (تأثير الحرير، الجلد، الدانتيل).\n• إرسال التصاميم الرقمية للمصانع والزبائن.",
        illustrationDesc: "لوح رقمي يظهر فيه رسم لموديل فستان مع اختيار تدرجات ألوان احترافية",
        quiz: [
          {
            question: "ما فائدة الرسم الرقمي للمصمم؟",
            options: [
              { text: "تغيير الألوان والموديلات بضغطة زر قبل لمس القماش", isCorrect: true },
              { text: "تحسين سرعة الإنترنت", isCorrect: false },
              { text: "لا فائدة له", isCorrect: false },
              { text: "لأنه الموضة فقط", isCorrect: false }
            ],
            feedback: "الرسم الرقمي يوفر الوقت والقماش ويسمح بتجربة أفكار مجنونة بسهولة."
          },
          {
            question: "ما هو 'اللوح التقني' (Tech Pack)؟",
            options: [
              { text: "صندوق الأدوات", isCorrect: false },
              { text: "مستند يحتوي على كل التفاصيل التقنية للتصميم لإرسالها للتصنيع", isCorrect: true },
              { text: "لعبة فيديو", isCorrect: false },
              { text: "نوع من الحقائب", isCorrect: false }
            ],
            feedback: "الـ Tech Pack هو اللغة المشتركة بين المصمم والمصنع."
          },
          {
            question: "هل يغني الرسم الرقمي عن الباترون؟",
            options: [
              { text: "نعم", isCorrect: false },
              { text: "لا، الرسم هو فكرة بصرية، والباترون هو المخطط الهندسي للتنفيذ", isCorrect: true },
              { text: "فقط في المستقبل", isCorrect: false },
              { text: "لا أعلم", isCorrect: false }
            ],
            feedback: "التصميم يبدأ برسمة وينتهي بباترون ثم بقطعة حقيقية."
          }
        ]
      },
      {
        id: "18-2",
        title: "إدارة عرض أزياء (Fashion Show Basics)",
        summary: "• اختيار الثيم (Theme) للمجموعة.\n• تنسيق ترتيب خروج الموديلات.\n• اختيار الموسيقى والإضاءة.\n• ما وراء الكواليس (Backstage management).",
        illustrationDesc: "منصة عرض أزياء (Runway) تظهر فيها عارضة بزي مبتكر تحت الأضواء",
        quiz: [
          {
            question: "ما أهمية 'الثيم' (Theme) للمجموعة؟",
            options: [
              { text: "لجعل الملابس تتشابه", isCorrect: false },
              { text: "لخلق قصة ووحدة فنية تربط جميع القطع ببعضها البعض", isCorrect: true },
              { text: "لزيادة عدد القطع", isCorrect: false },
              { text: "لا أهمية له", isCorrect: false }
            ],
            feedback: "المجموعة الناجحة هي التي يشعر الجمهور أنها تنتمي لعائلة إبداعية واحدة."
          },
          {
            question: "ما وظيفة 'الخياط خلف الكواليس'؟",
            options: [
              { text: "للمشاهدة فقط", isCorrect: false },
              { text: "لحل المشاكل المفاجئة (تمزق، سحاب مكسور) في ثوانٍ قبل خروج العارضة", isCorrect: true },
              { text: "لالتقاط الصور", isCorrect: false },
              { text: "للنوم", isCorrect: false }
            ],
            feedback: "الجنود المجهولون خلف الكواليس هم من يضمنون نجاح العرض."
          },
          {
            question: "لماذا نختار قطعة 'الختام' (Grand Finale) لتكون الأكثر إبهاراً؟",
            options: [
              { text: "لأن العارضة تعبت", isCorrect: false },
              { text: "لترك أثر لا ينسى عند الجمهور والصحافة في نهاية العرض", isCorrect: true },
              { text: "بشكل عشوائي", isCorrect: false },
              { text: "لأنها الأغلى فقط", isCorrect: false }
            ],
            feedback: "الانطباع الأخير هو الذي يدوم ويحدد نجاح المجموعة تجارياً."
          }
        ]
      },
      {
        id: "18-3",
        title: "إنشاء ماركة ملابس خاصة (Brand Building)",
        summary: "• اختيار الاسم والشعار (Logo).\n• تحديد الجمهور المستهدف (Target Audience).\n• التصنيع: ورشة خاصة أم تعاقد خارجي؟\n• البيع عبر الإنترنت (E-commerce) مقابل المتاجر.",
        illustrationDesc: "هوية بصرية كاملة (حقائب، ملصقات، شعار) لماركة ألبسة جزائرية جديدة",
        quiz: [
          {
            question: "ما هو أول سؤال يجب أن تسأله لماركتك الجديدة؟",
            options: [
              { text: "كم سأربح؟", isCorrect: false },
              { text: "من هم زبائني وما هي المشكلة التي أحلها لهم بتصاميمي؟", isCorrect: true },
              { text: "أين سأسافر؟", isCorrect: false },
              { text: "ما هو لون مكتبي؟", isCorrect: false }
            ],
            feedback: "فهم الزبون هو خارطة الطريق للنجاح التجاري."
          },
          {
            question: "ما هي ميزة 'التخصص' (Niche) في البداية؟",
            options: [
              { text: "التركيز على فئة محددة يسهل التسويق وبناء الثقة والتميز", isCorrect: true },
              { text: "البيع للجميع أسهل", isCorrect: false },
              { text: "لا ميزة للتخصص", isCorrect: false },
              { text: "التخصص يقلل الزبائن دائماً", isCorrect: false }
            ],
            feedback: "أن تكون الأفضل في 'ملابس الأطفال' خير من أن تكون عادياً في كل شيء."
          },
          {
            question: "ما دور 'مواقع التواصل' في الماركة الحديثة؟",
            options: [
              { text: "للتسلية", isCorrect: false },
              { text: "لبناء مجتمع حول الماركة والتواصل المباشر مع الزبائن وعرض كواليس العمل", isCorrect: true },
              { text: "لنشر الصور الشخصية", isCorrect: false },
              { text: "لا دور لها", isCorrect: false }
            ],
            feedback: "الزبائن أوفياء للماركات التي يشعرون بصلة إنسانية وقصة وراءها."
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
        title: "التصنيع الصناعي (Industrial Production)",
        summary: "• مقدمة للعمل في المصانع الكبرى.\n• استخدام ماكينات القص الكهربائية العملاقة.\n• نظام 'الجريدينج' (Grading) - تكبير وتصغير المقاسات تلقائياً.\n• مراقبة الجودة (Quality Control) في الإنتاج الضخم.",
        illustrationDesc: "آلة قص كهربائية تقص 100 طبقة قماش في ثوانٍ بدقة متناهية",
        quiz: [
          {
            question: "ما هو 'الجريدينج' (Grading)؟",
            options: [
              { text: "تلوين القماش", isCorrect: false },
              { text: "تحويل الباترون من مقاس M إلى S, L, XL بطرق حسابية دقيقة", isCorrect: true },
              { text: "قص القماش", isCorrect: false },
              { text: "خياطة الأزرار", isCorrect: false }
            ],
            feedback: "الجريدينج هو عصب صناعة الملابس الجاهزة."
          },
          {
            question: "لماذا يوجد 'قسم مراقبة الجودة' في المصنع؟",
            options: [
              { text: "لفحص كل قطعة والتأكد من خلوها من العيوب قبل شحنها للمحلات", isCorrect: true },
              { text: "لإزعاج العمال", isCorrect: false },
              { text: "لحساب ساعات العمل", isCorrect: false },
              { text: "لزيادة الإنتاج", isCorrect: false }
            ],
            feedback: "السمعة الصناعية تبنى على الجودة الثابتة لكل قطعة منتجة."
          },
          {
            question: "ما هو 'الماركر' (Marker) في المصنع؟",
            options: [
              { text: "قلم تلوين", isCorrect: false },
              { text: "تخطيط ذكي لقطع الباترون فوق القماش لتقليل الهدر (الضياع)", isCorrect: true },
              { text: "اسم مدير المصنع", isCorrect: false },
              { text: "نوع من الماكينات", isCorrect: false }
            ],
            feedback: "توفير 1 سم من القماش في 1000 قطعة يعني توفير 10 أمتار كاملة!"
          }
        ]
      },
      {
        id: "19-2",
        title: "تصميم الحقائب والإكسسوارات الجلدية",
        summary: "• التعامل مع الجلد الطبيعي والاصطناعي.\n• غرز الخياطة المخصصة للجلد.\n• تركيب الإطارات المعدنية والسحابات الثقيلة للحقائب.\n• تقنيات تقوية القواعد وتثبيت الأيدي.",
        illustrationDesc: "حقيبة يد جلدية تظهر عليها خياطة غليظة واحترافية مع قطع نحاسية",
        quiz: [
          {
            question: "ماذا يحدث إذا أخطأت وخيطت في الجلد الطبيعي؟",
            options: [
              { text: "يمكن فكه وكويه", isCorrect: false },
              { text: "ستبقى ثقوب الإبرة واضحة للأبد ولن تختفي، مما قد يفسد القطعة", isCorrect: true },
              { text: "سيتغير لون الجلد", isCorrect: false },
              { text: "لا شيء", isCorrect: false }
            ],
            feedback: "في الجلد، الخياطة يجب أن تكون من 'المرة الأولى' صحيحة."
          },
          {
            question: "أي إبرة نستخدم للجلد؟",
            options: [
              { text: "إبرة ذات حد قاطع (Spade/Leather point) تشبه السكين الصغير", isCorrect: true },
              { text: "إبرة دائرية عادية", isCorrect: false },
              { text: "إبرة رقيقة", isCorrect: false },
              { text: "لا نستخدم إبرة", isCorrect: false }
            ],
            feedback: "الجلد لا يتم اختراقه بل يتم 'قطعه' بفتحة صغيرة تمر من خلالها الخيوط."
          },
          {
            question: "لماذا نستخدم 'غراء الجلد' بجانب الخياطة؟",
            options: [
              { text: "لتوفير الخيط", isCorrect: false },
              { text: "لتثبيت الطبقات ومنع انزلاقها ومنح متانة قصوى للحقيبة", isCorrect: true },
              { text: "لأن الجلد لا يخاط", isCorrect: false },
              { text: "لا نستعمل الغراء", isCorrect: false }
            ],
            feedback: "الحقائب تتعرض لضغط كبير، لذا التثبيت المزدوج هو السر."
          }
        ]
      },
      {
        id: "19-3",
        title: "المسؤولية البيئية في صناعة الأزياء",
        summary: "• أزمة 'الأزياء السريعة' (Fast Fashion) وتأثيرها على البيئة.\n• استخدام الألياف المستدامة (Bamboo, Hemp, Recycled Polyester).\n• تقنيات 'صفر هدر' (Zero Waste) في القص.\n• كيف تصبح مصمماً 'أخلاقياً'؟",
        illustrationDesc: "رسم يوضح كيفية وضع قطع الباترون كالأحجية (Puzzle) لعدم ترك فضلات قماش",
        quiz: [
          {
            question: "ما هو الـ Zero Waste Design؟",
            options: [
              { text: "التصميم بدون رسم", isCorrect: false },
              { text: "تصميم يتم فيه استهلاك 100% من القماش دون ترك أي فضلات صغيرة", isCorrect: true },
              { text: "التصميم المجاني", isCorrect: false },
              { text: "عدم غسل الملابس", isCorrect: false }
            ],
            feedback: "هذا تحدٍ إبداعي كبير يجمع بين الذكاء الهندسي والفني."
          },
          {
            question: "لماذا يعتبر 'البوليستر العادي' ضاراً بالبيئة؟",
            options: [
              { text: "لأنه بلاستيك لا يتحلل بسرعة ويستهلك طاقة كبيرة في صنعه", isCorrect: true },
              { text: "لأنه لون واحد", isCorrect: false },
              { text: "لأنه رخيص", isCorrect: false },
              { text: "ليس ضاراً", isCorrect: false }
            ],
            feedback: "التوجه العالمي الآن هو نحو الألياف الطبيعية والمصنعة بمسؤولية."
          },
          {
            question: "كيف يساهم الخياط في حماية البيئة؟",
            options: [
              { text: "بصناعة ملابس عالية الجودة تدوم لسنوات بدلاً من الملابس الرخيصة سريعة التلف", isCorrect: true },
              { text: "بالتوقف عن الخياطة", isCorrect: false },
              { text: "بشراء المزيد من الأقمشة", isCorrect: false },
              { text: "لا يمكنه المساهمة", isCorrect: false }
            ],
            feedback: "الجودة هي عدو الاستهلاك المفرط وصديقة الأرض."
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
        title: "مشروع التخرج: المجموعة المصغرة (Capsule Collection)",
        summary: "• تصميم وخياطة 3 قطع متكاملة ومترابطة فنياً.\n• كتابة ملف المشروع (رسم، عينات قماش، وصف).\n• تصوير المجموعة بشكل احترافي.\n• عرض الفكرة أمام لجنة أو عبر منصة حرفتي.",
        illustrationDesc: "ثلاث عارضات يرتدين تصاميم مختلفة ولكنها تشترك في لون وقماش وفكرة واحدة",
        quiz: [
          {
            question: "ما هي الـ Capsule Collection؟",
            options: [
              { text: "ملابس للأطباء", isCorrect: false },
              { text: "مجموعة صغيرة من قطع الملابس التي يمكن تنسيقها مع بعضها لخلق عدة إطلالات", isCorrect: true },
              { text: "ملابس في كبسولة", isCorrect: false },
              { text: "لا يوجد مصطلح كهذا", isCorrect: false }
            ],
            feedback: "هذه الطريقة مثالية لبدء ماركة أزياء بموارد محدودة وذكاء عالٍ."
          },
          {
            question: "ما هو معيار تقييم مشروع التخرج؟",
            options: [
              { text: "عدد القطع فقط", isCorrect: false },
              { text: "الإبداع، جودة الخياطة، وترابط الفكرة الفنية بين القطع", isCorrect: true },
              { text: "سرعة الانتهاء منه", isCorrect: false },
              { text: "ثمن القماش المستخدم", isCorrect: false }
            ],
            feedback: "المشروع هو مرآة لشخصيتك كمصمم وخياط محترف."
          },
          {
            question: "بعد إنهاء المشروع، ماذا تصبح؟",
            options: [
              { text: "خياط مبتدئ", isCorrect: false },
              { text: "خياطاً ومصمماً متمكناً جاهزاً لفتح ورشة أو العمل في دار أزياء", isCorrect: true },
              { text: "مجرد هاوٍ", isCorrect: false },
              { text: "لا شيء", isCorrect: false }
            ],
            feedback: "قد قطعت شوطاً طويلاً من الغرز اليدوية إلى التصاميم المعقدة. مبروك!"
          }
        ]
      },
      {
        id: "20-2",
        title: "الخياطة كرسالة اجتماعية واقتصادية",
        summary: "• كيف تساهم في تعليم غيرك هذه الحرفة.\n• الحفاظ على الهوية الوطنية عبر اللباس التقليدي.\n• الابتكارات المستقبلية (الألياف الذكية، الطباعة ثلاثية الأبعاد).\n• نصائح للنجاح المستمر في السوق.",
        illustrationDesc: "رسم لخياط يعلم شاباً جيل جديد، وسط أقمشة تقليدية وتكنولوجيا حديثة",
        quiz: [
          {
            question: "ما هو دور الخياط في المجتمع؟",
            options: [
              { text: "فقط خياطة الملابس", isCorrect: false },
              { text: "حماية التراث، توفير فرص عمل، وتلبية احتياجات الناس للأناقة والستر", isCorrect: true },
              { text: "مجرد عمل تجاري", isCorrect: false },
              { text: "لا دور له", isCorrect: false }
            ],
            feedback: "أنت تلمس حياة الناس في أسعد وأهم لحظاتهم."
          },
          {
            question: "ماذا يعني 'الألياف الذكية'؟",
            options: [
              { text: "أقمشة تحتوي على مستشعرات أو تغير شكلها مع الحرارة", isCorrect: true },
              { text: "أقمشة تقرأ الكتب", isCorrect: false },
              { text: "ملابس تفكر", isCorrect: false },
              { text: "لا توجد أقمشة ذكية", isCorrect: false }
            ],
            feedback: "مستقبل الخياطة يدمج بين التكنولوجيا الفائقة والمهارة اليدوية الصرف."
          },
          {
            question: "سر النجاح الدائم هو:",
            options: [
              { text: "التوقف عن التعلم", isCorrect: false },
              { text: "الشغف، الصبر، ومواكبة كل جديد في عالم الموضة والتقنية", isCorrect: true },
              { text: "المال فقط", isCorrect: false },
              { text: "الحظ", isCorrect: false }
            ],
            feedback: "العلم لا يتوقف والمبدع يبحث دائماً عن الأفضل."
          }
        ]
      },
      {
        id: "20-3",
        title: "حفلة النجاح ومنصة حرفتي",
        summary: "• أنت الآن خبير خياطة من منصة حرفتي.\n• مراجعة مسيرة الـ 20 مستوى والـ 60 درساً.\n• تفعيل رتبة 'رئيس ورشة' في ملفك.\n• هدية ختامية: باترونات حصرية للمتفوقين.",
        illustrationDesc: "إبرة ذهبية تلمع فوق وسادة مخملية ترمز لإتقان الحرفة",
        quiz: [
          {
            question: "ما هي أغلى أداة تمتلكها الآن؟",
            options: [
              { text: "الماكينة الغالية", isCorrect: false },
              { text: "مهارتك وعلمك الذي اكتسبته بالصبر والممارسة", isCorrect: true },
              { text: "المقص الحاد", isCorrect: false },
              { text: "القماش الثمين", isCorrect: false }
            ],
            feedback: "الأدوات قد تضيع أو تتعطل، لكن علمك باقٍ معك أينما كنت."
          },
          {
            question: "كيف ستستخدم ما تعلمته؟",
            options: [
              { text: "سأبدأ مشروعي فوراً", isCorrect: true },
              { text: "سأطور مهاراتي أكثر", isCorrect: true },
              { text: "سأعلم غيري", isCorrect: true },
              { text: "كل ما سبق", isCorrect: true }
            ],
            feedback: "كل الطرق تؤدي للنجاح والتميز. انطلق!"
          },
          {
            question: "كلمتك الأخيرة في هذا المسار التدريبي:",
            options: [
              { text: "شكراً حرفتي، الرحلة بدأت الآن!", isCorrect: true },
              { text: "انتهيت أخيراً", isCorrect: false },
              { text: "سأرتاح لبقية حياتي", isCorrect: false },
              { text: "الخياطة سهلة جداً", isCorrect: false }
            ],
            feedback: "نحن فخورون بك. نراكم في القمة!"
          }
        ]
      }
    ]
  }
];
