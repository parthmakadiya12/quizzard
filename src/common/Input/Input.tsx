import React, { FC } from "react";
import styled from "styled-components";

export interface InputProps {
  type: string;
  value?: string | number;
  placeholder: string;
  changeHandler: (e: any, id?: string | number) => void;
  id?: string | number;
}

const Input: FC<InputProps> = ({
  type = "text",
  value,
  placeholder,
  changeHandler,
  id,
}) => {
  return (
    <InputStyled
      type={type}
      placeholder={placeholder}
      value={value || ""}
      onChange={(e) => changeHandler(e.target.value, id)}
    />
  );
};

const InputStyled = styled.input`
  height: 30px;
  outline: none;
  padding: 0 10px;
  border: ${({ theme }) =>
    theme.type === "dark" ? "none" : "1px solid black"};
  background-color: ${({ theme }) => theme.color.inputColor};
  color: ${({ theme }) => theme.color.inputFontColor};
  &::placeholder {
    color: ${({ theme }) => theme.color.inputFontColor};
    opacity: 0.6;
  }
`;

export default Input;
