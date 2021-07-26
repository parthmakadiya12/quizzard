import * as types from "./types.json";

export const initialState: any = {
  error: undefined,
};

const commonReducer = {
  common: (state = initialState, action: any) => {
    const actions = {
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

export default commonReducer;
