import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Sparkles, Globe, ChevronDown, BrainCircuit } from "lucide-react";
import { useTheme } from "@/src/contexts/ThemeContext";
import { useGame } from "@/src/contexts/GameContext";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { AnimatePresence, motion } from "motion/react";
import { Language } from "@/src/data/translations";
import { BackgroundScene } from "./3d/BackgroundScene";
import { ThemeToggle } from "./ThemeToggle";

export function Layout() {
  const { theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-neon-blue selection:text-black">
      <BackgroundScene />
      <ThemeToggle />

      <header className="sticky top-0 z-40 glass-card mx-4 mt-4 rounded-2xl transition-all duration-500">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="bg-foreground text-background p-2 rounded-xl transition-all duration-300 shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <BrainCircuit className="w-6 h-6" />
            </motion.div>
            <h1 className="text-2xl font-bold tracking-tighter text-foreground">
              HIRFATI<span className="font-light text-muted-foreground ml-1 group-hover:text-neon-blue transition-colors">AI</span>
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-300 hover:bg-white/5 text-muted-foreground hover:text-foreground"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-bold uppercase hidden sm:inline-block">{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 right-0 glass-card p-2 rounded-xl min-w-[120px] shadow-2xl z-50 flex flex-col"
                  >
                    {[
                      { code: 'ar', label: 'العربية' },
                      { code: 'en', label: 'English' },
                      { code: 'fr', label: 'Français' }
                    ].map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangChange(lang.code as Language)}
                        className={`px-4 py-2 text-sm text-start rounded-lg hover:bg-white/10 font-medium transition-colors ${language === lang.code ? 'text-neon-green' : ''}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-start container mx-auto px-4 py-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="w-full max-w-4xl"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-6 text-center text-muted-foreground text-xs font-medium tracking-widest uppercase opacity-50">
        © {new Date().getFullYear()} HIRFATI AI • Vocational Excellence
      </footer>
    </div>
  );
}

