import { Button, ButtonProps } from "./Button";
import { ThemeProvider } from "styled-components";

describe("<Button />", () => {
  let props: ButtonProps, theme: object, wrapper: any;
  beforeEach(() => {
    theme = {
      color: {
        button: "green",
        buttonFontColor: "white",
      },
    };
    props = {
      text: "Submit",
      clickHandler: jest.fn(),
    };
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Button {...props} />
      </ThemeProvider>
    );
  });
  it("should have rendered button correctly", () => {
    const button = wrapper.find("button");
    expect(button).toBeTruthy();
  });

  it("should have call click handler by clicking on button", () => {
    const button = wrapper.find("button");
    button.simulate("click");
    expect(props.clickHandler).toHaveBeenCalled();
  });

  it("should have rendered button correctly with value passed as children", () => {
    const newProps: any = { ...props, text: null, children: "Submit" };
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Button {...newProps}></Button>
      </ThemeProvider>
    );
    const button = wrapper.find("button");
    expect(button).toBeTruthy();
  });
});
