import React, { FC } from "react";
import styled from "styled-components";

const Card: FC = ({ children }) => (
  <CardContainer>
    <StyledCard>{children}</StyledCard>
  </CardContainer>
);

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #797979;
  margin: 2rem;
`;

const StyledCard = styled.div`
  min-height: 360px;
  padding: 0 10rem;
  background: #fff;
  box-shadow: 1px 1px 4px #333;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 1rem;

  @media (max-width: 320px) {
    min-width: 250px;
    padding: 0rem 0.5rem 1.5rem 0.5rem;
  }
`;

export default Card;
