import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import useInput from "hooks/useInput";

function TodoSimpleEditContent({ todo, setSimpleEditMode, onTodoChanged }) {
  TodoSimpleEditContent.handleClickOutside = () => setSimpleEditMode(false);
  const titleInputRef = useRef();
  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const title = useInput(todo.title);
  const closingDate = useInput(todo.closingDate);
  const closingTime = useInput(todo.closingTime);
  const priority = useInput(todo.priority);

  // Update Todo immediately
  useEffect(() => updateTodo(), [
    title.value,
    closingDate.value,
    closingTime.value,
    priority.value,
  ]);

  const updateTodo = () => {
    const newTodo = {
      ...todo,
      title: title.value,
      closingDate: closingDate.value,
      closingTime: closingTime.value,
      priority: priority.value,
      repetitionType: todo.repetitionType,
      specialRepetition: todo.specialRepetition,
    };
    onTodoChanged(newTodo);
  };

  return (
    <div>
      <Input title ref={titleInputRef} {...title} />
      <SimpleEditBoxWrapper>
        <SimpleEditBox>
          <SimpleEditInput type="date" {...closingDate} />
        </SimpleEditBox>
        <SimpleEditBox>
          <SimpleEditInput type="time" {...closingTime} />
        </SimpleEditBox>
        <SimpleEditBox>
          <SimpleEditInput type="number" style={{ width: 35 }} {...priority} />
        </SimpleEditBox>
      </SimpleEditBoxWrapper>
    </div>
  );
}

const SimpleEditInput = styled.input`
  width: 100%;
  border: 0px;
  background-color: ${(props) => props.theme.panelBg2Color};

  &:focus {
    outline: none;
  }
`;

const SimpleEditBox = styled.div`
  ${(props) => props.theme.RowCenterAlignment}
  border-radius: 4px;
  padding: 3px 5px;
  background-color: ${(props) => props.theme.panelBg2Color};
  color: ${(props) => props.theme.panelFont2Color};
  font-size: 12px;
  margin-top: 7px;
  margin-right: 7px;
`;

const SimpleEditBoxWrapper = styled.div`
  ${(props) => props.theme.RowCenterAlignment}
`;

const Input = styled.input`
  ${(props) => props.theme.TodoInput};
  color: ${(props) => (props.title ? "" : props.theme.panelFont2Color)};
  background-color: ${(props) =>
    props.title ? "" : props.theme.panelBg2Color};
  font-size: ${(props) => (props.title ? "" : "13px")};
  cursor: ${(props) => (props.title ? "text" : "pointer")};
`;

const clickOutsideConfig = {
  handleClickOutside: () => TodoSimpleEditContent.handleClickOutside,
};
export default onClickOutside(TodoSimpleEditContent, clickOutsideConfig);
