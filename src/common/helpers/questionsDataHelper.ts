import { QuestionType } from "../types/QuestionType";
import { ChoiceType } from "../types/ChoiceType";

const getPercentageFromTotal = (total: number, fraction: number): number =>
  Number(((fraction / total) * 100).toFixed(2));

export const calculatePercentage = (questions: QuestionType[]) => {
  questions.forEach((question: QuestionType) => {
    const { choices } = question;
    let total = 0;
    choices.forEach((choice: ChoiceType) => (total += choice.votes));
    choices.forEach(
      (choice: ChoiceType) =>
        (choice.percentage = getPercentageFromTotal(total, choice.votes) || 0)
    );
  });
  return questions;
};

export const questionSelector = (questions?: QuestionType[]) => {
  if (!questions) return null;
  const url = window.location.pathname;
  let result = {};
  questions.forEach((question: QuestionType) => {
    if (question.url === url) result = question;
  });
  return { ...result };
};

export const increaseVoteCount = (
  questions: QuestionType[],
  queUrl: string,
  choiceUrl: string
) => {
  questions.forEach((question: QuestionType) => {
    if (question.url === queUrl) {
      const { choices } = question;
      choices.forEach((choice: ChoiceType) => {
        if (choice.url === choiceUrl) {
          choice.votes = choice.votes + 1;
        }
      });
    }
  });
  return questions;
};
