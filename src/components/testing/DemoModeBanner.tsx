import React from 'react';
import { AlertTriangle, Settings, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isDemoMode, toggleDemoMode } from '@/data/mockData';
import { trackEvent } from '@/utils/analytics';

interface DemoModeBannerProps {
  onDismiss?: () => void;
}

const DemoModeBanner: React.FC<DemoModeBannerProps> = ({ onDismiss }) => {
  const [dismissed, setDismissed] = React.useState(false);
  const [demoMode, setDemoMode] = React.useState(isDemoMode());

  // Don't show if not in demo mode or if dismissed
  if (!demoMode || dismissed) {
    return null;
  }

  const handleToggleDemoMode = () => {
    const newMode = toggleDemoMode();
    setDemoMode(newMode);
    
    trackEvent('demo_mode_toggle', {
      enabled: newMode,
      source: 'banner'
    });

    if (!newMode) {
      setDismissed(true);
      onDismiss?.();
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
    
    trackEvent('demo_banner_dismissed', {
      action: 'manual_dismiss'
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm border-b border-amber-400/30">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-5 h-5 text-white" />
            <div className="text-white">
              <span className="font-medium">Demo Mode Active</span>
              <span className="ml-2 text-white/80">
                You're viewing sample data for testing purposes
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              onClick={handleToggleDemoMode}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              <Settings className="w-4 h-4 mr-2" />
              Exit Demo Mode
            </Button>
            
            <Button
              onClick={handleDismiss}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModeBanner;