// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import registerIcons from "./registerFaIcons";

Enzyme.configure({ adapter: new Adapter() });
registerIcons();

global.shallow = shallow;
global.mount = mount;
