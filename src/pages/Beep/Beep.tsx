import { getQuestions } from "@/api/question";
import { LanguageSwitcher, LoadingQuery, ThemeToggle } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * This is a page only used for testing
 */

export function BeepPage() {
  const { t } = useTranslation();

  return (
    <>
      <section id="center">
        <div>
          <h1>{t("geral.loading")}</h1>
          <LanguageSwitcher />
          <ThemeToggle />
          <LoadingQuery />
          <Question />
        </div>
      </section>
    </>
  );
}

function Question() {
  const {
    data: questions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  useEffect(() => {
    getQuestions().then((data) => {
      console.log(data);
    });
  }, []);

  if (isLoading) return <p>A carregar...</p>;
  if (isError) return <p>Ocorreu um erro.</p>;

  return (
    <div>
      {questions?.map((question) => (
        <div key={question.id}>
          <h2>{question.question}</h2>
          <p>{question.correctOptionId}</p>
        </div>
      ))}
    </div>
  );
}
