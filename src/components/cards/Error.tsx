import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../icon";
import CardContainer from "./base";
import ErrorLink from "../links/error";

const Error: FC = () => (
  <CardContainer>
    <ErrorCard>
      <ErrorHeaderContainer>Location Not Found</ErrorHeaderContainer>
      <Icon icon="NO_LOCATION" />
      <ErrorLinkContainer>
        <ErrorLink>
          <span>Try Again</span>
        </ErrorLink>
      </ErrorLinkContainer>
    </ErrorCard>
  </CardContainer>
);

const ErrorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 3rem 0;
`;

const ErrorLinkContainer = styled.div`
  margin-top: 3rem;
`;

const ErrorHeaderContainer = styled.h1`
  font-size: 1.5rem;
  margin: 3rem 0 3rem 0;
`;

export default Error;
