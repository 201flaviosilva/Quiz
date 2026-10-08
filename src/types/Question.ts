export type Difficulty = "easy" | "medium" | "hard";

export type QuestionOption = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  categoryId: string;
  difficulty: Difficulty;
  question: string;
  options: QuestionOption[];
  correctOptionId: string;
};
