import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)<Props>`
  padding: 0.75rem;
  margin: 0.5rem;
  border-radius: 2px;
  border: none;
  background: ${(props) => props?.background ?? "#fff"};
  color: #fff;
  box-shadow: 1px 1px 4px #333;
  text-decoration: none;
`;

interface Props {
  background: string;
}

export default StyledLink;
