import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "@/src/contexts/GameContext";
import { Check, X, ArrowLeft, ArrowRight, Award, RefreshCcw } from "lucide-react";
import { curriculumData } from "@/src/data/curriculum";

export default function QuizPage() {
  const { craftId, levelId, lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson } = useGame();
  
  const levId = parseInt(levelId || "1");
  const lid = parseInt(lessonId || "1");

  // Fallback questions if data is missing
  const lesson = curriculumData[craftId || ""]?.[levId - 1]?.lessons?.[lid - 1] || {
    title: "اختبار تجريبي",
    quiz: [
      {
        question: "سؤال تجريبي 1: ما هو المبدأ الأساسي لهذا المجال؟",
        options: [
          { text: "الخيار الأول الصحيح", isCorrect: true },
          { text: "الخيار الثاني", isCorrect: false },
          { text: "الخيار الثالث", isCorrect: false },
          { text: "الخيار الرابع", isCorrect: false },
        ],
        feedback: "أحسنت! هذا هو المبدأ الأساسي فعلاً."
      },
      {
        question: "سؤال تجريبي 2: كيف يتم استخدام الأداة الرئيسية؟",
        options: [
          { text: "بشكل يدوي", isCorrect: false },
          { text: "بشكل احترافي", isCorrect: true },
          { text: "بشكل عشوائي", isCorrect: false },
          { text: "بشكل مؤقت", isCorrect: false },
        ],
        feedback: "الاحترافية هي المفتاح في هذا العمل."
      },
      {
        question: "سؤال تجريبي 3: ما هي أهمية السلامة المهنية؟",
        options: [
          { text: "ثانوية", isCorrect: false },
          { text: "عادية", isCorrect: false },
          { text: "فائقة الأهمية", isCorrect: true },
          { text: "غير ضرورية", isCorrect: false },
        ],
        feedback: "السلامة تأتي دائماً أولاً في كل المهن."
      }
    ]
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (lesson.quiz[currentQuestion].options[index].isCorrect) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < lesson.quiz.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      if (score >= 2) {
        completeLesson(craftId || "", levId, lid);
      }
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showResult) {
    const passed = score >= 2;
    return (
      <div className="w-full max-w-2xl mx-auto py-12 px-6 text-center" dir="rtl">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="bg-card border rounded-3xl p-10 shadow-xl"
        >
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${passed ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
             {passed ? <Award className="w-12 h-12" /> : <X className="w-12 h-12" />}
          </div>
          <h2 className="text-4xl font-black mb-2">{passed ? 'أحسنت المسيرة!' : 'حاول مرة أخرى'}</h2>
          <p className="text-xl text-muted-foreground mb-8">لقد حصلت على {score} من أصل {lesson.quiz.length}</p>
          
          <div className="flex flex-col gap-4">
            {passed ? (
              <button 
                onClick={() => navigate(`/craft/${craftId}`)}
                className="h-16 bg-primary text-primary-foreground rounded-2xl font-black text-xl shadow-lg flex items-center justify-center gap-3"
              >
                <span>العودة للمسار</span>
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </button>
            ) : (
              <button 
                onClick={handleRetry}
                className="h-16 bg-muted text-muted-foreground rounded-2xl font-black text-xl flex items-center justify-center gap-3"
              >
                <span>إعادة الاختبار</span>
                <RefreshCcw className="w-6 h-6" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  const question = lesson.quiz[currentQuestion];

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4" dir="rtl">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-muted-foreground">السؤال {currentQuestion + 1} من {lesson.quiz.length}</h3>
        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: `${((currentQuestion + 1) / lesson.quiz.length) * 100}%` }}
             className="h-full bg-primary"
           />
        </div>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="space-y-8"
      >
        <h2 className="text-2xl font-black leading-tight">{question.question}</h2>

        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = option.isCorrect;
            const showCorrect = isAnswered && isCorrect;
            const showWrong = isAnswered && isSelected && !isCorrect;

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleAnswer(idx)}
                className={`p-6 rounded-2xl border-2 text-right transition-all flex items-center justify-between ${
                  showCorrect ? 'border-emerald-500 bg-emerald-500/10' :
                  showWrong ? 'border-rose-500 bg-rose-500/10' :
                  isSelected ? 'border-primary bg-primary/5' :
                  'border-border hover:border-primary/50'
                }`}
              >
                <span className="font-bold text-lg">{option.text}</span>
                {showCorrect && <Check className="w-6 h-6 text-emerald-500" />}
                {showWrong && <X className="w-6 h-6 text-rose-500" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="p-6 bg-muted/30 rounded-2xl border border-dashed"
            >
              <p className="font-bold text-muted-foreground mb-4 italic">"{question.feedback}"</p>
              <button 
                onClick={handleNext}
                className="w-full h-14 bg-foreground text-background rounded-xl font-black"
              >
                {currentQuestion < lesson.quiz.length - 1 ? 'السؤال التالي' : 'عرض النتيجة'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
