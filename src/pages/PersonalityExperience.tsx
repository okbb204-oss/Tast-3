import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { analyzePersonality } from '../lib/gemini';
import { Sparkles, ArrowLeft, Loader2, Brain, Star, Send, User, BookOpen, Heart, Activity, CheckCircle, ChevronRight, Trophy } from 'lucide-react';
import { LevelData } from '../data/craftsData';

type AssessmentData = {
  age: string;
  gender: string;
  education: string;
  interests: string;
  skills: string;
  answers: string[];
};

const psychometricQuestions = [
  "إذا تعطل شيء في منزلك، هل تفضل محاولة إصلاحه بنفسك أم الاتصال بمختص فوراً؟",
  "هل تستمتع بالمهام التي تتطلب ساعات طويلة من التركيز والدقة في التفاصيل الصغيرة؟",
  "هل أنت مستعد للعمل في بيئات قد تكون متعبة جسدياً أو في الهواء الطلق؟",
  "هل تفضل اتباع تعليمات وخطوات محددة بدقة، أم تحب حرية الابتكار من الصفر؟",
  "ما هو شعورك تجاه تعلم أدوات رقمية وتطبيقات جديدة لمساعدتك في عملك؟"
];

export default function PersonalityExperience() {
  const navigate = useNavigate();
  const { setPersonalityResult } = useGame();
  const { t } = useLanguage();
  const { setLevelProgress } = useProgress();
  
  const [step, setStep] = useState<'intro' | 'info' | 'interests' | 'questions' | 'calculating' | 'result'>('intro');
  const [formData, setFormData] = useState<AssessmentData>({
    age: '',
    gender: '',
    education: '',
    interests: '',
    skills: '',
    answers: []
  });
  const [qIndex, setQIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ craft: string; reason: string; curriculumSample: LevelData } | null>(null);

  const updateFormData = (key: keyof AssessmentData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handlePsychometricAnswer = (answer: string) => {
    const newAnswers = [...formData.answers, answer];
    setFormData(prev => ({ ...prev, answers: newAnswers }));
    
    if (qIndex < psychometricQuestions.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      performAnalysis(newAnswers);
    }
  };

  const performAnalysis = async (finalAnswers: string[]) => {
    setStep('calculating');
    setLoading(true);
    try {
      const data = await analyzePersonality({ ...formData, answers: finalAnswers });
      setResult(data);
      setStep('result');
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء التحليل. يرجى المحاولة مرة أخرى.");
      setStep('intro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[85vh] px-4 py-12 bg-slate-50 dark:bg-dark-bg transition-colors duration-500">
      <AnimatePresence mode="wait">
        
        {step === 'intro' && (
          <motion.div 
            key="intro" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center space-y-10 max-w-4xl"
          >
            <div className="mx-auto w-32 h-32 green-gradient text-white flex items-center justify-center rounded-[2.5rem] mb-8 shadow-2xl relative border-4 border-white">
               <Brain className="w-16 h-16" />
               <div className="absolute -top-2 -right-2 bg-gold p-2 rounded-full shadow-lg animate-bounce">
                  <Sparkles size={20} />
               </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tighter">
                خبير التوجيه المهني <span className="text-green-primary italic">الذكي</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
                مرحباً بك في منصة <span className="font-bold text-foreground">HIRFATI</span>. أنا هنا لأحلل شخصيتك وميولك لأرشدك نحو الحرفة المثالية التي تضمن لك مستقبلاً مهنياً ناجحاً.
              </p>
            </div>
            <button 
              onClick={() => setStep('info')}
              className="mt-12 px-12 py-6 green-gradient text-white hover:scale-105 active:scale-95 font-black text-xl rounded-2xl shadow-[0_20px_50px_rgba(0,180,100,0.3)] transition-all duration-300 flex items-center gap-4 mx-auto group"
            >
              <span>ابدأ التحليل المهني الآن</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}

        {step === 'info' && (
          <motion.div 
            key="info"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-2xl bg-white dark:bg-dark-card p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-border/50 space-y-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-green-primary/10 text-green-primary rounded-2xl flex items-center justify-center">
                <User size={30} />
              </div>
              <div>
                <h2 className="text-3xl font-black mb-0">المعلومات الشخصية</h2>
                <p className="text-muted-foreground font-medium">لنبدأ بالأساسيات لتخصيص تجربتك</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-lg font-bold block">العمر</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['أقل من 18', '18-25', '26-35', 'أكثر من 35'].map(a => (
                    <button
                      key={a}
                      onClick={() => updateFormData('age', a)}
                      className={`py-4 rounded-xl font-bold border-2 transition-all ${formData.age === a ? 'border-green-primary bg-green-primary/10 text-green-primary' : 'border-slate-100 dark:border-white/5 hover:border-slate-200'}`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-lg font-bold block">الجنس</label>
                <div className="grid grid-cols-2 gap-4">
                  {['ذكر', 'أنثى'].map(g => (
                    <button
                      key={g}
                      onClick={() => updateFormData('gender', g)}
                      className={`py-4 rounded-xl font-bold border-2 transition-all ${formData.gender === g ? 'border-green-primary bg-green-primary/10 text-green-primary' : 'border-slate-100 dark:border-white/5 hover:border-slate-200'}`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-lg font-bold block">المستوى الدراسي</label>
                <select 
                  value={formData.education}
                  onChange={(e) => updateFormData('education', e.target.value)}
                  className="w-full p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border-2 border-slate-100 dark:border-white/10 font-bold focus:border-green-primary outline-none"
                >
                  <option value="">اختر مستواك...</option>
                  <option value="متوسط">تعليم متوسط</option>
                  <option value="ثانوي">تعليم ثانوي</option>
                  <option value="جامعي">تعليم جامعي</option>
                  <option value="تكوين مهني">تكوين مهني سابق</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>

              <button
                disabled={!formData.age || !formData.gender || !formData.education}
                onClick={() => setStep('interests')}
                className="w-full py-6 green-gradient text-white rounded-2xl font-black text-xl shadow-xl hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:grayscale transition-all flex items-center justify-center gap-3"
              >
                المتابعة <ChevronRight />
              </button>
            </div>
          </motion.div>
        )}

        {step === 'interests' && (
          <motion.div 
            key="interests"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-2xl bg-white dark:bg-dark-card p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-border/50 space-y-10"
          >
             <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center">
                <Heart size={30} />
              </div>
              <div>
                <h2 className="text-3xl font-black mb-0">الميول والشغف</h2>
                <p className="text-muted-foreground font-medium">أخبرنا عما تحب فعله</p>
              </div>
            </div>

            <div className="space-y-8">
               <div className="space-y-3">
                  <label className="text-lg font-bold block">ماذا تحب أن تفعل في وقت فراغك؟</label>
                  <textarea 
                    value={formData.interests}
                    onChange={(e) => updateFormData('interests', e.target.value)}
                    placeholder="مثال: أحب فك الأجهزة، الرسم، الطبخ، استخدام الحاسوب..."
                    className="w-full h-32 p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border-2 border-slate-100 dark:border-white/10 font-medium focus:border-green-primary outline-none resize-none"
                  />
               </div>

               <div className="space-y-3">
                  <label className="text-lg font-bold block">هل لديك مهارات سابقة في أي حرفة؟</label>
                  <textarea 
                    value={formData.skills}
                    onChange={(e) => updateFormData('skills', e.target.value)}
                    placeholder="إذا لم يكن لديك مهارات، اتركها فارغة أو اكتب 'لا يوجد'"
                    className="w-full h-32 p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border-2 border-slate-100 dark:border-white/10 font-medium focus:border-green-primary outline-none resize-none"
                  />
               </div>

               <button
                disabled={!formData.interests.trim()}
                onClick={() => setStep('questions')}
                className="w-full py-6 green-gradient text-white rounded-2xl font-black text-xl shadow-xl hover:scale-[1.02] active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
              >
                بدء الأسئلة التحليلية <Brain size={24} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 'questions' && (
          <motion.div 
            key="questions"
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="w-full max-w-3xl space-y-12"
          >
             <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full font-black text-xs uppercase tracking-widest border border-gold/20">
                   السؤال {qIndex + 1} من {psychometricQuestions.length}
                </div>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight px-4 h-32 flex items-center justify-center text-center">
                  {psychometricQuestions[qIndex]}
                </h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { text: "نعم، بالتأكيد", val: "Strongly Agree" },
                 { text: "أحياناً / ربما", val: "Neutral" },
                 { text: "لا، أفضل العكس", val: "Disagree" },
                 { text: "لا أدري", val: "Not Sure" }
               ].map((opt, i) => (
                 <motion.button
                   key={i}
                   whileHover={{ scale: 1.02, y: -5 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => handlePsychometricAnswer(opt.val)}
                   className="p-8 bg-white dark:bg-dark-card border-2 border-slate-100 dark:border-white/5 hover:border-green-primary rounded-[2rem] shadow-sm hover:shadow-xl transition-all text-xl font-bold"
                 >
                   {opt.text}
                 </motion.button>
               ))}
             </div>
          </motion.div>
        )}

        {step === 'calculating' && (
          <motion.div 
            key="calc" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center space-y-8"
          >
             <div className="relative">
                <Loader2 className="w-32 h-32 text-green-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Brain size={40} className="text-green-primary animate-pulse" />
                </div>
             </div>
             <div className="space-y-3">
               <h2 className="text-4xl font-black tracking-tighter">جاري تحليل بياناتك...</h2>
               <p className="text-xl text-muted-foreground font-medium animate-pulse">يقوم الذكاء الاصطناعي الآن بربط مهاراتك بآلاف الفرص المهنية في الجزائر</p>
             </div>
          </motion.div>
        )}

        {step === 'result' && result && (
          <motion.div 
            key="result" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="w-full max-w-5xl space-y-16"
          >
             {/* Header Result */}
             <div className="bg-white dark:bg-dark-card p-10 md:p-16 rounded-[4rem] shadow-2xl border border-border/50 relative overflow-hidden text-center md:text-right">
                <div className="absolute top-0 left-0 w-64 h-64 green-gradient opacity-10 blur-[100px] pointer-events-none" />
                
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                   <div className="w-40 h-40 green-gradient rounded-[3rem] shadow-[0_20px_60px_rgba(0,255,135,0.4)] flex items-center justify-center text-6xl text-white border-8 border-white dark:border-dark-bg shrink-0">
                      🛠️
                   </div>
                   <div className="flex-1 space-y-6">
                      <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-primary/10 text-green-primary font-black uppercase text-xs tracking-widest rounded-full">
                         <Star size={16} /> الحرفة المثالية لك
                      </div>
                      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-0 text-foreground uppercase">
                        {result.craft}
                      </h1>
                      <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-border/30">
                         <h3 className="text-xl font-black mb-3">لماذا اخترنا لك هذه الحرفة؟</h3>
                         <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                           {result.reason}
                         </p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Curriculum Sample Section */}
             <div className="space-y-10">
                <div className="flex items-center justify-between px-4">
                   <h2 className="text-3xl md:text-4xl font-black tracking-tighter">خارطة الطريق: المستوى 1</h2>
                   <div className="flex items-center gap-2 opacity-50 font-bold uppercase tracking-widest text-xs">
                      <BookOpen size={18} /> منهج Hirfati المعتمد
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {result.curriculumSample.lessons.map((lesson, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-dark-card border border-border/50 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden group"
                      >
                         <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center font-black text-xl mb-6">
                            {idx + 1}
                         </div>
                         <h4 className="text-2xl font-black mb-4 h-16">{lesson.title}</h4>
                         <p className="text-muted-foreground text-sm font-medium mb-8 line-clamp-4">
                           {lesson.content}
                         </p>
                         <div className="flex flex-wrap gap-2 mb-8">
                            {lesson.tools.map((tool, i) => (
                               <span key={i} className="px-3 py-1 bg-secondary text-[10px] font-black rounded-full uppercase">{tool}</span>
                            ))}
                         </div>
                         <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                            <span className="text-xs font-black uppercase opacity-40">3 اختبارات جدارة</span>
                            <CheckCircle size={20} className="text-green-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                         </div>
                      </motion.div>
                   ))}
                </div>
             </div>

             <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
                <button 
                  onClick={() => navigate('/')}
                  className="px-10 py-5 bg-slate-200 dark:bg-white/5 text-foreground rounded-2xl font-black text-lg hover:bg-slate-300 dark:hover:bg-white/10 transition-all flex items-center gap-3"
                >
                   <ArrowLeft /> العودة للرئيسية
                </button>
                <button 
                  onClick={() => {
                    const craftMap: Record<string, string> = {
                      'خياطة': 'tailoring',
                      'تصميم أزياء': 'fashion',
                      'نجارة الألمنيوم': 'aluminum',
                      'حلاقة': 'hair',
                      'إدخال بيانات': 'data_entry',
                      'قواعد بيانات': 'ms_access'
                    };
                    
                    const craftId = craftMap[result.craft] || result.craft.toLowerCase().replace(/\s+/g, '_');
                    
                    setPersonalityResult(result.craft);
                    setLevelProgress(craftId, 1, 1, true); 
                    navigate(`/craft/${craftId}`);
                  }}
                  className="px-12 py-5 green-gradient text-white rounded-2xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4"
                >
                   ابدأ رحلة الاحتراف الآن <Trophy />
                </button>
             </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
