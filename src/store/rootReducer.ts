import { combineReducers } from "redux";
import common from "../common/redux/commonReducer";
import quizzard from "../pages/questionsPage/reducers/questionsPageReducer";

const rootReducer = combineReducers({ ...quizzard, ...common });

export default rootReducer;
