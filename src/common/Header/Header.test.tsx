import Header from "./Header";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";

describe("<Header />", () => {
  let props: any, theme: object, wrapper: any, history: any, pushSpy: any;
  beforeEach(() => {
    theme = {
      color: {
        button: "green",
        buttonFontColor: "white",
      },
    };

    history = createMemoryHistory();
    pushSpy = jest.spyOn(history, "push");
    wrapper = mount(
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </Router>
    );
  });
  it("should have rendered header correctly", () => {
    const header = wrapper.find("h1");
    expect(header.text()).toBe("Quizzard");
  });

  it("should go to create-question page by clicking on button", () => {
    const button = wrapper.find("button");
    button.simulate("click");
    expect(pushSpy).toHaveBeenCalledWith("/create-question");
  });

  it("should go to home page by clicking on title", () => {
    const title = wrapper.find("h1");
    title.simulate("click");
    expect(pushSpy).toHaveBeenCalledWith("/");
  });
});
