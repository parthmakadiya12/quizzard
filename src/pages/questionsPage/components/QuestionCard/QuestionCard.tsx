import { FC } from "react";
import styled from "styled-components";

import { Button } from "../../../../common";
import {
  CardTitle,
  Wrapper,
  SubTitle,
  SmallText,
} from "../../../../common/styles/layout";
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
      <SubTitle>{question}</SubTitle>
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

export default QuestionCard;
