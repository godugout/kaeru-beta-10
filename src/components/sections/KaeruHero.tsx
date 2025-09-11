
import SectionHero from "@/components/ui/SectionHero";
import KaeruLogo from "@/components/hero/KaeruLogo";

const KaeruHero = () => {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8 mx-auto w-32 h-32">
          <img 
            src="/lovable-uploads/775b98a8-5a04-44fc-bc94-1e4a72b0517e.png" 
            alt="KAERU"
            className="w-full h-full object-contain" 
          />
        </div>
        <SectionHero
          title="THE WAY OF KAERU"
          subtitle={`In Japanese philosophy, <span className="text-gold">帰る (kaeru)</span> means "to return" – 
          a concept that resonates deeply in our modern world of constant distraction and disconnection.`}
          className=""
        />
      </div>
    </section>
  );
};

export default KaeruHero;
