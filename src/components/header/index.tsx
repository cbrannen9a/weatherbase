import React, { FC } from "react";

const Header: FC<Props> = ({ title }) => (
  <header className="header">
    <h2>{title}</h2>
  </header>
);

interface Props {
  title: string;
}

export default Header;
