import React, { FC } from "react";
import styled from "styled-components";

const Header: FC<Props> = ({ title }) => (
  <StyledHeader>
    <h2>{title}</h2>
  </StyledHeader>
);

interface Props {
  title: string;
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export default Header;
