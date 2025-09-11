
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { JapaneseHeading } from "@/components/ui/japanese/Typography";

interface FounderStorySectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  index: number;
}

const FounderStorySection = ({ id, title, children, index }: FounderStorySectionProps) => {
  return (
    <motion.div 
      id={id}
      className="mb-16 scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <JapaneseHeading className="text-gold mb-6">{title}</JapaneseHeading>
      {children}
    </motion.div>
  );
};

export default FounderStorySection;
