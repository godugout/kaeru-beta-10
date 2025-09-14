import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { productData } from "@/data/productData";

interface PurchaseNotification {
  id: string;
  customerName: string;
  productName: string;
  location: string;
  timeAgo: string;
}

const mockPurchases: PurchaseNotification[] = [
  { id: "1", customerName: "Sarah M.", productName: "Morning Ritual Oil", location: "Tokyo", timeAgo: "2 minutes ago" },
  { id: "2", customerName: "David K.", productName: "Evening Calm Balm", location: "Osaka", timeAgo: "8 minutes ago" },
  { id: "3", customerName: "Elena R.", productName: "Clarity Serum", location: "Kyoto", timeAgo: "15 minutes ago" },
  { id: "4", customerName: "Michael T.", productName: "Gold Collection Set", location: "Yokohama", timeAgo: "23 minutes ago" },
  { id: "5", customerName: "Yuki S.", productName: "Strength Oil", location: "Nagoya", timeAgo: "31 minutes ago" },
];

const RecentPurchaseNotification = () => {
  const [currentNotification, setCurrentNotification] = useState<PurchaseNotification | null>(null);
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const showRandomNotification = () => {
      const availableNotifications = mockPurchases.filter(n => !dismissed.has(n.id));
      
      if (availableNotifications.length === 0) {
        // Reset dismissed after all have been shown
        setDismissed(new Set());
        return;
      }

      const randomNotification = availableNotifications[
        Math.floor(Math.random() * availableNotifications.length)
      ];
      
      setCurrentNotification(randomNotification);

      // Auto-hide after 4 seconds
      setTimeout(() => {
        setCurrentNotification(null);
      }, 4000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showRandomNotification, 3000);

    // Then show every 15-25 seconds
    const interval = setInterval(() => {
      if (!currentNotification) {
        showRandomNotification();
      }
    }, Math.random() * 10000 + 15000); // 15-25 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [currentNotification, dismissed]);

  const handleDismiss = () => {
    if (currentNotification) {
      setDismissed(prev => new Set([...prev, currentNotification.id]));
      setCurrentNotification(null);
    }
  };

  return (
    <AnimatePresence>
      {currentNotification && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-6 left-6 z-50 bg-black/90 backdrop-blur-sm border border-gold/20 rounded-lg p-4 max-w-sm shadow-2xl"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/60 text-xs">Recent Purchase</span>
              </div>
              <div className="text-white text-sm">
                <span className="font-medium">{currentNotification.customerName}</span> in{" "}
                <span className="text-gold">{currentNotification.location}</span>
              </div>
              <div className="text-white/80 text-sm">
                purchased <span className="font-medium">{currentNotification.productName}</span>
              </div>
              <div className="text-white/50 text-xs mt-1">
                {currentNotification.timeAgo}
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/40 hover:text-white/80 transition-colors ml-2"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RecentPurchaseNotification;