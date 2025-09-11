
export interface NarrativeSection {
  id: string;
  title: string;
  description: string;
  bgClass: string;
  visualElement: JSX.Element;
  parallaxFactor?: number; // Optional property for custom parallax speed
  imageSrc?: string; // Optional property for background image
}
