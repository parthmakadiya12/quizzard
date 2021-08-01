import { ChoiceType } from "./ChoiceType";

export interface QuestionType {
  question: string;
  published_at: string;
  url: string;
  choices: ChoiceType[];
}
