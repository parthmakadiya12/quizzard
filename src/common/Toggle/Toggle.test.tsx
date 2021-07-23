import Toggle from "./Toggle";

describe('<Toggle>', () => {
    it('should call click handler by clicking on icon', () => {
        const clickHandler = jest.fn();
        const wrapper = shallow(<Toggle theme="light" toggleTheme={clickHandler} />);
        wrapper.find("#toggle-theme").simulate("click");
        expect(wrapper.find("#toggle-moon")).toBeTruthy();
        expect(clickHandler).toHaveBeenCalled();
    });
    it('should have sun icon if theme is dark', () => {
        const wrapper = shallow(<Toggle theme="dark" toggleTheme={jest.fn()} />);
        expect(wrapper.find("#toggle-sun")).toBeTruthy();
    });
});