import { shallow } from 'enzyme';
import App from './App';

describe('<App/>', () => {
  it('should have hello world text', () => {
    const wrapper=shallow(<App/>)
    const text=wrapper.find("div").text();
    expect(text).toBe("Hello World")
  });
});