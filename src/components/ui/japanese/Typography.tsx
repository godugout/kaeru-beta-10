
import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Heading inspired by traditional Japanese brush calligraphy
export function JapaneseHeading({
  children,
  className,
}: TypographyProps) {
  return (
    <h2 
      className={cn(
        "font-serif text-2xl md:text-3xl lg:text-4xl tracking-wider mb-shaku text-balance",
        "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold",
        className
      )}
    >
      {children}
    </h2>
  );
}

// Subheading with asymmetrical underline
export function JapaneseSubheading({
  children,
  className,
}: TypographyProps) {
  return (
    <h3 
      className={cn(
        "font-serif text-lg md:text-xl tracking-wide mb-sun-2 text-balance",
        "relative after:content-[''] after:absolute after:bottom-0 after:left-[10%] after:w-8 after:h-px after:bg-gold/70",
        className
      )}
    >
      {children}
    </h3>
  );
}

// Prose block with vertical rhythm
export function JapaneseProse({
  children,
  className,
}: TypographyProps) {
  return (
    <div 
      className={cn(
        "v-rhythm-tight text-base leading-relaxed text-balance",
        className
      )}
    >
      {children}
    </div>
  );
}

// Japanese-inspired callout box
export function JapaneseCallout({
  children,
  className,
}: TypographyProps) {
  return (
    <div 
      className={cn(
        "py-shaku px-shaku border-l-2 border-gold/50 bg-black/20 mb-shaku",
        "relative overflow-hidden washi-texture",
        className
      )}
    >
      {children}
    </div>
  );
}

// Japanese concept display with kanji and meaning
export function JapaneseConcept({
  kanji,
  meaning,
  description,
  className,
}: {
  kanji: string;
  meaning: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-shaku flex items-start gap-4", className)}>
      <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold opacity-80">
        {kanji}
      </div>
      <div>
        <div className="font-medium text-lg tracking-wide mb-1">{meaning}</div>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
}

// Japanese-inspired pull quote
export function JapanesePullQuote({
  children,
  author,
  className,
}: {
  children: React.ReactNode;
  author?: string;
  className?: string;
}) {
  return (
    <blockquote 
      className={cn(
        "py-shaku my-shaku text-center max-w-2xl mx-auto",
        className
      )}
    >
      <p className="text-xl md:text-2xl font-serif italic text-gold">{children}</p>
      {author && (
        <footer className="mt-sun text-sm text-white/60">— {author}</footer>
      )}
    </blockquote>
  );
}
