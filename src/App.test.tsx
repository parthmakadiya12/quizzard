import App from './App';

describe('<App/>', () => {
  it('should have routing component', () => {
    const wrapper=shallow(<App/>)
    const child=wrapper.find("div").children();
    expect(child).toBeTruthy();
  });
});