import type { Question } from "@/types";
import { apiClient } from "./client";

export function getQuestions() {
  return apiClient<Question[]>("/questions");
}

export function getQuestion(id: string) {
  return apiClient<Question>(`/questions/${id}`);
}
