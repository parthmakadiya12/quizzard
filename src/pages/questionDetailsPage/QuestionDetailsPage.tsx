import { FC, useState, useEffect } from "react";
import styled from "styled-components";

import { CardTitle, Wrapper, Row } from "../../common/styles/layout";
import { P } from "../../common/styles/typography";
import { Radio } from "../../common/Radio/Radio";
import { Button } from "../../common";
import { QuestionType } from "../../common/types/QuestionType";

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
      const currentUrl = window.location.pathname;
      const questionIdRegex = new RegExp(`[^\/questions\/][0-9]*$`, "g");
      const questionId = currentUrl.match(questionIdRegex);
      getQuestionData(questionId);
    }
  }, []);

  return (
    <WrapperStyled>
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
`;

export default QuestionDetailsPage;
