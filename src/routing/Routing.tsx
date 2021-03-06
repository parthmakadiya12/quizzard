import { Route, Switch } from "react-router-dom";
import QuestionDetailsPage from "../pages/questionDetailsPage/QuestionDetailsPageContainer";
import QuestionsPage from "../pages/questionsPage/QuestionsPageContainer";
import CreateQuestionPage from "../pages/createQuestionPage/CreateQuestionPageContainer";
import { paths } from "./paths";
import { Header } from "../common/";
import Alert from "../common/Alert/AlertContainer";

export default function Routing() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={paths.QUESTION} component={QuestionDetailsPage} />
        <Route exact path={paths.QUESTIONS} component={QuestionsPage} />
        <Route
          exact
          path={paths.CREATE_QUESTION}
          component={CreateQuestionPage}
        />
        <Route path={paths.BASE} component={QuestionsPage} />
      </Switch>
      <Alert />
    </>
  );
}
