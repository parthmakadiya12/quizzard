import CreateQuestionPage from "./CreateQuestionPage";
import renderer from "react-test-renderer";

describe("<CreateQuestionPage>", () => {
  let wrapper: any;

  it("should render page correctly", () => {
    wrapper = renderer.create(<CreateQuestionPage />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
