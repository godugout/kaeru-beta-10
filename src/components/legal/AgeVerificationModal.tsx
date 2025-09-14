import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AgeVerificationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVerified = localStorage.getItem('age_verified');
    if (!hasVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age_verified', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-black border border-gold/20 [&>button]:hidden">
        <div className="text-center space-y-6 p-6">
          <div className="text-gold text-2xl font-serif mb-4">Age Verification</div>
          
          <div className="space-y-4 text-white/80">
            <p>
              You must be 21 years or older to enter this site and purchase CBD products.
            </p>
            <p className="text-sm">
              By entering, you confirm that you are of legal age in your jurisdiction 
              and agree to our terms and conditions.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              onClick={handleVerify}
              className="bg-gold text-black hover:bg-gold/90 font-medium"
            >
              I am 21 or older
            </Button>
            <Button 
              onClick={handleDecline}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              I am under 21
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeVerificationModal;