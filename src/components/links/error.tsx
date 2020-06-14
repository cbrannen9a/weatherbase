import React, { FC } from "react";
import StyledLink from "./styled";

const ErrorLink: FC = ({ children }) => (
  <StyledLink to="/" background={"#ec4e20"}>
    {children}
  </StyledLink>
);

export default ErrorLink;
