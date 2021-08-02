import { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getEndPoint } from "../redux/actions/quizzardAction";
import { QuestionCard } from "./components";
import styled from "styled-components";
import media from "../../common/styles/media";
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
  margin: 10px;
  @media ${media.tablet} {
    min-width: 560px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px 30px;
    max-width: 1000px;
    margin: auto;
  }
`;

export default QuestionsPage;
