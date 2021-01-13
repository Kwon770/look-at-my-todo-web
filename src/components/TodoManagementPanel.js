import React from "react";
import styled from "styled-components";

const TodoManagementPanel = () => {
  return (
    <Panel>
      <RowWrapper>
        <Menu>
          <Text>완료됨으로 표시</Text>
        </Menu>
      </RowWrapper>
      <RowWrapper>
        <Menu>
          <Text>복제</Text>
          <Text>삭제</Text>
        </Menu>
      </RowWrapper>
    </Panel>
  );
};

const Text = styled.h2`
  ${(props) => props.theme.RoundBoxRadius};
  width: 100%;
  color: ${(props) => props.theme.panelFontColor};
  font-size: 14px;
  padding: 5px;

  &:hover {
    color: ${(props) => props.theme.panelBgColor};
    background-color: ${(props) => props.theme.hl2Color};
  }
`;

const Menu = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment};
  padding: 7px;
  width: 100%;
`;

const RowWrapper = styled.div`
  ${(props) => props.theme.ColumnCenterAlignment}
  border-bottom: solid 1px ${(props) => props.theme.panelBg3Color};
  width: 100%;
`;

const Panel = styled.div`
  ${(props) => props.theme.RoundBoxRadius}
  padding: 0px 20px;
  width: 32vw;
  max-width: 269px;
  height: 14vh;
  background-color: ${(props) => props.theme.panelBgColor};
`;

export default TodoManagementPanel;
