import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoFactory from "components/TodoFactory";
import TodoCounter from "components/TodoCounter";
import { FcGoogle, FcExport } from "react-icons/fc";

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
    repetitionType: "1",
  },
  {
    id: "2",
    title: "weeklyCode",
    isCompleted: "false",
    closingDate: "2021-12-25",
    closingTime: "10:00",
    priority: "3",
    repetitionType: "2",
  },
  {
    id: "3",
    title: "secondCode",
    isCompleted: "false",
    closingDate: "2020-12-25",
    closingTime: "22:00",
    priority: "3",
    repetitionType: "3",
    specialRepetition: {
      periodType: "1",
      repetitionTerm: "2",
    },
  },
  {
    id: "4",
    title: "weekendCode",
    isCompleted: "false",
    closingDate: "2021-12-25",
    closingTime: "10:00",
    priority: "3",
    repetitionType: "3",
    specialRepetition: {
      periodType: "2",
      repetitionTerm: "1",
      detailTerm: ["0", "6"],
    },
  },
];

const Home = ({ isLogin }) => {
  const [todoList, SetTodoList] = useState(tmpTodo);
  const [todoCount, setTodoCount] = useState(0);
  const [completedTodoCount, setCompletedTodoCount] = useState(0);

  useEffect(() => {
    onChangeCompletion();
  }, [todoList]);

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
    todoList.map((todo) => {
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Page = styled.div`
  ${(props) => props.theme.Page};
  ${(props) => props.theme.ColumnCenterAlignment};
  height: 90%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default Home;
