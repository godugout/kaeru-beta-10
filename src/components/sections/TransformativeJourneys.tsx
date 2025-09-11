
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import JourneyCard from "@/components/journey/JourneyCard";
import JourneyBackground from "@/components/journey/JourneyBackground";
import JourneyProgress from "@/components/journey/JourneyProgress";
import { journeys } from "@/data/journeyData";
import MindfulTransition from "@/components/ui/japanese-elements/MindfulTransition";
import { useIsMobile } from "@/hooks/use-mobile";

const TransformativeJourneys = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Make content visible after initial load with a slight delay
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 300);
    
    // Add keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev < journeys.length - 1 ? prev + 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <JourneyBackground />

      <div className="container mx-auto px-4">
        <MindfulTransition 
          isVisible={contentVisible}
          type="fade" 
          speed="medium" 
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-gold mb-4">Transformative Journeys</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Experience the cycles of healing, each inspired by a different element of nature and spirit.
          </p>
        </MindfulTransition>

        <div className="relative" ref={carouselRef}>
          <Carousel
            className="w-full"
            opts={{ 
              axis: 'x',
              loop: false,
              skipSnaps: false,
              dragFree: !isMobile
            }}
          >
            <CarouselContent 
              className="py-4" 
              onSelect={(event) => {
                const api = (event.target as any)._emblaApi;
                if (api) {
                  setActiveIndex(api.selectedScrollSnap());
                }
              }}
            >
              {journeys.map((journey, index) => (
                <CarouselItem 
                  key={index} 
                  className="md:basis-1/2 lg:basis-1/3 pl-4 sm:pl-8"
                >
                  <JourneyCard
                    title={journey.title}
                    inspiration={journey.inspiration}
                    description={journey.description}
                    color={journey.color}
                    symbol={journey.symbol}
                    index={index}
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Hide buttons on mobile and show dots instead */}
            {!isMobile ? (
              <>
                <CarouselPrevious className="left-0 md:-left-4" />
                <CarouselNext className="right-0 md:-right-4" />
              </>
            ) : (
              <div className="flex justify-center gap-2 mt-6">
                {journeys.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === index ? "bg-gold w-6" : "bg-white/20"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </Carousel>

          {/* Progress indicator - hide on mobile since we have dots */}
          {!isMobile && (
            <JourneyProgress 
              total={journeys.length} 
              activeIndex={activeIndex} 
              onSelect={setActiveIndex} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TransformativeJourneys;
