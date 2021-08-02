import renderer from "react-test-renderer";
import QuestionDetailsPage, { PropTypes } from "./QuestionDetailsPage";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/theme";
import "jest-styled-components";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    questionId: "12",
  }),
  useRouteMatch: () => ({ url: "/questions/12/" }),
}));

describe("<QuestionsDetailsPage>", () => {
  let props: PropTypes;
  beforeEach(() => {
    props = {
      question: {
        choices: [
          {
            choice: "Swift",
            percentage: 53.33,
            url: "/questions/1/choices/1",
            votes: 2048,
          },
          {
            choice: "Python",
            percentage: 26.67,
            url: "/questions/1/choices/2",
            votes: 1024,
          },
          {
            choice: "Objective-C",
            percentage: 13.33,
            url: "/questions/1/choices/3",
            votes: 512,
          },
          {
            choice: "Ruby",
            percentage: 6.67,
            url: "/questions/1/choices/4",
            votes: 256,
          },
        ],
        published_at: "2014-11-11T08:40:51.620Z",
        question: "Favourite programming language?",
        url: "/questions/1",
      },
      getQuestionData: jest.fn(),
      voteOnQuestion: jest.fn(),
    };
  });
  it("should render correctly", () => {
    const wrapper = mount(
      <ThemeProvider theme={darkTheme}>
        <QuestionDetailsPage {...props} />
      </ThemeProvider>
    ).debug();
    expect(wrapper).toMatchSnapshot();
  });

  it("should not call voteOnQuestion if none of the radio is selected", () => {
    const wrapper = mount(
      <ThemeProvider theme={darkTheme}>
        <QuestionDetailsPage {...props} />
      </ThemeProvider>
    );
    wrapper.find("button").simulate("click");
    expect(props.voteOnQuestion).not.toHaveBeenCalled();
  });

  it("should call voteOnQuestion by clicking vote button", () => {
    const wrapper = mount(
      <ThemeProvider theme={darkTheme}>
        <QuestionDetailsPage {...props} />
      </ThemeProvider>
    );
    wrapper.find("span").at(1).simulate("click");
    wrapper.find("button").simulate("click");
    expect(props.voteOnQuestion).toHaveBeenCalledWith(
      "/questions/1/choices/1",
      "/questions/1"
    );
  });

  it("should call getQuestionData if user visits child page directly", () => {
    const newProps = { ...props, question: undefined };
    const wrapper = mount(
      <ThemeProvider theme={darkTheme}>
        <QuestionDetailsPage {...newProps} />
      </ThemeProvider>
    );

    expect(props.getQuestionData).toHaveBeenCalled();
  });
});
