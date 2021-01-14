import React from "react";
import styled from "styled-components";
import DetailPanel from "components/TodoDetailPanel";
import ManagementPanel from "components/TodoManagementPanel";

const TodoMenuWrapper = ({ setIsTodoClicked, clickedTodo, onTodoChanged }) => {
  return (
    <PanelHolder>
      <DetailPanel
        setIsTodoClicked={setIsTodoClicked}
        clickedTodo={clickedTodo}
        onTodoChanged={onTodoChanged}
      />
      <ManagementPanel setIsTodoClicked={setIsTodoClicked} />
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
export default TodoMenuWrapper;
