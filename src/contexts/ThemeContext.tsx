import { createContext, useContext, useMemo } from "react";
import theme from "../style/index";
import { AppTheme } from "../types/interfaces/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<AppTheme>(theme);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const value = useMemo(
    () => ({
      colors: theme.colors,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme doit être utilisé au sein d'un ThemeProvider");
  }
  return context;
};

export default ThemeContext;
