import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

interface RitualAccessGateProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }),
  marketing: z.boolean(),
  privacy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy to continue",
  }),
});

const RitualAccessGate: React.FC<RitualAccessGateProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    try {
      emailSchema.parse({
        email,
        marketing: marketingConsent,
        privacy: privacyConsent,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-ritual-access', {
        body: {
          email: email.trim(),
          consented_to_marketing: marketingConsent,
          consented_to_privacy: privacyConsent,
          source_page: 'rituals',
        },
      });

      if (error) throw error;

      console.log('Ritual access granted:', data);
      setSubmitted(true);
      
      // Store access in localStorage
      localStorage.setItem('ritual_access_granted', 'true');
      localStorage.setItem('ritual_access_email', email.trim());
      
      toast({
        title: "Access Granted",
        description: "Welcome to the Rituals section",
      });

      // Close after a brief delay
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setMarketingConsent(false);
    setPrivacyConsent(false);
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-lg w-full bg-gradient-to-b from-kaeru-moss/10 to-black border border-gold/20 rounded-lg p-8"
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                resetForm();
                onClose();
              }}
              className="absolute top-4 right-4 text-gold hover:bg-gold/10"
            >
              <X size={20} />
            </Button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                    <Lock className="w-8 h-8 text-gold" />
                  </div>
                  <h2 className="text-3xl font-serif text-white mb-2">
                    Enter the Sacred Space
                  </h2>
                  <p className="text-kaeru-fog/80">
                    Join our community to access exclusive ritual practices and insights
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-black/40 border-gold/20 text-white placeholder:text-kaeru-fog/50 focus:border-gold"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Privacy Consent */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy"
                      checked={privacyConsent}
                      onCheckedChange={(checked) => setPrivacyConsent(checked as boolean)}
                      className="mt-1 border-gold/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                      disabled={isSubmitting}
                    />
                    <Label htmlFor="privacy" className="text-sm text-kaeru-fog/90 leading-relaxed cursor-pointer">
                      I accept the{' '}
                      <a href="/privacy-policy" target="_blank" className="text-gold hover:underline">
                        Privacy Policy
                      </a>{' '}
                      and understand my data rights under GDPR *
                    </Label>
                  </div>

                  {/* Marketing Consent */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="marketing"
                      checked={marketingConsent}
                      onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                      className="mt-1 border-gold/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                      disabled={isSubmitting}
                    />
                    <Label htmlFor="marketing" className="text-sm text-kaeru-fog/90 leading-relaxed cursor-pointer">
                      I'd like to receive exclusive updates about new rituals and practices (optional)
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !privacyConsent}
                    className="w-full bg-gold text-black hover:bg-gold/90 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : 'Enter the Sanctuary'}
                  </Button>

                  <p className="text-xs text-kaeru-fog/60 text-center">
                    Your data is stored securely and will never be shared with third parties.
                    You can request deletion at any time.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">
                  Welcome to the Practice
                </h3>
                <p className="text-kaeru-fog/80">
                  Access granted. Entering sacred space...
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RitualAccessGate;