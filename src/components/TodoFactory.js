import React, { useState } from "react";
import styled from "styled-components";
import { IoMdAddCircleOutline } from "react-icons/io";
import Theme from "style/Theme";
import Todo from "components/Todo";

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

const TodoFactory = ({ todoList = tmpTodo }) => {
  // const [detailEditMode, setDetailEditMode] = useState(false);

  return (
    <Panel>
      <TopToolBar>오늘</TopToolBar>
      {todoList.map((todo, idx) => (
        <Todo key={idx} todo={todo} />
      ))}
      <BottomToolBar>
        <IoMdAddCircleOutline
          size={22}
          color={Theme.panelFont2Color}
          opacity={0.5}
        />
      </BottomToolBar>
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
  ${(props) => props.theme.RoundBox};
  width: 50vw;
  max-width: 480px;
  height: 76.5vh;
  background-color: white;
  overflow: scroll;
`;

export default TodoFactory;
