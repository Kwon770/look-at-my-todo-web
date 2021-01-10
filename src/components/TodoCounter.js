import React from "react";
import styled from "styled-components";

const TodoCounter = ({ todoCount, doneTodoCount }) => {
  return (
    <ProgressWrapper>
      <DateWrapper>
        <AlignWrapper>
          <DayOfWeek>Friday</DayOfWeek>
          <Date>8th</Date>
        </AlignWrapper>
        <Month>January</Month>
      </DateWrapper>
      <Figure>{doneTodoCount}</Figure>
      <FigureSymbol>/</FigureSymbol>
      <Figure>{todoCount}</Figure>
    </ProgressWrapper>
  );
};

const FigureSymbol = styled.h2`
  margin: 0px 10px;
  font-size: 13.5vw;
  font-weight: 800;
`;
const Figure = styled(FigureSymbol)`
  margin: 0px;
`;
const ProgressWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Month = styled.h1`
  text-align: center;
  font-size: 1.9vw;
`;

const AlignWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Date = styled.h1`
  font-size: 5.3vw;
  font-weight: 200;
`;

const DayOfWeek = styled.h1`
  font-size: 5.3vw;
  font-weight: 800;
  margin-right: 10px;
`;

const DateWrapper = styled.div`
  align-items: center;
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => props.theme.hlColor}; ;
`;

export default TodoCounter;
