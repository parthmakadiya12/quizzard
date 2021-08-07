import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import QuestionDetailsPage from "./QuestionDetailsPage";
import * as actions from "../redux/actions/quizzardAction";
import { QuestionPageStateType } from "../redux/reducers/quizzardReducer";
import { questionSelector } from "../../common/helpers/questionsDataHelper";

interface StateType {
  quizzard: QuestionPageStateType;
}

const mapStateToProps = (state: StateType) => {
  const { quizzard } = state;
  return {
    question: questionSelector(quizzard.questions),
    error: quizzard.error,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ ...actions }, dispatch);

export default compose<React.ComponentType<any>>(
  connect(mapStateToProps, mapDispatchToProps)
)(QuestionDetailsPage);
