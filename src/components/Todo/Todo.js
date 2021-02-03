import React, { useState } from "react";
import styled from "styled-components";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Theme from "style/Theme";
import SimpleEditContent from "components/Todo/SimpleEditContent";
import ToggleButton from "./ToggleButton";
import Title from "./Title";
import TimeData from "./TimeData";

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
        <ToggleButton
          completed={todo.isCompleted}
          onClick={onToogleCompletion}
        />
        <ContentWrapper>
          {simpleEditMode ? (
            <SimpleEditContent
              todo={todo}
              setSimpleEditMode={setSimpleEditMode}
              onTodoChanged={onTodoChanged}
            />
          ) : (
            <div onClick={() => setSimpleEditMode(true)}>
              <Title completed={todo.isCompleted} title={todo.title} />
              <TimeData
                closingDate={todo.closingDate}
                closingTime={todo.closingTime}
              />
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

const ContentWrapper = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment};
  align-items: flex-start;
  padding-left: 13px;
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
