import { QuestionType } from "../../../common/types/QuestionType";
import * as types from "../types.json";

export interface QuestionPageStateType {
  endpoint?: string;
  questions?: QuestionType[];
  error?: string;
}

export const initialState: QuestionPageStateType = {
  endpoint: undefined,
  questions: undefined,
  error: undefined,
};

const questionsReducer = {
  quizzard: (state = initialState, action: any) => {
    const actions = {
      [types.GET_ENDPOINT]: () => ({
        ...state,
        endpoint: action.payload,
      }),
      [types.GET_QUESTIONS]: () => ({
        ...state,
        questions: action.payload,
      }),
      [types.VOTE]: () => ({
        ...state,
        questions: action.payload,
      }),
      [types.GET_QUESTION]: () => ({
        ...state,
        questions: action.payload,
      }),
      [types.ERROR]: () => ({
        ...state,
        error: action.payload,
      }),
    };

    if (actions[action.type]) {
      return actions[action.type]();
    }
    return state;
  },
};

export default questionsReducer;
