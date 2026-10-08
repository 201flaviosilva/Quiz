export const theme = {
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

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "28px",
      xxl: "36px",
    },
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};

export type ThemeType = typeof theme;
