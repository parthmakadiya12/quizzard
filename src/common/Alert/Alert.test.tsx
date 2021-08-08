import Alert, { AlertProps } from "./Alert";
import { act } from "react-dom/test-utils";

describe("<Alert />", () => {
  let props: AlertProps, wrapper: any;
  beforeEach(() => {
    props = {
      text: "Something went wrong",
      children: undefined,
      clearError: jest.fn(),
    };
    wrapper = mount(<Alert {...props} />);
  });
  it("should have rendered Alert correctly", () => {
    const title = wrapper.find("h3").text();
    const message = wrapper.find("p").text();
    expect(title).toBe("Opps ! Error occured.");
    expect(message).toBe("Something went wrong");
  });

  it("should have disappeared Alert after 3500ms", async () => {
    jest.useFakeTimers();
    act(() => {
      wrapper = mount(<Alert {...props} />);
    });
    jest.runAllTimers();

    const title = wrapper.find("h3");
    const message = wrapper.find("p");

    expect(title).toEqual({});
    expect(message).toEqual({});
    expect(props.clearError).toHaveBeenCalled();
  });
});
