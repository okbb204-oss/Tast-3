export type Trait = 'logical' | 'creative' | 'practical' | 'social' | 'computer' | 'hands_on' | 'academic' | 'vocational';

export type PersonalityQuestion = {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    icon?: string;
    traits: Partial<Record<Trait, number>>;
  }[];
};

export const personalityQuestions: PersonalityQuestion[] = [
  {
    id: 'age',
    question: 'ما هي فئتك العمرية؟',
    options: [
      { id: 'opt1', text: 'أقل من 16 سنة', traits: { vocational: 1, academic: 1 } },
      { id: 'opt2', text: 'بين 16 و 20 سنة', traits: { vocational: 2, academic: 2 } },
      { id: 'opt3', text: 'بين 21 و 25 سنة', traits: { vocational: 3, academic: 3 } },
      { id: 'opt4', text: 'أكثر من 25 سنة', traits: { vocational: 4, academic: 4 } },
    ]
  },
  {
    id: 'education',
    question: 'ما هو مستواك التعليمي الحالي؟',
    options: [
      { id: 'opt1', text: 'متوسط أو أقل', traits: { vocational: 5, practical: 3, academic: 1 } },
      { id: 'opt2', text: 'ثانوي / بكالوريا', traits: { vocational: 4, practical: 2, academic: 3 } },
      { id: 'opt3', text: 'تكوين مهني', traits: { vocational: 6, hands_on: 4, academic: 1 } },
      { id: 'opt4', text: 'جامعي', traits: { academic: 6, logical: 3, vocational: 1 } },
    ]
  },
  {
    id: 'work_style',
    question: 'كيف تفضل أن تقضي يوم عملك؟',
    options: [
      { id: 'opt1', text: 'أمام شاشة الحاسوب، أركز وأحلل', traits: { computer: 5, logical: 3 } },
      { id: 'opt2', text: 'أعمل بيدي، وأصنع أو أصلح الأشياء', traits: { practical: 5, hands_on: 5 } },
      { id: 'opt3', text: 'أتواصل مع الناس وأدير الأعمال', traits: { social: 5, practical: 2 } },
      { id: 'opt4', text: 'أرسم، أبتكر، وأصمم أفكاراً جديدة', traits: { creative: 5, computer: 2 } },
    ]
  },
  {
    id: 'problem_solving',
    question: 'عندما تواجه مشكلة معقدة، ماذا تفعل أولاً؟',
    options: [
      { id: 'opt1', text: 'أبحث عن المنطق والسبب الجذري تقنياً', traits: { logical: 5, computer: 2 } },
      { id: 'opt2', text: 'أجرب طرقاً إبداعية غير تقليدية للحل', traits: { creative: 5 } },
      { id: 'opt3', text: 'أُشمر عن ساعدي وأبدأ بإصلاحها فوراً', traits: { practical: 4, hands_on: 4 } },
      { id: 'opt4', text: 'أستشير الفريق ونتعاون معاً للحل', traits: { social: 5 } },
    ]
  },
  {
    id: 'hobbies',
    question: 'في وقت فراغك، أي من هذه الأنشطة تجذبك أكثر؟',
    options: [
      { id: 'opt1', text: 'تفكيك وإصلاح الأجهزة المعطلة', traits: { logical: 3, practical: 3, hands_on: 5 } },
      { id: 'opt2', text: 'تعلم تقنية جديدة أو القراءة', traits: { computer: 4, logical: 4, academic: 2 } },
      { id: 'opt3', text: 'الطبخ، الخياطة، أو الأعمال اليدوية', traits: { creative: 3, practical: 4, hands_on: 4 } },
      { id: 'opt4', text: 'الأنشطة الاجتماعية وريادة الأعمال', traits: { social: 5, practical: 2 } },
    ]
  },
  {
    id: 'environment',
    question: 'ما هي بيئة العمل المثالية لك؟',
    options: [
      { id: 'opt1', text: 'مكتب هادئ ومريح للمبرمجين والمصممين', traits: { computer: 4, logical: 2, creative: 2 } },
      { id: 'opt2', text: 'ورشة عمل تعج بالحركة والأدوات', traits: { practical: 5, hands_on: 5 } },
      { id: 'opt3', text: 'مطبخ احترافي أو مشغل', traits: { creative: 3, practical: 4, hands_on: 4 } },
      { id: 'opt4', text: 'لقاء العملاء والعمل الميداني النشط', traits: { social: 5, practical: 3 } },
    ]
  }
];

export const craftTraitsMapping: Record<string, Record<Trait, number>> = {
  'data_entry': { computer: 5, logical: 4, creative: 1, practical: 2, social: 1, hands_on: 1, academic: 3, vocational: 3 },
  'tailoring': { computer: 1, logical: 2, creative: 5, practical: 4, social: 1, hands_on: 5, academic: 1, vocational: 5 },
  'aluminum_carpentry': { computer: 0, logical: 3, creative: 2, practical: 5, social: 1, hands_on: 5, academic: 1, vocational: 5 },
  'hair_styling': { computer: 0, logical: 1, creative: 5, practical: 4, social: 5, hands_on: 5, academic: 0, vocational: 5 },
  'fashion_pattern': { computer: 3, logical: 4, creative: 5, practical: 4, social: 1, hands_on: 4, academic: 3, vocational: 4 },
  'ms_access': { computer: 5, logical: 5, creative: 1, practical: 2, social: 1, hands_on: 0, academic: 4, vocational: 3 },
};

export function calculateBestCrafts(userTraits: Record<Trait, number>) {
  const scores: { id: string; score: number }[] = [];

  for (const [craftId, traits] of Object.entries(craftTraitsMapping)) {
    let score = 0;
    // Dot product of user traits and craft traits
    for (const [trait, weight] of Object.entries(traits)) {
      score += (userTraits[trait as Trait] || 0) * weight;
    }
    // Normalize slightly
    scores.push({ id: craftId, score });
  }

  // Sort descending
  scores.sort((a, b) => b.score - a.score);
  return scores;
}
