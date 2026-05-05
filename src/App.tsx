import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ProgressProvider } from './context/ProgressContext';
import { GameProvider } from './contexts/GameContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CraftGrid } from './components/CraftGrid';
import { CraftDetailsModal } from './components/CraftDetailsModal';
import { CraftView } from './views/CraftView';
import { LevelView } from './views/LevelView';
import { LessonView } from './views/LessonView';
import { QuizView } from './views/QuizView';
import PersonalityExperience from './pages/PersonalityExperience';
import { motion, AnimatePresence } from 'motion/react';
import { WifiOff } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedCraft, setSelectedCraft] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelectCraft = (craft: any) => {
    setSelectedCraft(craft);
    setIsModalOpen(true);
  };

  const handleStartLessons = () => {
    setIsModalOpen(false);
    navigate(`/craft/${selectedCraft.id}`);
  };

  return (
    <>
      <Hero />
      <CraftGrid onSelect={handleSelectCraft} />
      <CraftDetailsModal 
        isOpen={isModalOpen} 
        craft={selectedCraft} 
        onClose={() => setIsModalOpen(false)}
        onStart={handleStartLessons}
      />
    </>
  );
};

const AppContent: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const { dir } = useLanguage();

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground selection:bg-green-primary/30 antialiased font-sans`}>
      <Header />
      
      <main className="pb-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/personality-test" element={<PersonalityExperience />} />
          <Route path="/craft/:craftId" element={<CraftView />} />
          <Route path="/craft/:craftId/level/:levelId" element={<LevelView />} />
          <Route path="/craft/:craftId/level/:levelId/lesson/:lessonId" element={<LessonView />} />
          <Route path="/craft/:craftId/level/:levelId/lesson/:lessonId/quiz" element={<QuizView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="bg-slate-950 text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
             <div className="w-8 h-8 rounded bg-green-primary" />
             <span className="font-black text-2xl tracking-tighter uppercase">HIRFATI</span>
          </div>
          <p className="opacity-40 text-sm max-w-md mx-auto">المنصة الذكية للتوجيه المهني والاحترافي. تم تطويرها لخدمة الشباب الجزائري الطموح.</p>
          <div className="pt-8 border-t border-white/5 text-[10px] opacity-20 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Ministry of Vocational Training - Algeria
          </div>
        </div>
      </footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>
          <GameProvider>
            <Router>
              <AppContent />
            </Router>
          </GameProvider>
        </ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
