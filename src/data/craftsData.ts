import { 
  Laptop, Scissors, Hammer, Scissors as ScissorsIcon, PenTool, Database
} from 'lucide-react';

export type CraftDetails = {
  skills: string[];
  career: string[];
  tasks: string[];
  eduLevel: string;
  trainingStyle: string;
  duration: string;
  requiredDocs: string[];
  primaryTools: string[];
};

export type Craft = {
  id: string;
  name: string;
  icon: any;
  color: string;
  bg: string;
  desc: string;
  details: CraftDetails;
};

export const craftsList: Craft[] = [
  { 
    id: 'data_entry', 
    name: 'عون إدراج المعلومات', 
    icon: Laptop, 
    color: 'text-blue-500', 
    bg: 'bg-blue-500', 
    desc: 'إتقان مهارات إدخال البيانات، معالجة النصوص، وتسيير تدفق المعلومات الرقمية باحترافية.',
    details: { 
      skills: ['سرعة الكتابة على لوحة المفاتيح', 'استخدام برامج الأوفيس (Word, Excel)', 'تسيير قواعد البيانات البسيطة'], 
      career: ['عون إدراج معلومات', 'سكرتير إداري', 'مسير بيانات في مؤسسة'], 
      tasks: ['رقمنة الوثائق الورقية', 'تحديث القواعد المعلوماتية', 'إعداد التقارير الدورية'],
      eduLevel: 'مستوى التاسعة أساسي أو ثانوي',
      trainingStyle: 'تطبيقي على الحاسوب بنسبة 90%',
      duration: '20 مستوى تدريبي',
      requiredDocs: ['نسخة بطاقة التعريف', 'شهادة مدرسية', 'صور شمسية'],
      primaryTools: ['حاسوب مكتبي', 'لوحة مفاتيح سريعة', 'برامج معالجة الوثائق']
    } 
  },
  { 
    id: 'tailoring', 
    name: 'الخياطة', 
    icon: ScissorsIcon, 
    color: 'text-pink-600', 
    bg: 'bg-pink-600', 
    desc: 'تعلم فنون الفَصالة والخياطة وتصميم الألبسة التقليدية والحديثة.',
    details: { 
      skills: ['استخدام ماكينة الخياطة', 'فهم خصائص الأقمشة', 'تقنيات الخياطة اليدوية والآلية'], 
      career: ['خياط محترف', 'مسير ورشة خياطة', 'مصمم ملابس جاهزة'], 
      tasks: ['تفصيل الأقمشة', 'خياطة الألبسة بمختلف أنواعها', 'إصلاح وتعديل الملابس'],
      eduLevel: 'بدون شروط معقدة (موهبة وشغف)',
      trainingStyle: 'عملي ميداني في مشاغل خياطة',
      duration: '20 مستوى تدريبي',
      requiredDocs: ['نسخة بطاقة التعريف', 'صور شمسية'],
      primaryTools: ['ماكينة خياطة صناعية', 'أدوات القياس والمقصات', 'مانيكان']
    } 
  },
  { 
    id: 'aluminum_carpentry', 
    name: 'نجارة الألومنيوم والمواد البلاستيكية', 
    icon: Hammer, 
    color: 'text-slate-500', 
    bg: 'bg-slate-500', 
    desc: 'صناعة وتركيب النوافذ والأبواب والهياكل باستخدام الألومنيوم والـ PVC.',
    details: { 
      skills: ['قص وتجميع مقاطع الألومنيوم', 'تركيب الزجاج والإكسسوارات', 'قراءة المخططات التقنية'], 
      career: ['نجار ألومنيوم متخصص', 'مركب واجهات زجاجية', 'مقاول أشغال ألومنيوم'], 
      tasks: ['صناعة النوافذ والأبواب', 'تجهيز الهياكل المعدنية الخفيفة', 'أعمال العزل والتركيب الميداني'],
      eduLevel: 'مستوى تعليم أساسي',
      trainingStyle: 'تطبيقي في ورشات متخصصة',
      duration: '20 مستوى تدريبي',
      requiredDocs: ['نسخة بطاقة التعريف', 'فحص طبي', 'صور شخصية'],
      primaryTools: ['آلة قص الألومنيوم', 'مثقاب كهربائي', 'أدوات القياس الدقيقة']
    } 
  },
  { 
    id: 'hair_styling', 
    name: 'صبغ الشعر وإزالة الصبغة والتجعيد', 
    icon: Scissors, 
    color: 'text-rose-400', 
    bg: 'bg-rose-400', 
    desc: 'احتراف تقنيات تلوين الشعر، العناية الكيميائية، والتصفيف المتقدم.',
    details: { 
      skills: ['خلط وتطبق الألوان', 'تقنيات سحب اللون الآمنة', 'تجعيد وتمليس الشعر كيميائياً'], 
      career: ['أخصائي تلوين شعر', 'مسير صالون تجميل', 'خبير عناية بالشعر'], 
      tasks: ['صبغ الشعر وبراغيث الضوء', 'تطبيق الكيراتين والبروتين', 'استشارات جمالية للشعر'],
      eduLevel: 'مستوى أساسي (إعدادي)',
      trainingStyle: 'عملي على نماذج حقيقية',
      duration: '20 مستوى تدريبي',
      requiredDocs: ['ملف طبي (حساسية)', 'نسخة بطاقة التعريف'],
      primaryTools: ['أدوات خلط الصبغة', 'مجفف شعر احترافي', 'أدوات الحماية الكيميائية']
    } 
  },
  { 
    id: 'fashion_pattern', 
    name: 'إنجاز النماذج في صناعة الألبسة', 
    icon: PenTool, 
    color: 'text-purple-500', 
    bg: 'bg-purple-500', 
    desc: 'بناء القوالب (الباترونات) الأساسية والمتقدمة وتطوير نماذج الملابس.',
    details: { 
      skills: ['رسم الباترون الهندسي', 'تطوير المقاسات (Grading)', 'تحويل التصاميم إلى نماذج قابلة للتنفيذ'], 
      career: ['صانع نماذج (Pattern Maker)', 'مطور منتجات ملابس', 'تقني في مكتب دراسات الأزياء'], 
      tasks: ['رسم القوالب الورقية والكرتونية', 'ملاءمة النماذج مع جسم الإنسان', 'تحسين استهلاك القماش'],
      eduLevel: 'ثانوية عامة أو تقنية لباقة الرسم',
      trainingStyle: 'نظري هندسي + تطبيقي مكتبي',
      duration: '20 مستوى تدريبي',
      requiredDocs: ['شهادة مدرسية', 'نسخة التعريف', 'صور شمسية'],
      primaryTools: ['أدوات رسم هندسي', 'ورق باترون متخصص', 'برامج CAD للأزياء']
    } 
  },
  { 
    id: 'ms_access', 
    name: 'أكساس ACCESS', 
    icon: Database, 
    color: 'text-red-700', 
    bg: 'bg-red-700', 
    desc: 'تصميم وإدارة قواعد البيانات المكتبية باستخدام Microsoft Access لتسيير المعلومات.',
    details: { 
      skills: ['بناء الجداول والعلاقات', 'إنشاء الاستعلامات (Queries)', 'تصميم النماذج والتقارير الاحترافية'], 
      career: ['مسير قواعد بيانات مكتبية', 'محلل بيانات إدارية', 'مطور تطبيقات Access'], 
      tasks: ['نظم أرشفة البيانات', 'إنشاء واجهات إدخال البيانات', 'استخراج تقارير إحصائية متقدمة'],
      eduLevel: 'ثانوي أو جامعي (إعلام آلي)',
      trainingStyle: 'تطبيقي 100% على برمجيات Microsoft',
      duration: '20 مستوى تدريبي',
      requiredDocs: ['نسخة بطاقة التعريف', 'شهادة مدرسية'],
      primaryTools: ['Microsoft Access', 'حزمة Office كاملة', 'منصات تدريب رقمية']
    } 
  }
];

// Types
export type Question = {
  id: string;
  text: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
};

export type Tool = {
  name: string;
  usage: string;
  whenToUse: string;
};

export type LessonData = {
  lessonId: string;
  title: string;
  objectives: string[];
  content: string;
  tools: Tool[];
  scenario: string;
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
};

export type LevelData = {
  level: number;
  lessons: LessonData[];
};
