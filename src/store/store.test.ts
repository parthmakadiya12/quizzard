import store from "./store";

it("configures the application store", () => {
  const initialAppState = {
    quizzard: {
      endpoint: undefined,
      questions: undefined,
    },
  };
  expect(store.getState()).toEqual(initialAppState);
});
