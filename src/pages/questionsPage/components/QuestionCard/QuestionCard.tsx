import { FC } from "react";
import styled from "styled-components";
import { Button } from "../../../../common";
import { CardTitle, Wrapper } from "../../../../common/styles/layout";
import { jsDateToFormat } from "../../../../utils/dateUtils";
interface PropTypes {
  question: string;
  publishedDate: string;
  noOfChoices: string | number;
  clickHandler: () => void;
}

const QuestionCard: FC<PropTypes> = ({
  question,
  publishedDate,
  noOfChoices,
  clickHandler,
}) => {
  return (
    <Wrapper>
      <CardTitle>Question</CardTitle>
      <Question>{question}</Question>
      <SmallText>{jsDateToFormat(new Date(publishedDate))}</SmallText>
      <SmallText>{noOfChoices} Choices</SmallText>
      <Button text="Vote" clickHandler={clickHandler} />
    </Wrapper>
  );
};

const Question = styled.span`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

const SmallText = styled.span`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.fontSecondry};
`;

export default QuestionCard;
