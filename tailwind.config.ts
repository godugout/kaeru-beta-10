
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // KAERU Design System - Primary Colors
        'kaeru-black': 'hsl(var(--kaeru-black))',
        'kaeru-gold': 'hsl(var(--kaeru-gold))',
        'moss-green': 'hsl(var(--moss-green))',
        'fog-gray': 'hsl(var(--fog-gray))',
        'jade-accent': 'hsl(var(--jade-accent))',
        'glacier-blue': 'hsl(var(--glacier-blue))',
        
        // Shadcn Integration
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // Legacy colors (backward compatibility)
        gold: {
          DEFAULT: "hsl(var(--kaeru-gold))",
          light: "#F0D4A8", 
          dark: "#C99A62",
          muted: "rgba(212, 175, 55, 0.2)"
        },
        sand: {
          DEFAULT: "#E6B980",
          light: "#EACDA3",
        },
        ocean: {
          DEFAULT: "#33C3F0",
          light: "#E7F0FD",
          deep: "#1E85AF",
        },
        earth: {
          DEFAULT: "#8D6E63",
          400: "#A1887F",
          600: "#6D4C41",
        },
        charcoal: {
          DEFAULT: "#403E43",
          light: "#5C5A5E",
          dark: "#2A282D",
        },
        onyx: {
          DEFAULT: "#222222",
          100: "#F1F1F1",
          200: "#DCDCDC",
          300: "#C8C8C9", 
          400: "#999999",
          500: "#777777",
          600: "#555555",
          700: "#333333",
          800: "#222222",
          900: "#111111",
        },
        // Japanese-inspired colors
        sumi: {
          DEFAULT: '#333333',
          light: '#767676',
          dark: '#111111',
        },
        washi: {
          DEFAULT: '#F7F6F1',
          light: '#FAFAF8',
          dark: '#E8E6DD',
        },
        sakura: {
          DEFAULT: '#FFB7C5',
          light: '#FFDCE4',
          dark: '#E4A1AD',
        },
        indigo: {
          DEFAULT: '#223A70',
          light: '#385894',
          dark: '#162443',
        },
        momiji: {
          DEFAULT: '#D64F2A',
          light: '#E47551',
          dark: '#A63D21',
        },
      },
      spacing: {
        // KAERU Design System - 8px Grid
        'kaeru-xs': 'var(--space-xs)',     // 8px
        'kaeru-sm': 'var(--space-sm)',     // 16px
        'kaeru-md': 'var(--space-md)',     // 24px
        'kaeru-lg': 'var(--space-lg)',     // 32px
        'kaeru-xl': 'var(--space-xl)',     // 48px
        'kaeru-2xl': 'var(--space-2xl)',   // 64px
        'kaeru-3xl': 'var(--space-3xl)',   // 96px
        
        // Legacy Japanese spacing (maintained for compatibility)
        'sun': '0.5rem',
        'sun-2': '1rem', 
        'shaku': '2rem',
        'tatami': '4rem',
        'ken': '8rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "dash": {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "0" }
        },
        "fadeIn": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "scaleIn": {
          "0%": { 
            transform: "scale(0.75)",
            opacity: "0"
          },
          "100%": { 
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "ripple": {
          "0%": { 
            transform: "scale(0)",
            opacity: "1"
          },
          "100%": { 
            transform: "scale(3)",
            opacity: "0"
          }
        },
        "brush": {
          "0%": {
            strokeDashoffset: "1000",
            opacity: "0"
          },
          "100%": {
            strokeDashoffset: "0",
            opacity: "0.6"
          }
        },
        "color-shift": {
          "0%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(15deg)" },
          "100%": { filter: "hue-rotate(0deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "ripple": "ripple 2s ease-out forwards",
        "brush": "brush 2s ease-out forwards",
        "color-shift": "color-shift 8s infinite ease-in-out",
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif', 'Georgia'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to right, #e6b980, #eacda3)',
        'gradient-ocean': 'linear-gradient(to right, #33C3F0, #2992B0)',
        'gradient-earth': 'linear-gradient(to right, #8D6E63, #A1887F)',
        'gradient-sakura': 'linear-gradient(to right, #FFB7C5, #FFDCE4)',
        'gradient-indigo': 'linear-gradient(to right, #223A70, #385894)',
        'gradient-momiji': 'linear-gradient(to right, #D64F2A, #E47551)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("./src/theme/plugins/japaneseLayoutPlugin"),
  ],
} satisfies Config;
