import { App, AppProviders } from "@/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
