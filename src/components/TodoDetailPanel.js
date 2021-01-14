import React, { useEffect, useState } from "react";
import useInput from "hooks/useInput";
import useCheckbox from "hooks/useCheckbox";
import styled from "styled-components";

const TodoDetailPanel = ({ clickedTodo }) => {
  const title = useInput(clickedTodo.title);
  const existClosingDate = useCheckbox(clickedTodo.closingDate ? true : false);
  const closingDate = useInput(clickedTodo.closingDate);
  const existClosingTime = useCheckbox(clickedTodo.closingTime ? true : false);
  const closingTime = useInput(clickedTodo.closingTime);
  const priority = useInput(clickedTodo.priority);

  // const [title, setTitle] = useState("");
  // const [existClosingDate, setExistClosingDate] = useState(false);
  // const [closingDate, setClosingDate] = useState("");
  // const [existClosingTime, setExistClosingTime] = useState(false);
  // const [closingTime, setClosingTime] = useState("");
  // const [repetitionType, setRepetitionType] = useState("");
  // const [priority, setPriority] = useState("");

  useEffect(() => {
    //   setTitle(clickedTodo.title);
    //   if (clickedTodo.closingDate) {
    //     setExistClosingDate(true);
    //     setClosingDate(clickedTodo.closingDate);
    //   }
    //   if (clickedTodo.closingTime) {
    //     setExistClosingTime(true);
    //     setClosingTime(clickedTodo.closingTime);
    //   }
    //   setRepetitionType(clickedTodo.repetitionType);
    //   setPriority(clickedTodo.priority);
  }, [clickedTodo.id]);

  const onChangeExistClosingDate = () => {
    existClosingDate.onChange();

    if (existClosingDate.checked) {
      closingDate.onChange("");
    } else {
      const today = new Date();
      let yy = today.getFullYear();
      let mm = today.getMonth() + 1;
      if (mm < 10) mm = `0${mm}`;
      let dd = today.getDate();
      if (dd < 10) dd = `0${dd}`;
      closingDate.onChange(`${yy}-${mm}-${dd}`);
    }
  };

  const onChangeExistClosingTime = () => {
    existClosingTime.onChange();

    if (existClosingTime.checked) {
      closingTime.onChange("");
    } else {
      const today = new Date();
      let hh = today.getHours();
      if (hh < 10) hh = `0${hh}`;
      let mm = today.getMinutes();
      if (mm < 10) mm = `0${mm}`;
      closingTime.onChange(`${hh}:${mm}`);
    }
  };

  return (
    <Panel>
      <TitleInput {...title} />
      <RowWrapper>
        <Menu>
          <Text title>알리기</Text>
          <CheckBox
            type="checkbox"
            {...existClosingDate}
            onChange={onChangeExistClosingDate}
          />
          <div style={{ width: 100 }}>
            <Text>특정 날짜에</Text>
            {existClosingDate ? (
              <Input type="date" style={{ width: 155 }} {...closingDate} />
            ) : (
              ""
            )}
          </div>
        </Menu>
        <Menu>
          <Text title />
          <CheckBox
            type="checkbox"
            {...existClosingTime}
            onChange={onChangeExistClosingTime}
          />
          <div style={{ width: 100 }}>
            <Text>특정 시간에</Text>
            {existClosingTime ? <Input type="time" {...closingTime} /> : ""}
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
          <Input type="number" {...priority} />
        </Menu>
      </RowWrapper>
    </Panel>
  );
};

const Input = styled.input`
  ${(props) => props.theme.TodoInput};
  color: ${(props) => props.theme.panelFont2Color};
  font-size: 13px;
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
  width: ${(props) => (props.title ? "60px" : "80px")};
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
  padding: 17px 11px;
  overflow: scroll;
`;

export default TodoDetailPanel;
