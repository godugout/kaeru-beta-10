
interface JourneyProgressProps {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

const JourneyProgress = ({ total, activeIndex, onSelect }: JourneyProgressProps) => {
  return (
    <div className="flex justify-center mt-8 gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all ${
            activeIndex === index ? "bg-gold w-6" : "bg-white/20"
          }`}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default JourneyProgress;
