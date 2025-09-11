
import MindfulTransition from "./japanese-elements/MindfulTransition";

interface SectionHeroProps {
  title: string;
  subtitle?: string;
  contentVisible?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHero = ({
  title,
  subtitle,
  contentVisible = true,
  className = "pt-32 pb-16",
  titleClassName = "font-serif text-4xl md:text-6xl text-gold mb-8 tracking-wider",
  subtitleClassName = "text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
}: SectionHeroProps) => {
  return (
    <section className={`relative ${className}`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <MindfulTransition 
          isVisible={contentVisible} 
          type="fade" 
          speed="medium"
          className="mb-8"
        >
          <h1 className={titleClassName} dangerouslySetInnerHTML={{ __html: title }} />
        </MindfulTransition>
        
        {subtitle && (
          <MindfulTransition 
            isVisible={contentVisible} 
            type="fade" 
            speed="medium" 
            delay={0.2}
          >
            <p 
              className={subtitleClassName}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          </MindfulTransition>
        )}
      </div>
    </section>
  );
};

export default SectionHero;
