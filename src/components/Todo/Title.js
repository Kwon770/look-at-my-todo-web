import React from "react";
import styled from "styled-components";

const Title = ({ completed, title }) => {
  return <Text completed={completed}>{title}</Text>;
};

const Text = styled.h3`
  text-decoration-line: ${(props) =>
    props.completed === "true" ? "line-through" : ""};
  text-decoration-thickness: 1.5px;
  color: ${(props) =>
    props.completed === "true"
      ? props.theme.panelBg3Color
      : props.theme.panelFontColor};
  font-size: 18px;
`;

export default Title;
