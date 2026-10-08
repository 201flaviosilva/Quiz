import type { PropsWithChildren } from "react";

import { AppThemeProvider } from "./AppThemeProvider";
import { QueryProvider } from "./QueryProvider";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <AppThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </AppThemeProvider>
  );
}
