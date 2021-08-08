import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button, Radio } from "../../common";
import { P } from "../../common/styles/typography";
import { QuestionType } from "../../common/types/QuestionType";
import { CardTitle, Row, BigQuestionWrapper } from "../../common/styles/layout";

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
  }, [question, getQuestionData, questionId]);

  return (
    <BigQuestionWrapper id="questionWrapper">
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
            <P
              id={`${option.choice}_percentage`}
              key={`${option.url}_percentage`}
            >
              {option.percentage}%
            </P>
          </Row>
        ))}
      <Button clickHandler={() => handleSave(quesUrl, choiceUrl)}>Save</Button>
    </BigQuestionWrapper>
  );
};

export default QuestionDetailsPage;
