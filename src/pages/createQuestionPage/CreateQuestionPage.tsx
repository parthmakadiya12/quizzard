import { FC, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  BigQuestionWrapper,
  CardTitle,
  SubTitle,
  Row,
} from "../../common/styles/layout";
import { Button, Input, InputOption } from "../../common";
import { CreateQuestionType } from "../../common/types/CreateQuestionType";
interface PropType {
  createQuestion: (data: object) => Promise<boolean>;
  validateResult: (data: object) => boolean;
}
const CreateQuestionPage: FC<PropType> = ({
  createQuestion,
  validateResult,
}) => {
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<any>([]);
  const history = useHistory();

  useEffect(() => {
    createNewOption();
  }, []);

  const createNewOption = () => {
    const id = Date.now();
    setOptions((prev: any) => [...prev, { id }]);
  };

  const deleteOption = (id: string | number) => {
    if (options.length !== 1) {
      setOptions(options.filter((option: any) => option.id !== id));
    }
  };

  const onOptionChange = (value: string | number, id?: string | number) => {
    const optionsCopy = [...options];
    optionsCopy.forEach((option: any) => {
      if (option.id === id) option.value = value;
    });
    setOptions(optionsCopy);
  };

  const handleSave = async (event: any) => {
    event.preventDefault();
    const result: CreateQuestionType = { question, choices: [] };
    options.forEach((option: any) => {
      if (
        option.value !== null &&
        option.value !== undefined &&
        option.value.trim() !== ""
      ) {
        result.choices.push(option.value);
      }
    });
    if (validateResult(result)) {
      const response = await createQuestion(result);
      if (response) history.push("/");
    }
  };

  return (
    <BigQuestionWrapper>
      <CardTitle id="createQueTitle">Create New Question</CardTitle>
      <Form id="createQuestionForm">
        <SubTitle>Question</SubTitle>
        <Input
          type="text"
          placeholder="Please create question."
          value={question}
          changeHandler={setQuestion}
        />
        <OptionWrapper id="optionContainer" alignItems="center">
          <SubTitle>Options</SubTitle>
          <FontAwesomeIcon
            onClick={() => createNewOption()}
            size="sm"
            icon="plus-circle"
          />
        </OptionWrapper>

        {options.map((option: any) => (
          <InputOption
            key={option.id}
            id={option.id}
            value={option.value}
            changeHandler={onOptionChange}
            deleteOption={deleteOption}
          />
        ))}
        <Button clickHandler={handleSave}>Save</Button>
      </Form>
    </BigQuestionWrapper>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 10px;
  }
`;

const OptionWrapper = styled(Row)`
  & > * {
    margin-right: 10px;
  }
`;

export default CreateQuestionPage;
