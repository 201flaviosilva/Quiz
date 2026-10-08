import { theme } from "../theme";

export const darkTheme = {
  ...theme,
  colors: {
    primary: "#818CF8",
    secondary: "#A78BFA",

    background: "#0F172A",
    surface: "#1E293B",

    text: "#F8FAFC",
    textSecondary: "#94A3B8",

    border: "#334155",

    success: "#4ADE80",
    error: "#F87171",
    warning: "#FBBF24",
  },
} as const;
