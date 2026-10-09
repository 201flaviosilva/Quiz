import { useAppTheme } from "@/hooks";

export function ThemeToggle() {
  const { themeMode, toggleTheme } = useAppTheme();

  return (
    <button onClick={toggleTheme}>{themeMode === "light" ? "🌙" : "☀️"}</button>
  );
}
