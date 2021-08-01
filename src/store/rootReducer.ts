import { combineReducers } from "redux";
import common from "../common/redux/commonReducer";
import quizzard from "../pages/redux/reducers/quizzardReducer";

const rootReducer = combineReducers<any>({
  ...quizzard,
  ...common,
});

export default rootReducer;
