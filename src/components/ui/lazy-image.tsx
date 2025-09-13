import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  blurhash?: string;
  className?: string;
  priority?: boolean;
}

export const LazyImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  blurhash,
  ...props 
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div 
      ref={imgRef}
      className={cn("relative overflow-hidden", className)}
    >
      {/* Blur placeholder */}
      {!loaded && (
        <div 
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-kaeru-stone/20 to-kaeru-jade/10"
          style={{
            backgroundImage: blurhash ? `url("data:image/svg+xml;base64,${blurhash}")` : undefined
          }}
        />
      )}
      
      {/* Actual image */}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
            error && "hidden"
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading={priority ? "eager" : "lazy"}
          {...props}
        />
      )}
      
      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-kaeru-stone/20 flex items-center justify-center">
          <div className="text-kaeru-fog/50 text-sm">Image unavailable</div>
        </div>
      )}
    </div>
  );
};