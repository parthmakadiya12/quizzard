import { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getEndPoint } from "../redux/actions/quizzardAction";
import { QuestionCard } from "./components";
import styled from "styled-components";

interface PropTypes {
  questions: any;
  endpoint: string;
  getEndPoint: () => void;
  getQuestions: () => void;
}

const QuestionsPage: FC<PropTypes> = ({
  questions,
  endpoint,
  getEndPoint,
  getQuestions,
}) => {
  const history = useHistory();

  useEffect(() => {
    async function getInitialData() {
      if (!endpoint) {
        await getEndPoint();
      }
      await getQuestions();
    }

    getInitialData();
  }, []);

  return (
    <Wrapper id="questions-list">
      {questions &&
        questions.map((item: any) => {
          return (
            <QuestionCard
              key={item.url}
              question={item.question}
              publishedDate={item.published_at}
              noOfChoices={item.choices.length}
              clickHandler={() => history.push(item.url)}
            />
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
`;

export default QuestionsPage;
