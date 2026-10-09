import { Languages } from "@/i18n";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language: Languages) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage(Languages.PT)}>
        {t("language.pt")}
      </button>
      <button onClick={() => changeLanguage(Languages.EN)}>
        {t("language.en")}
      </button>
    </div>
  );
}
