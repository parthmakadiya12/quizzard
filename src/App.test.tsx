import App from './App';

describe('<App/>', () => {
  it('should change theme by clicking on icon', () => {
    const wrapper = mount(<App />)
    const child = wrapper.find("div#toggle-theme")
    expect(wrapper.find("#toggle-sun")).toBeTruthy();
    //check if condition
    child.simulate("click");
    expect(wrapper.find("#toggle-moon")).toBeTruthy();

    // check else condition
    child.simulate("click");
    expect(wrapper.find("#toggle-sun")).toBeTruthy();
  });
});