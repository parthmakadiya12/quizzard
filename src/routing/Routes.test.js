import Routes from "./Routing";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import configureMockStore from "redux-mock-store";

import { darkTheme } from "../styles/theme";
import QuestionsPage from "../pages/questionsPage/QuestionsPage";
import QuestionDetailsPage from "../pages/questionDetailsPage/QuestionDetailsPage";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<Routes/>", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      quizzard: { questions: [], endpoint: "/questions" },
      common: { error: null },
    });
  });

  const createMountedComponent = (path) => {
    return mount(
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <MemoryRouter initialEntries={[path]}>
            <Routes />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
  };
  it("should show Questions component for / router", () => {
    const component = createMountedComponent("/");
    expect(component.find(QuestionsPage)).toHaveLength(1);
  });

  it("should show Questions details page component for /question/123 router", () => {
    const component = createMountedComponent("/questions/12");
    expect(component.find(QuestionDetailsPage)).toHaveLength(1);
  });

  it("should redirect all other routes to /questions page", () => {
    const component = createMountedComponent("/otherRoutes");
    expect(component.find(QuestionsPage)).toHaveLength(1);
  });
});
