import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Row } from "../styles/layout";
import Input from "../Input/Input";

export interface InputOptionType {
  value?: string;
  changeHandler: (value: any, id?: string | number) => void;
  deleteOption: (id: string | number) => void;
  id: string | number;
}

const InputOption: FC<InputOptionType> = ({
  value,
  changeHandler,
  deleteOption,
  id,
}) => {
  return (
    <Wrapper alignItems="center">
      <Input
        value={value}
        type="text"
        placeholder="Please create option"
        id={id}
        changeHandler={changeHandler}
      />
      <FontAwesomeIcon
        onClick={() => deleteOption(id)}
        size="sm"
        icon="trash"
      />
    </Wrapper>
  );
};

const Wrapper = styled(Row)`
  & > Input {
    margin-right: 15px;
    min-width: 60%;
  }
`;

export default InputOption;
