import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodoDetailPanel = ({ clickedTodo }) => {
  const [title, setTitle] = useState("");
  const [existClosingDate, setExistClosingDate] = useState(false);
  const [closingDate, setClosingDate] = useState("");
  const [existClosingTime, setExistClosingTime] = useState(false);
  const [closingTime, setClosingTime] = useState("");
  const [repetitionType, setRepetitionType] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    setTitle(clickedTodo.title);
    if (clickedTodo.closingDate) {
      setExistClosingDate(true);
      setClosingDate(clickedTodo.closingDate);
    }
    if (clickedTodo.closingTime) {
      setExistClosingTime(true);
      setClosingTime(clickedTodo.closingTime);
    }
    setRepetitionType(clickedTodo.repetitionType);
    setPriority(clickedTodo.priority);
  }, []);

  return (
    <Panel>
      <TitleInput
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <RowWrapper>
        <Menu>
          <Text title>알리기</Text>
          <CheckBox
            type="checkbox"
            checked={existClosingDate}
            onChange={() => setExistClosingDate(!existClosingDate)}
          />
          <div style={{ width: 100 }}>
            <Text>특정 날짜에</Text>
            {existClosingDate ? (
              <Input
                value={closingDate}
                onChange={(evt) => setClosingDate(evt.target.value)}
              />
            ) : (
              ""
            )}
          </div>
        </Menu>
        <Menu>
          <Text title />
          <CheckBox
            type="checkbox"
            checked={existClosingTime}
            onChange={() => setExistClosingTime(!existClosingTime)}
          />
          <div style={{ width: 100 }}>
            <Text>특정 시간에</Text>
            {existClosingTime ? (
              <Input
                value={closingTime}
                onChange={(evt) => setClosingTime(evt.target.value)}
              />
            ) : (
              ""
            )}
          </div>
        </Menu>
        <Menu>
          <Text title>반복</Text>
          <Text>지정한 날짜에</Text>
        </Menu>
        <Menu>
          <Text title>반복 종료</Text>
          <Text>지정한 날짜에</Text>
        </Menu>
      </RowWrapper>
      <RowWrapper>
        <Menu>
          <Text title>우선순위</Text>
          <Input
            type="number"
            value={priority}
            onChange={(evt) => setPriority(evt.target.value)}
          />
        </Menu>
      </RowWrapper>
    </Panel>
  );
};

const Input = styled.input`
  ${(props) => props.theme.TodoInput};
  color: ${(props) => props.theme.panelFont2Color};
  font-size: 13px;
  width: 70%;
`;

const CheckBox = styled.input`
  background-color: ${(props) => props.theme.panelBgColor};
  width: 17px;
  height: 17px;
  border-radius: 5px;
  border: solid 2px ${(props) => props.theme.panelBg3Color};
  margin-right: 7px;
`;

const Text = styled.h2`
  width: ${(props) => (props.title ? "30%" : "70%")};
  color: ${(props) =>
    props.title ? props.theme.panelBg3Color : props.theme.panelFontColor};
  font-size: 14px;
`;

const Menu = styled.div`
  padding: 7px;
  display: flex;
  justify-items: center;
  align-content: flex-end;
  width: 100%;
`;

const RowWrapper = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment}
  border-bottom: solid 1px ${(props) => props.theme.panelBg3Color};
  width: 100%;
`;

const TitleInput = styled.input`
  ${(props) => props.theme.TodoInput}
  width: 100%;
  padding-bottom: 10px;
  border-bottom: solid 1px ${(props) => props.theme.panelBg3Color};
`;

const Panel = styled.div`
  ${(props) => props.theme.RoundBoxRadius}
  width: 32vw;
  max-width: 269px;
  height: 30vh;
  background-color: ${(props) => props.theme.panelBgColor};
  margin-bottom: 5vh;
  padding: 20px;
  overflow: scroll;
`;

export default TodoDetailPanel;
