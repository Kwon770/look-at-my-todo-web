import React, { useState } from "react";
import styled from "styled-components";
import { IoMdAddCircleOutline } from "react-icons/io";
import Theme from "style/Theme";
import Todo from "components/Todo";
import TodoMenuWrapper from "components/TodoMenuWrapper";

const TodoFactory = ({ todoList, onTodoChanged, onIsDoneChanged }) => {
  const [clickedTodo, setClickedTodo] = useState();
  const [isTodoClicked, setIsTodoClicked] = useState(false);

  return (
    <Panel>
      <TopToolBar>오늘</TopToolBar>
      {todoList.map((todo, idx) => (
        <Todo
          key={idx}
          todo={todo}
          onTodoChanged={onTodoChanged}
          clickedTodo={clickedTodo}
          setClickedTodo={setClickedTodo}
          isTodoClicked={isTodoClicked}
          setIsTodoClicked={setIsTodoClicked}
        />
      ))}
      <BottomToolBar>
        <IoMdAddCircleOutline
          size={22}
          color={Theme.panelFont2Color}
          opacity={0.5}
        />
      </BottomToolBar>
      {isTodoClicked ? (
        <TodoMenuWrapper
          setIsTodoClicked={setIsTodoClicked}
          clickedTodo={clickedTodo}
          onTodoChanged={onTodoChanged}
        />
      ) : (
        ""
      )}
    </Panel>
  );
};

const TopToolBar = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment};
  align-items: flex-start;
  width: 100%;
  height: 8.2vh;
  min-height: 40px;
  padding: 0px 20px;
  color: ${(props) => props.theme.hl2Color};
  font-size: calc(20px + 1.1vh);
  font-weight: 600;
`;

const BottomToolBar = styled.div`
  width: 100%;
  height: 45px;
  ${(props) => props.theme.RowCenterAlignment};
`;

const Panel = styled.div`
  ${(props) => props.theme.RoundBoxRadius}
  width: 50vw;
  /* max-width: 480px; */
  height: 76.5vh;
  background-color: white;
  overflow: scroll;
`;

export default TodoFactory;
