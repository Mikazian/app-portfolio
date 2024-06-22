import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme doit être utilisé au sein d'un ThemeProvider");
  }
  return context;
};

export default ThemeContext;
