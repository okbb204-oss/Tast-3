import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Moon, Sun, Globe, Menu, X, ChevronDown, CheckCircle2, Award, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage, Language } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, dir } = useLanguage();
  const { progress, getProgressForCraft } = useProgress();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const notifications = [
    { id: 1, text: 'لم تكمل درسك اليوم — تابع من حيث توقفت', icon: <Zap size={16} className="text-gold" />, time: '2h ago', unread: true },
    { id: 2, text: 'أنهيت المستوى 5! جاهز للمراجعة؟', icon: <Award size={16} className="text-green-light" />, time: '1d ago', unread: false },
    { id: 3, text: 'تمت إضافة تخصص جديد: ميكانيك النظارات', icon: <CheckCircle2 size={16} className="text-green-primary" />, time: '3d ago', unread: false },
  ];

  const currentCraftProgress = progress.currentCraftId ? getProgressForCraft(progress.currentCraftId) : 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          onClick={() => navigate('/')}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="w-12 h-12 green-gradient rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl transition-transform group-hover:rotate-12">
            H
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-2xl leading-none tracking-tighter uppercase whitespace-nowrap">
              HIRFATI <span className="text-green-primary">AI</span>
            </h1>
            <p className="text-[10px] opacity-40 tracking-[0.3em] uppercase font-mono mt-1">Vocational Intelligence</p>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {['crafts', 'about'].map((item) => (
            <button 
              key={item}
              onClick={() => navigate(`/#${item}`)}
              className="font-bold text-xs uppercase tracking-widest hover:text-green-primary transition-all opacity-60 hover:opacity-100"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Language */}
          <button 
            onClick={() => setLanguage(language === 'ar' ? 'fr' : 'ar')}
            className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center font-black text-xs hover:scale-110 transition-all uppercase"
          >
            {language}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {['home', 'crafts', 'about', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => {
                    navigate(item === 'home' ? '/' : `/#${item}`);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-right font-bold py-3 border-b border-border last:border-0 hover:text-green-primary transition-colors"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
