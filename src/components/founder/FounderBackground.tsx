
import { ReactNode } from "react";

interface FounderBackgroundProps {
  children: ReactNode;
}

const FounderBackground = ({ children }: FounderBackgroundProps) => {
  return (
    <div className="bg-black min-h-screen relative">
      {/* Simplified background texture */}
      <div className="fixed inset-0 bg-black z-0">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii4wMSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjA1IDAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')] bg-repeat"></div>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FounderBackground;
