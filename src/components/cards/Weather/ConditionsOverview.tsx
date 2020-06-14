import React, { FC } from "react";
import styled from "styled-components";

const ConditionsOverview: FC<Props> = ({ temperature, conditions }) => (
  <Container>
    <Temp>{temperature}</Temp>
    <Conditions>{conditions}</Conditions>
  </Container>
);

interface Props {
  temperature: string;
  conditions: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Temp = styled.span`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Conditions = styled.span`
  font-size: 1.2em;
`;

export default ConditionsOverview;
