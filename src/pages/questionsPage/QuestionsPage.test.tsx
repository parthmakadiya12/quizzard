import QuestionsPage from "./QuestionsPage";

describe("<Q />", () => {
  it("should have correct text rendered", () => {
    const wrapper = shallow(<QuestionsPage />);
    const text = wrapper.find("div").text();
    expect(text).toBe("QuestionsPage");
  });
});
