import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import QuestionsPage from "./QuestionsPage";
import * as actions from "../redux/actions/quizzardAction";
import { QuestionPageStateType } from "../redux/reducers/quizzardReducer";

interface StateType {
  quizzard: QuestionPageStateType;
}
const mapStateToProps = (state: StateType) => {
  const { quizzard } = state;

  return {
    questions: quizzard.questions,
    endpoint: quizzard.endpoint,
    error: quizzard.error,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ ...actions }, dispatch);

export default compose<React.ComponentType<any>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(QuestionsPage);
