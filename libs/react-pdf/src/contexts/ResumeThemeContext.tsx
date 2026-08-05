import { createContext, useContext, type ReactNode } from 'react';
import { getTheme, type ResumeColors } from '../styles';
import type { Theme } from '../../../../src/contexts';

/**
 * Contexte du thème du CV.
 * Le document PDF est rendu par @react-pdf/renderer dans un arbre React séparé,
 * hors du ThemeProvider de l'application web : le thème est donc fourni
 * explicitement à la racine du document via ce contexte, afin d'éviter de
 * transmettre la prop theme à chaque composant.
 */
export const ResumeThemeContext = createContext<Theme | undefined>(undefined);

interface ResumeThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}

/**
 * Provider du thème du CV, équivalent react-pdf du ThemeProvider web.
 * À placer à la racine du document PDF (dans ResumeDocument).
 */
export const ResumeThemeProvider = ({ children, theme }: ResumeThemeProviderProps) => (
  <ResumeThemeContext.Provider value={theme}>{children}</ResumeThemeContext.Provider>
);

/**
 * Hook Thème du CV
 * Fournit les couleurs du CV en fonction du thème fourni par ResumeThemeProvider.
 * @returns Couleurs du thème.
 */
export const useResumeTheme = (): ResumeColors => {
  const theme = useContext(ResumeThemeContext);
  if (theme === undefined) {
    throw new Error("useResumeTheme doit être utilisé au sein d'un ResumeThemeProvider");
  }
  return getTheme(theme);
};
