import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FcGoogle, FcExport } from "react-icons/fc";
import { v4 as uuidv4 } from "uuid";
import TodoFactory from "components/Todo/TodoFactory";
import TodoCounter from "components/Todo/TodoCounter";
import GetDate from "GetDate";

// add visual chart
// https://www.npmjs.com/package/easy-pie-chart-typescript
// https://www.npmjs.com/package/rumble-charts

const tmpTodo = [
  {
    id: "1",
    title: "dailyCode",
    isCompleted: "true",
    closingDate: "2020-12-25",
    closingTime: "22:00",
    priority: "3",
  },
  {
    id: "2",
    title: "weeklyCode",
    isCompleted: "false",
    closingDate: "2021-12-25",
    closingTime: "10:00",
    priority: "3",
  },
];

const Home = ({ isLogin }) => {
  const [todoList, SetTodoList] = useState(tmpTodo);
  const [todoCount, setTodoCount] = useState(0);
  const [completedTodoCount, setCompletedTodoCount] = useState(0);

  useEffect(() => {
    onChangeCompletion();
  }, [todoList]);

  const onTodoCreated = () => {
    const newTodo = {
      id: uuidv4(),
      title: "New Todo",
      isCompleted: "false",
      closingDate: GetDate.getDateFormatString(),
      closingTime: "",
      priority: "0",
      repetitionType: "0",
    };

    SetTodoList((prev) => [...prev, newTodo]);
    return newTodo;
  };

  const onTodoChanged = (changedTodo) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id !== changedTodo.id) return todo;
      else return changedTodo;
    });
    SetTodoList(newTodoList);
    // console.log(newTodoList);
  };

  const onChangeCompletion = () => {
    setTodoCount(todoList.length);

    let completedTodoCount = 0;
    todoList.forEach((todo) => {
      if (todo.isCompleted === "true") completedTodoCount++;
    });
    setCompletedTodoCount(completedTodoCount);
  };

  return (
    <>
      <Header>
        <h1>{isLogin ? "Hello, USER!" : ""}</h1>
        <HeaderRightWrapper>
          <h1 style={{ marginRight: 10, cursor: "default" }}>
            {isLogin ? "Log out from" : "Log in from"}
          </h1>
          {isLogin ? (
            <FcExport size={28} style={{ cursor: "pointer" }} />
          ) : (
            <FcGoogle size={28} style={{ cursor: "pointer" }} />
          )}
        </HeaderRightWrapper>
      </Header>
      <Page>
        <div style={{ position: "relative" }}>
          <TodoFactory
            todoList={todoList}
            onTodoCreated={onTodoCreated}
            onTodoChanged={onTodoChanged}
            onChangeCompletion={onChangeCompletion}
          />
        </div>
        <RightColumnWrapper>
          <TodoCounter
            todoCount={todoCount}
            completedTodoCount={completedTodoCount}
          />
        </RightColumnWrapper>
      </Page>
    </>
  );
};

const RightColumnWrapper = styled.div`
  width: 32%;
  height: 85%;
  ${(props) => props.theme.ColumnCenterAlignment};
  transform: translateX(-7%);
`;

const HeaderRightWrapper = styled.div`
  ${(props) => props.theme.RowCenterAlignment};
`;

const Header = styled.div`
  ${(props) => props.theme.RowCenterAlignment};
  justify-content: space-between;
  padding: 0px 20px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.deepBgColor};
  ${(props) => props.theme.UiShadow}
`;

const Page = styled.div`
  ${(props) => props.theme.Page};
  ${(props) => props.theme.ColumnCenterAlignment};
  height: 90%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default Home;
