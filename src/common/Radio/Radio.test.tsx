import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import Radio from "./Radio";
import { darkTheme } from "../../styles/theme";

describe("<Radio>", () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      name: "Option",
      choiceUrl: "/questions/1212/choices/12",
      queUrl: "/questions/12",
      clickHandler: jest.fn(),
      checked: false,
      selected: false,
    };
  });
  it("should render correctly", () => {
    wrapper = renderer
      .create(
        <ThemeProvider theme={darkTheme}>
          <Radio {...props} />
        </ThemeProvider>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should call click handler by cling on radio", () => {
    wrapper = mount(
      <ThemeProvider theme={darkTheme}>
        <Radio {...props} />
      </ThemeProvider>
    );

    wrapper.find("span").simulate("click");
    expect(props.clickHandler).toHaveBeenCalled();
  });
});
