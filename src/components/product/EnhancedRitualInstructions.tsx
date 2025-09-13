import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wind, Droplets, RotateCcw, Pause, Timer } from "lucide-react";

const ritualSteps = [
  {
    id: 1,
    icon: Wind,
    title: "Prepare",
    instruction: "Take 3 deep breaths",
    detail: "Center yourself in stillness. Breathe in calm, breathe out tension."
  },
  {
    id: 2,
    icon: Droplets,
    title: "Apply",
    instruction: "Warm balm between palms",
    detail: "Allow the natural oils to activate with your body's warmth."
  },
  {
    id: 3,
    icon: RotateCcw,
    title: "Massage",
    instruction: "Apply in circular motions",
    detail: "Move with intention, following the natural flow of your body."
  },
  {
    id: 4,
    icon: Pause,
    title: "Breathe",
    instruction: "Inhale deeply, hold for 4",
    detail: "Allow the botanicals to integrate with your natural rhythm."
  },
  {
    id: 5,
    icon: Timer,
    title: "Rest",
    instruction: "Allow 5 minutes to absorb",
    detail: "Give your body time to receive the full benefits of your ritual."
  }
];

const EnhancedRitualInstructions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-kaeru-gold mb-4">
          Ritual Instructions
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Transform your daily routine into a mindful practice. Each step is designed 
          to deepen your connection with the present moment.
        </p>
      </motion.div>

      <div className="space-y-8">
        {ritualSteps.map((step, index) => {
          const Icon = step.icon;
          
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step Number & Icon */}
              <div className="flex-shrink-0 w-20 h-20 relative">
                <div className="absolute inset-0 bg-kaeru-gold/20 rounded-full border-2 border-kaeru-gold/30"></div>
                <div className="absolute inset-2 bg-kaeru-gold rounded-full flex items-center justify-center">
                  <Icon size={24} className="text-kaeru-black" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-kaeru-black border-2 border-kaeru-gold rounded-full flex items-center justify-center text-kaeru-gold font-bold text-sm">
                  {step.id}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-kaeru-black/40 border border-white/10 rounded-sm p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-kaeru-gold font-medium text-lg mb-2">
                  {step.instruction}
                </p>
                <p className="text-white/70">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Completion Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center bg-kaeru-gold/10 border border-kaeru-gold/30 rounded-sm p-8"
      >
        <div className="text-2xl mb-4">🌸</div>
        <h3 className="text-xl font-semibold text-kaeru-gold mb-2">
          Complete Your Ritual
        </h3>
        <p className="text-white/70 max-w-md mx-auto">
          Your practice is complete. Take a moment to acknowledge the care you've shown yourself.
        </p>
      </motion.div>
    </section>
  );
};

export default EnhancedRitualInstructions;