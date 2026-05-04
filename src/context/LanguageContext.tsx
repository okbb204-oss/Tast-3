import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'ar' | 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.crafts': 'التخصصات',
    'nav.about': 'عن المنصة',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'مرحباً بك في منصة التكوين المهني 🇩🇿',
    'hero.subtitle': 'تعلّم حرفتك بطريقة ذكية وسهلة',
    'hero.cta.start': 'ابدأ الآن',
    'hero.cta.ai': 'حلّل مساري بالذكاء الاصطناعي',
    'crafts.header': 'اكتشف حرفتك المثالية — اختر تخصصك',
    'crafts.search': 'ابحث عن تخصص...',
    'crafts.filter.all': 'الكل',
    'crafts.filter.tech': 'تقني',
    'crafts.filter.services': 'خدمات',
    'crafts.filter.industrial': 'صناعي',
    'crafts.filter.creative': 'إبداعي',
    'progress.label': 'التقدّم الحالي',
    'progress.completed': 'مكتمل',
    'onboarding.skip': 'تخطي',
    'onboarding.next': 'التالي',
    'onboarding.finish': 'ابدأ الآن',
    'modal.source': 'المصدر: وزارة التكوين المهني 🇩🇿',
    'modal.duration': 'مدة التكوين',
    'modal.certificate': 'الشهادة الممنوحة',
    'modal.level': 'المستوى المطلوب',
    'modal.tools': 'الأدوات الأساسية',
    'modal.jobs': 'فرص العمل',
    'modal.start': '🚀 ابدأ الدروس الآن',
    'modal.download': '📥 تحميل PDF',
    'modal.share': '📤 مشاركة',
    'notif.title': 'التنبيهات',
    'leaderboard.title': 'لوحة المتصدرين',
    'leaderboard.all': '🏆 الكل',
    'leaderboard.state': '📍 ولايتي',
    'leaderboard.center': '🏫 مركزي',
    'chatbot.title': 'مساعدك في التكوين المهني',
    'chatbot.placeholder': 'كيف يمكنني مساعدتك اليوم؟',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.crafts': 'Spécialités',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'hero.title': 'Bienvenue sur la plateforme de formation 🇩🇿',
    'hero.subtitle': 'Apprenez votre métier de manière intelligente',
    'hero.cta.start': 'Commencer',
    'hero.cta.ai': 'Analyse IA',
    'crafts.header': 'Découvrez votre métier idéal',
    'crafts.search': 'Rechercher une spécialité...',
    'crafts.filter.all': 'Tout',
    'crafts.filter.tech': 'Technique',
    'crafts.filter.services': 'Services',
    'crafts.filter.industrial': 'Industriel',
    'crafts.filter.creative': 'Créatif',
    'progress.label': 'Progression',
    'progress.completed': 'complété',
    'onboarding.skip': 'Passer',
    'onboarding.next': 'Suivant',
    'onboarding.finish': 'Commencer',
    'modal.source': 'Source: Ministère de la Formation Professionnelle 🇩🇿',
    'modal.duration': 'Durée de formation',
    'modal.certificate': 'Diplôme délivré',
    'modal.level': 'Niveau requis',
    'modal.tools': 'Outils de base',
    'modal.jobs': 'Opportunités',
    'modal.start': '🚀 Commencer les leçons',
    'modal.download': '📥 Télécharger PDF',
    'modal.share': '📤 Partager',
    'notif.title': 'Notifications',
    'leaderboard.title': 'Classement',
    'leaderboard.all': '🏆 Tous',
    'leaderboard.state': '📍 Wilaya',
    'leaderboard.center': '🏫 Centre',
    'chatbot.title': 'Votre assistant de formation',
    'chatbot.placeholder': 'Comment puis-hui vous aider ?',
  },
  en: {
    'nav.home': 'Home',
    'nav.crafts': 'Crafts',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Welcome to the Vocational Training Platform 🇩🇿',
    'hero.subtitle': 'Learn your trade the smart and easy way',
    'hero.cta.start': 'Start Now',
    'hero.cta.ai': 'AI Career Analysis',
    'crafts.header': 'Discover Your Perfect Craft',
    'crafts.search': 'Search specialization...',
    'crafts.filter.all': 'All',
    'crafts.filter.tech': 'Technical',
    'crafts.filter.services': 'Services',
    'crafts.filter.industrial': 'Industrial',
    'crafts.filter.creative': 'Creative',
    'progress.label': 'Current Progress',
    'progress.completed': 'completed',
    'onboarding.skip': 'Skip',
    'onboarding.next': 'Next',
    'onboarding.finish': 'Get Started',
    'modal.source': 'Source: Ministry of Vocational Training 🇩🇿',
    'modal.duration': 'Training Duration',
    'modal.certificate': 'Certificate Issued',
    'modal.level': 'Required Level',
    'modal.tools': 'Basic Tools',
    'modal.jobs': 'Job Opportunities',
    'modal.start': '🚀 Start Lessons',
    'modal.download': '📥 Download PDF',
    'modal.share': '📤 Share',
    'notif.title': 'Notifications',
    'leaderboard.title': 'Leaderboard',
    'leaderboard.all': '🏆 Global',
    'leaderboard.state': '📍 State',
    'leaderboard.center': '🏫 Center',
    'chatbot.title': 'AI Training Assistant',
    'chatbot.placeholder': 'How can I help you today?',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'ar';
  });

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.body.style.setProperty('--direction', dir);
    localStorage.setItem('language', language);
  }, [language, dir]);

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
