import { combineReducers } from "redux";
import quizzard from "../pages/redux/reducers/quizzardReducer";

const rootReducer = combineReducers<any>({ ...quizzard });

export default rootReducer;
