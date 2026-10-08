import { createContext, useContext } from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  themeMode: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useAppTheme must be used inside AppThemeProvider");

  return context;
}
