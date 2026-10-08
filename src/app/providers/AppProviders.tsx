import type { PropsWithChildren } from "react";
import { AppThemeProvider } from "./AppThemeProvider";

export function AppProviders({ children }: PropsWithChildren) {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}
