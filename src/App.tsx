import { LanguageSwitcher } from "@/components";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div>
          <h1>{t("geral.loading")}</h1>
          <LanguageSwitcher />
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}
