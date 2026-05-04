export type Difficulty = "easy" | "medium" | "hard";

export type QuestionType = "multiple_choice" | "true_false" | "matching" | "ordering";

export type Question = {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[]; // For MCQs and Ordering
  pairs?: { left: string; right: string }[]; // For Matching
  correct_answer?: string | string[] | Record<string, string>; 
  points: number;
};

export type Exam = {
  id: string;
  specialization_id: string;
  title: string;
  difficulty: Difficulty;
  duration_minutes: number;
  passing_score: number; // Percentage 0-100
  questions: Question[];
};

export const examsData: Exam[] = [
  {
    id: "exam-it-easy",
    specialization_id: "it-dev",
    title: "اختبار الميول التقنية (سهل)",
    difficulty: "easy",
    duration_minutes: 15,
    passing_score: 60,
    questions: [
      {
        id: "q_1",
        type: "multiple_choice",
        question: "عندما تواجه مشكلة في جهاز الكمبيوتر الخاص بك، ما هي أول خطوة تقوم بها؟",
        options: [
          "أطلب المساعدة من شخص آخر فوراً",
          "أبحث عن الحل في جوجل أو يوتيوب",
          "أترك الجهاز ولا أهتم",
          "أقوم بإطفاء الجهاز وتشغيله كحل أخير"
        ],
        correct_answer: "أبحث عن الحل في جوجل أو يوتيوب",
        points: 10
      },
      {
        id: "q_2",
        type: "true_false",
        question: "هل تستمتع بقضاء ساعات طويلة أمام شاشة الحاسوب للعمل أو التعلم؟",
        options: ["نعم", "لا"],
        correct_answer: "نعم",
        points: 10
      },
      {
        id: "q_3",
        type: "ordering",
        question: "رتب خطوات حل المشكلة البرمجية التالية بالترتيب الصحيح:",
        options: [
          "كتابة الكود",
          "فهم المشكلة المُراد حلها",
          "تجربة البرنامج وإصلاح الأخطاء",
          "تصميم خوارزمية الحل"
        ],
        correct_answer: [
          "فهم المشكلة المُراد حلها",
          "تصميم خوارزمية الحل",
          "كتابة الكود",
          "تجربة البرنامج وإصلاح الأخطاء"
        ],
        points: 20
      }
    ]
  },
  {
    id: "exam-mech-med",
    specialization_id: "auto-mechanic",
    title: "تقييم مهارات الميكانيك (متوسط)",
    difficulty: "medium",
    duration_minutes: 25,
    passing_score: 70,
    questions: [
      {
         id: "m_1",
         type: "multiple_choice",
         question: "إذا لاحظت دخاناً أسود يخرج من عادم السيارة، فهذا غالباً يدل على:",
         options: ["احتراق زيت المحرك", "احتراق وقود زائد", "تسرب في سائل التبريد", "مشكلة في نظام الفرامل"],
         correct_answer: "احتراق وقود زائد",
         points: 10
      },
      {
        id: "m_2",
        type: "true_false",
        question: "يفضل تغيير زيت المحرك عندما يكون المحرك بارداً تماماً.",
        options: ["صحيح", "خطأ"],
        correct_answer: "خطأ",
        points: 10
      },
      {
         id: "m_3",
         type: "matching",
         question: "قم بمطابقة كل أداة ميكانيكية بوظيفتها الأساسية:",
         pairs: [
           { left: "مفتاح العجل", right: "قياس ضغط الإطارات" },
           { left: "مقياس الضغط", right: "فك صواميل الإطارات" },
           { left: "الرافعة (Cric)", right: "رفع السيارة عن الأرض" }
         ],
         correct_answer: {
           "مفتاح العجل": "فك صواميل الإطارات",
           "مقياس الضغط": "قياس ضغط الإطارات",
           "الرافعة (Cric)": "رفع السيارة عن الأرض"
         },
         points: 20
      }
    ]
  },
  {
    id: "exam-data-entry",
    specialization_id: "data-entry",
    title: "ميول العمل المكتبي (سهل)",
    difficulty: "easy",
    duration_minutes: 10,
    passing_score: 50,
    questions: [
      {
        id: "de_1",
        type: "multiple_choice",
        question: "هل تفضل العمل الذي يعتمد على التنظيم والعمل المتكرر على الحاسوب؟",
        options: ["نعم بشدة", "نوعاً ما", "لا، أفضل العمل الميداني"],
        correct_answer: "نعم بشدة",
        points: 10
      }
    ]
  },
  {
    id: "exam-electricity-ind",
    specialization_id: "electricity-ind",
    title: "اختبار أساسيات الكهرباء (متوسط)",
    difficulty: "medium",
    duration_minutes: 15,
    passing_score: 60,
    questions: [
      {
        id: "elec_1",
        type: "true_false",
        question: "يتم قياس شدة التيار الكهربائي بوحدة الأمبير (Ampere).",
        options: ["صحيح", "خطأ"],
        correct_answer: "صحيح",
        points: 10
      }
    ]
  },
  {
    id: "exam-accounting",
    specialization_id: "accounting",
    title: "اختبار الدقة الحسابية والإدارة (متوسط)",
    difficulty: "medium",
    duration_minutes: 15,
    passing_score: 60,
    questions: [
      {
        id: "acc_1",
        type: "multiple_choice",
        question: "إذا كانت إيراداتك 100 دج ومصاريفك 70 دج، ما هي النتيجة المحاسبية؟",
        options: ["خسارة 30 دج", "ربح 30 دج", "ربح 170 دج"],
        correct_answer: "ربح 30 دج",
        points: 10
      }
    ]
  },
  {
    id: "exam-barber-men",
    specialization_id: "barber-men",
    title: "ميول الحلاقة (سهل)",
    difficulty: "easy",
    duration_minutes: 10,
    passing_score: 50,
    questions: [
      {
        id: "bar_1",
        type: "true_false",
        question: "تعقيم أدوات الحلاقة خطوة غير ضرورية إلا إذا طلب الزبون.",
        options: ["صحيح", "خطأ"],
        correct_answer: "خطأ",
        points: 10
      }
    ]
  },
  {
    id: "exam-cooking-pastry",
    specialization_id: "cooking-pastry",
    title: "شغف الطبخ والحلويات (سهل)",
    difficulty: "easy",
    duration_minutes: 15,
    passing_score: 60,
    questions: [
      {
        id: "cook_1",
        type: "ordering",
        question: "رتب خطوات صنع كعكة بسيطة:",
        options: ["خلط المكونات", "إضافة التزيين", "خبزها في الفرن", "تجهيز المقادير"],
        correct_answer: ["تجهيز المقادير", "خلط المكونات", "خبزها في الفرن", "إضافة التزيين"],
        points: 20
      }
    ]
  },
  {
    id: "exam-aluminum-carpentry",
    specialization_id: "aluminum-carpentry",
    title: "ميول العمل اليدوي والتركيب (سهل)",
    difficulty: "easy",
    duration_minutes: 10,
    passing_score: 50,
    questions: [
      {
        id: "alum_1",
        type: "true_false",
        question: "الدقة في أخذ المقاسات قبل القص ليست مهمة لأن الألمنيوم قابل للتمدد.",
        options: ["صحيح", "خطأ"],
        correct_answer: "خطأ",
        points: 10
      }
    ]
  },
  {
    id: "exam-public-works",
    specialization_id: "public-works",
    title: "تقنيات البناء (متوسط)",
    difficulty: "medium",
    duration_minutes: 15,
    passing_score: 60,
    questions: [
      {
        id: "build_1",
        type: "multiple_choice",
        question: "ما هو المكون الأساسي للخرسانة (Béton)؟",
        options: ["الأسمنت فقط", "الأسمنت والرمل والماء والحصى", "الجبس والماء", "الرمل والماء فقط"],
        correct_answer: "الأسمنت والرمل والماء والحصى",
        points: 10
      }
    ]
  },
  {
    id: "exam-hvac",
    specialization_id: "hvac",
    title: "اختبار التبريد والتكييف (متوسط)",
    difficulty: "medium",
    duration_minutes: 15,
    passing_score: 60,
    questions: [
      {
        id: "hvac_1",
        type: "true_false",
        question: "الهدف الرئيسي لمكيف الهواء هو زيادة الرطوبة في الغرفة.",
        options: ["صحيح", "خطأ"],
        correct_answer: "خطأ",
        points: 10
      }
    ]
  },
  {
    id: "exam-fashion-design",
    specialization_id: "fashion-design",
    title: "تقييم حس الأزياء (سهل)",
    difficulty: "easy",
    duration_minutes: 15,
    passing_score: 60,
    questions: [
      {
        id: "fash_1",
        type: "multiple_choice",
        question: "ما هي الخطوة الأولى قبل قص القماش؟",
        options: ["الخياطة مباشرة", "رسم الباترون وتثبيته", "غسل القماش"],
        correct_answer: "رسم الباترون وتثبيته",
        points: 10
      }
    ]
  },
  {
    id: "exam-graphic-design",
    specialization_id: "graphic-design",
    title: "أساسيات التصميم الجرافيكي (متوسط)",
    difficulty: "medium",
    duration_minutes: 20,
    passing_score: 60,
    questions: [
      {
        id: "gd_1",
        type: "multiple_choice",
        question: "ما هو نظام الألوان المستخدم غالباً في الطباعة؟",
        options: ["RGB", "CMYK", "HEX", "HSL"],
        correct_answer: "CMYK",
        points: 10
      }
    ]
  },
  {
    id: "exam-networking",
    specialization_id: "networking",
    title: "اختبار شبكات الحواسيب (صعب)",
    difficulty: "hard",
    duration_minutes: 25,
    passing_score: 70,
    questions: [
      {
        id: "net_1",
        type: "multiple_choice",
        question: "ما هو بروتوكول الإنترنت المسؤول عن إعطاء العناوين التلقائية للأجهزة؟",
        options: ["DNS", "DHCP", "FTP", "HTTP"],
        correct_answer: "DHCP",
        points: 10
      }
    ]
  },
  {
    id: "exam-agriculture",
    specialization_id: "agriculture",
    title: "ميول الفلاحة والزراعة (سهل)",
    difficulty: "easy",
    duration_minutes: 10,
    passing_score: 50,
    questions: [
      {
        id: "agr_1",
        type: "true_false",
        question: "الزراعة داخل البيوت البلاستيكية تسمح بالتحكم في مناخ النباتات وتزيد الإنتاج.",
        options: ["صحيح", "خطأ"],
        correct_answer: "صحيح",
        points: 10
      }
    ]
  },
  {
    id: "exam-plumbing",
    specialization_id: "plumbing",
    title: "اختبار الترصيص البسيط (سهل)",
    difficulty: "easy",
    duration_minutes: 15,
    passing_score: 60,
    questions: [
      {
        id: "plum_1",
        type: "matching",
        question: "طابق المادة باستخدامها في الترصيص:",
        pairs: [
           { left: "مادة التيفلون (Teflon)", right: "منع تسرب المياه في المسننات" },
           { left: "أنابيب PVC", right: "تصريف مياه الصرف الصحي" },
           { left: "أنابيب النحاس", right: "توصيلات الغاز" }
        ],
        correct_answer: {
           "مادة التيفلون (Teflon)": "منع تسرب المياه في المسننات",
           "أنابيب PVC": "تصريف مياه الصرف الصحي",
           "أنابيب النحاس": "توصيلات الغاز"
        },
        points: 20
      }
    ]
  },
  {
    id: "exam-welding",
    specialization_id: "welding",
    title: "أساسيات التلحيم (متوسط)",
    difficulty: "medium",
    duration_minutes: 15,
    passing_score: 60,
    questions: [
      {
        id: "weld_1",
        type: "true_false",
        question: "لبس النظارات الواقية (القناع) أثناء التلحيم ضروري فقط لحماية العين من الشرار وتجاهل الأشعة.",
        options: ["صحيح", "خطأ"],
        correct_answer: "خطأ",
        points: 10
      }
    ]
  }
];
