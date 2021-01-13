import React from "react";
import styled from "styled-components";
import DetailPanel from "components/TodoDetailPanel";
import ManagementPanel from "components/TodoManagementPanel";

const TodoMenu = ({ clickedTodo }) => {
  return (
    <PanelHolder>
      <DetailPanel clickedTodo={clickedTodo}></DetailPanel>
      <ManagementPanel></ManagementPanel>
    </PanelHolder>
  );
};

const PanelHolder = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment};
  justify-content: flex-start;
  width: 32vw;
  max-width: 269px;
  height: 76vh;
  position: absolute;
  top: 0px;
  left: 53.6vw;
  z-index: 10;
`;
export default TodoMenu;
