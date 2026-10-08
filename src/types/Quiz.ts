import type { Question } from "./Question";

export type Quiz = {
  id: string;
  title: string;
  categoryId: string;
  description: string;
  questions: Question[];
};
