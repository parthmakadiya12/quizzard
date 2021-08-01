import styled, { css } from "styled-components";

export const Row = styled.div<any>`
  display: flex;
  flex-direction: row;
  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled(Col)`
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

export const CardTitle = styled.span`
  color: ${({ theme }) => theme.color.headerColor};
  width: 100%;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  background-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.color.headerColor} 33%, rgba(255,255,255,0) 0%)`};
  background-position: bottom;
  background-size: 0.5rem 0.2rem;
  background-repeat: repeat-x;
`;
