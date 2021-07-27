import { useHistory } from "react-router";
import styled from "styled-components";

import { Button } from "../";
import { H1 } from "../styles/typography";
import { paths } from "../../routing/paths";

export const Header = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <H1 onClick={() => history.push("/")}>Quizzard</H1>
      <Button clickHandler={() => history.push(paths.CREATE_QUESTION)}>
        +
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 1rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
