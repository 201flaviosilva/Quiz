import { theme } from "../theme";

export const lightTheme = {
  ...theme,
  colors: {
    primary: "#6366F1",
    secondary: "#8B5CF6",

    background: "#FFFFFF",
    surface: "#F8FAFC",

    text: "#0F172A",
    textSecondary: "#64748B",

    border: "#E2E8F0",

    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
  },
} as const;
