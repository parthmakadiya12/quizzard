import { FC } from "react";
import styled from "styled-components";

interface PropTypes {
  name: string;
  clickHandler: (name: string, queUrl: string, choiceUrl: string) => void;
  choiceUrl: string;
  queUrl: string;
  checked: boolean;
  selected?: string;
}

export const Radio: FC<PropTypes> = ({
  name,
  choiceUrl,
  queUrl,
  clickHandler,
  checked,
  selected,
}) => {
  const currentActive = checked || selected === name;
  return (
    <div>
      <Label>
        <RadioInput
          value={name}
          type="radio"
          name="radio"
          defaultChecked={currentActive}
        />
        <Span
          onClick={() => clickHandler(name, queUrl, choiceUrl)}
          Checked={currentActive}
        >
          {name}
        </Span>
      </Label>
    </div>
  );
};

const Label = styled.div`
  display: flex;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
`;

const RadioInput = styled.input`
  position: absolute;
  left: -9999px;
`;

const Span = styled("span")<{ Checked: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.375em 0.75em 0.375em 0.375em;
  border-radius: 99em;
  transition: 0.25s ease;
  &:before {
    display: flex;
    flex-shrink: 0;
    content: "";
    background-color: #fff;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-right: 0.375em;
    transition: 0.25s ease;
    box-shadow: ${(props) =>
      props.Checked
        ? `inset 0 0 0 0.4375em ${props.theme.color.title}`
        : `inset 0 0 0 0.125em ${props.theme.color.title}`};
  }
`;
