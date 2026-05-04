import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ProgressProvider } from './context/ProgressContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CraftGrid } from './components/CraftGrid';
import { CraftDetailsModal } from './components/CraftDetailsModal';
import { Onboarding } from './components/Onboarding';
import { Chatbot } from './components/Chatbot';
import { Leaderboard } from './components/Leaderboard';
import { CraftView } from './views/CraftView';
import { LevelView } from './views/LevelView';
import { LessonView } from './views/LessonView';
import { QuizView } from './views/QuizView';
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
      <Leaderboard />
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
    <div className={`min-h-screen bg-background text-foreground selection:bg-green-primary/30 antialiased ${dir === 'rtl' ? 'font-sans' : 'font-mono'}`}>
      <Header />
      
      <AnimatePresence>
        {isOffline && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-red-accent text-white p-2 flex items-center justify-center gap-2 z-[70] sticky top-20"
          >
            <WifiOff size={16} />
            <span className="text-xs font-bold">أنت غير متصل — تعمل المنصة بوضع عدم الاتصال</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/craft/:craftId" element={<CraftView />} />
          <Route path="/craft/:craftId/level/:levelId" element={<LevelView />} />
          <Route path="/craft/:craftId/level/:levelId/lesson/:lessonId" element={<LessonView />} />
          <Route path="/craft/:craftId/level/:levelId/lesson/:lessonId/quiz" element={<QuizView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="bg-secondary/50 dark:bg-dark-card border-t border-border py-20 arabesque-pattern">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-right">
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-end">
              <span className="font-bold text-xl uppercase tracking-wider">تكوين</span>
              <div className="w-10 h-10 green-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl">🇩🇿</div>
            </div>
            <p className="text-sm opacity-60 leading-relaxed">
              المنصة الرسمية للتكوين المهني في الجزائر. نوفر تعليماً مهنياً رقمياً عالي الجودة لتمكين الشباب من دخول سوق العمل.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#" className="hover:text-green-primary">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-green-primary">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-green-primary">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-green-primary">تحميل المناهج</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">اتصل بنا</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li>📧 info@mfep.gov.dz</li>
              <li>📞 021 XXX XXX</li>
              <li>📍 شارع بن مهيدي، الجزائر العاصمة</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold mb-6">المصدر</h1>
            <p className="text-xs opacity-50 italic">المصدر: وزارة التكوين المهني 🇩🇿</p>
            <div className="mt-4 flex gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all justify-end">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs text-black font-bold">MFEP</div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs text-black font-bold">INSFP</div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-20 pt-8 border-t border-border/10 text-center text-xs opacity-40">
          © {new Date().getFullYear()} منصة حرفتي — جميع الحقوق محفوظة لوزارة التكوين والتعليم المهنيين
        </div>
      </footer>

      <Onboarding />
      <Chatbot />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>
          <Router>
            <AppContent />
          </Router>
        </ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
