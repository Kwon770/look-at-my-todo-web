import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineFlag,
} from "react-icons/ai";
import onClickOutside from "react-onclickoutside";
import SimpleEditInput from "components/SimpleEditInput";

function TodoSimpleEditContent({ todo, setSimepleEditMode, done = false }) {
  TodoSimpleEditContent.handleClickOutside = () => setSimepleEditMode(false);
  const titleInput = useRef();
  useEffect(() => {
    titleInput.current.focus();
  }, []);

  const [dateEdit, setDateEdit] = useState(false);
  const [timeEdit, setTimeEdit] = useState(false);
  const [priorityEdit, setPriorityEdit] = useState(false);
  const entryEdit = (idx) => {
    setDateEdit(false);
    setTimeEdit(false);
    setPriorityEdit(false);

    if (idx === 0) setDateEdit(true);
    else if (idx === 1) setTimeEdit(true);
    else setPriorityEdit(true);
  };

  return (
    <div>
      <TitleInput ref={titleInput} />
      <SimpleEditBoxWrapper>
        <SimpleEditBox>
          <AiOutlineCalendar style={{ marginRight: 4 }} />
          {dateEdit === true ? (
            <SimpleEditInput setEditMode={setDateEdit} type="text" />
          ) : (
            <div onClick={() => entryEdit(0)}>날짜 추가</div>
          )}
        </SimpleEditBox>
        <SimpleEditBox>
          <AiOutlineClockCircle style={{ marginRight: 4 }} />
          {timeEdit === true ? (
            <SimpleEditInput setEditMode={setTimeEdit} type="text" />
          ) : (
            <div onClick={() => entryEdit(1)}>시간 추가</div>
          )}
        </SimpleEditBox>
        <SimpleEditBox>
          <AiOutlineFlag style={{ marginRight: 4 }} />
          {priorityEdit === true ? (
            <SimpleEditInput setEditMode={setPriorityEdit} type="number" />
          ) : (
            <div onClick={() => entryEdit(2)}>우선순위 추가</div>
          )}
        </SimpleEditBox>
      </SimpleEditBoxWrapper>
    </div>
  );
}

const SimpleEditBox = styled.div`
  ${(props) => props.theme.RowCenterAlignment}
  /* margin-left: 50px; */
  border-radius: 4px;
  padding: 4px 7px;
  background-color: ${(props) => props.theme.panelBg2Color};
  color: ${(props) => props.theme.panelFont2Color};
  font-size: 12px;
  margin-top: 7px;
  margin-right: 7px;
`;

const SimpleEditBoxWrapper = styled.div`
  ${(props) => props.theme.RowCenterAlignment}
`;

const TitleInput = styled.input`
  ${(props) => props.theme.TodoInput}
`;

const clickOutsideConfig = {
  handleClickOutside: () => TodoSimpleEditContent.handleClickOutside,
};
export default onClickOutside(TodoSimpleEditContent, clickOutsideConfig);
