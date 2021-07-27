import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import axios from "../../../utils/http";
import * as types from "../types.json";
import { getEndPoint, getQuestions } from "./questionsPageAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("questionsPageActions", () => {
  let store: any, axiosMock: any;

  axiosMock = new MockAdapter(axios);
  beforeEach(() => {
    store = mockStore({
      common: {},
      quizzard: {
        endpoint: "/questions",
      },
    });
  });

  afterEach(() => {
    axiosMock.reset();
  });

  it("getEndPoint: should dispatch proper type with payload", async () => {
    axiosMock.onGet(`/`).reply(200, {
      questions_url: "/questions",
    });

    await store.dispatch(getEndPoint());
    const expectedAction = [
      {
        type: types.GET_ENDPOINT,
        payload: "/questions",
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("getEndPoint: should call error handler if call fails", async () => {
    axiosMock.onGet(`/`).reply(404, {
      response: { data: "User unauthenticated" },
    });
    const expectedAction = [
      {
        payload:
          "Request failed for GET/GET_ENDPOINT. Please try again later. Error is Request failed with status code 404",
        type: "ERROR",
      },
    ];
    await store.dispatch(getEndPoint());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("getQuestions: should dispatch proper type with payload", async () => {
    axiosMock.onGet(`/questions`).reply(200, [{ path: "/que/path" }]);

    await store.dispatch(getQuestions());
    const expectedAction = [
      {
        type: types.GET_QUESTIONS,
        payload: [{ path: "/que/path" }],
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("getQuestions: should call error handler if call fails", async () => {
    axiosMock.onGet(`/questions?page=4`).reply(404, {
      response: { data: "User unauthenticated" },
    });
    const expectedAction = [
      {
        payload:
          "Request failed for GET/GET_QUESTIONS. Please try again later. Error is Request failed with status code 404",
        type: "ERROR",
      },
    ];
    await store.dispatch(getQuestions(4));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
