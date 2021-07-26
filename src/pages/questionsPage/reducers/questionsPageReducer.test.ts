import questionsReducer, { initialState } from "./questionsPageReducer";
import * as types from "../types.json";
const initialStore = {
  quizzard: {
    ...initialState,
  },
};
const emptyState = {
  endpoint: undefined,
  questions: undefined,
};
describe("questionsReducer", () => {
  it(`returns the default state from the store when an invalid action is passed`, () => {
    const newState = questionsReducer.quizzard(undefined, "");
    expect(newState).toEqual(emptyState);
  });

  it(`should save endpoint by getting type ${types.GET_ENDPOINT}`, () => {
    const newState = questionsReducer.quizzard(initialState, {
      type: types.GET_ENDPOINT,
      payload: "/questions",
    });
    expect(newState).toEqual({ ...initialState, endpoint: "/questions" });
  });

  it(`should save endpoint by getting type ${types.GET_QUESTIONS}`, () => {
    const newState = questionsReducer.quizzard(initialState, {
      type: types.GET_QUESTIONS,
      payload: [{ path: "/123" }],
    });
    expect(newState).toEqual({
      ...initialState,
      questions: [{ path: "/123" }],
    });
  });
});
