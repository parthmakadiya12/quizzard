import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";
import configureMockStore from "redux-mock-store";

import { darkTheme } from "../../../styles/theme";
import CreateQuestionPage from "../CreateQuestionPageContainer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<CreateQuestionPageContainer />", () => {
  let props: any, wrapper: any, store: any, history: any;
  beforeEach(() => {
    store = mockStore({
      quizzard: {},
    });
    props = {
      createQuestion: jest.fn(),
      validateResult: jest.fn(),
    };
    history = createMemoryHistory();
    wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <Router history={history}>
            <CreateQuestionPage {...props} />
          </Router>
        </ThemeProvider>
      </Provider>
    );
  });

  it("should render page correctly", () => {
    expect(wrapper.find("#createQueTitle").last().text()).toBe(
      "Create New Question"
    );
    expect(wrapper.find("input").length).toBe(2);
  });
});
