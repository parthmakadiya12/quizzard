import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import QuestionsPage from "./QuestionsPage";
import * as actions from "./actions/questionsPageAction";
import { QuestionPageStateType } from "./reducers/questionsPageReducer";
import { CommonStateTypes } from "../../common/redux/commonReducer";

interface StateType {
  quizzard: QuestionPageStateType;
  common: CommonStateTypes;
}
const mapStateToProps = (state: StateType) => {
  const { quizzard, common } = state;

  return {
    questions: quizzard.questions,
    endpoint: quizzard.endpoint,
    error: common.error,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ ...actions }, dispatch);

export default compose<React.ComponentType<any>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(QuestionsPage);
