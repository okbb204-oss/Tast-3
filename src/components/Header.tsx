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
    <header className="fixed top-0 left-0 right-0 z-[60] bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 green-gradient rounded-xl flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-lg border-2 border-white/20 group-hover:scale-110 transition-transform">
            H
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-lg sm:text-xl leading-tight tracking-tighter">
              HIRFATI <span className="text-green-primary italic">AI</span>
            </h1>
            <p className="text-[8px] sm:text-[10px] opacity-70 tracking-widest uppercase font-mono">Vocational Excellence</p>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {['home', 'crafts', 'about', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => navigate(item === 'home' ? '/' : `/#${item}`)}
              className={`font-semibold text-sm hover:text-green-primary transition-colors relative group ${location.pathname === '/' ? 'text-foreground' : 'text-foreground/60'}`}
            >
              {t(`nav.${item}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-primary transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-all relative"
            >
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-accent rounded-full border-2 border-background" />
            </button>
            
            <AnimatePresence>
              {isNotifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className={`absolute top-full mt-4 ${dir === 'rtl' ? 'left-0' : 'right-0'} w-[300px] bg-card border border-border rounded-2xl shadow-2xl p-2 overflow-hidden`}
                >
                  <div className="p-3 border-b border-border flex justify-between items-center">
                    <span className="font-bold text-sm">{t('notif.title')}</span>
                    <button className="text-[10px] text-green-primary hover:underline">Mark all read</button>
                  </div>
                  <div className="max-h-[350px] overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className={`p-3 flex gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer rounded-xl border-l-4 ${n.unread ? 'border-green-primary font-bold' : 'border-transparent opacity-80'}`}>
                        <div className="mt-1">{n.icon}</div>
                        <div className="flex-1">
                          <p className="text-xs leading-relaxed">{n.text}</p>
                          <span className="text-[10px] opacity-50">{n.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-all"
            >
              <Globe size={22} />
              <span className="text-sm font-bold hidden sm:inline">{language.toUpperCase()}</span>
              <ChevronDown size={14} className={`transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className={`absolute top-full mt-4 ${dir === 'rtl' ? 'left-0' : 'right-0'} w-40 bg-card border border-border rounded-2xl shadow-2xl p-2 overflow-hidden`}
                >
                  {[
                    { code: 'ar', name: 'العربية', flag: '🇩🇿' },
                    { code: 'fr', name: 'Français', flag: '🇫🇷' },
                    { code: 'en', name: 'English', flag: '🇬🇧' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl hover:bg-green-primary/10 transition-colors ${language === lang.code ? 'text-green-primary font-bold bg-green-primary/5' : ''}`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </span>
                      {language === lang.code && <CheckCircle2 size={14} />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-14 sm:w-16 h-8 bg-black/5 dark:bg-white/10 rounded-full p-1 relative transition-colors"
          >
            <motion.div 
              animate={{ x: theme === 'light' ? 0 : (dir === 'rtl' ? -32 : 32) }}
              className="w-6 h-6 rounded-full bg-white dark:bg-dark-accent shadow-md flex items-center justify-center"
            >
              {theme === 'light' ? <Sun size={14} className="text-gold" /> : <Moon size={14} className="text-dark-bg" />}
            </motion.div>
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

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 relative overflow-hidden group cursor-help">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${currentCraftProgress}%` }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-full green-gradient relative shine-effect"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
        
        {progress.currentCraftId && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-[10px] font-black text-green-primary bg-white/90 dark:bg-dark-card/90 px-3 py-0.5 rounded-full shadow-2xl border border-green-primary/20">
              {progress.currentCraftId.replace(/_/g, ' ').toUpperCase()} — {currentCraftProgress}% مكتمل
            </span>
          </div>
        )}
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
