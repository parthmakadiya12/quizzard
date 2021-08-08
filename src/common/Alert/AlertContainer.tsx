import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Alert from "./Alert";
import * as actions from "../../pages/redux/actions/quizzardAction";
import { QuestionPageStateType } from "../../pages/redux/reducers/quizzardReducer";

interface StateType {
  quizzard: QuestionPageStateType;
}
const mapStateToProps = (state: StateType) => {
  const { quizzard } = state;

  return {
    text: quizzard.error,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ ...actions }, dispatch);

export default compose<React.ComponentType<any>>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Alert);
