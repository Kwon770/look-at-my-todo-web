import React, { useState } from "react";
import styled from "styled-components";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Theme from "style/Theme";
import TodoSimpleEditContent from "components/TodoSimpleEditContent";

const Todo = ({
  todo,
  onTodoChanged,
  onChangeCompletion,
  clickedTodo,
  setClickedTodo,
  isTodoClicked,
  setIsTodoClicked,
}) => {
  const [simpleEditMode, setSimpleEditMode] = useState(false);

  const onClickInfoButton = () => {
    if (clickedTodo && todo.id === clickedTodo.id) {
      setIsTodoClicked(!isTodoClicked);
    } else {
      setIsTodoClicked(true);
    }
    setClickedTodo(todo);
  };

  const onToogleCompletion = () => {
    const newTodo = {
      ...todo,
      isCompleted: String(todo.isCompleted === "false"),
    };
    onTodoChanged(newTodo);
    onChangeCompletion();
  };

  return (
    <Container>
      <LeftWrapper>
        <Icon completed={todo.isCompleted} onClick={onToogleCompletion}>
          {todo.isCompleted === "true" ? <FilledCircle /> : ""}
        </Icon>
        <ContentWrapper>
          {simpleEditMode ? (
            <TodoSimpleEditContent
              todo={todo}
              setSimpleEditMode={setSimpleEditMode}
              onTodoChanged={onTodoChanged}
            />
          ) : (
            <div onClick={() => setSimpleEditMode(true)}>
              <Title completed={todo.isCompleted}>{todo.title}</Title>
              <TimeData>
                {todo.closingDate}/{todo.closingTime}
              </TimeData>
            </div>
          )}
        </ContentWrapper>
      </LeftWrapper>
      <IoMdInformationCircleOutline
        className="infoButton ignore-react-onclickoutside"
        size={22}
        color={Theme.hl2Color}
        display="none"
        onClick={onClickInfoButton}
        style={{ cursor: "pointer" }}
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
    props.completed === "true" ? "line-through" : ""};
  text-decoration-thickness: 1.5px;
  color: ${(props) =>
    props.completed === "true"
      ? props.theme.panelBg3Color
      : props.theme.panelFontColor};
  font-size: 18px;
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
      props.completed === true
        ? props.theme.hl2Color
        : props.theme.panelBg3Color};
  cursor: pointer;
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
