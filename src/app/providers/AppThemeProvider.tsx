import { useMemo, useState, type PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";

import { ThemeContext, type ThemeMode } from "@/hooks";
import { GlobalStyles, darkTheme, lightTheme } from "@/styles";

const THEME_STORAGE_KEY = "themeMode";

function getInitialTheme(): ThemeMode {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  return savedTheme === "dark" ? "dark" : "light";
}

export function AppThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);

  const toggleTheme = () => {
    setThemeMode((current) => {
      const nextTheme = current === "light" ? "dark" : "light";

      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

      return nextTheme;
    });
  };

  const contextValue = useMemo(
    () => ({
      themeMode,
      toggleTheme,
    }),
    [themeMode],
  );

  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
