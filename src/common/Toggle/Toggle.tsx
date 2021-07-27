import { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Toggle: FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <Wrapper
      id="toggle-theme"
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme === "dark" ? (
        <FontAwesomeIcon id="toggle-sun" size="lg" icon="sun" />
      ) : (
        <FontAwesomeIcon id="toggle-moon" size="lg" icon="moon" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: 0.8;
`;

export default Toggle;
