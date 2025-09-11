
/**
 * Japanese Design System Theme Configuration
 * 
 * This module provides the core configuration for the Japanese design system,
 * integrating traditional Japanese aesthetic principles including:
 * 
 * - Ma (間) - Negative space and intervals
 * - Wabi-sabi (侘寂) - Imperfection and transience
 * - Jo-ha-kyū (序破急) - Rhythmic concepts 
 * - Asymmetry and balanced irregularity
 */

export const japaneseTheme = {
  // Colors derived from traditional Japanese pigments and materials
  colors: {
    // Neutral shades inspired by traditional Japanese materials
    sumi: {
      DEFAULT: '#333333', // Sumi ink
      light: '#767676',
      dark: '#111111',
    },
    washi: {
      DEFAULT: '#F7F6F1', // Washi paper
      light: '#FAFAF8',
      dark: '#E8E6DD',
    },
    bamboo: {
      DEFAULT: '#7D8C38', // Bamboo
      light: '#9CAD4B',
      dark: '#5E6C29',
    },
    
    // Seasonal palette
    // Spring (Haru)
    sakura: {
      DEFAULT: '#FFB7C5', // Cherry blossom
      light: '#FFDCE4',
      dark: '#E4A1AD',
    },
    // Summer (Natsu)
    indigo: {
      DEFAULT: '#223A70', // Traditional Japanese indigo
      light: '#385894',
      dark: '#162443',
    },
    // Autumn (Aki)
    momiji: {
      DEFAULT: '#D64F2A', // Maple leaf red
      light: '#E47551',
      dark: '#A63D21',
    },
    // Winter (Fuyu)
    snow: {
      DEFAULT: '#F3F5F7', // Snow white
      light: '#FFFFFF',
      dark: '#E1E5EA',
    },
  },
  
  // Spacing based on traditional Japanese proportions
  spacing: {
    sun: '0.5rem',    // Smallest unit
    'sun-2': '1rem',  // Medium unit
    shaku: '2rem',    // Component spacing
    tatami: '4rem',   // Section spacing
    ken: '8rem',      // Room-sized spacing
  },
  
  // Typography settings based on Japanese aesthetics
  typography: {
    serif: {
      fontFamily: "'Playfair Display', serif",
    },
    sans: {
      fontFamily: "'Inter', sans-serif",
    },
    lineHeight: {
      harmony: '1.7', // For vertical rhythm harmony
    },
    tracking: {
      expanded: '0.05em', // Expanded letter spacing for elegance
    },
  },
  
  // Border styles inspired by traditional Japanese crafts
  borders: {
    washi: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    kintsugi: {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderImage: 'linear-gradient(to right, #E6B980, #D9AD60) 1',
    },
  },
  
  // Box shadows inspired by traditional lighting
  shadows: {
    shoji: '0 4px 20px rgba(0, 0, 0, 0.05)', // Soft diffused light through paper
    byobu: '0 10px 30px rgba(0, 0, 0, 0.1)', // Folding screen shadow
  },
};

// Helper functions for the Japanese design system
export const japaneseDesignSystem = {
  // Helper for obtaining the appropriate seasonal elements
  getSeason: (): 'spring' | 'summer' | 'autumn' | 'winter' => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring'; // March to May
    if (month >= 5 && month <= 7) return 'summer'; // June to August
    if (month >= 8 && month <= 10) return 'autumn'; // September to November
    return 'winter'; // December to February
  },
  
  // Get season-specific design elements
  getSeasonalElements: (season: 'spring' | 'summer' | 'autumn' | 'winter') => {
    const elements = {
      spring: {
        primaryColor: japaneseTheme.colors.sakura.DEFAULT,
        motif: '桜',  // Cherry blossom
        texture: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff69b4\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M20 18c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm-5 3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm10-1c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-5 2c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-7c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        transition: 'fade-up',
      },
      summer: {
        primaryColor: japaneseTheme.colors.indigo.DEFAULT,
        motif: '波', // Wave
        texture: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%230099cc\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22H0v-1.17zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.24H0V3.07zM17.76 38.59l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM17.76 20.83l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.17zM17.76 3.07l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07zM35.52 38.59l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zM35.52 20.83l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.17zM35.52 3.07l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        transition: 'ripple',
      },
      autumn: {
        primaryColor: japaneseTheme.colors.momiji.DEFAULT,
        motif: '紅葉', // Maple leaf
        texture: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23cc7722\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        transition: 'brush',
      },
      winter: {
        primaryColor: japaneseTheme.colors.snow.DEFAULT,
        motif: '雪', // Snow
        texture: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'50\' height=\'50\' viewBox=\'0 0 50 50\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1.5\'/%3E%3Ccircle cx=\'23\' cy=\'23\' r=\'1\'/%3E%3Ccircle cx=\'33\' cy=\'33\' r=\'1.5\'/%3E%3Ccircle cx=\'43\' cy=\'43\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
        transition: 'fade-in',
      }
    };
    
    return elements[season];
  }
};
