import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { CardTitle, Wrapper, Row } from "../../common/styles/layout";
import { P } from "../../common/styles/typography";
import { Radio } from "../../common/Radio/Radio";
import { Button } from "../../common";
import { QuestionType } from "../../common/types/QuestionType";
import media from "../../common/styles/media";

export interface PropTypes {
  question?: QuestionType;
  getQuestionData: (id: any) => void;
  voteOnQuestion: (name: string, url: string) => void;
}
const QuestionDetailsPage: FC<PropTypes> = ({
  question,
  voteOnQuestion,
  getQuestionData,
}) => {
  const { questionId } = useParams<{ questionId: string }>();
  const [name, setName] = useState<string>("");
  const [choiceUrl, setChoiceUrl] = useState<string>("");
  const [quesUrl, setQuesUrl] = useState<string>("");

  const clickHandler = (name: string, url: string, queUrl: string) => {
    setName(name);
    setChoiceUrl(url);
    setQuesUrl(queUrl);
  };

  const handleSave = (quesUrl: string, choiceUrl: string) => {
    if (!!quesUrl && !!choiceUrl) {
      voteOnQuestion(quesUrl, choiceUrl);
    }
  };

  useEffect(() => {
    if (!question) {
      getQuestionData(questionId);
    }
  }, []);

  return (
    <WrapperStyled id="questionWrapper">
      <CardTitle>{question && question.question}</CardTitle>
      {question &&
        question.choices.map((option: any) => (
          <Row key={`${option.url}_row`} alignItems={"center"}>
            <Radio
              name={option.choice}
              choiceUrl={option.url}
              queUrl={question.url}
              key={`${option.url}_radio`}
              clickHandler={(name: string, choiceUrl: string, queUrl: string) =>
                clickHandler(name, choiceUrl, queUrl)
              }
              checked={false}
              selected={name}
            />
            <P key={`${option.url}_text`}>{option.percentage}%</P>
          </Row>
        ))}
      <Button clickHandler={() => handleSave(quesUrl, choiceUrl)}>Save</Button>
    </WrapperStyled>
  );
};

const WrapperStyled = styled(Wrapper)`
  & > button {
    margin-top: 1rem;
  }
  @media ${media.tablet} {
    max-width: 600px;
  }
`;

export default QuestionDetailsPage;
