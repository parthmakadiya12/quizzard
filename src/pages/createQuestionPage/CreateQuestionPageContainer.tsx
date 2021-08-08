import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CreateQuestionPage from "./CreateQuestionPage";
import * as actions from "../redux/actions/quizzardAction";

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ ...actions }, dispatch);

export default compose<React.ComponentType<any>>(
  withRouter,
  connect(null, mapDispatchToProps)
)(CreateQuestionPage);
