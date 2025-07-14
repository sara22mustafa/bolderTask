import React, { createContext, useContext, useState, ReactNode } from 'react';
import { colors } from '@/config/colors';

export const themes = {
  light: {
    background: colors.white,
    text:colors.black,
    textButton: colors.white,
    bkgButton: colors.secondaryBlack,
    button:colors.black,
    buttonText: colors.white,
    bkgButton2:colors.babyBlue,
    title: colors.gray,
    desc: colors.textGray,
  },
  dark: {
    background:colors.black,
    text: colors.white,
    textButton:colors.black,
    bkgButton: colors.white,
    bkgButton2:colors.lightGray,
    title:  colors.white,
    desc: colors.white,
    button: colors.white,
    buttonText:colors.black,
  },
};

type ThemeType = keyof typeof themes;

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  colorsTheme: any;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colorsTheme: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
