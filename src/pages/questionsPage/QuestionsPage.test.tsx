import QuestionsPage from "./QuestionsPage";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/theme";

describe("<Questions />", () => {
  let props: any, wrapper: any, history: any, pushSpy: any;
  beforeEach(() => {
    props = {
      questions: [
        {
          question: "pokus111",
          choices: [
            {
              choice: "Objective-C",
              votes: 0,
              url: "/questions/22/choices/120",
            },
          ],
          published_at: "2021-07-26T13:10:48.014Z",
          url: "/questions/22",
        },
      ],
    };
    history = createMemoryHistory();
    pushSpy = jest.spyOn(history, "push");
    wrapper = mount(
      <ThemeProvider theme={darkTheme}>
        <Router history={history}>
          <QuestionsPage {...props} />
        </Router>
      </ThemeProvider>
    );
  });
  it("should have correct text rendered", () => {
    const questionsCard = wrapper.find("QuestionCard");
    expect(questionsCard).toBeTruthy();
  });

  it("should change page url by clicking on vote button", () => {
    wrapper.find("button").first().simulate("click");
    expect(pushSpy).toHaveBeenCalledWith("/questions/22");
  });
});
