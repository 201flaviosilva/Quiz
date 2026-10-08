import { AppRouter, AppThemeProvider, QueryProvider } from "./providers";

export function App() {
  return (
    <AppThemeProvider>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </AppThemeProvider>
  );
}
