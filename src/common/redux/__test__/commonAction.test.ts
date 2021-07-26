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
    await store.dispatch(
      errorHandling("GET_DATA", { response: { data: "User is unauthorised." } })
    );
  });
});
