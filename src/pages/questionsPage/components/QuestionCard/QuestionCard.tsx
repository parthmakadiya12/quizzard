import { FC } from "react";
import styled from "styled-components";
import { Button } from "../../../../common";
import { CardTitle, Wrapper } from "../../../../common/styles/layout";
import media from "../../../../common/styles/media";

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
    <QuestionWrapper>
      <CardTitle>Question</CardTitle>
      <Question>{question}</Question>
      <SmallText>{jsDateToFormat(new Date(publishedDate))}</SmallText>
      <SmallText>{noOfChoices} Choices</SmallText>
      <Button text="Vote" clickHandler={clickHandler} />
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled(Wrapper)`
  @media ${media.tablet} {
    margin: 0;
    margin-bottom: 10px;
    display: grid;
    justify-self: center;
  }
`;

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
