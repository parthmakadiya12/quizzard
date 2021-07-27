import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "../../../utils/http";
import { errorHandling } from "../commonActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("errorHandling", () => {
  let store: any, axiosMock: any;

  beforeEach(() => {
    store = mockStore({
      common: {},
    });
  });

  it("should dispatch proper error", async () => {
    const res = errorHandling("GET_DATA", {
      message: "User is unauthorised.",
    });
    expect(res).toEqual({
      payload:
        "Request failed for GET_DATA. Please try again later. Error is User is unauthorised.",
      type: "ERROR",
    });
  });

  it("should dispatch with title if message not avalible", async () => {
    const res = errorHandling("GET_DATA", {
      title: "User is unauthorised.",
    });
    expect(res).toEqual({
      payload:
        "Request failed for GET_DATA. Please try again later. Error is User is unauthorised.",
      type: "ERROR",
    });
  });

  it("should dispatch with generic message if no details avalible", async () => {
    const res = errorHandling("GET_DATA", {});
    expect(res).toEqual({
      payload: "Request failed for GET_DATA. Please try again later. ",
      type: "ERROR",
    });
  });
});
