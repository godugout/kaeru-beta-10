
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
    <section className="py-24 relative overflow-hidden bg-gray-900/30">
      <JourneyBackground className="opacity-30" />
      
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-widest text-gold mb-4">REGENERATIVE PATH</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Discover Your Nature
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Answer a few reflective prompts, and we'll guide you to a ritual and product 
            pairing that speaks to your current needs and rhythms.
          </p>
        </div>

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
