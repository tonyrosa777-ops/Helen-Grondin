import type { Metadata } from "next";
import QuizContent from "./QuizContent";

export const metadata: Metadata = {
  title: "Find Out How Much You Could Save — Health Sharing Quiz",
  description:
    "Answer 4 questions and get a personalized estimate of what Impact Health Sharing would cost for your household. Takes 60 seconds.",
};

export default function QuizPage() {
  return <QuizContent />;
}
