
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RitualQuestion from "./RitualQuestion";
import RitualRecommendation from "./RitualRecommendation";
import { questions } from "@/data/ritualQuestions";
import JourneyBackground from "@/components/journey/JourneyBackground";

// Define the schema for the form
const FormSchema = z.object({
  energy: z.string(),
  intention: z.string(),
  sensory: z.string(),
  guide: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;

const RitualPathQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      energy: "",
      intention: "",
      sensory: "",
      guide: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setIsCompleted(true);
  };

  // Handle answer selection
  const handleAnswer = (answer: string) => {
    const questionId = questions[currentStep].id;
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 500);
    } else {
      setIsCompleted(true);
    }
  };

  // Restart the quiz
  const handleRestart = () => {
    setCurrentStep(0);
    setIsCompleted(false);
    setAnswers({});
  };

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-kaeru-moss/5 to-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.3em] text-kaeru-gold mb-6 uppercase">REGENERATIVE PATH</h2>
          <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl text-kaeru-fog mb-8 tracking-tight">
            Discover Your<br />Nature
          </h3>
          <p className="text-xl text-kaeru-fog/70 max-w-3xl mx-auto leading-relaxed">
            Answer a few reflective prompts, and we'll guide you to a ritual and product 
            pairing that speaks to your current needs and rhythms.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <RitualQuestion 
                question={questions[currentStep]}
                onAnswer={handleAnswer}
              />
              
              {/* Progress indicator */}
              <div className="mt-12">
                <div className="flex justify-center gap-2">
                  {questions.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-1 rounded-full transition-all ${
                        index === currentStep ? "w-8 bg-gold" : 
                        index < currentStep ? "w-4 bg-gold/70" : "w-4 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-center mt-2 text-white/50 text-sm">
                  Step {currentStep + 1} of {questions.length}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="recommendation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <RitualRecommendation 
                answers={answers} 
                onRestart={handleRestart} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RitualPathQuiz;
