import React, { useEffect } from "react";
import styled from "styled-components";
import {
  IoMdInformationCircleOutline,
  IoMdAddCircleOutline,
} from "react-icons/io";
import Theme from "style/Theme";

const TodoFactory = ({ done }) => {
  return (
    <Panel>
      <Todo>
        <LeftWrapper>
          <Icon done={done}>{done === true ? <FilledCircle /> : ""}</Icon>
          <ContentHolder>
            <Title done={done}>123123</Title>
            <Time>17:00</Time>
          </ContentHolder>
        </LeftWrapper>
        <IoMdInformationCircleOutline
          className="infoButton"
          size={22}
          color={Theme.hl2Color}
          display="none"
        />
      </Todo>
      <Todo>
        <LeftWrapper>
          <Icon done={done}>{done === true ? <FilledCircle /> : ""}</Icon>
          <ContentHolder>
            <Title done={done}>123123</Title>
            <Time>17:00</Time>
          </ContentHolder>
        </LeftWrapper>
        <IoMdInformationCircleOutline
          className="infoButton"
          size={22}
          color={Theme.hl2Color}
          display="none"
        />
      </Todo>
      <ToolBar>
        <IoMdAddCircleOutline
          size={22}
          color={Theme.panelFont2Color}
          opacity={0.5}
        />
      </ToolBar>
    </Panel>
  );
};

const ToolBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 13px;
  width: 100%;
  height: 40px;
`;

const Time = styled.h3`
  color: ${(props) => props.theme.panelFont2Color};
  font-size: 16px;
  margin-top: 4px;
  opacity: 0.8;
`;

const Title = styled.h3`
  margin-left: 13px;
  text-decoration-line: ${(props) =>
    props.done === true ? "line-through" : ""};
  text-decoration-thickness: 1.5px;
  color: ${(props) =>
    props.done === true
      ? props.theme.panelBg2Color
      : props.theme.panelFontColor};
`;

const ContentHolder = styled.div`
  ${(props) => props.theme.CenterAlignment};
`;

const FilledCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.hl2Color};
`;

const Icon = styled.div`
  ${(props) => props.theme.CenterAlignment};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: solid 1px
    ${(props) =>
      props.done === true ? props.theme.hl2Color : props.theme.panelBg2Color};
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Todo = styled.div`
  width: 100%;
  height: 75px;
  border-bottom: solid 1px ${(props) => props.theme.panelBg2Color};
  color: ${(props) => props.theme.panelFontColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;

  &:hover .infoButton {
    display: block;
  }

  &:hover .timeText {
    display: none;
  }

  &:focus {
    background-color: red;
  }
`;

const Panel = styled.div`
  width: 50%;
  height: 85%;
  border-radius: 2%;
  background-color: white;
  overflow: scroll;
`;

export default TodoFactory;
