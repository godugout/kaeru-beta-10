
import { useEffect, useRef, useState } from "react";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3500); // Start after logo animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced gold liquid effect with improved visuals */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden">
        {/* Gold flowing animation effect */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full bg-gold blur-3xl animate-pulse"></div>
          <div className="absolute top-[40%] left-[60%] w-[35vw] h-[35vh] rounded-full bg-gold blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
          <div className="absolute top-[60%] left-[30%] w-[40vw] h-[40vh] rounded-full bg-gold blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
          <div className="absolute top-[30%] left-[20%] w-[30vw] h-[30vh] rounded-full bg-gold blur-3xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '9s' }}></div>
        </div>
        
        {/* Subtle frog silhouette */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <div className="w-[80vmin] h-[80vmin] bg-contain bg-center bg-no-repeat" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\' fill=\'%23D4AF37\'%3E%3Cpath d=\'M50 15c-19.33 0-35 15.67-35 35s15.67 35 35 35 35-15.67 35-35S69.33 15 50 15zm15 30c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zM35 45c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm15 25c-8.28 0-15-6.72-15-15h30c0 8.28-6.72 15-15 15z\'/%3E%3C/svg%3E")' }}>
          </div>
        </div>
      </div>
      
      {/* Ready for future real video implementation */}
      {/* <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder-gold-texture.jpg"
      >
        <source src="/videos/gold-transformation.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
};

export default HeroVideo;
