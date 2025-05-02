import { createContext } from "react";

export const ThemeToggleContext = createContext({
  isDark: true,
  toggleTheme: () => { },
});
