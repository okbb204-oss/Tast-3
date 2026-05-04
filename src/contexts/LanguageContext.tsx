import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../data/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('hirfati-lang') as Language;
    if (savedLang && ['ar', 'en', 'fr'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('hirfati-lang', lang);
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const t = (key: string, fallback?: string): string => {
    const keys = key as keyof typeof translations['ar'];
    return (translations[language] as any)?.[keys] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
