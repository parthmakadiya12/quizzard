import commonReducer, { initialState } from "../commonReducer";
import * as types from "../types.json";

const emptyState = {
  error: undefined,
};
describe("commonReducer", () => {
  it(`returns the default state from the store when an invalid action is passed`, () => {
    const newState = commonReducer.common(undefined, "");
    expect(newState).toEqual(emptyState);
  });

  it(`returns the proper error when ${types.ERROR} action is dispatched`, () => {
    const newState = commonReducer.common(initialState, {
      type: types.ERROR,
      payload: "User is Unauthorised.",
    });
    expect(newState).toEqual({
      ...initialState,
      error: "User is Unauthorised.",
    });
  });
});
