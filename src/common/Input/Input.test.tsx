import Input, { InputProps } from "./Input";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";

describe("<Input />", () => {
  let props: InputProps, theme: object, wrapper: any;
  beforeEach(() => {
    theme = {
      color: {
        inputColor: "#4a5171",
        inputFontColor: "white",
      },
      type: "dark",
    };
    props = {
      type: "text",
      value: "Current Value",
      placeholder: "Please choose",
      changeHandler: jest.fn(),
      id: "id",
    };
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Input {...props} />
      </ThemeProvider>
    );
  });
  it("should have rendered input correctly", () => {
    const input = wrapper.find("input");
    expect(input).toBeTruthy();
  });

  it("should have call click handler by clicking on button", () => {
    const button = wrapper.find("input");
    const event = {
      preventDefault() {},
      target: { value: "option A" },
    };
    button.simulate("change", event);
    expect(props.changeHandler).toHaveBeenCalledWith("option A", "id");
  });

  it("should render correctly with darkmode", () => {
    const newProps = { ...props, type: undefined };
    const newTheme = { ...theme, type: "light" };
    wrapper = mount(
      <ThemeProvider theme={newTheme}>
        <Input {...newProps} />
      </ThemeProvider>
    ).debug();

    expect(wrapper).toMatchSnapshot();
  });
});
