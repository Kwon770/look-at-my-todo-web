import React from "react";
import styled from "styled-components";

const TimeData = ({ closingDate, closingTime }) => {
  return (
    <Text>
      {closingDate}/{closingTime}
    </Text>
  );
};

const Text = styled.h3`
  color: ${(props) => props.theme.panelFont2Color};
  font-size: 14px;
  margin-top: 4px;
  opacity: 0.8;
`;

export default TimeData;
