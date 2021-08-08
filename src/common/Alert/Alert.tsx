import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { H3 } from "../styles/typography";

export interface AlertProps {
  text?: string | number;
  children?: string | number;
  clearError: () => void;
}

const Alert: FC<AlertProps> = ({ text, children, clearError }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (text) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        clearError();
      }, 3500);
    }
  }, [text, clearError]);
  return (
    <>
      {show && (
        <ErrorAlert>
          <H3>Opps ! Error occured.</H3>
          <p>{text}</p>
        </ErrorAlert>
      )}
    </>
  );
};

const ErrorAlert = styled.span`
  background-color: white;
  padding: 15px;
  opacity: 0.7;
  min-height: 63px;
  width: 85%;
  position: absolute;
  bottom: 10px;
  color: #842c2c;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

export default Alert;
