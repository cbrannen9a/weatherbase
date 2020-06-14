import React, { FC } from "react";
import styled from "styled-components";
import Home from "../../links/home";

const HomeLink: FC = () => (
  <HomeLinkContainer>
    <Home>
      <span>Home</span>
    </Home>
  </HomeLinkContainer>
);

const HomeLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export default HomeLink;
