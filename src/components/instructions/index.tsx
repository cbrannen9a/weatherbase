import React, { FC } from "react";

const Instructions: FC<Props> = ({ text }) => (
  <div className="instructions">
    <p>{text}</p>
  </div>
);

interface Props {
  text: string;
}

export default Instructions;
