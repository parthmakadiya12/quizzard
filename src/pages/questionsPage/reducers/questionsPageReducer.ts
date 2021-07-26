import * as types from "../types.json";

interface initialStateTypes {
  endpoint?: string;
  questions?: object;
}

export const initialState: initialStateTypes = {
  endpoint: undefined,
  questions: undefined,
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
    };

    if (actions[action.type]) {
      return actions[action.type]();
    }
    return state;
  },
};

export default questionsReducer;