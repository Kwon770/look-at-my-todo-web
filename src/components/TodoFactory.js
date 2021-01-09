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
      {todoList.map((todo, idx) => (
        <Todo key={idx} todo={todo} />
      ))}
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

const Panel = styled.div`
  ${(props) => props.theme.RoundBox};
  width: 50%;
  height: 85%;
  background-color: white;
  overflow: scroll;
`;

export default TodoFactory;
