import React, { FC } from "react";
import styled from "styled-components";

const Instructions: FC<Props> = ({ text }) => (
  <StyledInstructions>
    <p>{text}</p>
  </StyledInstructions>
);

interface Props {
  text: string;
}

const StyledInstructions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9em;
  color: white;
`;

export default Instructions;
