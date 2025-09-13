import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'jp';

export interface LocalizedString {
  en: string;
  jp: string;
}

interface LocalizationContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  formatCurrency: (usdPrice: number) => string;
  exchangeRate: number;
}

const translations = {
  // Navigation
  'nav.shop': { en: 'SHOP', jp: 'ショップ' },
  'nav.way': { en: 'THE WAY', jp: 'ザ・ウェイ' },
  'nav.rituals': { en: 'RITUALS', jp: 'リチュアル' },
  'nav.library': { en: 'LIBRARY', jp: 'ライブラリー' },
  'nav.origins': { en: 'ORIGINS', jp: 'ルーツ' },
  
  // Cart
  'cart.title': { en: 'Your Ritual', jp: 'あなたの儀式' },
  'cart.checkout': { en: 'Begin Checkout', jp: 'チェックアウト開始' },
  'cart.continue': { en: 'Continue Shopping', jp: 'ショッピングを続ける' },
  'cart.empty': { en: 'Your ritual awaits', jp: 'あなたの儀式が待っています' },
  'cart.explore': { en: 'Explore Products', jp: '商品を探索する' },
  'cart.subtotal': { en: 'Subtotal', jp: '小計' },
  'cart.total': { en: 'Total', jp: '合計' },
  'cart.discount': { en: 'Ritual Discount', jp: '儀式割引' },
  
  // Product
  'product.quickAdd': { en: 'Quick Add', jp: 'クイック追加' },
  'product.explore': { en: 'Explore', jp: '探索' },
  'product.add': { en: 'Add', jp: '追加' },
  'product.quickView': { en: 'Quick View', jp: 'クイックビュー' },
  
  // Shipping
  'shipping.free': { en: 'Free shipping to Japan on orders over', jp: '日本への送料無料（' },
  'shipping.freeEnd': { en: '', jp: '以上のご注文）' },
  'shipping.international': { en: 'International shipping available', jp: '国際配送可能' },
  'shipping.tokyo': { en: 'Tokyo: 1-2 days', jp: '東京：1-2日' },
  'shipping.osaka': { en: 'Osaka: 2-3 days', jp: '大阪：2-3日' },
  'shipping.kyoto': { en: 'Kyoto: 2-3 days', jp: '京都：2-3日' },
  
  // Seasonal
  'season.spring': { en: 'Spring Collection', jp: '春のコレクション' },
  'season.summer': { en: 'Summer Collection', jp: '夏のコレクション' },
  'season.autumn': { en: 'Autumn Collection', jp: '秋のコレクション' },
  'season.winter': { en: 'Winter Collection', jp: '冬のコレクション' },
  
  // Payment
  'payment.methods': { en: 'Accepted Payment Methods', jp: '利用可能なお支払い方法' },
} as const;

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within LocalizationProvider');
  }
  return context;
};

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');
  const [exchangeRate, setExchangeRate] = useState<number>(150); // Default JPY rate

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('kaeru-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'jp')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Fetch current exchange rate
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        // Using a free exchange rate API
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        if (data.rates && data.rates.JPY) {
          setExchangeRate(data.rates.JPY);
        }
      } catch (error) {
        console.log('Failed to fetch exchange rate, using default');
      }
    };

    fetchExchangeRate();
    // Update rate every hour
    const interval = setInterval(fetchExchangeRate, 3600000);
    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'jp' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('kaeru-language', newLanguage);
  };

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  const formatCurrency = (usdPrice: number): string => {
    const jpyPrice = Math.round(usdPrice * exchangeRate);
    
    if (language === 'jp') {
      return `¥${jpyPrice.toLocaleString('ja-JP')} ($${usdPrice})`;
    } else {
      return `$${usdPrice} (¥${jpyPrice.toLocaleString('ja-JP')})`;
    }
  };

  const value: LocalizationContextType = {
    language,
    toggleLanguage,
    t,
    formatCurrency,
    exchangeRate,
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};