import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import KaeruLogo from "@/components/hero/KaeruLogo";
import RitualQuestion from "./RitualQuestion";
import EnhancedRitualRecommendation from "./EnhancedRitualRecommendation";
import { coreQuestions, refinementQuestions, deepQuestions } from "@/data/tieredRitualQuestions";
import { calculateEnhancedRecommendation } from "@/utils/enhancedRecommendation";

type BuilderPhase = 'core' | 'refinement' | 'deep' | 'results';

const ProgressiveRitualBuilder = () => {
  const [currentPhase, setCurrentPhase] = useState<BuilderPhase>('core');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  const getCurrentQuestions = () => {
    switch (currentPhase) {
      case 'core': return coreQuestions;
      case 'refinement': return refinementQuestions;
      case 'deep': return deepQuestions;
      default: return coreQuestions;
    }
  };
  
  const currentQuestions = getCurrentQuestions();
  const recommendation = calculateEnhancedRecommendation(answers);
  
  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    const isLastQuestion = currentQuestion >= currentQuestions.length - 1;
    
    if (isLastQuestion) {
      // If we're at the end of core questions, show initial results
      if (currentPhase === 'core') {
        setTimeout(() => {
          setShowResults(true);
        }, 800);
      } else {
        // For refinement/deep questions, update results immediately
        setTimeout(() => {
          setCurrentQuestion(0);
          if (currentPhase === 'refinement') {
            setCurrentPhase('deep');
          } else {
            setShowResults(true);
          }
        }, 800);
      }
    } else {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    }
  };
  
  const handleRefineMore = () => {
    setShowResults(false);
    setCurrentQuestion(0);
    if (currentPhase === 'core') {
      setCurrentPhase('refinement');
    } else if (currentPhase === 'refinement') {
      setCurrentPhase('deep');
    }
  };
  
  const resetBuilder = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setCurrentPhase('core');
    setShowResults(false);
  };
  
  const getPhaseProgress = () => {
    let totalCompleted = 0;
    let totalPossible = 0;
    
    if (currentPhase === 'core' || Object.keys(answers).length >= 2) {
      totalCompleted += Math.min(Object.keys(answers).length, 2);
      totalPossible += 2;
    }
    
    if (currentPhase === 'refinement' || Object.keys(answers).length >= 4) {
      totalCompleted += Math.max(0, Math.min(Object.keys(answers).length - 2, 2));
      totalPossible += 2;
    }
    
    if (currentPhase === 'deep' || Object.keys(answers).length >= 6) {
      totalCompleted += Math.max(0, Math.min(Object.keys(answers).length - 4, 2));
      totalPossible += 2;
    }
    
    return { completed: totalCompleted, total: totalPossible };
  };
  
  const progress = getPhaseProgress();
  
  return (
    <div className="min-h-screen bg-kaeru-black text-fog-gray">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-kaeru-gold hover:text-kaeru-gold/80 transition-colors flex items-center gap-2">
          <ChevronLeft size={18} />
          <span>Return home</span>
        </Link>
        <div className="w-20 h-20 flex items-center justify-center">
          <KaeruLogo />
        </div>
        <div className="w-24"></div>
      </header>
      
      <main className="max-w-3xl mx-auto px-4 py-12">
        {!showResults ? (
          <>
            {/* Phase indicator */}
            <div className="mb-8 text-center">
              <div className="flex justify-center items-center gap-2 mb-4">
                {currentPhase === 'core' && (
                  <>
                    <Star className="w-4 h-4 text-kaeru-gold" />
                    <span className="text-sm text-kaeru-gold/70">Essential Questions</span>
                  </>
                )}
                {currentPhase === 'refinement' && (
                  <>
                    <Sparkles className="w-4 h-4 text-kaeru-gold" />
                    <span className="text-sm text-kaeru-gold/70">Refining Your Path</span>
                  </>
                )}
                {currentPhase === 'deep' && (
                  <>
                    <Sparkles className="w-4 h-4 text-kaeru-gold" />
                    <span className="text-sm text-kaeru-gold/70">Deep Personalization</span>
                  </>
                )}
              </div>
              
              {/* Progress bar */}
              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-xs text-fog-gray/50 mb-2">
                  <span>Progress</span>
                  <span>{progress.completed} of {progress.total} complete</span>
                </div>
                <div className="bg-white/10 h-1 w-full rounded">
                  <motion.div 
                    className="bg-kaeru-gold h-1 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: `${(progress.completed / progress.total) * 100}%` }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
            
            {/* Current Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPhase}-${currentQuestion}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <RitualQuestion
                  question={currentQuestions[currentQuestion]}
                  onAnswer={(answer) => handleAnswer(currentQuestions[currentQuestion].id, answer)}
                />
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <EnhancedRitualRecommendation 
                recommendation={recommendation}
                onRestart={resetBuilder}
                onRefineMore={currentPhase !== 'deep' ? handleRefineMore : undefined}
                currentPhase={currentPhase}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
};

export default ProgressiveRitualBuilder;