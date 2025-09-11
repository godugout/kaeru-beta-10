
import { FrogAmbassadorDetail } from "@/types/frogAmbassador";

interface CardHeaderProps {
  frog: FrogAmbassadorDetail;
}

export default function CardHeader({ frog }: CardHeaderProps) {
  return (
    <div className="border-b border-gold/10 pb-4 p-6">
      <div className="flex flex-col">
        <span className="text-sm text-gold/70">
          {frog.japaneseName} • {frog.species}
        </span>
        <h3 className="text-2xl font-serif text-gold mt-1">
          {frog.name}
        </h3>
        <span className="text-xs text-white/60 mt-1">
          {frog.collection} Collection
        </span>
      </div>
    </div>
  );
}
