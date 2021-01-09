import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

function SimpleEditInput({ setEditMode, type }) {
  SimpleEditInput.handleClickOutside = () => setEditMode(false);
  const editInput = useRef();
  useEffect(() => {
    editInput.current.focus();
  }, []);
  return <EditInput ref={editInput} type={type} />;
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
