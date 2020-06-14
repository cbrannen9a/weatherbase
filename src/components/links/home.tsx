import React, { FC } from "react";
import StyledLink from "./styled";

const HomeLink: FC = ({ children }) => (
  <StyledLink to="/" background={"#a8a8a8"}>
    {children}
  </StyledLink>
);

export default HomeLink;
