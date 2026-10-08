import { Languages } from "@/i18n";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: Languages) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage(Languages.PT)}>PT</button>
      <button onClick={() => changeLanguage(Languages.EN)}>EN</button>
    </div>
  );
}
