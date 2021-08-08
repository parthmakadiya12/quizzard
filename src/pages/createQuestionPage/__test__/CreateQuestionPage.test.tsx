import CreateQuestionPage from "../CreateQuestionPage";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../../styles/theme";

describe("<CreateQuestionPage />", () => {
  let props: any, wrapper: any, history: any, pushSpy: any;
  beforeEach(() => {
    props = {
      createQuestion: jest.fn(),
      validateResult: jest.fn(),
    };
    history = createMemoryHistory();
    pushSpy = jest.spyOn(history, "push");
    wrapper = mount(
      <ThemeProvider theme={darkTheme}>
        <Router history={history}>
          <CreateQuestionPage {...props} />
        </Router>
      </ThemeProvider>
    );
  });

  it("should have correct title rendered", () => {
    const title = wrapper.find("span").at(0).text();
    expect(title).toBe("Create New Question");
  });

  it("should not call save by clicking save if value are not valid", () => {
    wrapper.find("button").last().simulate("click");
    expect(props.createQuestion).not.toHaveBeenCalledWith({
      choices: [],
      question: "",
    });
  });

  it("should call save by clicking save", async () => {
    props.validateResult.mockReturnValueOnce(true);
    props.createQuestion.mockReturnValueOnce(true);

    const event = {
      preventDefault() {},
      target: { value: "My Input" },
    };
    wrapper.find("input").first().simulate("change", event);
    wrapper.find("input").last().simulate("change", event);
    wrapper.find("button").last().simulate("click");
    await wrapper.update();
    expect(props.createQuestion).toHaveBeenCalledWith({
      choices: ["My Input"],
      question: "My Input",
    });
    expect(pushSpy).toHaveBeenCalledWith("/");
  });

  it("should not redirect if API response is an error", async () => {
    props.validateResult.mockReturnValueOnce(true);
    props.createQuestion.mockReturnValueOnce(false);

    const event = {
      preventDefault() {},
      target: { value: "My Input" },
    };
    wrapper.find("input").first().simulate("change", event);
    wrapper.find("input").last().simulate("change", event);
    wrapper.find("button").last().simulate("click");
    await wrapper.update();
    expect(pushSpy).not.toHaveBeenCalledWith("/");
  });

  it("should update coresponding input box", async () => {
    const event = {
      preventDefault() {},
      target: { value: "My Input" },
    };
    wrapper.find("input").first().simulate("change", event);

    wrapper.find("#optionContainer > FontAwesomeIcon").simulate("click");
    wrapper.find("input").at(1).simulate("change", event);
    wrapper.find("input").at(2).simulate("change", event);
    wrapper
      .find("input")
      .at(2)
      .simulate("change", { ...event, target: { value: "New Val" } });
    await wrapper.update();
    expect(wrapper.find("input").last().props().value).toBe("New Val");
  });

  it("should create another option by clicking on + icon", () => {
    wrapper.find("#optionContainer > FontAwesomeIcon").simulate("click");
    expect(wrapper.find("input").length).toBe(3);
  });

  it("should not delete last option box", () => {
    expect(wrapper.find("input").length).toBe(2);
    wrapper.find("FontAwesomeIcon").at(1).simulate("click");
    expect(wrapper.find("input").length).toBe(2);
  });

  it("should delete input option box if >=2 availible", () => {
    wrapper.find("#optionContainer > FontAwesomeIcon").simulate("click");
    expect(wrapper.find("input").length).toBe(3);
    wrapper.find("FontAwesomeIcon").at(1).simulate("click");
    expect(wrapper.find("input").length).toBe(2);
  });
});
