import { FC } from "react";
import styled from "styled-components";

export interface ButtonProps {
  text?: string;
  children?: any;
  clickHandler: () => void;
}

const Button: FC<ButtonProps> = ({ text, children, clickHandler }) => {
  return <ButtonStyled onClick={clickHandler}>{text || children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  height: 2.5rem;
  min-width: 3rem;
  max-width: 15rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 2rem;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.buttonFontColor};
  background: ${({ theme }) =>
    `linear-gradient(to left, ${theme.color.button} 50%, ${theme.color.buttonSecondry} 50%) right;`};
  background-size: 200%;
  transition: 0.5s ease-out;
  &:hover {
    background-position: left;
  }
`;

export default Button;
