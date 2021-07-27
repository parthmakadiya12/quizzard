import { FC } from "react";
import styled from "styled-components";
import { Button } from "../../../../common";

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
      <Header>Question</Header>
      <Question>{question}</Question>
      <SmallText>{publishedDate}</SmallText>
      <SmallText>{noOfChoices} Choices</SmallText>
      <Button text="Vote" clickHandler={clickHandler} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.cardBackGround};
  border: 3px solid #21486b;
  border-radius: 0.8rem;
  padding: 2rem;
  margin: 0.5rem;
  ${({ theme }) =>
    theme.type === "light" &&
    `
        border:none;
        box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    `}
`;

const Header = styled.span`
  color: ${({ theme }) => theme.color.headerColor};
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  background-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.color.headerColor} 33%, rgba(255,255,255,0) 0%)`};
  background-position: bottom;
  background-size: 0.5rem 0.2rem;
  background-repeat: repeat-x;
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
