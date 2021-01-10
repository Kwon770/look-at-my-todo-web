import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoFactory from "components/TodoFactory";
import TodoCounter from "components/TodoCounter";
import TodoMenu from "components/TodoMenu";

// add visual chart
// https://www.npmjs.com/package/easy-pie-chart-typescript
// https://www.npmjs.com/package/rumble-charts

const tmpTodo = [
  {
    id: "1",
    title: "dailyCode",
    isDone: "true",
    closingDate: "20200109",
    closingTime: "2200",
    priority: "3",
    repetitionType: "1",
  },
  {
    id: "2",
    title: "weeklyCode",
    isDone: "false",
    closingDate: "20200109",
    closingTime: "2200",
    priority: "3",
    repetitionType: "2",
  },
  {
    id: "3",
    title: "secondCode",
    isDone: "false",
    closingDate: "20200109",
    closingTime: "2200",
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
    isDone: "false",
    closingDate: "20200109",
    closingTime: "2200",
    priority: "3",
    repetitionType: "3",
    specialRepetition: {
      periodType: "2",
      repetitionTerm: "1",
      detailTerm: ["0", "6"],
    },
  },
];

const Home = () => {
  const [todoList, SetTodoList] = useState(tmpTodo);
  const [isTodoClicked, setIsTodoClicked] = useState(false);
  const [todoCount, setTodoCount] = useState(0);
  const [doneTodoCount, setDoneTodoCount] = useState(0);

  useEffect(() => {
    onIsDoneChanged();
  }, []);

  const onIsDoneChanged = () => {
    setTodoCount(todoList.length);

    let doneTodoCount = 0;
    todoList.map((todo) => {
      if (todo.isDone === "true") doneTodoCount++;
    });
    setDoneTodoCount(doneTodoCount);
  };
  return (
    <>
      <Header></Header>
      <Page>
        <TodoFactory todoList={todoList} onIsDoneChanged={onIsDoneChanged} />
        <RightColumnWrapper>
          {isTodoClicked ? (
            <TodoMenu />
          ) : (
            <TodoCounter todoCount={todoCount} doneTodoCount={doneTodoCount} />
          )}
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

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.deepBgColor};
`;

const Page = styled.div`
  ${(props) => props.theme.Page};
  ${(props) => props.theme.ColumnCenterAlignment};
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default Home;
