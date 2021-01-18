import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";

function TodoCreation({ setIsCreationClicked }) {
  TodoCreation.handleClickOutside = () => setIsCreationClicked(false);

  return <div></div>;
}

const Wrapper = styled.div`
  width: 100%;
`;

const clickOutsideConfig = {
  handleClickOutside: () => TodoCreation.handleClickOutside,
};
export default onClickOutside(TodoCreation, clickOutsideConfig);
