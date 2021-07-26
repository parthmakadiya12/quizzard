import { combineReducers } from "redux";
import questionsReducer from "../pages/questionsPage/reducers/questionsPageReducer";
const rootReducer = combineReducers({ ...questionsReducer });

export default rootReducer;
