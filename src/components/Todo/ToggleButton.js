import React from "react";
import styled from "styled-components";

const FilledCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.hl2Color};
`;

const Icon = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: solid 1px
    ${(props) =>
      props.completed === true
        ? props.theme.hl2Color
        : props.theme.panelBg3Color};
  cursor: pointer;
`;

const ToggleButton = ({ completed, onClick, immuatable }) => {
  return (
    <Icon completed={completed} onClick={immuatable === true ? "" : onClick}>
      {completed === "true" ? <FilledCircle /> : ""}
    </Icon>
  );
};

export default ToggleButton;
