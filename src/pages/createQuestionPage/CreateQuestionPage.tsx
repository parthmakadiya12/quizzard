import { H3, H4, P } from "../../common/styles/typography";
import styled from "styled-components";

const CreateQuestionPage = () => {
  return (
    <Wrapper>
      <H3>Create New Question</H3>
      <form>
        <H4>Question</H4>
        <P>TODO: Future versions</P>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto 1rem;
`;

export default CreateQuestionPage;
