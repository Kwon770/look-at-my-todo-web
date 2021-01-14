import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdAddCircleOutline } from "react-icons/io";
import Theme from "style/Theme";
import Todo from "components/Todo";
import TodoMenuWrapper from "components/TodoMenuWrapper";

const TodoFactory = ({ todoList, onTodoChanged, onChangeCompletion }) => {
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
          onChangeCompletion={onChangeCompletion}
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
          style={{ cursor: "pointer" }}
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
  cursor: default;
`;

const BottomToolBar = styled.div`
  width: 100%;
  height: 45px;
  ${(props) => props.theme.RowCenterAlignment};
`;

const Panel = styled.div`
  ${(props) => props.theme.RoundBoxRadius}
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  width: 50vw;
  height: 76.5vh;
  background-color: white;
  overflow: scroll;
`;

export default TodoFactory;
