import React from "react";
import styled from "styled-components";
import TodoFactory from "components/TodoFactory";

// add visual chart
// https://www.npmjs.com/package/easy-pie-chart-typescript
// https://www.npmjs.com/package/rumble-charts

const Home = () => {
  return (
    <>
      <Header></Header>
      <Page>
        <TodoFactory />
        <Information>
          <ProgressWrapper>
            <DateWrapper>
              <AlignWrapper>
                <DayOfWeek>Friday</DayOfWeek>
                <Date>8th</Date>
              </AlignWrapper>
              <Month>January</Month>
            </DateWrapper>
            <Figure>99</Figure>
            <FigureSymbol>/</FigureSymbol>
            <Figure>99</Figure>
          </ProgressWrapper>
        </Information>
      </Page>
    </>
  );
};

//
// Information - Figure
//

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

// Information - Date

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

// Information

const Information = styled.div`
  width: 32%;
  height: 85%;
  ${(props) => props.theme.ColumnCenterAlignment};
  transform: translateX(-7%);
`;

//
//
//

const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.deepBgColor};
`;

const Page = styled.div`
  ${(props) => props.theme.Page};
  ${(props) => props.theme.ColumnCenterAlignment};
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export default Home;
