import InputOption, { InputOptionType } from "./InputOption";
import { ThemeProvider } from "styled-components";

describe("<InputOption />", () => {
  let props: InputOptionType, theme: object, wrapper: any;
  beforeEach(() => {
    theme = {
      color: {
        inputColor: "#4a5171",
        inputFontColor: "white",
      },
      type: "dark",
    };
    props = {
      value: "value",
      changeHandler: jest.fn(),
      deleteOption: jest.fn(),
      id: "123",
    };
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <InputOption {...props} />
      </ThemeProvider>
    );
  });
  it("should have rendered InputOption correctly", () => {
    const input = wrapper.find("input");
    const icon = wrapper.find("FontAwesomeIcon");
    expect(input).toBeTruthy();
    expect(icon).toBeTruthy();
  });

  it("should call delete handler by clicking on trash icon", () => {
    const icon = wrapper.find("FontAwesomeIcon");
    icon.simulate("click");
    expect(props.deleteOption).toHaveBeenCalledWith("123");
  });
});
