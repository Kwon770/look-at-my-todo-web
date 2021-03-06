import React, { useEffect, useRef } from "react";
import onClickOutside from "react-onclickoutside";
import useInput from "hooks/useInput";
import useCheckbox from "hooks/useCheckbox";
import styled from "styled-components";
import GetDate from "GetDate";

function DetailPanel({ setIsTodoClicked, clickedTodo, onTodoChanged }) {
  DetailPanel.handleClickOutside = () => setIsTodoClicked(false);
  const titleInputRef = useRef();
  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const title = useInput(clickedTodo.title);
  const existClosingDate = useCheckbox(clickedTodo.closingDate ? true : false);
  const closingDate = useInput(clickedTodo.closingDate);
  const existClosingTime = useCheckbox(clickedTodo.closingTime ? true : false);
  const closingTime = useInput(clickedTodo.closingTime);
  const priority = useInput(clickedTodo.priority);

  // Update Todo immediately
  useEffect(() => updateTodo(), [
    title.value,
    existClosingDate.checked,
    closingDate.value,
    existClosingTime.checked,
    closingTime.value,
    priority.value,
  ]);

  const updateTodo = () => {
    const newTodo = {
      ...clickedTodo,
      title: title.value,
      closingDate: closingDate.value,
      closingTime: closingTime.value,
      priority: priority.value,
      repetitionType: clickedTodo.repetitionType,
      specialRepetition: clickedTodo.specialRepetition,
    };
    onTodoChanged(newTodo);
  };

  // Change panel information according to click event
  useEffect(() => {
    title.onChange(clickedTodo.title);
    if (clickedTodo.closingDate) {
      existClosingDate.setChecked(true);
      closingDate.onChange(clickedTodo.closingDate);
    } else {
      existClosingDate.setChecked(false);
      closingDate.onChange("");
    }
    if (clickedTodo.closingTime) {
      existClosingTime.setChecked(true);
      closingTime.onChange(clickedTodo.closingTime);
    } else {
      existClosingTime.setChecked(false);
      closingTime.onChange("");
    }
    priority.onChange(clickedTodo.priority);
  }, [clickedTodo.id]);

  const onChangeExistClosingDate = () => {
    existClosingDate.onChange();

    if (existClosingDate.checked) {
      closingDate.onChange("");
    } else {
      closingDate.onChange(GetDate.getDateFormatString());
    }
  };

  const onChangeExistClosingTime = () => {
    existClosingTime.onChange();

    if (existClosingTime.checked) {
      closingTime.onChange("");
    } else {
      closingTime.onChange(GetDate.getTimeFormatString());
    }
  };

  return (
    <Panel>
      <TitleInput ref={titleInputRef} {...title} />
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
}

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
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  width: 32vw;
  max-width: 269px;
  height: 30vh;
  background-color: ${(props) => props.theme.panelBgColor};
  margin-bottom: 5vh;
  padding: 17px 11px;
  overflow-y: auto;
`;

const clickOutsideConfig = {
  handleClickOutside: () => DetailPanel.handleClickOutside,
};
export default onClickOutside(DetailPanel, clickOutsideConfig);
