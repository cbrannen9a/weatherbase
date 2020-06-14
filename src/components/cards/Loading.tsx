import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import Icon from "../icon";
import CardContainer from "./base";

const Loading: FC = () => (
  <CardContainer>
    <Holder>
      <LoadingCard>
        <Icon icon="LOADING" />
      </LoadingCard>
    </Holder>
  </CardContainer>
);

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0rem;
`;

const LoadingCard = styled.div`
  width: 6rem;
  animation: ${rotate} 2s linear infinite;
`;

export default Loading;
