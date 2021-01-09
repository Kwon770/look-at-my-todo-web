import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

function SimpleEditInput({ setEditMode, type, value }) {
  SimpleEditInput.handleClickOutside = () => setEditMode(false);
  const editInputRef = useRef();
  useEffect(() => {
    editInputRef.current.focus();
  }, []);

  const [editInput, setEditInput] = useState(value);

  return (
    <EditInput
      ref={editInputRef}
      type={type}
      value={editInput}
      onChange={(evt) => setEditInput(evt.target.value)}
    />
  );
}

const EditInput = styled.input`
  ${(props) => props.theme.TodoInput}
  width: ${(props) => (props.type === "text" ? "65px" : "40px")};
  height: 12px;
  background-color: ${(props) => props.theme.panelBg2Color};
  color: ${(props) => props.theme.panelFont2Color};
  font-size: 12px;
`;

const clickOutsideConfig = {
  handleClickOutside: () => SimpleEditInput.handleClickOutside,
};
export default onClickOutside(SimpleEditInput, clickOutsideConfig);
