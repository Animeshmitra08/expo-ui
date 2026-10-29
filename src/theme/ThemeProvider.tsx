import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { Theme } from './types';
import { lightTheme, darkTheme } from './theme';

export interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  isDark: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

export interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
  initialDark?: boolean;
}

export function ThemeProvider({ children, initialTheme, initialDark = false }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(initialDark);
  const [customTheme, setCustomTheme] = useState<Theme | undefined>(initialTheme);

  const theme = customTheme ?? (isDark ? darkTheme : lightTheme);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      isDark,
      toggleTheme: () => setIsDark((prev) => !prev),
      setTheme: setCustomTheme,
    }),
    [theme, isDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

