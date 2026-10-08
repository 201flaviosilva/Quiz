import { useMemo, useState, type PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";

import { ThemeContext, type ThemeMode } from "@/hooks";
import { GlobalStyles, darkTheme, lightTheme } from "@/styles";

export function AppThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    setThemeMode((current) => (current === "light" ? "dark" : "light"));
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
