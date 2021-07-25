import { Route, Switch } from "react-router-dom";
import QuestionDetailsPage from "../pages/questionDetailsPage/QuestionDetailsPage";
import QuestionsPage from "../pages/questionsPage/QuestionsPage";
import { paths } from "./paths";

export default function Routing() {
  return (
    <Switch>
      <Route exact path={paths.QUESTION} component={QuestionDetailsPage} />
      <Route exact path={paths.QUESTIONS} component={QuestionsPage} />
      <Route path={paths.BASE} component={QuestionsPage} />
    </Switch>
  );
}
