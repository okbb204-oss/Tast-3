import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowLeft, RefreshCcw, Award, Star, History } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';
import { fashionBeginner } from '../data/curriculum/fashion_beginner';
import { tailoringBeginner } from '../data/curriculum/tailoring_beginner';
import { aluminumBeginner } from '../data/curriculum/aluminum_beginner';
import { hairBeginner } from '../data/curriculum/hair_beginner';
import { dataEntryBeginner } from '../data/curriculum/data_entry_beginner';
import { msAccessBeginner } from '../data/curriculum/ms_access_beginner';

const curricula: Record<string, any[]> = {
  fashion: fashionBeginner,
  tailoring: tailoringBeginner,
  aluminum: aluminumBeginner,
  hair: hairBeginner,
  data_entry: dataEntryBeginner,
  ms_access: msAccessBeginner
};

export const QuizView: React.FC = () => {
  const { craftId, levelId, lessonId } = useParams<{ craftId: string; levelId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { completeLesson, progress } = useProgress();
  const { t } = useLanguage();

  const levelNumber = parseInt(levelId || '1');
  const key = `craft_${craftId}_level_${levelId}`;

  // Resolve level data
  let levelData = curricula[craftId || '']?.find(l => l.id === levelNumber);
  if (!levelData && progress.aiCurricula[key]) {
    levelData = progress.aiCurricula[key];
  }

  const lesson = levelData?.lessons.find((l: any) => l.id.toString() === lessonId?.toString());

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const rawQuestions = lesson?.quiz || lesson?.questions || [];
  if (!lesson || rawQuestions.length === 0) return <div className="p-20 text-center">الاختبار غير متوفر</div>;

  const currentQuestion = rawQuestions[currentQuestionIndex];
  const questionText = currentQuestion.question || currentQuestion.text;
  const feedbackText = currentQuestion.feedback || currentQuestion.explanation;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = rawQuestions[currentQuestionIndex].options[index].isCorrect;
    if (isCorrect) setScore(s => s + 1);

    // Auto-advance after 1.5 seconds
    setTimeout(() => {
      if (currentQuestionIndex < rawQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        // Finalize
        const finalScore = score + (isCorrect ? 1 : 0);
        const isPassed = finalScore >= Math.ceil(rawQuestions.length * 0.7);
        
        completeLesson(craftId!, levelNumber, lessonId!, {
          completed: isPassed,
          score: `${finalScore}/${rawQuestions.length}`,
          date: new Date().toLocaleDateString('ar-DZ'),
          timeSpent: '5min',
          rating: 5
        });

        if (isPassed) {
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#006233', '#C9A84C', '#FFFFFF']
          });
        }
        setShowResults(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const isPassed = score === lesson.quiz.length;
    return (
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[80vh]">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-card p-12 rounded-[3rem] border border-border shadow-2xl text-center max-w-lg w-full space-y-8 relative overflow-hidden"
        >
          {isPassed && <div className="absolute inset-0 bg-green-primary/5 arabesque-pattern" />}
          
          <div className="relative space-y-6">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-5xl shadow-xl ${isPassed ? 'bg-green-primary text-white' : 'bg-orange-500 text-white'}`}>
               {isPassed ? <Award size={48} /> : <History size={48} />}
            </div>

            <div className="space-y-2">
              <h2 className="text-4xl font-bold">{isPassed ? 'مبروك! اجتزت الاختبار' : 'لم يحالفك الحظ'}</h2>
              <p className="text-lg opacity-60">{isPassed ? 'أنت الآن مستعد للدرس التالي.' : 'لا تقلق، يمكنك المحاولة مجدداً.'}</p>
            </div>

            <div className="p-8 bg-secondary/50 rounded-3xl border border-border">
               <div className="text-sm font-bold opacity-50 uppercase mb-2">النتيجة النهائية</div>
               <div className={`text-6xl font-black ${isPassed ? 'text-green-primary' : 'text-orange-500'}`}>{score}/{rawQuestions.length}</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {isPassed ? (
                 <button onClick={() => navigate(`/craft/${craftId}/level/${levelId}`)} className="btn-primary py-5 sm:col-span-2">
                    العودة للمستوى
                 </button>
               ) : (
                 <>
                   <button onClick={resetQuiz} className="btn-danger-retry py-5">
                      <RefreshCcw size={20} /> إعادة المحاولة
                   </button>
                   <button onClick={() => navigate(`/craft/${craftId}/level/${levelId}/lesson/${lessonId}`)} className="btn-secondary py-5">
                      مراجعة الدرس
                   </button>
                 </>
               )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl space-y-12">
      {/* Header */}
      <div className="flex items-center justify-between">
         <button onClick={() => navigate(-1)} className="p-3 bg-secondary rounded-2xl hover:bg-border transition-all">
            <ArrowLeft size={24} />
         </button>
         <div className="text-center">
            <div className="text-xs font-bold opacity-40 uppercase">اختبار الدرس</div>
            <div className="font-bold">سؤال {currentQuestionIndex + 1} من {rawQuestions.length}</div>
         </div>
         <div className="w-12 h-12 bg-green-primary/10 text-green-primary rounded-xl flex items-center justify-center font-bold">
            {score}/{rawQuestions.length}
         </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
         <motion.div 
           initial={{ width: 0 }}
           animate={{ width: `${((currentQuestionIndex + 1) / rawQuestions.length) * 100}%` }}
           className="h-full green-gradient"
         />
      </div>

      {/* Question Card */}
      <div className="space-y-8">
         <motion.h2 
           key={currentQuestionIndex}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="text-2xl md:text-4xl font-black leading-tight text-right tracking-tight"
         >
            {questionText}
         </motion.h2>

         <div className="grid gap-4">
            {currentQuestion.options.map((option: any, index: number) => {
               const isSelected = selectedOption === index;
               const isCorrect = option.isCorrect;
               
               let variantClass = "bg-white dark:bg-dark-card border-border hover:border-green-primary";
               if (isAnswered) {
                  if (isSelected) {
                     variantClass = isCorrect ? "bg-green-primary/10 border-green-primary" : "bg-red-500/10 border-red-500";
                  } else if (isCorrect) {
                     variantClass = "bg-green-primary/10 border-green-primary";
                  }
               }

               return (
                  <motion.button
                    key={index}
                    whileHover={!isAnswered ? { scale: 1.02 } : {}}
                    whileTap={!isAnswered ? { scale: 0.98 } : {}}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isAnswered}
                    className={`p-6 rounded-[2rem] border-2 text-right transition-all flex items-center justify-between gap-4 font-bold text-lg ${variantClass}`}
                  >
                     <div className="flex items-center gap-3">
                        {isAnswered && (
                           isCorrect ? <Check size={20} className="text-green-primary font-bold" /> : (isSelected ? <X size={20} className="text-red-500" /> : null)
                        )}
                        {!isAnswered && (
                           <div className={`w-6 h-6 rounded-full border-2 ${selectedOption === index ? 'border-green-primary bg-green-primary' : 'border-border'}`} />
                        )}
                     </div>
                     <span className="flex-1">{option.text}</span>
                  </motion.button>
               );
            })}
         </div>
      </div>

      {/* Feedback Section */}
      <AnimatePresence>
         {isAnswered && (
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
             className="pt-8"
           >
              <div className={`p-8 rounded-[2.5rem] luxury-card flex gap-4 ${currentQuestion.options[selectedOption!].isCorrect ? 'bg-green-primary/5 text-green-primary' : 'bg-red-500/5 text-red-500'}`}>
                 <div className="shrink-0 p-3 bg-white dark:bg-white/10 rounded-2xl shadow-sm">
                    {currentQuestion.options[selectedOption!].isCorrect ? <Star size={24} /> : <X size={24} />}
                 </div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">التفسير المهني</p>
                    <p className="text-sm font-medium leading-[1.8]">{feedbackText}</p>
                 </div>
              </div>
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
};
