
import { createRoot } from 'react-dom/client'
import { SeasonalThemeProvider } from '@/contexts/SeasonalThemeContext';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <SeasonalThemeProvider>
    <App />
  </SeasonalThemeProvider>
);
