import questionsReducer, { initialState } from "../reducers/quizzardReducer";
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

  it(`should update votes by dispatching ${types.VOTE}`, () => {
    const newState = questionsReducer.quizzard(initialState, {
      type: types.VOTE,
      payload: [{ path: "/123" }],
    });
    expect(newState).toEqual({
      ...initialState,
      questions: [{ path: "/123" }],
    });
  });

  it(`should update question by dispatching ${types.GET_QUESTION}`, () => {
    const newState = questionsReducer.quizzard(initialState, {
      type: types.GET_QUESTION,
      payload: [{ path: "/123" }],
    });
    expect(newState).toEqual({
      ...initialState,
      questions: [{ path: "/123" }],
    });
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

  it(`returns the proper error when ${types.ERROR} action is dispatched`, () => {
    const newState = questionsReducer.quizzard(initialState, {
      type: types.ERROR,
      payload: "User is Unauthorised.",
    });
    expect(newState).toEqual({
      ...initialState,
      error: "User is Unauthorised.",
    });
  });

  it(`should remove error by getting type ${types.ERROR_CLEAR}`, () => {
    const newState = questionsReducer.quizzard(initialState, {
      type: types.ERROR_CLEAR,
    });
    expect(newState).toEqual({ ...initialState, error: null });
  });
});
