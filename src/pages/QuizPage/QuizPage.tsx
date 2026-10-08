import { useParams } from "react-router-dom";

export function QuizPage() {
  const { quizId } = useParams();

  return <h1>Quiz: {quizId}</h1>;
}
