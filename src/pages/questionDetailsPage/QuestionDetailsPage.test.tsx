import QuestionDetailsPage from "./QuestionDetailsPage";

describe("<QuestionDetailsPage />", () => {
  it("should have correct text rendered", () => {
    const wrapper = shallow(<QuestionDetailsPage />);
    const text = wrapper.find("div").text();
    expect(text).toBe("QuestionDetailsPage");
  });
});
