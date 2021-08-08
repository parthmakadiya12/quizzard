import { ThemeProvider } from "styled-components";
import "jest-styled-components";

import QuestionCard from "./QuestionCard";
import { darkTheme, lightTheme } from "../../../../styles/theme";

describe("<QuestionCard />", () => {
  let props: any, wrapper: any;
  beforeEach(() => {
    props = {
      question:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus in velit temporibus cumque quidem ipsa hic quos ?",
      publishedDate: "July 21,2021",
      noOfChoices: 4,
      clickHandler: jest.fn(),
    };
    wrapper = mount(
      <ThemeProvider theme={darkTheme}>
        <QuestionCard {...props} />
      </ThemeProvider>
    );
  });
  it("should have rendered questioncard correctly", () => {
    const items = wrapper.find("QuestionCard").first().find("span");

    expect(items.at(0).text()).toBe("Question");
    expect(items.at(1).text()).toBe(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus in velit temporibus cumque quidem ipsa hic quos ?"
    );
    expect(items.at(2).text()).toBe("Wednesday, July 21, 2021");
    expect(items.at(3).text()).toBe("4 Choices");
  });

  it("should have call click handler by clicking on button", () => {
    const button = wrapper.find("button");
    button.simulate("click");
    expect(props.clickHandler).toHaveBeenCalled();
  });

  it("should have different style if theme is light", () => {
    wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <QuestionCard {...props} />
      </ThemeProvider>
    );
    expect(wrapper.find("div").first()).toHaveStyleRule("border", "none");
  });
});
