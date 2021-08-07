import { QuestionType } from "./../../../common/types/QuestionType";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import axios from "../../../utils/http";
import * as types from "../types.json";
import { calculatePercentage } from "../../../common/helpers/questionsDataHelper";
import {
  getEndPoint,
  getQuestions,
  voteOnQuestion,
  getQuestionData,
} from "./quizzardAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("questionsPageActions", () => {
  let store: any, axiosMock: any, questionsData: QuestionType[];

  axiosMock = new MockAdapter(axios);
  beforeEach(() => {
    store = mockStore({
      common: {},
      quizzard: {
        endpoint: "/questions",
      },
    });
    questionsData = [
      {
        question: "Favourite programming language?",
        published_at: "2014-11-11T08:40:51.620Z",
        url: "/questions/1",
        choices: [
          {
            choice: "Swift",
            url: "/questions/1/choices/1",
            votes: 2048,
          },
          {
            choice: "Python",
            url: "/questions/1/choices/2",
            votes: 1024,
          },
        ],
      },
    ];
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
    axiosMock.onGet(`/questions`).reply(200, questionsData);

    await store.dispatch(getQuestions());
    const expectedAction = [
      {
        type: types.GET_QUESTIONS,
        payload: calculatePercentage(questionsData),
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

  it("getQuestionData: should call error handler if call fails", async () => {
    axiosMock.onGet(`/questions/14`).reply(404, {
      response: { data: "data not availible" },
    });
    const expectedAction = [
      {
        payload:
          "Request failed for GET/GET_QUESTION. Please try again later. Error is Request failed with status code 404",
        type: "ERROR",
      },
    ];
    await store.dispatch(getQuestionData("14"));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("getQuestionData: should call error handler if call fails", async () => {
    axiosMock.onGet(`/questions/14`).reply(404, {
      response: { data: "data not availible" },
    });
    const expectedAction = [
      {
        payload:
          "Request failed for GET/GET_QUESTION. Please try again later. Error is Request failed with status code 404",
        type: "ERROR",
      },
    ];
    await store.dispatch(getQuestionData("14"));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("voteOnQuestion: should call error handler if call fails", async () => {
    axiosMock.onGet(`/questions/14/choices/90`).reply(404, {
      response: { data: "Network Error" },
    });
    const expectedAction = [
      {
        payload:
          "Request failed for POST/VOTE. Please try again later. Error is Request failed with status code 404",
        type: "ERROR",
      },
    ];
    await store.dispatch(
      voteOnQuestion("/questions/14/choices/90", "/questions/14")
    );
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("getQuestionData: should dispatch with proper data", async () => {
    axiosMock.onGet(`/questions/14`).reply(200, {
      ...questionsData[0],
    });
    const expectedAction = [
      {
        payload: calculatePercentage([questionsData[0]]),
        type: types.GET_QUESTION,
      },
    ];
    await store.dispatch(getQuestionData("14"));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("voteOnQuestion: should dispatch with proper data", async () => {
    axiosMock.onPost(`/questions/1/choices/1`).reply(200, {
      choice: ".NET",
      url: "/questions/1/choices/1",
      votes: 2,
    });
    store = mockStore({
      common: {},
      quizzard: {
        questions: questionsData,
        endpoint: "/questions",
      },
    });
    const expectedAction = [
      {
        payload: calculatePercentage([questionsData[0]]),
        type: types.VOTE,
      },
    ];
    await store.dispatch(
      voteOnQuestion("/questions/1/choices/1", "/questions/1")
    );
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("getQuestionData: should call getEndpoint if no endpoint found", async () => {
    axiosMock.onGet(`/`).reply(200, { questions_url: "/questions" });
    const store = mockStore({ quizzard: { endpoint: null } });
    await store.dispatch(getQuestionData("14"));
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      payload: "/questions",
      type: types.GET_ENDPOINT,
    });
  });
});
