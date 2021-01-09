import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Theme from "style/Theme";
import TodoSimpleEditContent from "components/TodoSimpleEditContent";

const Todo = ({ todo }) => {
  const [simpleEditMode, setSimepleEditMode] = useState(false);
  //   useEffect(() => console.log(todo), []);

  return (
    <Container>
      <LeftWrapper>
        <Icon done={todo.isDone}>
          {todo.isDone === "true" ? <FilledCircle /> : ""}
        </Icon>
        <ContentWrapper>
          {simpleEditMode ? (
            <TodoSimpleEditContent
              todo={todo}
              setSimepleEditMode={setSimepleEditMode}
            />
          ) : (
            <div onClick={() => setSimepleEditMode(true)}>
              <Title done={todo.isDone}>{todo.title}</Title>
              <TimeData>
                {todo.closingDate}/{todo.closingTime}
              </TimeData>
            </div>
          )}
        </ContentWrapper>
      </LeftWrapper>
      <IoMdInformationCircleOutline
        className="infoButton"
        size={22}
        color={Theme.hl2Color}
        display="none"
      />
    </Container>
  );
};

const TimeData = styled.h3`
  color: ${(props) => props.theme.panelFont2Color};
  font-size: 14px;
  margin-top: 4px;
  opacity: 0.8;
`;

const Title = styled.h3`
  text-decoration-line: ${(props) =>
    props.done === "true" ? "line-through" : ""};
  text-decoration-thickness: 1.5px;
  color: ${(props) =>
    props.done === "true"
      ? props.theme.panelBg3Color
      : props.theme.panelFontColor};
`;

const ContentWrapper = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment};
  align-items: flex-start;
  padding-left: 13px;
`;

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
      props.done === true ? props.theme.hl2Color : props.theme.panelBg3Color};
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Container = styled.div`
  width: 100%;
  /* height: 60px; */
  padding: 12px 20px;
  border-bottom: solid 1px ${(props) => props.theme.panelBg3Color};
  color: ${(props) => props.theme.panelFontColor};
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export default Todo;
